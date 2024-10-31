import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Features from "@arcgis/core/widgets/Features";
import { createRenderer } from "./rendererUtils";
import { createPopupTemplate } from "./popupUtils";
import { basemapPortalItem, countiesLayerPortalItem, scaleThreshold, statesLayerPortalItem, usaGraphic, } from "./config";
import { SimpleRenderer } from "@arcgis/core/renderers";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Extent from "@arcgis/core/geometry/Extent";
import Popup from "@arcgis/core/widgets/Popup";
const stateLayer = new FeatureLayer({
    portalItem: {
        id: statesLayerPortalItem,
    },
    renderer: createRenderer({
        level: "state",
    }),
    popupTemplate: createPopupTemplate({
        level: "state",
    }),
    maxScale: scaleThreshold,
    opacity: 1,
    effect: "drop-shadow(2px, 2px, 2px, lightgray)",
});
const countyLayer = new FeatureLayer({
    portalItem: {
        id: countiesLayerPortalItem,
    },
    renderer: createRenderer({
        level: "county",
    }),
    popupTemplate: createPopupTemplate({
        level: "county",
    }),
    minScale: scaleThreshold,
    opacity: 1,
    effect: "drop-shadow(2px, 2px, 2px, lightgray)",
});
const countyBoundaryLayer = new FeatureLayer({
    portalItem: {
        id: "14c5450526a8430298b2fa74da12c2f4",
    },
    minScale: scaleThreshold,
    popupEnabled: false,
    renderer: new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            style: "none",
            outline: new SimpleLineSymbol({
                color: [175, 175, 175, 0.35],
                width: 0.5,
            }),
        }),
    }),
});
usaGraphic.popupTemplate = createPopupTemplate({
    level: "country",
});
const map = new WebMap({
    basemap: {
        portalItem: basemapPortalItem,
    },
    layers: [stateLayer, countyBoundaryLayer, countyLayer],
});
const view = new MapView({
    map,
    container: "viewDiv",
    center: [-100, 38],
    zoom: 3,
    scale: 15595144,
    popup: new Popup({
        dockEnabled: true,
        dockOptions: {
            breakpoint: false,
            position: "top-right",
        },
    }),
    constraints: {
        snapToZoom: false,
        minScale: 15595144 * 2,
        geometry: new Extent({
            spatialReference: { wkid: 5070 },
            xmin: -3035186.0631622137,
            ymin: -732037.6766778326,
            xmax: 2225748.801600614,
            ymax: 4149284.633137403,
        }),
    },
});
view.watch("scale", (scale) => {
    console.log(view.scale);
});
new Features({
    features: [usaGraphic],
    visible: true,
    container: document.getElementById("legendDiv"),
    visibleElements: {
        closeButton: false,
        actionBar: false,
    },
});
//# sourceMappingURL=main.js.map