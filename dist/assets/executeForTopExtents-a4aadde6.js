import{cl as a,aT as i}from"./index-de9e02e1.js";import{f as e}from"./utils-5b434a69.js";import{p as n}from"./queryTopFeatures-84a86219.js";import"./normalizeUtils-9deeb3c4.js";import"./normalizeUtilsCommon-3579e597.js";import"./query-8c72b5f2.js";import"./pbfQueryUtils-4437fe49.js";import"./pbf-61f8d833.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function w(o,r,m){const p=e(o),t=await n(p,a.from(r),{...m});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{w as executeForTopExtents};
