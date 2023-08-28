import ArcGISMap from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { createRenderer } from "./rendererUtils";
import { SimpleRenderer } from "@arcgis/core/renderers";
import { statePopupTemplate } from "./popupUtils";
import { countiesLayerPortalItem, scaleThreshold, statesLayerPortalItem } from "./config";

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

const countyLayer = new FeatureLayer({
  portalItem: {
    id: countiesLayerPortalItem
  },
  renderer: createRenderer({
    isState: false
  }),
  minScale: scaleThreshold
})

const map = new ArcGISMap({
  basemap: {
    portalItem: {
      id: "fbfb62f3599f41e5a77845f863e2872f"
    }
  },
  layers: [ stateLayer, countyLayer ]
});

new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 3
});