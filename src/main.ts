import ArcGISMap from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { createRenderer } from "./rendererUtils";
import { SimpleRenderer } from "@arcgis/core/renderers";

const layer = new FeatureLayer({
  portalItem: {
    id: "f2825b56dfc14bb892604637dab45104"
  },
  renderer: createRenderer()
});

console.log(JSON.stringify((layer.renderer as SimpleRenderer).symbol))

const map = new ArcGISMap({
  basemap: "streets-vector",
  layers: [ layer ]
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 3
});

view.when(() => {
  console.log("Map is loaded");
})