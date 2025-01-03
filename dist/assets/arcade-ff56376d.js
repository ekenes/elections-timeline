import{s as w,a8 as Z,df as j,V as E,ai as G,dg as T,dh as I,di as $,cx as L,dj as J}from"./index-02eff6e6.js";import{t as M}from"./ImmutableArray-d5cad66d.js";let b=null;function z(e,o,r,n={}){const t=o.elementType,c="value",p=t.type==="array"?[{name:c,type:t.type,elementType:t.elementType}]:t.type==="dictionary"?[{name:c,type:t.type,properties:t.properties}]:[{name:c,type:t.type}];return new M(e.map(i=>{const a={};return g(a,p,{[c]:i},r,n),a[c]}))}function N(e,o,r={}){const n=e instanceof L?new J({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return o.constructFeatureSet(n,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function V(e,o,r={}){const{spatialReference:n,interceptor:t,lruCache:c}=r;return typeof e=="string"?o.createFeatureSetCollectionFromService(e,n,c,t):o.createFeatureSetCollectionFromMap(e,n,c,t)}function X(e,o,r,n={}){const t={};return g(t,o.properties,e,r,n),new b.Dictionary(t)}function g(e,o,r,n,t={}){const c={};for(const p of Object.keys(r))c[p.toLowerCase()]=r[p];for(const p of o){const i=p.name.toLowerCase();if(t.variablesPreProcessed)e[i]=c[i];else switch(p.type){case"array":{const a=c[i];e[i]=a==null?null:z(a,p,n,t);break}case"feature":{const a=c[i];e[i]=a==null?null:b.Feature.createFromGraphic(a,t==null?void 0:t.timeZone);break}case"featureSet":{const a=c[i];e[i]=a==null?null:n?N(a,n,t):null;break}case"featureSetCollection":{const a=c[i];e[i]=a==null?null:n?V(a,n,t):null;break}case"dictionary":{const a=c[i];e[i]=a==null?null:X(a,p,n,t);break}case"date":{const a=c[i];e[i]=a?a instanceof $?a:t!=null&&t.timeZone?$.dateJSAndZoneToArcadeDate(a,t==null?void 0:t.timeZone):$.dateJSToArcadeDate(a):null;break}case"dateOnly":{const a=c[i];e[i]=a?a instanceof I?a:I.fromReader(a):null;break}case"time":{const a=c[i];e[i]=a?a instanceof T?a:T.fromReader(a):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[i]=c[i]}}}function O(e,o){for(const r of e)o.push(r),r.type==="dictionary"&&O(r.properties,o);return o}function F(e,o,r,n,t){const{spatialReference:c,interceptor:p,lruCache:i,console:a,abortSignal:y,timeZone:l,services:S={portal:E.getDefault()}}=r,m={vars:{},spatialReference:c,interceptor:p,timeZone:l,lrucache:i,useAsync:t,services:S,console:a,abortSignal:y};return o&&g(m.vars,e.variables,o,n,r),m}function v(e,o){switch(o.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),n="geometry"in r?r.geometry():null,t="readAttributes"in r?r.readAttributes():r.attributes;return new G({geometry:n,attributes:t})}case"dictionary":{const r=e,n=r.attributes,t={};for(const c of Object.keys(n))t[c]=v(r.field(c),o);return t}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,o))}return e}const R={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},P={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},D=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}],["popup",R],["popup-element",R],["feature-reduction-popup",P],["feature-reduction-popup-element",P],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}]]);function B(e){const o=D.get(e);if(!o){const r=Array.from(D.keys()).map(n=>`'${n}'`).join(", ");throw new w("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return Z(o)}async function H(e,o,r={}){b||(b=await j());const{arcade:n,arcadeUtils:t}=b,{loadScriptDependencies:c,referencesMember:p,scriptIsAsync:i}=n,a=O(o.variables,[]),y=a.filter(s=>s.type==="featureSet"||s.type==="featureSetCollection").map(s=>s.name.toLowerCase()),l=n.parseScript(e,y);if(!l)throw new w("arcade:invalid-script","Unable to create SyntaxTree");const S=t.extractFieldNames(l),m=n.scriptTouchesGeometry(l),h=a.map(s=>s.name.toLowerCase()).filter(s=>p(l,s)),u=i(l,y);await c(l,u,y);const C={vars:{},spatialReference:null,useAsync:u};for(const s of h)C.vars[s]="any";const{lruCache:A}=r,x=n.compileScript(l,C),k=n.featureSetUtils(),{services:U}=r;return{execute:(s,d={})=>{if(u)throw new w("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const f=x(F(o,s,{lruCache:A,...d},k,u));return d.rawOutput?f:v(f,t)},executeAsync:async(s,d={})=>{const f=await x(F(o,s,{lruCache:A,services:U,...d},k,u));return d.rawOutput?f:v(f,t)},isAsync:u,variablesUsed:h,fieldsUsed:S,geometryUsed:m,syntaxTree:l}}export{H as createArcadeExecutor,B as createArcadeProfile};
