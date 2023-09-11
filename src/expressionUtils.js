import { countySizeStops, dColorCIM, oColorCIM, rColorCIM, referenceScale, stateChangeSizeStops, stateFieldPrefix, stateReferenceScale, years } from "./config";
export function createColorPrimitiveOverride(params) {
    const { year, primitiveName, fieldPrefix } = params;
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

        var demVotes = $feature.${fieldPrefix}dem_${year};
        var repVotes = $feature.${fieldPrefix}rep_${year};
        var othVotes = $feature.${fieldPrefix}oth_${year};

        var allVotes = [demVotes, repVotes, othVotes];

        Decode(Max(allVotes),
          demVotes, dColor,
          repVotes, rColor,
          oColor
        );
      `,
            returnType: `Default`
        }
    };
}
// states change layer renderer expressions
const scaleFactorStates = `
  var scaleFactorBase = ( ${stateReferenceScale} / $view.scale );
  var scaleFactor = When(
    scaleFactorBase >= 1, 1,
    scaleFactorBase >= 0.5, scaleFactorBase * 0.6,
    scaleFactorBase >= 0.25, scaleFactorBase * 0.45,
    scaleFactorBase >= 0.125, scaleFactorBase * 0.3125,
    scaleFactorBase * 0.1875
  );
`;
const sizeFactorStates = `
  var sizeFactor = When(
    value >= ${stateChangeSizeStops[4].value}, ${stateChangeSizeStops[4].size},
    value >= ${stateChangeSizeStops[3].value}, ${stateChangeSizeStops[3].size} + (${interpolateBetweenStops(stateChangeSizeStops[3], stateChangeSizeStops[4])} * (value - ${stateChangeSizeStops[3].value})),
    value >= ${stateChangeSizeStops[2].value}, ${stateChangeSizeStops[2].size} + (${interpolateBetweenStops(stateChangeSizeStops[2], stateChangeSizeStops[3])} * (value - ${stateChangeSizeStops[2].value})),
    value >= ${stateChangeSizeStops[1].value}, ${stateChangeSizeStops[1].size} + (${interpolateBetweenStops(stateChangeSizeStops[1], stateChangeSizeStops[2])} * (value - ${stateChangeSizeStops[1].value})),
    value > ${stateChangeSizeStops[0].value}, ${stateChangeSizeStops[0].size} + (${interpolateBetweenStops(stateChangeSizeStops[0], stateChangeSizeStops[1])} * value),
    0
  );
`;
export const sizeExpressionBaseStates = `
  ${sizeFactorStates}

  ${scaleFactorStates}
  var size = sizeFactor * scaleFactor;
`;
// counties layer expressions
const sizeFactorCounties = `
  var sizeFactor = When(
    value >= ${countySizeStops[4].value}, ${countySizeStops[4].size},
    value >= ${countySizeStops[3].value}, ${countySizeStops[3].size} + (${interpolateBetweenStops(countySizeStops[3], countySizeStops[4])} * (value - ${countySizeStops[3].value})),
    value >= ${countySizeStops[2].value}, ${countySizeStops[2].size} + (${interpolateBetweenStops(countySizeStops[2], countySizeStops[3])} * (value - ${countySizeStops[2].value})),
    value >= ${countySizeStops[1].value}, ${countySizeStops[1].size} + (${interpolateBetweenStops(countySizeStops[1], countySizeStops[2])} * (value - ${countySizeStops[1].value})),
    value > ${countySizeStops[0].value}, ${countySizeStops[0].size} + (${interpolateBetweenStops(countySizeStops[0], countySizeStops[1])} * value),
    0
  );
`;
const scaleFactorCounties = `
  var scaleFactorBase = Round( ${referenceScale} / $view.scale, 1 );
  var scaleFactor = When(
    scaleFactorBase >= 8, scaleFactorBase / 6,
    scaleFactorBase >= 4, scaleFactorBase / 3,
    scaleFactorBase >= 2, scaleFactorBase * 0.6,
    scaleFactorBase >= 1, scaleFactorBase * 0.6,
    scaleFactorBase >= 0.5, scaleFactorBase * 0.6,
    scaleFactorBase >= 0.25, scaleFactorBase * 0.45,
    scaleFactorBase >= 0.125, scaleFactorBase * 0.3125,
    scaleFactorBase * 0.1875
  );
`;
export const sizeExpressionBaseCounties = `
  ${sizeFactorCounties}

  ${scaleFactorCounties}
  var size = sizeFactor * scaleFactor;
`;
function interpolateBetweenStops(firstStop, nextStop) {
    const sizeRange = nextStop.size - firstStop.size;
    const dataRange = nextStop.value - firstStop.value;
    return sizeRange / dataRange;
}
export function createSizePrimitiveOverride(params) {
    const { year, primitiveName, fieldPrefix } = params;
    return {
        type: `CIMPrimitiveOverride`,
        primitiveName,
        propertyName: `Size`,
        valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Margin of Victory`,
            expression: `
        var demVotes = $feature.${fieldPrefix}dem_${year};
        var repVotes = $feature.${fieldPrefix}rep_${year};
        var othVotes = $feature.${fieldPrefix}oth_${year};

        var allVotes = Reverse(Sort([demVotes, repVotes, othVotes]));

        var value = allVotes[0] - allVotes[1];

        ${fieldPrefix === stateFieldPrefix ? sizeExpressionBaseStates : sizeExpressionBaseCounties}

        return size;
      `,
            returnType: `Default`
        }
    };
}
export function createOffsetXPrimitiveOverride(params) {
    const { year, primitiveName, fieldPrefix } = params;
    return {
        type: `CIMPrimitiveOverride`,
        primitiveName,
        propertyName: `OffsetX`,
        valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Margin of Victory`,
            expression: `

        function isEven(v){
          return v % 2 == 0;
        }
        var interval = 4;
        var years = [${years}];
        var selectedYear = ${year};

        var numItems = Count(years);
        var isEvenItems = isEven(numItems);
        var middleIndex = Floor(numItems / 2);

        if(isEvenItems){
          middleIndex -= 0.5;
        }

        var index = IndexOf(years, selectedYear);

        if(!isEvenItems && index == middleIndex){
          return 0;
        }

        var direction = iif(index < middleIndex, -1, 1);

        var yearStart = iif(direction < 0, selectedYear, years[middleIndex]);
        var yearEnd = iif(direction < 0, years[middleIndex], selectedYear);

        var sizes = [];

        var offsetX = 0;

        for (var year = yearStart; year <= yearEnd; year+=interval){
          var demVotes = $feature[\`${fieldPrefix}dem_\${year}\`];
          var repVotes = $feature[\`${fieldPrefix}rep_\${year}\`];
          var othVotes = $feature[\`${fieldPrefix}oth_\${year}\`];

          var allVotes = Reverse(Sort([demVotes, repVotes, othVotes]));

          var value = allVotes[0] - allVotes[1];

          ${fieldPrefix === stateFieldPrefix ? sizeExpressionBaseStates : sizeExpressionBaseCounties}

          var factor = iif(
            (year == yearStart) || (year == yearEnd)
          , 0.5, 1);

          offsetX += (size * factor);
        }

        return offsetX * direction;

      `,
            returnType: `Default`
        }
    };
}
//# sourceMappingURL=expressionUtils.js.map