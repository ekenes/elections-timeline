import{x as e,ax as f,ay as i}from"./index-7df220b7.js";import{c as m}from"./query-fdfcc742.js";async function y(a,r,t){const n=await u(a,r,t);return e.fromJSON(n)}async function u(a,r,t){const n=f(a),s={...t},o=i.from(r),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,y as s};