import ArcGISMap from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Features from "@arcgis/core/widgets/Features";
import { createRenderer } from "./rendererUtils";
import { createPopupTemplate } from "./popupUtils";
import { basemapPortalItem, countiesLayerPortalItem, scaleThreshold, statesLayerPortalItem, usaGraphic } from "./config";

const stateLayer = new FeatureLayer({
  portalItem: {
    id: statesLayerPortalItem
  },
  renderer: createRenderer({
    level: "state"
  }),
  popupTemplate: createPopupTemplate({
    level: "state"
  }),
  maxScale: scaleThreshold,
  opacity: 1
});

const countyLayer = new FeatureLayer({
  portalItem: {
    id: countiesLayerPortalItem
  },
  renderer: createRenderer({
    level: "county"
  }),
  popupTemplate: createPopupTemplate({
    level: "county"
  }),
  minScale: scaleThreshold,
  opacity: 1
});

usaGraphic.popupTemplate = createPopupTemplate({
  level: "country"
});

const map = new ArcGISMap({
  basemap: {
    portalItem: basemapPortalItem
  },
  layers: [ stateLayer, countyLayer ]
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 3,
});

const featuresWidget = new Features({
  features: [usaGraphic],
  visible: true,
  container: document.getElementById("legendDiv")!,
  visibleElements: {
    closeButton: false,
    actionBar: false
  }
});