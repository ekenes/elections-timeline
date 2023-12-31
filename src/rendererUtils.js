import { SimpleRenderer } from "@arcgis/core/renderers";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import { createSquareSymbolLayer } from "./symbolUtils";
import { createColorPrimitiveOverride, createOffsetXPrimitiveOverride, createSizePrimitiveOverride } from "./expressionUtils";
import { stateFieldPrefix } from "./config";
export function createRenderer(params) {
    const { isState } = params;
    return new SimpleRenderer({
        symbol: createSymbol({ isState })
    });
}
function createSymbol(params) {
    const { isState } = params;
    const fieldPrefix = isState ? stateFieldPrefix : "";
    return new CIMSymbol({
        data: {
            type: `CIMSymbolReference`,
            symbol: {
                type: `CIMPointSymbol`,
                symbolLayers: [
                    // createSquareSymbolLayer({
                    //   primitiveName: "election-2000",
                    //   offsetX: -3,
                    //   color: [0,0,0,255],
                    //   donutEnabled: false
                    // }),
                    createSquareSymbolLayer({
                        primitiveName: "election-2004",
                        offsetX: -2,
                        color: [0, 0, 0, 255],
                        donutEnabled: false
                    }),
                    createSquareSymbolLayer({
                        primitiveName: "election-2008",
                        offsetX: -1,
                        color: [0, 0, 0, 255],
                        donutEnabled: false
                    }),
                    createSquareSymbolLayer({
                        primitiveName: "election-2012",
                        offsetX: 0,
                        color: [0, 0, 0, 255],
                        donutEnabled: false
                    }),
                    createSquareSymbolLayer({
                        primitiveName: "election-2016",
                        offsetX: 1,
                        color: [0, 0, 0, 255],
                        donutEnabled: false
                    }),
                    createSquareSymbolLayer({
                        primitiveName: "election-2020",
                        offsetX: 2,
                        color: [0, 0, 0, 255],
                        donutEnabled: false
                    })
                ]
            },
            primitiveOverrides: [
                // createColorPrimitiveOverride({
                //   primitiveName: "election-2000",
                //   year: 2000
                // }),
                createColorPrimitiveOverride({
                    primitiveName: "election-2004",
                    year: 2004,
                    fieldPrefix
                }),
                createColorPrimitiveOverride({
                    primitiveName: "election-2008",
                    year: 2008,
                    fieldPrefix
                }),
                createColorPrimitiveOverride({
                    primitiveName: "election-2012",
                    year: 2012,
                    fieldPrefix
                }),
                createColorPrimitiveOverride({
                    primitiveName: "election-2016",
                    year: 2016,
                    fieldPrefix
                }),
                createColorPrimitiveOverride({
                    primitiveName: "election-2020",
                    year: 2020,
                    fieldPrefix
                }),
                // createSizePrimitiveOverride({
                //   primitiveName: "election-2000",
                //   year: 2000
                // }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2004",
                    year: 2004,
                    fieldPrefix
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2008",
                    year: 2008,
                    fieldPrefix
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2012",
                    year: 2012,
                    fieldPrefix
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2016",
                    year: 2016,
                    fieldPrefix
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2020",
                    year: 2020,
                    fieldPrefix
                }),
                // createOffsetXPrimitiveOverride({
                //   primitiveName: "election-2000",
                //   year: 2000
                // }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2004",
                    year: 2004,
                    fieldPrefix
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2008",
                    year: 2008,
                    fieldPrefix
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2012",
                    year: 2012,
                    fieldPrefix
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2016",
                    year: 2016,
                    fieldPrefix
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2020",
                    year: 2020,
                    fieldPrefix
                })
            ]
        }
    });
}
//# sourceMappingURL=rendererUtils.js.map