import Color from "@arcgis/core/Color";
export const basemapPortalItem = "fbfb62f3599f41e5a77845f863e2872f";
export const statesLayerPortalItem = "f2825b56dfc14bb892604637dab45104";
export const countiesLayerPortalItem = "fe9e032e4a854c74890750214a3edd8b";
export const maxScale = 4622324 / 16;
export const referenceScale = 2311162;
export const scaleThreshold = 9244600;
export const stateReferenceScale = 18489200;
export const years = [2004, 2008, 2012, 2016, 2020];
export const results = {
    2000: {
        republican: {
            candidate: "Bush",
            electoralVotes: 271
        },
        democrat: {
            candidate: "Gore",
            electoralVotes: 266
        },
        other: {
            candidate: "Other",
            electoralVotes: 0
        }
    },
    2004: {
        republican: {
            candidate: "Bush",
            electoralVotes: 286
        },
        democrat: {
            candidate: "Kerry",
            electoralVotes: 251
        },
        other: {
            candidate: "Other",
            electoralVotes: 0
        }
    },
    2008: {
        republican: {
            candidate: "McCain",
            electoralVotes: 173
        },
        democrat: {
            candidate: "Obama",
            electoralVotes: 365
        },
        other: {
            candidate: "Other",
            electoralVotes: 0
        }
    },
    2012: {
        republican: {
            candidate: "Romney",
            electoralVotes: 206
        },
        democrat: {
            candidate: "Obama",
            electoralVotes: 332
        },
        other: {
            candidate: "Other",
            electoralVotes: 0
        }
    },
    2016: {
        republican: {
            candidate: "Trump",
            electoralVotes: 304
        },
        democrat: {
            candidate: "Clinton",
            electoralVotes: 227
        },
        other: {
            candidate: "Other",
            electoralVotes: 0
        }
    },
    2020: {
        republican: {
            candidate: "Trump",
            electoralVotes: 232
        },
        democrat: {
            candidate: "Biden",
            electoralVotes: 306
        },
        other: {
            candidate: "Other",
            electoralVotes: 0
        }
    }
};
export let fieldInfos = {
    title: {
        state: `{state}`,
        county: `{county} County, {state}`
    }
};
// Renderer config
export const rColor = new Color("rgba(220, 75, 0, 1)");
export const dColor = new Color("rgba(60, 108, 204,1)");
export const oColor = new Color("rgba(181, 166, 0, 1)");
export const haloColor = new Color("#f7f7f7");
export const haloSize = 1;
export const rColorCIM = rColor.toJSON();
export const dColorCIM = dColor.toJSON();
export const oColorCIM = oColor.toJSON();
//////////////
// size stops
//////////////
// state results layer
export const stateFieldPrefix = "SUM_";
export const stateResultsSizeStops = [
    { value: 0, size: 8 },
    { value: 100000, size: 10 },
    { value: 500000, size: 15 },
    { value: 4000000, size: 20 },
    { value: 12000000, size: 50 }
];
// state change layer
export const stateChangeSizeStops = [
    { value: 0, size: 2 },
    { value: 10000, size: 4 },
    { value: 100000, size: 8 },
    { value: 500000, size: 16 },
    { value: 2000000, size: 32 }
];
// county layers
// size is votes as a % of total state votes
export const countySizeStops = [
    { value: 0, size: 3 },
    { value: 1000, size: 6 },
    { value: 5000, size: 10 },
    { value: 15000, size: 14 },
    { value: 30000, size: 20 }
];
//# sourceMappingURL=config.js.map