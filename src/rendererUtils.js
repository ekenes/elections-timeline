import { SimpleRenderer } from "@arcgis/core/renderers";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import { createSquareSymbolLayer } from "./symbolUtils";
import { createColorPrimitiveOverride, createOffsetXPrimitiveOverride, createSizePrimitiveOverride } from "./expressionUtils";
import { stateFieldPrefix, years } from "./config";
export function createRenderer(params) {
    const { level } = params;
    return new SimpleRenderer({
        symbol: createSymbol({ level })
    });
}
function createSymbol(params) {
    const { level } = params;
    const fieldPrefix = level === "state" ? stateFieldPrefix : "";
    return new CIMSymbol({
        data: {
            type: `CIMSymbolReference`,
            symbol: {
                type: `CIMPointSymbol`,
                symbolLayers: [
                    ...years.map(year => {
                        return createSquareSymbolLayer({
                            primitiveName: `election-${year}`,
                            offsetX: years.indexOf(year) - 2,
                            color: [0, 0, 0, 255],
                            donutEnabled: false,
                            outline: {
                                color: [255, 255, 255, 100],
                            }
                        });
                    })
                ]
            },
            primitiveOverrides: [
                ...years.map(year => {
                    return createColorPrimitiveOverride({
                        primitiveName: `election-${year}`,
                        year,
                        fieldPrefix
                    });
                }),
                ...years.map(year => {
                    return createSizePrimitiveOverride({
                        primitiveName: `election-${year}`,
                        year,
                        fieldPrefix,
                        level
                    });
                }),
                ...years.map(year => {
                    return createOffsetXPrimitiveOverride({
                        primitiveName: `election-${year}`,
                        year,
                        fieldPrefix,
                        level
                    });
                })
            ]
        }
    });
}
//# sourceMappingURL=rendererUtils.js.map