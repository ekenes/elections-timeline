import ArcGISMap from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { createRenderer } from "./rendererUtils";
import { statePopupTemplate } from "./popupUtils";
const layer = new FeatureLayer({
    portalItem: {
        id: "f2825b56dfc14bb892604637dab45104"
    },
    renderer: createRenderer(),
    popupTemplate: statePopupTemplate()
});
console.log(JSON.stringify(layer.renderer.symbol));
const map = new ArcGISMap({
    basemap: {
        portalItem: {
            id: "fbfb62f3599f41e5a77845f863e2872f"
        }
    },
    layers: [layer]
});
const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [-118.244, 34.052],
    zoom: 3
});
view.when(() => {
    console.log("Map is loaded");
});
//# sourceMappingURL=main.js.map