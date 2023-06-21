import{aD as a,ab as h,f0 as m,f1 as d,f2 as S,_ as M,f3 as g}from"./index-ee4f50bd.js";import"./parser-c18899b3.js";import{f as C,u as I,M as z,y as L,m as j}from"./utils-487dda87.js";import{e as x}from"./LRUCache-bb6160eb.js";function P(o){const t=[];return y(C(o),t),t.length?new a(I(t[0])):null}function y(o,t){var e;if(!o)return;let r;r=o.type==="CIMTextSymbol"?o.symbol:o;const l=o.type==="CIMPolygonSymbol";if(r!=null&&r.symbolLayers){for(const n of r.symbolLayers)if(!(n.colorLocked||l&&(z(n)||L(n)&&n.markerPlacement&&j(n.markerPlacement))))switch(n.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":n.tintColor&&p(t,n.tintColor);break;case"CIMVectorMarker":(e=n.markerGraphics)==null||e.forEach(c=>{y(c.symbol,t)});break;case"CIMSolidStroke":case"CIMSolidFill":p(t,n.color);break;case"CIMHatchFill":y(n.lineSymbol,t)}}}function p(o,t){for(const r of o)if(r.join(".")===t.join("."))return;o.push(t)}new x(1e3);new a([128,128,128]);const _=new a("white");function J(o,t){if(!o)return null;let r=null;return h(o)?r=$(o):m(o)&&(r=o.type==="cim"?P(o):o.color?new a(o.color):null),r?s(r,t):null}function $(o){const t=o.symbolLayers;if(!t)return null;let r=null;return t.forEach(l=>{var e;l.type==="object"&&((e=l.resource)!=null&&e.href)||(r=l.type==="water"?l.color:l.material?l.material.color:null)}),r?new a(r):null}function s(o,t){if(t==null||o==null)return o;const r=o.toRgba();return r[3]=r[3]*t,new a(r)}function v(o,t,r){const l=o.symbolLayers;if(!l)return;const e=n=>s(t=t??n??(r!=null?_:null),r);l.forEach(n=>{var c;if(n.type!=="object"||!((c=n.resource)!=null&&c.href)||t)if(n.type==="water")n.color=e(n.color);else{const f=n.material!=null?n.material.color:null,i=e(f);n.material==null?n.material=new g({color:i}):n.material.color=i,r!=null&&"outline"in n&&n.outline!=null&&n.outline.color!=null&&(n.outline.color=s(n.outline.color,r))}})}function E(o,t,r){(t=t??o.color)&&(o.color=s(t,r)),r!=null&&"outline"in o&&o.outline&&o.outline.color&&(o.outline.color=s(o.outline.color,r))}function K(o,t,r){o&&(t||r!=null)&&(t&&(t=new a(t)),h(o)?v(o,t,r):m(o)&&E(o,t,r))}async function R(o,t){const r=o.symbolLayers;r&&await d(r,async l=>D(l,t))}async function D(o,t){switch(o.type){case"extrude":O(o,t);break;case"icon":case"line":case"text":F(o,t);break;case"path":V(o,t);break;case"object":await T(o,t)}}function F(o,t){const r=w(t);r!=null&&(o.size=r)}function w(o){for(const t of o)if(typeof t=="number")return t;return null}function O(o,t){o.size=typeof t[2]=="number"?t[2]:0}async function T(o,t){const{resourceSize:r,symbolSize:l}=await q(o),e=k(t,r,l);o.width=u(t[0],l[0],r[0],e),o.depth=u(t[1],l[1],r[1],e),o.height=u(t[2],l[2],r[2],e)}function V(o,t){const r=k(t,S,[o.width,void 0,o.height]);o.width=u(t[0],o.width,1,r),o.height=u(t[2],o.height,1,r)}function k(o,t,r){for(let l=0;l<3;l++){const e=o[l];switch(e){case"symbol-value":{const n=r[l];return n!=null?n/t[l]:1}case"proportional":break;default:if(e&&t[l])return e/t[l]}}return 1}async function q(o){const{computeObjectLayerResourceSize:t}=await M(()=>import("./symbolLayerUtils-d962146f.js"),["assets/symbolLayerUtils-d962146f.js","assets/index-ee4f50bd.js","assets/LRUCache-bb6160eb.js"]),r=await t(o,10),{width:l,height:e,depth:n}=o,c=[l,n,e];let f=1;for(let i=0;i<3;i++){const b=c[i];if(b!=null){f=b/r[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=r[i]*f);return{resourceSize:r,symbolSize:c}}function u(o,t,r,l){switch(o){case"proportional":return r*l;case"symbol-value":return t??r;default:return o}}function A(o,t){const r=w(t);if(r!=null)switch(o.type){case"simple-marker":o.size=r;break;case"picture-marker":{const l=o.width/o.height;l>1?(o.width=r,o.height=r*l):(o.width=r*l,o.height=r);break}case"simple-line":o.width=r;break;case"text":o.font.size=r}}async function N(o,t){if(o&&t)return h(o)?R(o,t):void(m(o)&&A(o,t))}function Q(o,t,r){if(o&&t!=null)if(h(o)){const l=o.symbolLayers;l&&l.forEach(e=>{if(e&&e.type==="object")switch(r){case"tilt":e.tilt=t;break;case"roll":e.roll=t;break;default:e.heading=t}})}else m(o)&&(o.type!=="simple-marker"&&o.type!=="picture-marker"&&o.type!=="text"||(o.angle=t))}async function W(o,t){return await o.fetchSymbol(t)||o.fetchCIMSymbol(t)}export{N as D,Q as I,J as b,K as g,W as q};
