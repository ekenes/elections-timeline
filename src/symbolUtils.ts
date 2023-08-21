const cimSquareGeometry = {
  rings: [[
    [ 0,0 ],
    [ 0,10 ],
    [ 10,10 ],
    [ 10,0 ],
    [ 0,0 ]
  ]]
};

interface CreateSymbolLayerParams {
  primitiveName: string,
  color: number[],
  donutEnabled: boolean,
  anchorPoint: { x: number, y: number },
  outline?: {
    color: number[]
  }
}

export function createSquareSymbolLayer (params: CreateSymbolLayerParams){
  const { primitiveName, color, donutEnabled, anchorPoint, outline } = params;

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

  if(outline && outline.color){
    symbol.symbolLayers.push({
      type: `CIMSolidStroke`,
      enable: true,
      color: outline.color,
      width: 1
    } as any);
  }

  return {
    type: "CIMVectorMarker",
    enable: true,
    anchorPoint,
    anchorPointUnits: "Relative",
    size: 10,
    primitiveName,
    frame: { xmin: 0.0, ymin: 0.0, xmax: 10.0, ymax: 10.0 },
    markerGraphics: [
      {
        type: "CIMMarkerGraphic",
        geometry: cimSquareGeometry,
        symbol
      }
    ],
    scaleSymbolsProportionally: true,
    respectFrame: true
  } as __esri.CIMVectorMarker;
}