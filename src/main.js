import ArcGISMap from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { createRenderer } from "./rendererUtils";
import { statePopupTemplate } from "./popupUtils";
import { scaleThreshold, statesLayerPortalItem } from "./config";
const stateLayer = new FeatureLayer({
    portalItem: {
        id: statesLayerPortalItem
    },
    renderer: createRenderer({
        isState: true
    }),
    popupTemplate: statePopupTemplate(),
    maxScale: scaleThreshold
});
const map = new ArcGISMap({
    basemap: {
        portalItem: {
            id: "fbfb62f3599f41e5a77845f863e2872f"
        }
    },
    layers: [stateLayer]
});
new MapView({
    map: map,
    container: "viewDiv",
    center: [-118.244, 34.052],
    zoom: 3
});
//# sourceMappingURL=main.js.map