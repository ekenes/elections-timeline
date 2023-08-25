import{ah as h,ai as g,i as v,s,f as S}from"./index-1f15e2a2.js";import{i as u}from"./originUtils-1469eeaf.js";import{o as m}from"./jsonContext-f646d6ed.js";function x(e,r,t){const a=t(e);if(!a.isValid)throw new s(`${r}:invalid-parameters`,a.errorMessage,{layer:e})}async function y(e){const{layer:r,errorNamePrefix:t,validateLayer:a}=e;await r.load(),x(r,t,a)}function f(e,r){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${r}`}function c(e,r,t,a){if(e.type!==t)throw new s(`${r}:portal-item-wrong-type`,`Portal item type should be "${t}"`,{item:e,layer:a})}function P(e,r,t){const{portalItem:a}=e;if(!a)throw new s(`${r}:portal-item-not-set`,f(e,"requires the portalItem property to be set"));if(!a.loaded)throw new s(`${r}:portal-item-not-loaded`,f(e,"cannot be saved to a portal item that does not exist or is inaccessible"));c(a,r,t,e)}function N(e,r,t,a){let o=h.from(e);return o.id&&(o=o.clone(),o.id=null),o.type??(o.type=t),o.portal??(o.portal=g.getDefault()),c(o,r,t,a),o}function D(e,r){let t=(e.messages??[]).filter(({type:a})=>a==="error").map(({name:a,message:o,details:l})=>new s(a,o,l));if(r!=null&&r.ignoreUnsupported&&(t=t.filter(({name:a})=>a!=="layer:unsupported"&&a!=="symbol:unsupported"&&a!=="symbol-layer:unsupported"&&a!=="property:unsupported"&&a!=="url:unsupported")),t.length>0)throw new s("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}async function w(e,r,t){"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const a=e.write({},r);return D(r,t),a}function $(e){v(e,S.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((r,t,a)=>a.indexOf(r)===t))}async function J(e,r,t){var o;const a=e.portal;await a.signIn(),await((o=a.user)==null?void 0:o.addItem({item:e,data:r,folder:t==null?void 0:t.folder}))}async function T(e,r){const{layer:t,createItemData:a,errorNamePrefix:o,itemType:l}=e;await y(e),P(t,o,l);const n=t.portalItem,p=m(n),i=await w(t,p,r),d=await a({layer:t,layerJSON:i},n);return $(n),await n.update({data:d}),u(p),n}async function j(e,r){const{layer:t,createItemData:a,setItemProperties:o,newItem:l,errorNamePrefix:n,itemType:p}=e;await y(e);const i=N(l,n,p,t),d=m(i),I=await w(t,d,r),b=await a({layer:t,layerJSON:I},i);return await o(t,i),$(i),await J(i,b,r),t.portalItem=i,u(d),i}export{T as I,j as b,w as c,N as d,f as p,x as s,P as u,J as w,$ as y};
