const cimSquareGeometry = {
    rings: [[
            [0, 0],
            [0, 10],
            [10, 10],
            [10, 0],
            [0, 0]
        ]]
};
export function createSquareSymbolLayer(params) {
    const { primitiveName, color, donutEnabled, outline, offsetX } = params;
    const symbol = donutEnabled ? {
        type: "CIMLineSymbol",
        symbolLayers: [
            {
                type: "CIMSolidStroke",
                enable: true,
                color,
                width: 2.4
            }
        ]
    } : {
        type: "CIMPolygonSymbol",
        symbolLayers: [
            {
                type: "CIMSolidFill",
                enable: true,
                color,
                primitiveName
            }
        ]
    };
    if (outline && outline.color) {
        symbol.symbolLayers.push({
            type: `CIMSolidStroke`,
            enable: true,
            color: outline.color,
            width: 0.5
        });
    }
    const size = 10;
    return {
        type: "CIMVectorMarker",
        enable: true,
        anchorPoint: { x: 0, y: 0 },
        anchorPointUnits: "Relative",
        size,
        primitiveName,
        frame: { xmin: 0.0, ymin: 0.0, xmax: 10.0, ymax: 10.0 },
        offsetX: size * offsetX,
        offsetY: 0,
        markerGraphics: [
            {
                type: "CIMMarkerGraphic",
                geometry: cimSquareGeometry,
                symbol
            }
        ],
        scaleSymbolsProportionally: true,
        respectFrame: true
    };
}
//# sourceMappingURL=symbolUtils.js.map