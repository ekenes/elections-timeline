import{N as m,ag as c,ex as f,U as y,ba as S,ez as s,dS as l,am as R,D as g,cx as p}from"./index-02eff6e6.js";import N from"./AttributeBinsQuery-7257b137.js";import"./queryUtils-60c4a6a9.js";import"./json-48e3ea08.js";import"./FixedIntervalBinParameters-2ec73721.js";function d(a){const e=a.geometry,r=a.toJSON(),t=r;let i,n,o;return e!=null&&(n=e.spatialReference,o=s(n),t.geometryType=l(e),t.geometry=JSON.stringify(e),t.inSR=o),r.outSR?(t.outSR=s(r.outSR),i=a.outSpatialReference):e&&(t.outSR=t.inSR,i=n),t.bin&&(t.bin=JSON.stringify(t.bin)),t.quantizationParameters&&(t.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.outStatistics&&(t.outStatistics=JSON.stringify(t.outStatistics)),t.outTimeReference&&(t.outTimeReference=JSON.stringify(t.outTimeReference)),a.defaultSpatialReference&&R(n,i)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function J(a,e,r){return O(a,e,r)}async function O(a,e,r={}){const t=typeof a=="string"?m(a):a,i=e.geometry?[e.geometry]:[],n=await c(i,null,{signal:r.signal}),o=n==null?void 0:n[0];o!=null&&((e=e.clone()).geometry=o);const u=f({...t.query,f:"json",...d(e)});return y(S(t.path,"queryBins"),{...r,query:{...u,...r.query}})}async function T(a,e,r){const{data:t}=await J(g(a),N.from(e),r);return p.fromJSON(t)}export{T as executeAttributeBinsQuery};
