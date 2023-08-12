import { dColorCIM, oColorCIM, rColorCIM, validYears } from "./config";

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