import{hM as lt,Y as Z,hN as tt,a5 as ct,a6 as pt,a3 as _t,a4 as ft,a2 as dt,aw as st,hO as mt,hP as yt,hQ as gt,hR as xt,m as Pt,s as It,hw as et,e8 as Nt}from"./index-a1a1303e.js";import{t as k}from"./OptimizedGeometry-33b2eb0d.js";import{$ as J,L as I,r as zt}from"./color-9de7f8d3.js";import{t as St}from"./definitions-b00ef347.js";let it=class{static fromOptimized(t,e,i=!1,n=!1){return new A().initialize(t,e,i,n,1)}static fromJSON(t,e=!1,i=!1){const[n,r]=X(t);return new C().initialize(n,r,e,i,1)}static fromOptimizedCIM(t,e,i=!1,n=!1){return new Y().initialize(t,e,i,n,1)}static fromJSONCIM(t,e=!1,i=!1){const[n,r]=X(t);return new E().initialize(n,r,e,i,1)}static fromFeatureSetReader(t){const e=t.readGeometryForDisplay(),i=t.geometryType;return e&&i?this.fromOptimized(e,i):null}static fromFeatureSetReaderCIM(t){const e=t.readGeometryForDisplay(),i=t.geometryType;return e&&i?this.fromOptimizedCIM(e,i):null}static createEmptyOptimized(t,e=!1,i=!1){return new A().initialize(new k,t,e,i,1)}static createEmptyJSON(t,e=!1,i=!1){return new C().initialize([],t,e,i,1)}static createEmptyOptimizedCIM(t,e=!1,i=!1){return new Y().initialize(new k,t,e,i,1)}static createEmptyJSONCIM(t,e=!1,i=!1){return new E().initialize([],t,e,i,1)}asJSON(){const t=lt(this);return this.geometryType==="esriGeometryEnvelope"?{xmin:t[0][0][0],ymin:t[0][0][1],xmax:t[0][2][0],ymax:t[0][2][1]}:this.geometryType==="esriGeometryMultipoint"?{points:t.flat()}:this.geometryType==="esriGeometryPoint"?{x:t[0][0][0],y:t[0][0][1]}:this.geometryType==="esriGeometryPolygon"?{rings:t}:{paths:t}}getCurrentRingArea(){if(!this||this.pathSize<3)return 0;let t,e,i=0;if(this.seekPathStart(),!this.nextPoint())return 0;t=this.x,e=this.y;const n=t,r=e;for(;this.nextPoint();)i+=(t-this.x)*(e+this.y),t=this.x,e=this.y;return i+=(t-n)*(e+r),-.5*i}invertY(){this.yFactor*=-1}},A=class nt extends it{constructor(){super(...arguments),this._end=-1}initialize(t,e,i,n,r){return this.hasZ=i,this.hasM=n,this.geometryType=e,this._stride=2+Number(i)+Number(n),this._geometry=t,this._pathIndex=-1,this._pathOffset=0,this._pointOffset=-this._stride,this._end=-1,this.yFactor=r,this}reset(){this.initialize(this._geometry,this.geometryType,this.hasZ,this.hasM,this.yFactor)}seekPath(t){if(t>=0&&t<this.totalSize){if(this._pathIndex<t)for(;this._pathIndex<t&&this.nextPath(););else if(this._pathIndex>t)for(;this._pathIndex>t&&this.prevPath(););return!0}return!1}seekPathStart(){this._pointOffset=this._pathOffset-this._stride}seekPathEnd(){this._pointOffset=this._end}seekInPath(t){const e=this._pathOffset+t*this._stride;return e>=0&&e<this._end&&(this._pointOffset=e,!0)}nextPoint(){return(this._pointOffset+=this._stride)<this._end}prevPoint(){return(this._pointOffset-=this._stride)>=this._pathOffset}nextPath(){if(this._pathIndex>=0){const e=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex];this._pathOffset+=this._stride*e}this._pointOffset=this._pathOffset-this._stride;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex+1];return this._end=this._pointOffset+this._stride+this._stride*t,++this._pathIndex<this.totalSize}prevPath(){this._end=this._pathOffset;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex-1];return this._pathOffset-=this._stride*t,this._pointOffset=this._pathOffset-this._stride,--this._pathIndex>=0}pathLength(){const t=this._end,e=this._stride,i=this._geometry.coords;let n=0;for(let r=this._pathOffset+e;r<t;r+=e){const h=i[r-e],o=i[r-e+1],a=i[r]-h,l=i[r+1]-o;n+=Math.sqrt(a*a+l*l)}return n}startPath(){this._geometry.lengths.push(0)}pushPath(t){this.startPath(),this.pushPoints(t)}pushPoint(t){for(let e=0;e<this._stride;++e)this._geometry.coords.push(t[e]);this._geometry.lengths[this.totalSize-1]++}pushXY(t,e){this._geometry.coords.push(t,e),this._geometry.lengths[this.totalSize-1]++}pushPoints(t){for(const e of t)for(let i=0;i<this._stride;++i)this._geometry.coords.push(e[i]);this._geometry.lengths[this.totalSize-1]+=t.length}asOptimized(){const t=this._geometry.clone();if(this.yFactor!==1)for(let e=1;e<t.coords.length;e+=this._stride)t.coords[e]*=this.yFactor;return this.geometryType==="esriGeometryPoint"&&(t.lengths.length=0),t}isClosed(){const t=this._geometry.coords,e=this._pathOffset,i=this._end-this._stride;for(let n=0;n<this._stride;n++)if(t[e+n]!==t[i+n])return!1;return!0}clone(){return new nt().initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._geometry.coords.length/this._stride}get pathSize(){const{lengths:t}=this._geometry;return this._pathIndex<0||this._pathIndex>t.length-1?0:t[this._pathIndex]}get totalSize(){return this._geometry.lengths.length}get x(){return this._geometry.coords[this._pointOffset]}set x(t){this._geometry.coords[this._pointOffset]=t}get y(){return this.yFactor*this._geometry.coords[this._pointOffset+1]}set y(t){this._geometry.coords[this._pointOffset+1]=this.yFactor*t}get z(){return this._geometry.coords[this._pointOffset+2]}set z(t){this._geometry.coords[this._pointOffset+2]=t}get m(){const t=this.hasZ?3:2;return this._geometry.coords[this._pointOffset+t]}set m(t){this._geometry.coords[this._pointOffset+3]=t}get segmentBounds(){if(this._coordIndex>=this._end-this._stride)return null;const t=this._geometry.coords[this._pointOffset],e=this.yFactor*this._geometry.coords[this._pointOffset+1],i=this._geometry.coords[this._pointOffset+this._stride],n=this.yFactor*this._geometry.coords[this._pointOffset+this._stride+1],r=[Math.min(t,i),Math.min(e,n),Math.max(t,i),Math.max(e,n)];return Z(r)}segmentIntersects(t,e,i){if(this._coordIndex>=this._end-this._stride)return!1;const n=this._geometry.coords[this._pointOffset],r=this.yFactor*this._geometry.coords[this._pointOffset+1],h=this._geometry.coords[this._pointOffset+this._stride],o=this.yFactor*this._geometry.coords[this._pointOffset+this._stride+1];return tt(t,e,[n,r],[h,o],i)}get pathIndex(){return this._pathIndex}get _coordIndex(){return this._pointOffset/this._stride}};function vt(s){const t=[s.x,s.y];return s.z&&t.push(s.z),s.m&&t.push(s.m),t}function X(s){return ct(s)?[s.rings,"esriGeometryPolygon"]:pt(s)?[s.paths,"esriGeometryPolyline"]:_t(s)?[[s.points],"esriGeometryMultipoint"]:ft(s)?[[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]],"esriGeometryEnvelope"]:dt(s)?[[[vt(s)]],"esriGeometryPoint"]:[[],"esriGeometryPolyline"]}let C=class rt extends it{initialize(t,e,i,n,r){return this._paths=t,this.geometryType=e,this.hasZ=i,this.hasM=n,this._pathIndex=this._pointIndex=-1,this.yFactor=r,this._mIndex=this.hasZ?3:2,this}reset(){this._pathIndex=this._pointIndex=-1}seekPath(t){return t>=0&&t<this.totalSize&&(this._pathIndex=t,this._pointIndex=-1,this._currentPath=this._paths[t],!0)}seekPathStart(){this._pointIndex=-1}seekPathEnd(){this._pointIndex=this._currentPath.length}seekInPath(t){return t>=0&&t<this._currentPath.length&&(this._pointIndex=t,this._currentPoint=this._currentPath[this._pointIndex],!0)}nextPoint(){return this._currentPoint=this._currentPath[++this._pointIndex],this._pointIndex<this._currentPath.length}prevPoint(){return this._currentPoint=this._currentPath[--this._pointIndex],this._pointIndex>=0}nextPath(){return this._pointIndex=-1,this._currentPath=this._paths[++this._pathIndex],this._pathIndex<this.totalSize}prevPath(){return this._pointIndex=-1,this._currentPath=this._paths[--this._pathIndex],this._pathIndex>=0}pathLength(){const t=this._currentPath.length,e=this._currentPath;let i=0;for(let n=1;n<t;n++){const r=e[n-1],h=e[n],o=r[0],a=r[1],l=h[0]-o,c=h[1]-a;i+=Math.sqrt(l*l+c*c)}return i}startPath(){this._paths.push([])}pushPath(t){this._paths.push(t)}pushPoint(t){this._paths[this.totalSize-1].push(t)}pushXY(t,e){this._paths[this.totalSize-1].push([t,e])}pushPoints(t){this._paths[this.totalSize-1].push(...t)}asOptimized(){const t=new k;if(this.geometryType==="esriGeometryPoint")t.coords.push(...this._paths[0][0]),t.lengths.length=0;else for(const e of this._paths){for(const i of e)t.coords.push(i[0]),t.coords.push(i[1]*this.yFactor),this.hasZ&&t.coords.push(i[2]),this.hasM&&t.coords.push(i[this._mIndex]);t.lengths.push(e.length)}return t}isClosed(){const t=this._currentPath[0],e=this._currentPath[this._currentPath.length-1];for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}clone(){return new rt().initialize(st(this._paths),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._paths.map(t=>t.length).reduce((t,e)=>t+e)}get pathSize(){return this._pathIndex<0||this._pathIndex>this.totalSize-1?-1:this._paths[this._pathIndex].length}get totalSize(){return this._paths.length}get x(){return this._currentPoint[0]}set x(t){this._currentPoint[0]=t}get y(){return this.yFactor*this._currentPoint[1]}set y(t){this._currentPoint[1]=this.yFactor*t}get z(){return this._currentPoint[2]}set z(t){this._currentPoint[2]=t}get m(){return this._currentPoint[this._mIndex]}set m(t){this._currentPoint[this._mIndex]=t}get segmentBounds(){if(this._pointIndex>=this.pathSize-1)return null;const t=this._currentPath[this._pointIndex][0],e=this.yFactor*this._currentPath[this._pointIndex][1],i=this._currentPath[this._pointIndex+1][0],n=this.yFactor*this._currentPath[this._pointIndex+1][1],r=[Math.min(t,i),Math.min(e,n),Math.max(t,i),Math.max(e,n)];return Z(r)}segmentIntersects(t,e,i){if(this._pointIndex>=this.pathSize-1)return!1;const n=this._currentPath[this._pointIndex][0],r=this.yFactor*this._currentPath[this._pointIndex][1],h=this._currentPath[this._pointIndex+1][0],o=this.yFactor*this._currentPath[this._pointIndex+1][1];return tt(t,e,[n,r],[h,o],i)}get pathIndex(){return this._pathIndex}};const O=4,$=1;let Y=class ot extends A{initialize(t,e,i,n,r){return super.initialize(t,e,i,n,r),this._controlPoints||(this._controlPoints=this._controlPoints=new Array(this.totalSize).fill(void 0).map(h=>new Set)),this}startPath(){super.startPath(),this._controlPoints.push(new Set)}clone(){const t=new ot().initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor);return t._controlPoints=this._controlPoints,t}setControlPoint(){this._controlPoints[this.pathIndex].add(this._coordIndex)}getControlPoint(){return this._controlPoints[this.pathIndex].has(this._coordIndex)}setControlPointAt(t){this._controlPoints[this.pathIndex].add(t)}getControlPointAt(t){return this._controlPoints[this.pathIndex].has(t)}};class E extends C{initialize(t,e,i,n,r){return super.initialize(t,e,i,n,r)}clone(){return new E().initialize(st(this._paths),this.geometryType,this.hasZ,this.hasM,1)}setControlPoint(){this._paths[this.pathIndex][this._pointIndex][O]=$}getControlPoint(){return this._paths[this.pathIndex][this._pointIndex][O]===$}setControlPointAt(t){this._paths[this.pathIndex][t][O]=$}getControlPointAt(t){return this._paths[this.pathIndex][t][O]===$}}const Ot=100*222045e-21;function Lt(s){if(s.totalSize===0)return null;const t=mt(s);if(!t)return null;const e=4*(Math.abs(t[0])+Math.abs(t[2])+Math.abs(t[1])+Math.abs(t[3])+1)*Ot;let i=0,n=0;s.reset();for(let y=0;s.nextPath();y++){const g=s.getCurrentRingArea();g>n&&(n=g,i=y)}if(s.seekPath(i),s.pathSize===0)return null;s.seekPathStart();const r=yt(s);if(Math.abs(n)<=2*e*e)return[(r[0]+r[2])/2,(r[1]+r[3])/2];s.seekPathStart();const h=gt(s,Z());if(h===null)return null;if(s.totalPoints<4)return h;const o=[[NaN,NaN],[NaN,NaN],[NaN,NaN],[NaN,NaN]],a=[NaN,NaN,NaN,NaN],l=[NaN,NaN,NaN,NaN];let c=!1,u=S(h,s,!0);u.distance===0&&(c=!0,o[0][0]=h[0],o[0][1]=h[1],u=S(h,s,!1)),a[0]=u.distance,l[0]=0;const _=[NaN,NaN];let m=!1,f=.25,d=-1,p=NaN;do if(p=NaN,o[1]=b(s,T(r[0],r[2],f),e,t),isNaN(o[1][0])||isNaN(o[1][1])||(u=S(o[1],s,!1),p=u.distance),!isNaN(p)&&p>e&&F(o[1],s))m=!0,a[1]=p,l[1]=N(o[1],h);else if(!isNaN(p)&&p>d&&(d=p,_[0]=o[1][0],_[1]=o[1][1]),f-=.01,f<.1){if(!(d>=0))break;m=!0,a[1]=d,o[1][0]=_[0],o[1][1]=_[1],l[1]=N(o[1],h)}while(!m);m=!1,f=.5,d=-1;let V=.01,D=1;do if(p=NaN,o[2]=b(s,T(r[0],r[2],f),e,t),isNaN(o[2][0])||isNaN(o[2][1])||(u=S(o[2],s,!1),p=u.distance),!isNaN(p)&&p>e&&F(o[2],s))m=!0,a[2]=p,l[2]=N(o[2],h);else if(!isNaN(p)&&p>d)d=p,_[0]=o[2][0],_[1]=o[2][1];else if(p>d&&(d=p,_[0]=o[2][0],_[1]=o[2][1]),f=.5+V*D,V+=.01,D*=-1,f<.3||f>.7){if(!(d>=0))break;m=!0,a[2]=d,o[2][0]=_[0],o[2][1]=_[1],l[2]=N(o[2],h)}while(!m);m=!1,f=.75,d=-1;do if(p=NaN,o[3]=b(s,T(r[0],r[2],f),e,t),isNaN(o[3][0])||isNaN(o[3][1])||(u=S(o[3],s,!1),p=u.distance),!isNaN(p)&&p>e&&F(o[3],s))m=!0,a[3]=p,l[3]=N(o[3],h);else if(p>d&&(d=p,_[0]=o[3][0],_[1]=o[3][1]),f+=.01,f>.9){if(!(d>=0))break;m=!0,a[3]=d,o[3][0]=_[0],o[3][1]=_[1],l[3]=N(o[3],h)}while(!m);const P=[0,1,2,3],v=c?0:1;let L;for(let y=v;y<4;y++)for(let g=v;g<3;g++){const q=l[g],B=l[g+1];Mt(q,B)>0&&(L=P[g],P[g]=P[g+1],P[g+1]=L,l[g]=B,l[g+1]=q)}let R=v,U=0,z=0;for(let y=v;y<4;y++){switch(y){case 0:z=2*a[P[y]];break;case 1:z=1.66666666*a[P[y]];break;case 2:z=1.33333333*a[P[y]];break;case 3:z=a[P[y]]}z>U&&(U=z,R=P[y])}return o[R]}function F(s,t){let e,i,n,r,h=0;for(t.reset();t.nextPath()&&t.nextPoint();)for(e=t.x,i=t.y;t.nextPoint();e=n,i=r)n=t.x,r=t.y,i>s[1]!=r>s[1]&&((n-e)*(s[1]-i)-(r-i)*(s[0]-e)>0?h++:h--);return h!==0}function S(s,t,e){if(e&&F(s,t))return{coord:s,distance:0};let i=1/0,n=0,r=0,h=[0,0],o=[0,0];const a=[0,0];for(t.reset();t.nextPath()&&t.nextPoint();)if(!(t.pathSize<2))for(h[0]=t.x,h[1]=t.y;t.nextPoint();h=o){o=[t.x,t.y],xt(a,s,h,o);const l=N(s,a);l<i&&(i=l,n=a[0],r=a[1])}return{coord:[n,r],distance:Math.sqrt(i)}}function b(s,t,e,i){const n=[t,0];let r=1/0,h=1/0,o=!1,a=!1;const l=[[t,i[1]-1],[t,i[3]+1]],c=[0,0],u=[0,0],_=[0,0];for(s.reset();s.nextPath();)if(!(s.pathSize<2))for(;s.nextPoint();){const m=s.segmentBounds;if(m===null||(u[0]=l[0][0],u[1]=l[0][1],_[0]=l[1][0],_[1]=l[1][1],$t(m,u,_)===0)||!s.segmentIntersects(l[0],l[1],c))continue;const f=c[1];r>h?f<r&&(r=f,o=!0):f<h&&(h=f,a=!0)}return o&&a?n[1]=(r+h)/2:n[0]=n[1]=NaN,n}const M=1,w=4,Q=3,j=12;function $t(s,t,e){let i=x(t,s),n=x(e,s);const r=s[0],h=s[1],o=s[2],a=s[3];if(i&n)return 0;if(!(i|n))return 4;const l=(i?1:0)|(n?2:0);do{const c=e[0]-t[0],u=e[1]-t[1];if(c>u)i&Q?(i&M?(t[1]+=u*(r-t[0])/c,t[0]=r):(t[1]+=u*(o-t[0])/c,t[0]=o),i=x(t,s)):n&Q?(n&M?(e[1]+=u*(r-e[0])/c,e[0]=r):(e[1]+=u*(o-e[0])/c,e[0]=o),n=x(e,s)):i?(i&w?(t[0]+=c*(h-t[1])/u,t[1]=h):(t[0]+=c*(a-t[1])/u,t[1]=a),i=x(t,s)):(n&w?(e[0]+=c*(h-e[1])/u,e[1]=h):(e[0]+=c*(a-e[1])/u,e[1]=a),n=x(e,s));else if(i&j?(i&w?(t[0]+=c*(h-t[1])/u,t[1]=h):(t[0]+=c*(a-t[1])/u,t[1]=a),i=x(t,s)):n&j?(n&w?(e[0]+=c*(h-e[1])/u,e[1]=h):(e[0]+=c*(a-e[1])/u,e[1]=a),n=x(e,s)):i?(i&M?(t[1]+=u*(r-t[0])/c,t[0]=r):(t[1]+=u*(o-t[0])/c,t[0]=o),i=x(t,s)):(n&M?(e[1]+=u*(r-e[0])/c,e[0]=r):(e[1]+=u*(o-e[0])/c,e[0]=o),n=x(e,s)),i&n)return 0}while(i|n);return l}function x(s,t){return(s[0]<t[0]?1:0)|(s[0]>t[2]?1:0)<<1|(s[1]<t[1]?1:0)<<2|(s[1]>t[3]?1:0)<<3}function T(s,t,e){return s+(t-s)*e}function N(s,t){return(s[0]-t[0])*(s[0]-t[0])+(s[1]-t[1])*(s[1]-t[1])}function Mt(s,t){if(s<t)return-1;if(s>t)return 1;if(s===t)return 0;const e=isNaN(s),i=isNaN(t);return e<i?-1:e>i?1:0}const wt=8388607,ht=8388608,Ft=254,Et=255,Rt=0,at=1,ut=s=>(s&ht)>>>23,Ut=s=>s&wt,qt=s=>ut(s)===at?Ft:Et;function Bt(s){return ut(s)===at}function Jt(s,t){return((t?ht:0)|s)>>>0}const Xt=(s,t)=>s&&((...e)=>t.warn("DEBUG:",...e))||(()=>null),Yt=!1;function bt(s){return J(s.minDataValue)&&J(s.maxDataValue)&&s.minSize!=null&&s.maxSize!=null?I.SIZE_MINMAX_VALUE:(s.expression&&s.expression==="view.scale"||s.valueExpression&&s.valueExpression==="$view.scale")&&Array.isArray(s.stops)?I.SIZE_SCALE_STOPS:(s.field!=null||s.expression&&s.expression!=="view.scale"||s.valueExpression&&s.valueExpression!=="$view.scale")&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?I.SIZE_FIELD_STOPS:(s.field!=null||s.expression&&s.expression!=="view.scale"||s.valueExpression&&s.valueExpression!=="$view.scale")&&s.valueUnit!=null?I.SIZE_UNIT_VALUE:(Pt.getLogger("esri.views.2d.engine.webgl").error(new It("mapview-bad-type","Found invalid size VisualVariable",s)),I.NONE)}function Qt(s,t){if(!s||!t)return s;switch(t){case"radius":case"distance":return 2*s;case"diameter":case"width":return s;case"area":return Math.sqrt(s)}return s}function Tt(s){return{value:s.value,size:et(s.size)}}function G(s){return(s??[]).map(t=>Tt(t))}function H(s){if(typeof s=="string"||typeof s=="number")return et(s);const t=s;return{type:"size",expression:t.expression,stops:G(t.stops)}}const K=s=>{const t=[],e=[],i=G(s),n=i.length;for(let r=0;r<6;r++){const h=i[Math.min(r,n-1)];t.push(h.value),e.push(h.size==null?St:Nt(h.size))}return{values:new Float32Array(t),sizes:new Float32Array(e)}};function jt(s){const t=s&&s.length>0?{}:null,e=t?{}:null;if(!t||!e)return{vvFields:t,vvRanges:e};for(const i of s)if(i.field&&(t[i.type]=i.field),i.type==="size"){e.size||(e.size={});const n=i;switch(bt(n)){case I.SIZE_MINMAX_VALUE:e.size.minMaxValue={minDataValue:n.minDataValue,maxDataValue:n.maxDataValue,minSize:H(n.minSize),maxSize:H(n.maxSize)};break;case I.SIZE_SCALE_STOPS:e.size.scaleStops={stops:G(n.stops)};break;case I.SIZE_FIELD_STOPS:if(n.levels){const r={};for(const h in n.levels)r[h]=K(n.levels[h]);e.size.fieldStops={type:"level-dependent",levels:r}}else e.size.fieldStops={type:"static",...K(n.stops)};break;case I.SIZE_UNIT_VALUE:e.size.unitValue={unit:n.valueUnit,valueRepresentation:n.valueRepresentation??void 0}}}else if(i.type==="color")e.color=At(i);else if(i.type==="opacity")e.opacity=kt(i);else if(i.type==="rotation"){const n=i;e.rotation={type:n.rotationType}}return{vvFields:t,vvRanges:e}}function kt(s){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(typeof s.field=="string"){if(!s.stops)return null;{if(s.stops.length>8)return null;const e=s.stops;for(let i=0;i<8;++i){const n=e[Math.min(i,e.length-1)];t.values[i]=n.value,t.opacities[i]=n.opacity}}}else{if(!(s.stops&&s.stops.length>=0))return null;{const e=s.stops&&s.stops.length>=0?s.stops[0].opacity:0;for(let i=0;i<8;i++)t.values[i]=1/0,t.opacities[i]=e}}return t}function W(s,t,e){s[4*t]=e.r/255,s[4*t+1]=e.g/255,s[4*t+2]=e.b/255,s[4*t+3]=e.a}function At(s){if(s==null||s.normalizationField)return null;const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if(typeof s.field=="string"){if(!s.stops)return null;{if(s.stops.length>8)return null;t.field=s.field;const e=s.stops;for(let i=0;i<8;++i){const n=e[Math.min(i,e.length-1)];t.values[i]=n.value,W(t.colors,i,n.color)}}}else{if(!(s.stops&&s.stops.length>=0))return null;{const e=s.stops&&s.stops.length>=0&&s.stops[0].color;for(let i=0;i<8;i++)t.values[i]=1/0,W(t.colors,i,e)}}for(let e=0;e<32;e+=4)zt(t.colors,e,!0);return t}export{Lt as N,it as a,Qt as b,at as c,wt as d,ut as e,Ut as f,bt as g,jt as h,qt as i,Yt as l,Xt as n,Bt as p,Jt as s,Rt as u};
