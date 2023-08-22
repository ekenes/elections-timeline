import { SimpleRenderer } from "@arcgis/core/renderers";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import { createSquareSymbolLayer } from "./symbolUtils";
import { createColorPrimitiveOverride, createOffsetXPrimitiveOverride, createSizePrimitiveOverride } from "./expressionUtils";
export function createRenderer() {
    return new SimpleRenderer({
        symbol: createSymbol()
    });
}
function createSymbol() {
    return new CIMSymbol({
        data: {
            type: `CIMSymbolReference`,
            symbol: {
                type: `CIMPointSymbol`,
                symbolLayers: [
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
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2004",
                    year: 2004
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2008",
                    year: 2008
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2012",
                    year: 2012
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2016",
                    year: 2016
                }),
                createSizePrimitiveOverride({
                    primitiveName: "election-2020",
                    year: 2020
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2004",
                    year: 2004
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2008",
                    year: 2008
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2012",
                    year: 2012
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2016",
                    year: 2016
                }),
                createOffsetXPrimitiveOverride({
                    primitiveName: "election-2020",
                    year: 2020
                })
            ]
        }
    });
}
//# sourceMappingURL=rendererUtils.js.map