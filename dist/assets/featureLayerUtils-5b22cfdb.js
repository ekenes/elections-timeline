import{s as T,k as f,p as E,a as i,i as p,b as L,B as K,j as F,x as R,c as j,d as D,e as q,u as I,l as d,f as z}from"./index-de9e02e1.js";import{i as m}from"./originUtils-1469eeaf.js";import{r as B}from"./fetchService-1dd93164.js";import{o as w}from"./jsonContext-25b1ac01.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";const M=T.getLogger("esri.layers.FeatureLayer"),y="Feature Service";function c(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function g(a,e){if(e.type!==y)throw new i("feature-layer:portal-item-wrong-type",c(a,`should have portal item of type "${y}"`))}async function A(a){if(await a.load(),E(a))throw new i("feature-layer:save",c(a,"using an in-memory source cannot be saved to a portal item"))}function U(a,e){let t=(a.messages??[]).filter(({type:r})=>r==="error").map(({name:r,message:l,details:o})=>new i(r,l,o));if(e!=null&&e.ignoreUnsupported&&(t=t.filter(({name:r})=>r!=="layer:unsupported"&&r!=="symbol:unsupported"&&r!=="symbol-layer:unsupported"&&r!=="property:unsupported"&&r!=="url:unsupported")),t.length>0)throw new i("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}async function v(a,e,t){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const r=a.write({},e);return U(e,t),r}function J(a){const{layer:e,layerJSON:t}=a;return e.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function h(a){p(a,d.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}function Y(a){const e=a.portalItem;if(!e)throw M.error("save: requires the portalItem property to be set"),new i("feature-layer:portal-item-not-set",c(a,"requires the portalItem property to be set"));if(!e.loaded)throw new i("feature-layer:portal-item-not-loaded",c(a,"cannot be saved to a portal item that does not exist or is inaccessible"));g(a,e)}async function N(a,e){return/\/\d+\/?$/.test(a.url??"")?J(e[0]):_(a,e)}async function _(a,e){const{layer:{url:t,customParameters:r,apiKey:l}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await C(o,{url:t??"",customParameters:r,apiKey:l},e.map(s=>s.layer.layerId)));for(const s of e)O(s.layer,s.layerJSON,o);return o}async function C(a,e,t){a||(a={}),a.layers||(a.layers=[]),a.tables||(a.tables=[]);const{url:r,customParameters:l,apiKey:o}=e,{serviceJSON:s,layersJSON:n}=await B(r,{customParameters:l,apiKey:o}),u=S(a.layers,s.layers,t),b=S(a.tables,s.tables,t);a.layers=u.itemResources,a.tables=b.itemResources;const x=[...u.added,...b.added],P=n?[...n.layers,...n.tables]:[];return await k(a,x,r,P),a}function S(a,e,t){const r=L(a,e,(o,s)=>o.id===s.id);a=a.filter(o=>!r.removed.some(s=>s.id===o.id));const l=r.added.map(({id:o})=>({id:o}));return l.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:l.filter(({id:o})=>!t.includes(o))}}async function k(a,e,t,r){const l=e.map(({id:o})=>new K({url:t,layerId:o,sourceJSON:r.find(({id:s})=>s===o)}));await F(l.map(o=>o.load())),l.forEach(o=>{const{layerId:s,loaded:n,defaultPopupTemplate:u}=o;!n||u==null||O(o,{id:s,popupInfo:u.toJSON()},a)})}function O(a,e,t){a.isTable?$(t.tables,e):$(t.layers,e)}function $(a,e){if(!a)return;const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function G(a){const{portalItem:e}=a;return z(a)&&!a.dynamicDataSource&&!!(e!=null&&e.loaded)&&e.type===y}async function H(a){if(!(a!=null&&a.length))throw new i("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(r=>r.load()));for(const r of a)if(!G(r))throw new i("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${c(r,"does not conform")}`,{layer:r});const e=a.map(r=>r.portalItem.id);if(new Set(e).size>1)throw new i("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new i("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Q(a,e){let t=R.from(e);return t.id&&(t=t.clone(),t.id=null),t.type??(t.type=y),t.portal??(t.portal=j.getDefault()),g(a,t),t}async function V(a,e){const{url:t,layerId:r,title:l,fullExtent:o,isTable:s}=a,n=D(t),u=n!=null&&n.serverType==="FeatureServer";e.url=u?t:`${t}/${r}`,e.title||(e.title=l),e.extent=null,s||o==null||(e.extent=await q(o)),I(e,d.METADATA),I(e,d.MULTI_LAYER),p(e,d.SINGLE_LAYER),s&&p(e,d.TABLE),h(e)}async function W(a,e,t){var l;const r=a.portal;await(r==null?void 0:r.signIn()),await((l=r==null?void 0:r.user)==null?void 0:l.addItem({item:a,data:e,folder:t==null?void 0:t.folder}))}const sa=f(X);async function X(a,e){await A(a),Y(a);const t=a.portalItem,r=w(t),l=await v(a,r,e),o=await N(t,[{layer:a,layerJSON:l}]);return h(t),await t.update({data:o}),m(r),t}const la=f(async(a,e)=>{await H(a);const t=a[0].portalItem,r=w(t),l=await Promise.all(a.map(s=>v(s,r,e))),o=await N(t,a.map((s,n)=>({layer:s,layerJSON:l[n]})));return h(t),await t.update({data:o}),await Promise.all(a.slice(1).map(s=>s.portalItem.reload())),m(r),t.clone()}),na=f(Z);async function Z(a,e,t){await A(a);const r=Q(a,e),l=w(r),o=J({layer:a,layerJSON:await v(a,l,t)});return await V(a,r),await W(r,o,t),a.portalItem=r,m(l),r}export{sa as save,la as saveAll,na as saveAs};
