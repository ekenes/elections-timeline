import{e as M}from"./GraphShaderModule-f9d77490.js";import{bg as S,ma as K,bw as F,dt as B,mb as Me,mc as Y,ia as re,md as ne,gN as k,me as ae,mf as X,mg as be,mh as oe,mi as we,aN as H,gT as $,gA as Ie,F as O,mj as Se,a8 as ke,s as Ae,$ as $e}from"./index-02eff6e6.js";import{c as Le,f as E,m as pe,N as _e,P as Q,g as ze,i as De,l as Ee,a as Te,T as Be,s as Re,I as Fe,_ as Oe,b as Ce,h as Ge,u as We,o as Ve,d as je,e as Ne,j as Ze}from"./PieChartMeshWriter-e8a91d04.js";import{o as T,c as qe,b as Ye,g as Xe,f as ce,h as z}from"./UpdateTracking2D-9382ce27.js";import{h as He,r as le}from"./featureConversionUtils-aa6583e8.js";import{r as he}from"./LabelMetric-d84c9df1.js";import{e as C}from"./rasterizingUtils-286ec3de.js";import{o as ye,e as Qe}from"./grouping-611c3bda.js";import{t as Ue}from"./utils-fc5bca97.js";import{b as Je}from"./AttributeStore-2c7fbf9b.js";let Ke=class extends Le{};function et(a){const{sprite:e,isMapAligned:t,colorLocked:i,scaleSymbolsProportionally:s,isStroke:n}=a;let r=0;return t&&(r|=E(T.bitset.isMapAligned)),i&&(r|=E(T.bitset.colorLocked)),e.sdf&&(r|=E(T.bitset.isSDF)),s&&(r|=E(T.bitset.scaleSymbolsProportionally)),n&&(r|=E(T.bitset.isStroke)),r}let tt=class extends Ke{get vertexSpec(){return{createComputedParams:e=>{let{pixelDimensions:t,texelDimensions:i,baseSize:s,referenceSize:n,strokeWidth:r,sizeRatio:o}=e;t||(t=e.sprite.sdf?[0,0]:[e.sprite.width,e.sprite.height]),i||(i=e.sprite.sdf?[0,0]:t),s=B(s),n=B(n),r=B(r);const c=(e.sprite.sdfDecodeCoeff??1)*o;return{...e,pixelDimensions:t,texelDimensions:i,baseSize:s,referenceSize:n,strokeWidth:r,sdfDecodeCoeff:c}},optionalAttributes:{zoomRange:{type:S.SHORT,count:2,packPrecisionFactor:K,pack:({scaleInfo:e},{tileInfo:t})=>pe(e,t)}},attributes:{id:{type:S.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:S.UNSIGNED_BYTE,count:1,pack:et},pos:{type:S.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:S.FLOAT,count:2,packAlternating:{count:4,pack:e=>{const t=e.texelDimensions;return[[-.5*t[0],-.5*t[1]],[.5*t[0],-.5*t[1]],[-.5*t[0],.5*t[1]],[.5*t[0],.5*t[1]]]}}},uv:{type:S.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:e,texXmin:t,texYmax:i,texYmin:s})=>[[t,s],[e,s],[t,i],[e,i]]}},animationPointerAndBaseSizeAndReferenceSize:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:e,baseSize:t,referenceSize:i})=>[e.dataColumn,e.dataRow,t,i]},sizing:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:e,pixelDimensions:t,baseSize:i,sprite:s,sizeRatio:n})=>{const r=Math.max(i*s.width/s.height,i),o=s.sdfDecodeCoeff*r*n;return[t[0],t[1],e,o]}},angle:{type:S.BYTE,count:1,packTessellation:({angle:e})=>e}}}}_write(e,t){const i=this.evaluatedMeshParams.sprite,{textureBinding:s}=i;e.recordStart(this.instanceId,this.attributeLayout,s);const n=t.getDisplayId();if(t.geometryType==="esriGeometryPolygon"){const r=t.readCentroidForDisplay();if(!r)return;const[o,c]=r.coords;this._writeQuad(e,n,o,c)}else if(t.geometryType==="esriGeometryPoint"){const r=t.readXForDisplay(),o=t.readYForDisplay();this._writeQuad(e,n,r,o)}else{const r=t.readGeometryForDisplay();if(r){const{angleToLine:o}=this.evaluatedMeshParams;if(o){let c=!0,u=null,d=null;r.forEachVertex((h,l)=>{if(u!=null&&d!=null){const m=Math.atan2(l-d,h-u)/qe;c&&(this._writeQuad(e,n,u,d,m),c=!1),this._writeQuad(e,n,h,l,m)}u=h,d=l})}else r.forEachVertex((c,u)=>{this._writeQuad(e,n,c,u)})}}e.recordEnd()}_writeQuad(e,t,i,s,n=0){const r=this.evaluatedMeshParams.sprite,{rect:o}=r,c=o.x+F,u=o.y+F,d=o.x+o.width-F,h=o.y+o.height-F,l=e.vertexCount();e.recordBounds(i,s,64,64);const m={texXmin:c,texYmin:u,texXmax:d,texYmax:h,angle:n};for(let _=0;_<4;_++)this._writeVertex(e,t,i,s,m);e.indexEnsureSize(6),e.indexWrite(l),e.indexWrite(l+1),e.indexWrite(l+2),e.indexWrite(l+1),e.indexWrite(l+3),e.indexWrite(l+2)}};function ue(a,e,t){return a[0]=e[0]-t[0],a[1]=e[1]-t[1],a}function ge(a,e){return Math.sqrt(a*a+e*e)}function de(a){const e=ge(a[0],a[1]);a[0]/=e,a[1]/=e}function st(a,e){return ge(a[0]-e[0],a[1]-e[1])}function it(a,e){return a[e+1]}function xe(a){return a.length-1}function rt(a){let e=0;for(let t=0;t<xe(a);t++)e+=nt(a,t);return e}function nt(a,e,t=1){let[i,s]=it(a,e);return[i,s]=[Math.round(i),Math.round(s)],Math.sqrt(i*i+s*s)*t}class j{constructor(e,t,i,s,n){this._segments=e,this._index=t,this._distance=i,this._xStart=s,this._yStart=n,this._done=!1}static create(e){return new j(e,0,0,e[0][0],e[0][1])}clone(){return new j(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(this._distance===0||e._distance===1)||e._index===this._index+1&&(this._distance===1||e._distance===0)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length);let i=Math.acos(t);return e>0&&(i=2*Math.PI-i),i}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this;return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<xe(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const i=this.backwardLength;if(e<=i)return this._distance=(i-e)/this.length,this;let s=this.backwardLength;for(;this.prev();){if(s+this.length>e)return this._seekBackwards(e-s);s+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let i=this.remainingLength;for(;this.next();){if(i+this.length>e)return this.seek(e-i,t);i+=this.length}return this._distance=1,t?this:null}}function U(a,e,t,i=!0){const s=rt(a),n=j.create(a),r=s/2;if(!i)return n.seek(r),void(Math.abs(n.x)<C&&Math.abs(n.y)<C&&t(n.clone(),0,r+0*e,s));const o=Math.max((s-e)/2,0),c=Math.floor(o/e),u=r-c*e;n.seek(u);for(let d=-c;d<=c;d++)Math.abs(n.x)<C&&Math.abs(n.y)<C&&t(n.clone(),d,r+d*e,s),n.seek(e)}function J(a,e){const t=e;for(let i=0;i<a.length;i++){let s=a[i];at(s,t);const n=[];n.push(s[0]);for(let r=1;r<s.length;r++){const[o,c]=s[r-1],[u,d]=s[r],h=u-o,l=d-c;n.push([h,l])}a[i]=n,s=n}return a}function at(a,e){if(e<=0)return;const i=a.length;if(i<3)return;const s=[];let n=0;s.push(0);for(let h=1;h<i;h++)n+=st(a[h],a[h-1]),s.push(n);e=Math.min(e,.2*n);const r=[];r.push(a[0][0]),r.push(a[0][1]);const o=a[i-1][0],c=a[i-1][1],u=ue([0,0],a[0],a[1]);de(u),a[0][0]+=e*u[0],a[0][1]+=e*u[1],ue(u,a[i-1],a[i-2]),de(u),a[i-1][0]+=e*u[0],a[i-1][1]+=e*u[1];for(let h=1;h<i;h++)s[h]+=e;s[i-1]+=e;const d=.5*e;for(let h=1;h<i-1;h++){let l=0,m=0,_=0;for(let f=h-1;f>=0&&!(s[f+1]<s[h]-d);f--){const p=d+s[f+1]-s[h],y=s[f+1]-s[f],g=s[h]-s[f]<d?1:p/y;if(Math.abs(g)<1e-6)break;const x=g*g,b=g*p-.5*x*y,v=g*y/e,P=a[f+1],w=a[f][0]-P[0],D=a[f][1]-P[1];l+=v/b*(P[0]*g*p+.5*x*(p*w-y*P[0])-x*g*y*w/3),m+=v/b*(P[1]*g*p+.5*x*(p*D-y*P[1])-x*g*y*D/3),_+=v}for(let f=h+1;f<i&&!(s[f-1]>s[h]+d);f++){const p=d-s[f-1]+s[h],y=s[f]-s[f-1],g=s[f]-s[h]<d?1:p/y;if(Math.abs(g)<1e-6)break;const x=g*g,b=g*p-.5*x*y,v=g*y/e,P=a[f-1],w=a[f][0]-P[0],D=a[f][1]-P[1];l+=v/b*(P[0]*g*p+.5*x*(p*w-y*P[0])-x*g*y*w/3),m+=v/b*(P[1]*g*p+.5*x*(p*D-y*P[1])-x*g*y*D/3),_+=v}r.push(l/_),r.push(m/_)}r.push(o),r.push(c);for(let h=0,l=0;h<i;h++)a[h][0]=r[l++],a[h][1]=r[l++]}const G=1,L=0,ot=128,ct=we(a=>{let e=0;if(a===0)return 1/0;for(;!(a%2);)e++,a/=2;return e});let lt=class extends _e{constructor(){super(...arguments),this._zoomLevel=0}_write(e,t,i,s){if(this._zoomLevel=s||0,i!=null)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(t.geometryType){case"esriGeometryPoint":{const n=t.readXForDisplay(),r=t.readYForDisplay();this._writePoint(e,n,r,t);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const n=t.readCentroidForDisplay();if(!n)return;const[r,o]=n.coords;this._writePoint(e,r,o,t);break}case"esriGeometryPolyline":this._writeLines(e,t)}}_createLineLabelMetric(e,t,i,s){var d,h;const n=ce(e),r=this.evaluatedMeshParams.horizontalAlignment==="right"?-1:1,o=this.evaluatedMeshParams.verticalAlignment==="bottom"?-1:1,c=((d=this.evaluatedMeshParams.scaleInfo)==null?void 0:d.maxScale)??0,u=((h=this.evaluatedMeshParams.scaleInfo)==null?void 0:h.minScale)??0;return new he(n,t,i,r,o,c,u,s??null)}_writePoint(e,t,i,s){var m,_;const n=this._getShaping();if(!n)return;const r=s.getDisplayId(),o=Ye(this.evaluatedMeshParams.horizontalAlignment),c=Xe(this.evaluatedMeshParams.verticalAlignment),u=((m=this.evaluatedMeshParams.scaleInfo)==null?void 0:m.maxScale)??0,d=((_=this.evaluatedMeshParams.scaleInfo)==null?void 0:_.minScale)??0,h=ce(s.getDisplayId()),l=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new he(h,t,i,o,c,u,d,l)),this._writeGlyphs(e,r,t,i,n,0,l),e.metricBoxWrite(n.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const t=e.getBoundsInfo();if(t)return t}return null}_writeLines(e,t){const{scaleInfo:i,verticalAlignment:s}=this.evaluatedMeshParams,n=this.evaluatedMeshParams.repeatLabelDistance||128,r=this._getShaping("middle");if(!r)return;const o=(u,d,h,l)=>this._placeSubdivGlyphs(u,d,h,l),c=(r.bounds.width+n)/(1<<G);this._current={out:e,id:t.getDisplayId(),shaping:r,zoomRange:pe(i,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement=s==="bottom"?"above":s==="top"?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(t,o,c):this._writeCenterAlong(t,o,c)}_writeAboveAndBelowAlong(e,t,i){const{repeatLabel:s}=this.evaluatedMeshParams,{shaping:n}=this._current,r=n.bounds.halfHeight,o=e.readGeometryForDisplay();if(!o)return;const c=new H;He(c,o,!1,!1,"esriGeometryPolyline",1);const u=fe(new H,c,r),d=fe(new H,c,-r),h=le(d,"esriGeometryPolyline",!1,!1),l=le(u,"esriGeometryPolyline",!1,!1),m=J(l.paths,n.bounds.width),_=J(h.paths,n.bounds.width);this._current.offsetDirection="above";for(const f of m)U(f,i,t,!!s);this._current.offsetDirection="below";for(const f of _)U(f,i,t,!!s)}_writeCenterAlong(e,t,i){const{repeatLabel:s}=this.evaluatedMeshParams,{shaping:n}=this._current,r=J(e.readLegacyGeometryForDisplay().paths,n.bounds.width);for(const o of r)U(o,i,t,!!s)}_placeSubdivGlyphs(e,t,i,s){const{allowOverrun:n,labelPosition:r,repeatLabelDistance:o}=this.evaluatedMeshParams,c=this._current.zoomRange[0],u=ct(t),d=this._current.shaping.bounds.width/(1<<G),h=Math.sqrt(o||ot)/(1<<G),l=Math.min(i,s-i),m=this._current.shaping.isMultiline?Q:Math.log2(l/(h+d/2)),_=t===0?m:Math.min(u,m),f=Math.max(c,this._zoomLevel+G-_),p=this._zoomLevel-f,y=this._current.shaping.bounds.width/2*2**p;this._current.shaping.isMultiline?t===0&&this._placeStraight(e,f):n&&p<0?this._placeStraightAlong(e,c):r==="parallel"?this._placeStraightAlong(e,f):r==="curved"&&this._placeCurved(e,f,y)}_placeStraight(e,t){const{out:i,id:s,shaping:n,referenceBounds:r}=this._current,{x:o,y:c}=e;i.metricStart(this._createLineLabelMetric(s,o,c)),i.metricBoxWrite(n.boundsT);const u=e.angle*(180/Math.PI)%360,d=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(i,s,o,c,n,0,r,{clipAngle:u,mapAligned:!0,isLineLabel:!0,minZoom:t}),this._writeGlyphs(i,s,o,c,n,0,r,{clipAngle:d,mapAligned:!0,isLineLabel:!0,minZoom:t}),i.metricEnd()}_placeCurved(e,t,i){const{out:s,id:n}=this._current;s.metricStart(this._createLineLabelMetric(n,e.x,e.y));const r=e.clone(),o=e.angle*(180/Math.PI)%360,c=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(r,t,1,o),this._placeBack(e,r,t,i,1,o),this._placeForward(e,r,t,i,1,o)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(r,t,0,c),this._placeBack(e,r,t,i,0,c),this._placeForward(e,r,t,i,0,c)),s.metricEnd()}_placeStraightAlong(e,t){const{out:i,id:s,shaping:n,zoomRange:r,referenceBounds:o}=this._current,{boxBorderLineColor:c,boxBackgroundColor:u}=this.evaluatedMeshParams,d=e.clone(),h=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360,m=n.glyphs.length>0&&!(!c&&!u);if(i.metricStart(this._createLineLabelMetric(s,e.x,e.y)),m){const _=Math.max(t,r[0],0),f=Math.min(Q,r[1]),p=Me(Y(),-e.angle),y={minZoom:_,maxZoom:f,clipAngle:h,mapAligned:!0,isLineLabel:!0},g=B(this.evaluatedMeshParams.offsetX),x=B(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const b=re(g,-1*x),[v,P]=n.shapeBackground(ne(Y(),p,b));i.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const w=2*Math.max(v.width,v.height);i.recordBounds(e.x+v.x,e.y+v.y,w,w),this._writeTextBox(i,s,e.x,e.y,P,o,y),i.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const b=re(g,x),[v,P]=n.shapeBackground(ne(Y(),p,b));y.clipAngle=l,i.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const w=2*Math.max(v.width,v.height);i.recordBounds(e.x+v.x,e.y+v.y,w,w),this._writeTextBox(i,s,e.x,e.y,P,o,y),i.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(d,t,1,h,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(d,t,0,l,!0),i.metricEnd()}_placeBack(e,t,i,s,n,r){const o=e.clone();let c=e.backwardLength+L;for(;o.prev()&&!(c>=s);)this._placeOnSegment(o,t,c,i,-1,n,r),c+=o.length+L}_placeForward(e,t,i,s,n,r){const o=e.clone();let c=e.remainingLength+L;for(;o.next()&&!(c>=s);)this._placeOnSegment(o,t,c,i,1,n,r),c+=o.length+L}_placeFirst(e,t,i,s,n=!1){const{out:r,id:o,shaping:c,zoomRange:u,referenceBounds:d}=this._current,h=c.glyphs;for(const l of h){const m=l.x>c.bounds.x?i:1-i,_=m*e.remainingLength+(1-m)*e.backwardLength,f=Math.abs(l.x+l.width/2-c.bounds.x),p=Math.max(0,this._zoomLevel+Math.log2(f/(_+L))),y=Math.max(t,n?0:p);l.maxZoom=Math.min(u[1],Q),l.angle=e.angle+(1-i)*Math.PI,l.minZoom=Math.max(u[0],y),this._writeLineGlyph(r,o,e.x,e.y,c.bounds,l,s,d,!0),(i||this._current.offsetDirection)&&this._isVisible(l.minZoom,l.maxZoom)&&r.metricBoxWrite(l.bounds)}}_placeOnSegment(e,t,i,s,n,r,o){const{out:c,id:u,shaping:d,referenceBounds:h}=this._current,l=d.glyphs,m=e.dx/e.length,_=e.dy/e.length,f={x:e.x+i*-n*m,y:e.y+i*-n*_};for(const p of l){const y=p.x>d.bounds.x?r:1-r;if(!(y&&n===1||!y&&n===-1))continue;const g=Math.abs(p.x+p.width/2-d.bounds.x),x=Math.max(0,this._zoomLevel+Math.log2(g/i)-.1),b=Math.max(s,this._zoomLevel+Math.log2(g/(i+e.length+L)));x!==0&&(p.angle=e.angle+(1-r)*Math.PI,p.minZoom=b,p.maxZoom=x,this._writeLineGlyph(c,u,f.x,f.y,d.bounds,p,o,h,!0),(r||this._current.offsetDirection)&&this._isVisible(p.minZoom,p.maxZoom)&&c.metricBoxWrite(p.bounds))}}_writeLineGlyph(e,t,i,s,n,r,o,c,u){const d=i+n.x,h=s+n.y,l=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),m=Math.max(n.width,n.height)*l;e.recordStart(this.instanceId,this.attributeLayout,r.textureBinding),e.recordBounds(d,h,m,m);const{texcoords:_,offsets:f}=r,{fontSize:p,haloSize:y,outlineSize:g}=this._textMeshTransformProps;this._writeQuad(e,t,i,s,{texcoords:_,offsets:f,fontSize:p,haloSize:y,outlineSize:g,color:ze(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],r.minZoom),maxZoom:Math.min(this._current.zoomRange[1],r.maxZoom),clipAngle:o,mapAligned:u,isLineLabel:!0}),e.recordEnd()}_isVisible(e,t){const i=Math.floor(this._zoomLevel*K)/K;return e<=i&&i<=t}};function fe(a,e,t){const{coords:i,lengths:s}=e,n=$(),r=$(),o=$(),c=$(),u=$(),d=$(),h=2;let l=0;for(let m=0;m<s.length;m++){const _=s[m];for(let f=0;f<_;f++){const p=h*(f+l-1),y=h*(f+l),g=h*(f+l+1);f>0?k(n,i[p],i[p+1]):k(n,0,0),k(r,i[y],i[y+1]),f<_-1?k(o,i[g],i[g+1]):k(o,0,0),f===0?k(c,0,0):(ae(c,r,n),X(c,c),k(c,c[1],-c[0])),f===_-1?k(u,0,0):(ae(u,o,r),X(u,u),k(u,u[1],-u[0])),be(d,c,u),X(d,d);const x=d[0]*u[0]+d[1]*u[1];x!==0&&oe(d,d,x),oe(d,d,t),a.coords.push(r[0]+d[0],r[1]+d[1])}a.lengths.push(_),l+=_}return a}function Z(a){return a instanceof q?a:typeof a=="object"&&"type"in a?dt[a.type].hydrate(a):new R(a)}class q{constructor(e){this.inputs=e}encode(){const e=[];for(const t of this.inputs)e.push(...t.encode());return e.push(...this.instructions),e}}let R=class extends q{constructor(e){super([]),this.value=e}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[e,t,i,s]=this.value;return s!=null?z.vector4.encode([e,t||0,i||0,s]):z.vector3.encode([e,t||0,i||0])}return z.scalar.encode(this.value)}},ht=class ee extends q{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new ee(e,Z(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof R))return this;const[t,i,s,n]=e.value,r=this._config.translation.from[0],o=this._config.translation.from[1],c=this._config.rotation.from,u=this._config.scale.from;if(r===this._config.translation.to[0]&&o===this._config.translation.to[1]&&c===this._config.rotation.to&&u===this._config.scale.to){const d=s+c,h=n*u,l=Math.sin(s),m=Math.cos(s);return new R([m*n*r-l*n*o+t,l*n*r+m*n*o+i,d,h])}return new ee(this._config,e)}get instructions(){return z.animatedTransform.encode(this._config)}},ut=class te extends q{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new te(e,Z(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof R))return this;const[t,i,s,n]=e.value,r=this._config.color.from[0],o=this._config.color.from[1],c=this._config.color.from[2];let u=this._config.color.from[3];const d=this._config.opacity.from;return r===this._config.color.to[0]&&o===this._config.color.to[1]&&c===this._config.color.to[2]&&u===this._config.color.to[3]&&d===this._config.opacity.to?(u*=d,new R([t*r,i*o,s*c,n*u])):new te(this._config,e)}get instructions(){return z.animatedColor.encode(this._config)}};const dt={AnimatedTransform:ht,AnimatedColor:ut};function ft(a){return ve(a.map(e=>I(e)).map(e=>Z(e).simplify()))}function mt(a){const e=[];return e.push(a.transform),e.push(a.fromColor),e.push(a.toColor),e.push(a.colorMix),e.push(a.toOpacity),e.push(a.opacityMix),e}function ve(a){const e=[],t=[];let i=0;for(const s of a){const n=[...s.encode(),...z.ret.encode()];e.push([i+a.length,0,0,0]),t.push(...n),i+=n.length}return[...e,...t]}async function se(a,e){const t=a;let i;if(typeof t=="number"||typeof t=="string"||typeof t=="boolean")i=t;else if(Array.isArray(t))i=await Promise.all(t.map(s=>se(s,e)));else if(typeof t=="object")if("valueExpressionInfo"in t){const{valueExpressionInfo:s}=t,{expression:n}=s;i={...t,computed:await e.createComputedField({expression:n})}}else{i={};for(const s in t)i[s]=await se(t[s],e)}return i}function I(a,e,t){function i(r){if(!("computed"in r))return r;let o=r.computed.readWithDefault(e,t,[255*r.defaultValue[0],255*r.defaultValue[1],255*r.defaultValue[2],r.defaultValue[3]]);if(typeof o=="string"){const c=Ie.fromString(o);c&&(o=[c.r,c.g,c.b,c.a])}return o}const s=a;let n;if(typeof s=="number"||typeof s=="string"||typeof s=="boolean")n=s;else if(Array.isArray(s))n=s.map(r=>I(r,e,t));else if(typeof s=="object")if("type"in s&&s.type!=null&&s.type==="Process")switch(s.op){case"ArcadeColor":{const r=I(s.value,e,t);W(Array.isArray(r)&&r.length===4),n=[r[0]/255,r[1]/255,r[2]/255,r[3]]}break;case"Transparency":{const r=I(s.value,e,t);W(typeof r=="number"),n=1-r/100}break;case"Divide":{const r=I(s.left,e,t);W(typeof r=="number");const o=I(s.right,e,t);W(typeof o=="number"),n=r/o}break;case"Random":{const r=I(s.seed,e,t),o=I(s.min,e,t),c=I(s.max,e,t),u=e.getObjectId(),d=ye(u||0);n=o+Qe(d,r)*(c-o)}}else if("computed"in s)n=i(s);else{n={};for(const r in s)n[r]=I(s[r],e,t)}return n}function*A(a){const e=a;if(Array.isArray(e))for(const t of e)yield*A(t);else if(typeof e=="object")if("type"in e&&e.type!=null&&e.type==="Process")switch(e.op){case"ArcadeColor":case"Transparency":yield*A(e.value);break;case"Divide":yield*A(e.left),yield*A(e.right);break;case"Random":yield*A(e.seed),yield*A(e.min),yield*A(e.max)}else if("computed"in e)yield e.computed;else for(const t in e)yield*A(e[t])}function W(a){if(!a)throw new Error("Assertion failed.")}class pt extends Je{constructor(e){super(),this._value=e}resize(e){}read(e,t){return this._value}readWithDefault(e,t,i){return this._value}hasArcadeDependency(e){return!1}}const _t=()=>$e.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");async function V(a,e,t=!1){const{defaultValue:i,valueExpressionInfo:s,value:n}=e;if(s){const{expression:r}=s,o=await a.createComputedField({expression:r},t);return o?{...e,computed:o,defaultValue:i}:null}return{...e,computed:new pt(n),defaultValue:i}}async function me(a,e){const{valueExpressionInfo:t}=e,{expression:i}=t,s=await a.createComputedField({expression:i});return s?{...e,computed:s}:null}function Pe(a){return typeof a=="object"&&a!=null&&(!(!("valueExpressionInfo"in a)||!a.valueExpressionInfo)||"type"in a&&a.type==="Process"&&"op"in a&&a.op==="Random")}function N(a){if(Array.isArray(a)){for(const e of a)if(N(e))return!0}if(typeof a=="object"){if(Pe(a))return!0;for(const e in a)if(N(a[e]))return!0}return!1}class ie{static async create(e,t,i){const s={},n=new Map,r=new Map,o=new Map,c=new Map,u=new Map,d=new Map;for(const h in i){const l=i[h];if(l!=null&&typeof l=="object")if(Array.isArray(l)){if(typeof l[0]=="object")throw new Error(`InternalError: Cannot handle ${h}. Nested array params are not supported`);s[h]=l}else if("valueExpressionInfo"in l){if(l.value){s[h]=l.value;continue}const m=await me(e,l);if(!m){s[h]=l.defaultValue;continue}n.set(h,m),s[h]=null}else switch(l.type){case"cim-effect-infos":if(l.effectInfos.some(m=>m.overrides.length)){r.set(h,{effects:await Promise.all(l.effectInfos.map(async m=>{const _=m.overrides.map(f=>V(e,f));return{effect:m.effect,compiledOverrides:(await Promise.all(_)).filter(O)}}))});break}s[h]=l.effectInfos.map(m=>m.effect);break;case"cim-marker-placement-param":l.overrides.length&&o.set(h,{placementInfo:l,compiledOverrides:(await Promise.all(l.overrides.map(m=>V(e,m)))).filter(O)}),s[h]=l.placement;break;case"text-rasterization-param":{if(l.overrides.length){const _=l.overrides.map(f=>V(e,f,l.useLegacyLabelEvaluationRules));c.set(h,{compiledOverrides:(await Promise.all(_)).filter(O),rasterizationParam:l,objectIdToResourceId:new Map});continue}const m={type:"cim-rasterization-info",resource:l.resource};s[h]=await t.fetchResourceImmediate(m)??null;break}case"sprite-rasterization-param":{if(l.overrides.length){const _=l.overrides.map(f=>V(e,f));c.set(h,{compiledOverrides:(await Promise.all(_)).filter(O),rasterizationParam:l,objectIdToResourceId:new Map});continue}if(l.resource.type==="animated"){c.set(h,{compiledOverrides:[],rasterizationParam:l,objectIdToResourceId:new Map});continue}const m={type:"cim-rasterization-info",resource:l.resource};s[h]=await t.fetchResourceImmediate(m)??null;break}case"cim-marker-transform-param":{const{params:m}=l;if(N(m)){const _={compiledMarkerInfos:[]};await Promise.all(m.map(async f=>{const p={props:{}};for(const y in f)if(Pe(f[y])){const g=await me(e,f[y]);p.compiledExpressionMap||(p.compiledExpressionMap=new Map);const x=p.compiledExpressionMap;g&&x.set(y,g)}else p.props[y]=f[y];_.compiledMarkerInfos.push(p)})),u.set(h,_)}else s[h]={type:"cim-marker-transform-info",infos:m};break}case"animation-params":{const{params:m}=l,_=mt(m);if(N(_)){const f=await Promise.all(_.map(p=>se(p,e)));d.set(h,{params:f,propertyIdToResourceId:new Map,key:h})}else{const f=ft(_),p=await t.fetchResourceImmediate({type:"animation-info",resource:f});p!=null&&p.type==="sprite"&&(s[h]={dataRow:p.rect.y,dataColumn:p.rect.x})}break}default:s[h]=l}else s[h]=l}return new ie(i,s,n,r,o,c,u,d)}constructor(e,t,i,s,n,r,o,c){this.inputMeshParams=e,this._resolvedMeshParams=t,this._dynamicProperties=i,this._dynamicEffectProperties=s,this._dynamicPlacementProperties=n,this._dynamicAsyncProperties=r,this._dynamicTransformProperties=o,this._dynamicAsyncAnimations=c,this.evaluator=u=>u,this._arcadeDependencies=new Set;for(const u of this._expressions())Se(this._arcadeDependencies,u)}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,t,i){for(const s of this._dynamicAsyncProperties.values()){const n=ke(s.rasterizationParam.resource);s.rasterizationParam.resource.type==="animated"&&s.rasterizationParam.resource.randomizeStartTime&&(n.primitiveName="__RESERVED__PRIMITIVE__NAME__",n.startGroup=ye(t.getObjectId()||0));for(const{primitiveName:o,propertyName:c,computed:u,defaultValue:d,valueExpressionInfo:h}of s.compiledOverrides)try{const l=s.rasterizationParam.resource.type==="animated"?n.primitiveName:o;Ue(n,l,c,u,t,i,d)}catch(l){_t().errorOnce(new Ae("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${h==null?void 0:h.expression}' (primitive: '${o}', property: '${c}')`,l))}const r=e.enqueueRequest({type:"cim-rasterization-info",resource:n});s.objectIdToResourceId.set(t.getObjectId(),r)}for(const s of this._dynamicAsyncAnimations.values()){const n=s.params.map(c=>I(c,t,i)).map(Z).map(c=>c.simplify()),r=ve(n),o=e.enqueueRequest({type:"animation-info",resource:r});s.propertyIdToResourceId.set(t.getObjectId()+"."+s.key,o)}}evaluateMeshParams(e,t,i){for(const[s,n]of this._dynamicProperties.entries())this._resolvedMeshParams[s]=n.computed.readWithDefault(t,i,n.defaultValue);for(const[s,n]of this._dynamicPlacementProperties.entries())for(const{computed:r,defaultValue:o,propertyName:c}of n.compiledOverrides){const u=r.readWithDefault(t,i,o);n.placementInfo.placement[c]=u,this._resolvedMeshParams[s]=n.placementInfo.placement}for(const[s,n]of this._dynamicEffectProperties.entries())for(const r of n.effects){for(const{computed:o,defaultValue:c,propertyName:u}of r.compiledOverrides){const d=o.readWithDefault(t,i,c);r.effect[u]=d}this._resolvedMeshParams[s]=n.effects.map(o=>o.effect)}for(const[s,n]of this._dynamicTransformProperties.entries()){const r={type:"cim-marker-transform-info",infos:[]};for(const o of n.compiledMarkerInfos){const c={...o.props};if(o.compiledExpressionMap)for(const[u,d]of o.compiledExpressionMap){const h=d.computed.readWithDefault(t,i,d.defaultValue);c[u]=typeof h=="number"||typeof h=="boolean"?h:d.defaultValue}r.infos.push(c)}this._resolvedMeshParams[s]=r}for(const[s,n]of this._dynamicAsyncProperties.entries()){const r=n.objectIdToResourceId.get(t.getObjectId());if(r==null)continue;const o=e.getResource(r);this._resolvedMeshParams[s]=o}for(const[s,n]of this._dynamicAsyncAnimations.entries()){const r=n.propertyIdToResourceId.get(t.getObjectId()+"."+s);if(r==null)continue;const o=e.getResource(r);this._resolvedMeshParams[s]={dataRow:o.rect.y,dataColumn:o.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}hasArcadeDependency(e){return this._arcadeDependencies.has(e)}*_expressions(){for(const e of this._dynamicProperties.values())yield e.computed;for(const e of this._dynamicEffectProperties.values())for(const t of e.effects)for(const i of t.compiledOverrides)yield i.computed;for(const e of this._dynamicPlacementProperties.values())for(const t of e.compiledOverrides)yield t.computed;for(const e of this._dynamicAsyncProperties.values())for(const t of e.compiledOverrides)yield t.computed;for(const e of this._dynamicTransformProperties.values())for(const t of e.compiledMarkerInfos)if(t.compiledExpressionMap!=null)for(const i of t.compiledExpressionMap.values())yield i.computed;for(const e of this._dynamicAsyncAnimations.values())for(const t of e.params)yield*A(t)}}class zt{async createMeshWriter(e,t,i,s){const n=this._getMeshWriter(s.techniqueType),r=await ie.create(e,t,s.inputParams),o=new n(s.id,r,s.optionalAttributes,i);return await o.loadDependencies(),o}_getMeshWriter(e){switch(e){case M.Fill:return Ze;case M.DotDensity:return Ne;case M.ComplexFill:return je;case M.PatternFill:return Ve;case M.GradientFill:return We;case M.OutlineFill:return Ge;case M.PatternOutlineFill:return Ce;case M.ComplexOutlineFill:return Oe;case M.Marker:return Fe;case M.PieChart:return Re;case M.Text:return _e;case M.Line:return Be;case M.TexturedLine:return Te;case M.GradientStroke:return Ee;case M.Heatmap:return De;case M.Label:return lt;case M.AnimatedMarker:return tt;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}export{zt as F,pt as r};
