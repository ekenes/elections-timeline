import { dColorCIM, oColorCIM, rColorCIM, stateChangeSizeStops, stateReferenceScale, validYears } from "./config";

interface ColorPrimitiveOverrideParams {
  primitiveName: __esri.PrimitiveOverride["primitiveName"];
  year: validYears
}

export function createColorPrimitiveOverride(params: ColorPrimitiveOverrideParams): __esri.PrimitiveOverride {
  const { year, primitiveName } = params;
  return {
    type: `CIMPrimitiveOverride`,
    primitiveName,
    propertyName: `Color`,
    valueExpressionInfo: {
      type: `CIMExpressionInfo`,
      title: `Winner`,
      expression: `
        var rColor = ${JSON.stringify(rColorCIM)};
        var dColor = ${JSON.stringify(dColorCIM)};
        var oColor = ${JSON.stringify(oColorCIM)};

        var demVotes = $feature.SUM_dem_${year};
        var repVotes = $feature.SUM_rep_${year};
        var othVotes = $feature.SUM_oth_${year};

        var allVotes = [demVotes, repVotes, othVotes];

        Decode(Max(allVotes),
          demVotes, dColor,
          repVotes, rColor,
          oColor
        );
      `,
      returnType: `Default`
    }
  }
}

// states change layer renderer expressions

const scaleFactorTotal = `
  var scaleFactorBase = ( ${stateReferenceScale} / $view.scale );
  var scaleFactor = When(
    scaleFactorBase >= 1, 1,  // 1
    scaleFactorBase >= 0.5, scaleFactorBase * 1,  // 0.6
    scaleFactorBase >= 0.25, scaleFactorBase * 1,  // 0.45
    scaleFactorBase >= 0.125, scaleFactorBase * 1,  // 0.3125
    scaleFactorBase * 1  // 0.1875
  );
`;

const sizeFactorChangeTotal = `
  var sizeFactor = When(
    value >= ${stateChangeSizeStops[4].value}, ${stateChangeSizeStops[4].size},
    value >= ${stateChangeSizeStops[3].value}, ${stateChangeSizeStops[3].size} + (${interpolateBetweenStops(stateChangeSizeStops[3], stateChangeSizeStops[4])} * (value - ${stateChangeSizeStops[3].value})),
    value >= ${stateChangeSizeStops[2].value}, ${stateChangeSizeStops[2].size} + (${interpolateBetweenStops(stateChangeSizeStops[2], stateChangeSizeStops[3])} * (value - ${stateChangeSizeStops[2].value})),
    value >= ${stateChangeSizeStops[1].value}, ${stateChangeSizeStops[1].size} + (${interpolateBetweenStops(stateChangeSizeStops[1], stateChangeSizeStops[2])} * (value - ${stateChangeSizeStops[1].value})),
    value > ${stateChangeSizeStops[0].value}, ${stateChangeSizeStops[0].size} + (${interpolateBetweenStops(stateChangeSizeStops[0], stateChangeSizeStops[1])} * value),
    0
  );
`;

export const sizeTotalChangeExpressionBase = `
  ${sizeFactorChangeTotal}

  ${scaleFactorTotal}
  return sizeFactor * scaleFactor;
`;

interface SizeStop {
  value: number,
  size: number
}

function interpolateBetweenStops(
  firstStop: SizeStop,
  nextStop: SizeStop
) {
  const sizeRange = nextStop.size - firstStop.size;
  const dataRange = nextStop.value - firstStop.value;

  return sizeRange / dataRange;
}

export function createSizePrimitiveOverride(params: ColorPrimitiveOverrideParams): __esri.PrimitiveOverride {
  const { year, primitiveName } = params;
  return {
    type: `CIMPrimitiveOverride`,
    primitiveName,
    propertyName: `Size`,
    valueExpressionInfo: {
      type: `CIMExpressionInfo`,
      title: `Margin of Victory`,
      expression: `
        var demVotes = $feature.SUM_dem_${year};
        var repVotes = $feature.SUM_rep_${year};
        var othVotes = $feature.SUM_oth_${year};

        var allVotes = Reverse(Sort([demVotes, repVotes, othVotes]));

        var value = allVotes[0] - allVotes[1];

        When(
          value > 500000, 50,
          value > 300000, 30,
          value > 200000, 20,
          value > 100000, 10,
          10
        );

        // ${sizeTotalChangeExpressionBase}
      `,
      returnType: `Default`
    }
  }
}