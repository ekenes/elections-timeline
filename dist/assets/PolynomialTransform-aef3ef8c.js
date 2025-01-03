import{r as a,q as h,w as g,S as z,aW as Y,z as S,A as $,Y as R,B as j}from"./index-02eff6e6.js";let x=class extends z{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};a([h()],x.prototype,"affectsPixelSize",null),a([h({json:{write:!0}})],x.prototype,"spatialReference",void 0),x=a([g("esri.layers.support.rasterTransforms.BaseRasterTransform")],x);const P=x;var C;let d=C=class extends P{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return(e=e.clone()).type==="point"?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return(e=e.clone()).type==="point"?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}clone(){return new C({tolerance:this.tolerance})}};a([Y({GCSShiftXform:"gcs-shift"})],d.prototype,"type",void 0),a([h()],d.prototype,"tolerance",void 0),d=C=a([g("esri.layers.support.rasterTransforms.GCSShiftTransform")],d);const M=d;var v;function w(e,s,i){const{x:t,y:r}=s;if(i<2)return{x:e[0]+t*e[2]+r*e[4],y:e[1]+t*e[3]+r*e[5]};if(i===2){const p=t*t,T=r*r,O=t*r;return{x:e[0]+t*e[2]+r*e[4]+p*e[6]+O*e[8]+T*e[10],y:e[1]+t*e[3]+r*e[5]+p*e[7]+O*e[9]+T*e[11]}}const n=t*t,l=r*r,u=t*r,o=n*t,y=n*r,m=t*l,f=r*l;return{x:e[0]+t*e[2]+r*e[4]+n*e[6]+u*e[8]+l*e[10]+o*e[12]+y*e[14]+m*e[16]+f*e[18],y:e[1]+t*e[3]+r*e[5]+n*e[7]+u*e[9]+l*e[11]+o*e[13]+y*e[15]+m*e[17]+f*e[19]}}function X(e,s,i){const{xmin:t,ymin:r,xmax:n,ymax:l,spatialReference:u}=s;let o=[];if(i<2)o.push({x:t,y:l}),o.push({x:n,y:l}),o.push({x:t,y:r}),o.push({x:n,y:r});else{let f=10;for(let p=0;p<f;p++)o.push({x:t,y:r+(l-r)*p/(f-1)}),o.push({x:n,y:r+(l-r)*p/(f-1)});f=8;for(let p=1;p<=f;p++)o.push({x:t+(n-t)*p/f,y:r}),o.push({x:t+(n-t)*p/f,y:l})}o=o.map(f=>w(e,f,i));const y=o.map(f=>f.x),m=o.map(f=>f.y);return new j({xmin:Math.min.apply(null,y),xmax:Math.max.apply(null,y),ymin:Math.min.apply(null,m),ymax:Math.max.apply(null,m),spatialReference:u})}function F(e){const[s,i,t,r,n,l]=e,u=t*l-n*r,o=n*r-t*l;return[(n*i-s*l)/u,(t*i-s*r)/o,l/u,r/o,-n/u,-t/o]}let c=v=class extends P{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,s){const{coeffX:i,coeffY:t}=s;if(!(i!=null&&i.length)||!(t!=null&&t.length)||i.length!==t.length)return null;const r=[];for(let n=0;n<i.length;n++)r.push(i[n]),r.push(t[n]);return r}writeForwardCoefficients(e,s,i){const t=[],r=[];for(let n=0;n<(e==null?void 0:e.length);n++)n%2==0?t.push(e[n]):r.push(e[n]);s.coeffX=t,s.coeffY=r}get inverseCoefficients(){let e=this._get("inverseCoefficients");const s=this._get("forwardCoefficients");return!e&&s&&this.polynomialOrder<2&&(e=F(s)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,s){const{inverseCoeffX:i,inverseCoeffY:t}=s;if(!(i!=null&&i.length)||!(t!=null&&t.length)||i.length!==t.length)return null;const r=[];for(let n=0;n<i.length;n++)r.push(i[n]),r.push(t[n]);return r}writeInverseCoefficients(e,s,i){const t=[],r=[];for(let n=0;n<(e==null?void 0:e.length);n++)n%2==0?t.push(e[n]):r.push(e[n]);s.inverseCoeffX=t,s.inverseCoeffY=r}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if(e.type==="point"){const s=w(this.forwardCoefficients,e,this.polynomialOrder);return new R({x:s.x,y:s.y,spatialReference:e.spatialReference})}return X(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if(e.type==="point"){const s=w(this.inverseCoefficients,e,this.polynomialOrder);return new R({x:s.x,y:s.y,spatialReference:e.spatialReference})}return X(this.inverseCoefficients,e,this.polynomialOrder)}clone(){return new v({polynomialOrder:this.polynomialOrder,forwardCoefficients:this.forwardCoefficients?[...this.forwardCoefficients]:null,inverseCoefficients:this.inverseCoefficients?[...this.inverseCoefficients]:null})}};a([h({json:{write:!0}})],c.prototype,"polynomialOrder",void 0),a([h()],c.prototype,"forwardCoefficients",void 0),a([S("forwardCoefficients",["coeffX","coeffY"])],c.prototype,"readForwardCoefficients",null),a([$("forwardCoefficients")],c.prototype,"writeForwardCoefficients",null),a([h({json:{write:!0}})],c.prototype,"inverseCoefficients",null),a([S("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],c.prototype,"readInverseCoefficients",null),a([$("inverseCoefficients")],c.prototype,"writeInverseCoefficients",null),a([h()],c.prototype,"affectsPixelSize",null),a([Y({PolynomialXform:"polynomial"})],c.prototype,"type",void 0),c=v=a([g("esri.layers.support.rasterTransforms.PolynomialTransform")],c);const _=c;export{P as a,M as c,_ as y};
