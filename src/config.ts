import Color from "@arcgis/core/Color";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";

export const basemapPortalItem = {
  // web mercator
  // id: "fbfb62f3599f41e5a77845f863e2872f"
  // albers usa
  id: "1c2dfdb8c339473ab7b0ab11cb561e47"
  // usa only
  // id: "0a6c3de1e1d340d5a56826e3abd7c085"
}

export const statesLayerPortalItem = "f2825b56dfc14bb892604637dab45104";
export const countiesLayerPortalItem = "fe9e032e4a854c74890750214a3edd8b";

export const maxScale = 4622324/16;
export const referenceScale = 2311162;
export const scaleThreshold = 6645106;
export const stateReferenceScale = 18489200;

export type validYears = 2000 | 2004 | 2008 | 2012 | 2016 | 2020 | 2024;

export const years: Array<validYears> = [2008, 2012, 2016, 2020, 2024];

export const startYear = years[0];
export const endYear = years[years.length - 1];

export const usaGraphic = new Graphic({
  geometry: new Point({
    longitude: -98.5795,
    latitude: 39.8283
  }),
  attributes: {
    ObjectID: 1776,
    state: `U.S. Presidential Election Results ${startYear}-${endYear}`,
    dem_2000: 50999897,
    rep_2000: 48885097,
    oth_2000: 3458956,
    rep_ev_2000: 271,
    dem_ev_2000: 266,
    dem_2004: 59028444,
    rep_2004: 62040610,
    oth_2004: 2529916,
    rep_ev_2004: 286,
    dem_ev_2004: 251,
    dem_2008: 69498516,
    rep_2008: 59948323,
    oth_2008: 2352485,
    rep_ev_2008: 173,
    dem_ev_2008: 365,
    dem_2012: 65915795,
    rep_2012: 60933504,
    oth_2012: 2345950,
    rep_ev_2012: 206,
    dem_ev_2012: 332,
    dem_2016: 65853514,
    rep_2016: 62984828,
    oth_2016: 750884,
    rep_ev_2016: 304,
    dem_ev_2016: 227,
    dem_2020: 81268856,
    rep_2020: 74216752,
    oth_2020: 2922155,
    rep_ev_2020: 232,
    dem_ev_2020: 306,
    dem_2024: 75019257,
    rep_2024: 77303573,
    oth_2024: 3101635,
    rep_ev_2024: 312,
    dem_ev_2024: 226
  }
});

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
  },
  2024: {
    republican: {
      candidate: "Trump",
      electoralVotes: 312
    },
    democrat: {
      candidate: "Harris",
      electoralVotes: 226
    },
    other: {
      candidate: "Other",
      electoralVotes: 0
    }
  }
}

export let fieldInfos = {
  title: {
    state: `{state}`,
    county: `{county} County, {state}`,
    country: `U.S. Presidential Election Results ${startYear}-${endYear}`
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

// export const countySizeStops = [
//   { value: 0, size: 3 },
//   { value: 1, size: 3.1 },
//   { value: 2, size: 3.2 },
//   // { value: 1000, size: 6 },
//   { value: 50000, size: 10 },
//   // { value: 50000, size: 14 },
//   { value: 100000, size: 20 }
// ];

export const countySizeStops = [
  { value: 0, size: 3 },
  { value: 1000, size: 6 },
  { value: 5000, size: 10 },
  { value: 15000, size: 14 },
  { value: 30000, size: 20 }
];
