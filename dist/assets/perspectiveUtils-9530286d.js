import{q as l,t as a,v as N,bp as P,eK as d,dP as S,aO as k,eL as $,eM as y,eN as g,eO as p,R as h,eP as x,Q as c,aA as q}from"./index-7df220b7.js";import{p as w}from"./normalizeUtilsSync-06a11b6b.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends P{constructor(t){super(t)}get bounds(){const t=this.coords;return(t==null?void 0:t.extent)==null?null:d(t.extent)}get coords(){var o;const t=(o=this.element.georeference)==null?void 0:o.coords;return S(t,this.spatialReference).geometry}get normalizedCoords(){return k.fromJSON(w(this.coords))}get normalizedBounds(){const t=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return t!=null?d(t):null}};l([a()],n.prototype,"spatialReference",void 0),l([a()],n.prototype,"element",void 0),l([a()],n.prototype,"bounds",null),l([a()],n.prototype,"coords",null),l([a()],n.prototype,"normalizedCoords",null),l([a()],n.prototype,"normalizedBounds",null),n=l([N("esri.layers.support.MediaElementView")],n);const r=q(),s=u(),i=u(),m=u();function L(e,t,o){return $(r,t[0],t[1],1),y(r,r,g(s,o)),r[2]===0?p(e,r[0],r[1]):p(e,r[0]/r[2],r[1]/r[2])}function Q(e,t,o){return f(i,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),f(m,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),h(e,x(i,i),m),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function f(e,t,o,z,b,C,v,O,R){c(e,t,z,C,o,b,v,1,1,1),$(r,O,R,1),x(s,e);const[j,B,M]=y(r,r,g(s,s));return c(s,j,0,0,0,B,0,0,0,M),h(e,s,e)}export{L as h,n as i,Q as j};
