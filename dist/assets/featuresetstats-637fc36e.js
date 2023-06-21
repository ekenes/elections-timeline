import{t as y,e as F}from"./executionError-c92d3b85.js";import{Q as h,V as m,z as d,L as A,q as l,a3 as c,v as s}from"./arcadeUtils-628f1d91.js";import{f as g}from"./WhereClause-aa2012f2.js";import"./index-ee4f50bd.js";import"./arcadeTimeUtils-6bcdca73.js";import"./FieldsIndex-247aa784.js";import"./number-a54bc132.js";import"./Field-e1e55903.js";import"./fieldType-45f5bea8.js";import"./featureConversionUtils-e5238a3e.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function i(n,r,a,t,o,e){if(t.length===1){if(d(t[0]))return c(n,t[0],s(t[1],-1));if(l(t[0]))return c(n,t[0].toArray(),s(t[1],-1))}else if(t.length===2){if(d(t[0]))return c(n,t[0],s(t[1],-1));if(l(t[0]))return c(n,t[0].toArray(),s(t[1],-1));if(m(t[0])){const u=await t[0].load(),f=await p(g.create(t[1],u.getFieldsIndex()),e,o);return t[0].calculateStatistic(n,f,s(t[2],1e3),r.abortSignal)}}else if(t.length===3&&m(t[0])){const u=await t[0].load(),f=await p(g.create(t[1],u.getFieldsIndex()),e,o);return t[0].calculateStatistic(n,f,s(t[2],1e3),r.abortSignal)}return c(n,t,-1)}async function p(n,r,a){const t=n.getVariables();if(t.length>0){const o=[];for(let u=0;u<t.length;u++){const f={name:t[u]};o.push(await r.evaluateIdentifier(a,f))}const e={};for(let u=0;u<t.length;u++)e[t[u]]=o[u];return n.parameters=e,n}return n}function Q(n){n.mode==="async"&&(n.functions.stdev=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>i("stdev",t,o,e,r,n))},n.functions.variance=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>i("variance",t,o,e,r,n))},n.functions.average=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>i("mean",t,o,e,r,n))},n.functions.mean=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>i("mean",t,o,e,r,n))},n.functions.sum=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>i("sum",t,o,e,r,n))},n.functions.min=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>i("min",t,o,e,r,n))},n.functions.max=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>i("max",t,o,e,r,n))},n.functions.count=function(r,a){return n.standardFunctionAsync(r,a,(t,o,e)=>{if(h(e,1,1,r,a),m(e[0]))return e[0].count(t.abortSignal);if(d(e[0])||A(e[0]))return e[0].length;if(l(e[0]))return e[0].length();throw new y(r,F.InvalidParameter,a)})})}export{Q as registerFunctions};
