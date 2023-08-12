import { SimpleRenderer } from "@arcgis/core/renderers";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import { createSquareSymbolLayer } from "./symbolUtils";
import { createColorPrimitiveOverride } from "./expressionUtils";

export function createRenderer (): SimpleRenderer {
  return new SimpleRenderer({
    symbol: createSymbol()
  })
}

function createSymbol () {
  return new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          createSquareSymbolLayer({
            primitiveName: "election-2000",
            anchorPoint: { x: 2, y: 0 },
            color: [0,0,0,255],
            donutEnabled: false
          }),
          createSquareSymbolLayer({
            primitiveName: "election-2004",
            anchorPoint: { x: 1, y: 0 },
            color: [0,0,0,255],
            donutEnabled: false
          }),
          createSquareSymbolLayer({
            primitiveName: "election-2008",
            anchorPoint: { x: 0, y: 0 },
            color: [0,0,0,255],
            donutEnabled: false
          }),
          createSquareSymbolLayer({
            primitiveName: "election-2012",
            anchorPoint: { x: -1, y: 0 },
            color: [0,0,0,255],
            donutEnabled: false
          }),
          createSquareSymbolLayer({
            primitiveName: "election-2016",
            anchorPoint: { x: -2, y: 0 },
            color: [0,0,0,255],
            donutEnabled: false
          }),
          createSquareSymbolLayer({
            primitiveName: "election-2020",
            anchorPoint: { x: -3, y: 0 },
            color: [0,0,0,255],
            donutEnabled: false
          })
        ]
      },
      primitiveOverrides: [
        createColorPrimitiveOverride({
          primitiveName: "election-2000",
          year: 2000
        }),
        createColorPrimitiveOverride({
          primitiveName: "election-2004",
          year: 2004
        }),
        createColorPrimitiveOverride({
          primitiveName: "election-2008",
          year: 2008
        }),
        createColorPrimitiveOverride({
          primitiveName: "election-2012",
          year: 2012
        }),
        createColorPrimitiveOverride({
          primitiveName: "election-2016",
          year: 2016
        }),
        createColorPrimitiveOverride({
          primitiveName: "election-2020",
          year: 2020
        })
      ]
    }
  })
}