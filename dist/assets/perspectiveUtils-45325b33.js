import{n as l,q as a,t as S,bi as k,el as p,dp as w,aR as E,em as f,en as y,eo as h,ep as d,T as g,eq as x,R as c,aJ as M}from"./index-a1a1303e.js";import{p as N}from"./normalizeUtilsSync-c108bf05.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends k{constructor(o){super(o)}get bounds(){const o=this.coords;return o==null||o.extent==null?null:p(o.extent)}get coords(){var t;const o=(t=this.element.georeference)==null?void 0:t.coords;return w(o,this.spatialReference).geometry}get normalizedCoords(){return E.fromJSON(N(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?p(o):null}};l([a()],n.prototype,"spatialReference",void 0),l([a()],n.prototype,"element",void 0),l([a()],n.prototype,"bounds",null),l([a()],n.prototype,"coords",null),l([a()],n.prototype,"normalizedCoords",null),l([a()],n.prototype,"normalizedBounds",null),n=l([S("esri.layers.support.MediaElementView")],n);const r=M(),s=u(),i=u(),m=u();function A(e,o,t){return f(r,o[0],o[1],1),y(r,r,h(s,t)),r[2]===0?d(e,r[0],r[1]):d(e,r[0]/r[2],r[1]/r[2])}function D(e,o,t){return $(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),$(m,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),g(e,x(i,i),m),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function $(e,o,t,z,b,C,R,v,j){c(e,o,z,C,t,b,R,1,1,1),f(r,v,j,1),x(s,e);const[q,B,J]=y(r,r,h(s,s));return c(s,q,0,0,0,B,0,0,0,J),g(e,s,e)}export{A as h,n as i,D as j};
