import{bM as i,bL as u,aW as n,ao as c,a as s,bV as l,c as y,bT as f,az as g,bU as h,b as d}from"./index-ee4f50bd.js";function b(e,r=!1){return e<=i?r?new Array(e).fill(0):new Array(e):new Float64Array(e)}function m(e){return(u(e)?e.length:e.byteLength/8)<=i?Array.from(e):new Float64Array(e)}function x(e,r,t){return Array.isArray(e)?e.slice(r,r+t):e.subarray(r,r+t)}function $(e,r){for(let t=0;t<r.length;++t)e[t]=r[t];return e}function w(e){return Array.isArray(e)?new Float64Array(e):e}let a=class extends n(c){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};s([l({georeferenced:"georeferenced"},{readOnly:!0})],a.prototype,"type",void 0),a=s([y("esri.geometry.support.MeshGeoreferencedVertexSpace")],a);const v=a;let o=class extends n(c){constructor(e){super(e),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=f()}getOriginPoint(e){const[r,t,p]=this.origin;return new g({x:r,y:t,z:p,spatialReference:e})}setOriginFormPoint({x:e,y:r,z:t}){this.origin=h(e,r,t??0)}};s([l({local:"local"},{readOnly:!0})],o.prototype,"type",void 0),s([d({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"origin",void 0),o=s([y("esri.geometry.support.MeshLocalVertexSpace")],o);const F=o;export{x as a,m as e,F as m,$ as o,v as p,b as t,w as y};
