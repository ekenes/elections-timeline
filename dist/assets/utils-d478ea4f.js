import{eo as a,e4 as d,bW as h,gx as m,gy as g,gz as S,_ as M,gA as C}from"./index-7df220b7.js";import{f as z,u as I,M as L,y as x,m as j}from"./utils-fa2983ac.js";function P(o){const t=[];return b(z(o),t),t.length?new a(I(t[0])):null}function b(o,t){var e;if(!o)return;let r;r=o.type==="CIMTextSymbol"?o.symbol:o;const l=o.type==="CIMPolygonSymbol";if(r!=null&&r.symbolLayers){for(const n of r.symbolLayers)if(!(n.colorLocked||l&&(L(n)||x(n)&&n.markerPlacement&&j(n.markerPlacement))))switch(n.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":n.tintColor&&p(t,n.tintColor);break;case"CIMVectorMarker":(e=n.markerGraphics)==null||e.forEach(c=>{b(c.symbol,t)});break;case"CIMSolidStroke":case"CIMSolidFill":p(t,n.color);break;case"CIMHatchFill":b(n.lineSymbol,t)}}}function p(o,t){for(const r of o)if(r.join(".")===t.join("."))return;o.push(t)}new d(1e3);new a([128,128,128]);const _=new a("white");function U(o,t){if(!o)return null;let r=null;return h(o)?r=$(o):m(o)&&(r=o.type==="cim"?P(o):o.color?new a(o.color):null),r?y(r,t):null}function $(o){const t=o.symbolLayers;if(!t)return null;let r=null;return t.forEach(l=>{var e;l.type==="object"&&((e=l.resource)!=null&&e.href)||(r=l.type==="water"?l.color:l.material?l.material.color:null)}),r?new a(r):null}function y(o,t){if(t==null||o==null)return o;const r=o.toRgba();return r[3]=r[3]*t,new a(r)}function v(o,t,r){const l=o.symbolLayers;if(!l)return;const e=n=>y(t=t??n??(r!=null?_:null),r);l.forEach(n=>{var c,s;if(n.type!=="object"||!((c=n.resource)!=null&&c.href)||t)if(n.type==="water")n.color=e(n.color);else{const i=n.material!=null?n.material.color:null,u=e(i);n.material==null?n.material=new C({color:u}):n.material.color=u,r!=null&&"outline"in n&&((s=n.outline)==null?void 0:s.color)!=null&&(n.outline.color=y(n.outline.color,r))}})}function E(o,t,r){var l;(t=t??o.color)&&(o.color=y(t,r)),r!=null&&"outline"in o&&((l=o.outline)!=null&&l.color)&&(o.outline.color=y(o.outline.color,r))}function W(o,t,r){o&&(t||r!=null)&&(t&&(t=new a(t)),h(o)?v(o,t,r):m(o)&&E(o,t,r))}async function R(o,t){const r=o.symbolLayers;r&&await g(r,async l=>F(l,t))}async function F(o,t){switch(o.type){case"extrude":A(o,t);break;case"icon":case"line":case"text":O(o,t);break;case"path":T(o,t);break;case"object":await D(o,t)}}function O(o,t){const r=w(t);r!=null&&(o.size=r)}function w(o){for(const t of o)if(typeof t=="number")return t;return null}function A(o,t){o.size=typeof t[2]=="number"?t[2]:0}async function D(o,t){const{resourceSize:r,symbolSize:l}=await V(o),e=k(t,r,l);o.width=f(t[0],l[0],r[0],e),o.depth=f(t[1],l[1],r[1],e),o.height=f(t[2],l[2],r[2],e)}function T(o,t){const r=k(t,S,[o.width,void 0,o.height]);o.width=f(t[0],o.width,1,r),o.height=f(t[2],o.height,1,r)}function k(o,t,r){for(let l=0;l<3;l++){const e=o[l];switch(e){case"symbol-value":{const n=r[l];return n!=null?n/t[l]:1}case"proportional":break;default:if(e&&t[l])return e/t[l]}}return 1}async function V(o){const{computeObjectLayerResourceSize:t}=await M(()=>import("./symbolLayerUtils-9495ac07.js"),["assets/symbolLayerUtils-9495ac07.js","assets/index-7df220b7.js","assets/index-0e712e80.css"]),r=await t(o,10),{width:l,height:e,depth:n}=o,c=[l,n,e];let s=1;for(let i=0;i<3;i++){const u=c[i];if(u!=null){s=u/r[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=r[i]*s);return{resourceSize:r,symbolSize:c}}function f(o,t,r,l){switch(o){case"proportional":return r*l;case"symbol-value":return t??r;default:return o}}function G(o,t){const r=w(t);if(r!=null)switch(o.type){case"simple-marker":o.size=r;break;case"picture-marker":{const l=o.width/o.height;l>1?(o.width=r,o.height=r*l):(o.width=r*l,o.height=r);break}case"simple-line":o.width=r;break;case"text":o.font.size=r}}async function q(o,t){if(o&&t)return h(o)?R(o,t):void(m(o)&&G(o,t))}function B(o,t,r){if(o&&t!=null)if(h(o)){const l=o.symbolLayers;l&&l.forEach(e=>{if(e&&e.type==="object")switch(r){case"tilt":e.tilt=t;break;case"roll":e.roll=t;break;default:e.heading=t}})}else m(o)&&(o.type!=="simple-marker"&&o.type!=="picture-marker"&&o.type!=="text"||(o.angle=t))}async function J(o,t){return await o.fetchSymbol(t)||o.fetchCIMSymbol(t)}export{B as D,J as N,q as R,U as h,W as k};
