import{f as e}from"./utils-6996243e.js";import{y as f}from"./queryTopFeatures-c5849c0a.js";import{cw as s,w as c}from"./index-d2e37ef9.js";import"./normalizeUtils-04844d03.js";import"./normalizeUtilsCommon-a51f3cb3.js";import"./query-1b8f0de2.js";import"./pbfQueryUtils-e8f1810f.js";import"./pbf-f29a219b.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function O(r,o,t,m){const i=e(r),p={...m},{data:a}=await f(i,s.from(o),t,p);return c.fromJSON(a)}export{O as executeTopFeaturesQuery};