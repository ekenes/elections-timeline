import{C as s,J as x,jn as we,eX as K,a8 as W,D as l,aV as h,ed as Ee,g as ae,fY as N,s as T,g6 as v,lx as Le,N as X,P as oe,ly as U,lz as he,bC as ce,fU as R,K as Me,lA as Q,R as ue,eu as Te,lB as fe,hX as je,eE as He,bH as J,lC as Ce,ei as ve,fo as xe,lD as Ne,cC as Ae,eC as me,eG as Ve,eD as We,eF as Ge,k6 as Re,eH as ze,lE as Ue,Y as Be,a9 as Fe,ae as ke,lF as De,b8 as te,jS as Je,c$ as Ke,bI as Xe,ab as qe,cb as Ye,e5 as Qe,G as Ze,bR as et,f$ as tt,f_ as nt,ck as ot,cl as rt,eg as st,eh as it,fp as lt,gX as Z,f3 as at,co as ct,_ as ut}from"./index-76dad814.js";import{p as b,j as _e,m as pt}from"./perspectiveUtils-04fc442e.js";import{t as dt,e as ne}from"./mat3f64-e19cdcb8.js";import{p as ht}from"./resourceExtension-7b303a4a.js";import{o as ft}from"./BoundsStore-b464477d.js";import"./normalizeUtilsSync-3c9c0cab.js";import"./PooledRBush-f047a2ee.js";let ie=class extends we{projectOrWarn(e,t){if(e==null)return e;const{geometry:o,pending:n}=K(e,t);return n?null:n||o?o:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ie=s([x("esri.layers.support.GeoreferenceBase")],ie);const q=ie,re=ne(),d=R();let k=class extends Me{};s([l({type:Number,json:{write:!0}})],k.prototype,"x",void 0),s([l({type:Number,json:{write:!0}})],k.prototype,"y",void 0),k=s([x("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],k);let D=class extends we{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([l()],D.prototype,"sourcePoint",void 0),s([l({type:h})],D.prototype,"mapPoint",void 0),D=s([x("esri.layers.support.ControlPointsGeoreference.ControlPoint")],D);let P=class extends Ee(q){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=ae.fromJSON(t.spatialReference),n=dt(...t.coefficients,1);return e.map(r=>(N(d,r.x,r.y),b(d,d,n),{sourcePoint:r,mapPoint:new h({x:d[0],y:d[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new T("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(re);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return wt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[r,i,c,a]]}=e,u={sourcePoint:v(0,n),mapPoint:new h({x:r[0],y:r[1],spatialReference:t})},p={sourcePoint:v(0,0),mapPoint:new h({x:i[0],y:i[1],spatialReference:t})},f={sourcePoint:v(o,0),mapPoint:new h({x:c[0],y:c[1],spatialReference:t})},g={sourcePoint:v(o,n),mapPoint:new h({x:a[0],y:a[1],spatialReference:t})};y(u)&&y(p)&&y(f)&&y(g)&&(ye(re,u,p,f,g),this.controlPoints=this.controlPoints.map(({sourcePoint:_})=>(N(d,_.x,_.y),b(d,d,re),{sourcePoint:_,mapPoint:new h({x:d[0],y:d[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:Le(ne(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;N(d,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return b(d,d,this.transform),new h({x:d[0],y:d[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=K(e,t).geometry)==null?null:(N(d,e.x,e.y),b(d,d,this.inverseTransform),v(d[0],d[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[r,i,c,a]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,p=this._projectControlPoint(i,u),f=this._projectControlPoint(c,u),g=this._projectControlPoint(a,u);if(!p.valid||!f.valid||!g.valid||!y(p.controlPoint))return null;e==null&&(e=ne());let _=null;return _=y(f.controlPoint)&&y(g.controlPoint)?ye(e,r,p.controlPoint,f.controlPoint,g.controlPoint):y(f.controlPoint)?yt(e,r,p.controlPoint,f.controlPoint):mt(e,r,p.controlPoint),_.every($e=>$e===0)?null:_}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:r,pending:i}=K(n,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return(e==null?void 0:e.sourcePoint)!=null&&e.mapPoint!=null}s([l({type:[D],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[k]},coefficients:{type:[Number]},spatialReference:{type:ae}}}}})],P.prototype,"controlPoints",void 0),s([X("controlPoints")],P.prototype,"readControlPoints",null),s([oe("controlPoints")],P.prototype,"writeControlPoints",null),s([l({clonable:!1})],P.prototype,"coords",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],P.prototype,"height",void 0),s([l({readOnly:!0})],P.prototype,"inverseTransform",null),s([l({readOnly:!0})],P.prototype,"transform",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],P.prototype,"width",void 0),P=s([x("esri.layers.support.ControlPointsGeoreference")],P);const S=R(),I=R(),A=R(),j=R(),O=R(),$=R(),V=R(),H=R(),ee=Math.PI/2;function E(e,t,o){N(e,o.sourcePoint.x,o.sourcePoint.y),N(t,o.mapPoint.x,o.mapPoint.y)}function mt(e,t,o){return E(S,O,t),E(I,$,o),U(A,I,S,ee),U(j,S,I,ee),U(V,$,O,-ee),U(H,O,$,-ee),pe(e,S,I,A,j,O,$,V,H)}function yt(e,t,o,n){return E(S,O,t),E(I,$,o),E(A,V,n),he(j,S,I,.5),U(j,A,j,Math.PI),he(H,O,$,.5),U(H,V,H,Math.PI),pe(e,S,I,A,j,O,$,V,H)}function ye(e,t,o,n,r){return E(S,O,t),E(I,$,o),E(A,V,n),E(j,H,r),pe(e,S,I,A,j,O,$,V,H)}const gt=new Array(8).fill(0),Pt=new Array(8).fill(0);function ge(e,t,o,n,r){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=r[0],e[7]=r[1],e}function pe(e,t,o,n,r,i,c,a,u){return _e(e,ge(gt,t,o,n,r),ge(Pt,i,c,a,u))}function wt(e,t,o,n){const r=Q(0,o),i=Q(0,0),c=Q(t,0),a=Q(t,o);return b(r,r,e),b(i,i,e),b(c,c,e),b(a,a,e),new ce({rings:[[r,i,c,a,r]],spatialReference:n})}const Y=P,B=R();let L=class extends q{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:n,bottomRight:r}=this;if(t==null||o==null||n==null||r==null)return null;const i=t.spatialReference;return o=this.projectOrWarn(o,i),n=this.projectOrWarn(n,i),r=this.projectOrWarn(r,i),o==null||n==null||r==null?null:new ce({rings:[[[n.x,n.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[n.x,n.y]]],spatialReference:i})}set coords(t){const{topLeft:o}=this;if(o==null)return;const n=o.spatialReference;if((t=this.projectOrWarn(t,n))==null)return;const{rings:[[r,i,c,a]]}=t;this.bottomLeft=new h({x:r[0],y:r[1],spatialReference:n}),this.topLeft=new h({x:i[0],y:i[1],spatialReference:n}),this.topRight=new h({x:c[0],y:c[1],spatialReference:n}),this.bottomRight=new h({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(t){const{topLeft:o,topRight:n,bottomRight:r,bottomLeft:i}=this;if(t==null||o==null||n==null||r==null||i==null)return null;const c=o.spatialReference;t=t.normalize();const a=K(t,c).geometry;if(a==null)return null;N(B,a.x,a.y);const u=_e(ne(),[o.x,o.y,i.x,i.y,n.x,n.y,r.x,r.y],[0,0,0,1,1,0,1,1]);return b(B,B,u),v(B[0],B[1])}};s([l({clonable:!1})],L.prototype,"coords",null),s([l({type:h})],L.prototype,"bottomLeft",void 0),s([l({type:h})],L.prototype,"bottomRight",void 0),s([l({type:h})],L.prototype,"topLeft",void 0),s([l({type:h})],L.prototype,"topRight",void 0),L=s([x("esri.layers.support.CornersGeoreference")],L);const vt=L;let G=class extends q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:c,y:a}=this.extent.center,u=se(c,a,this.rotation);i=[u(e,t),u(e,n),u(o,n),u(o,t)],i.push(i[0])}else i=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new ce({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),(e==null?void 0:e.extent)==null)return;const{rings:[[o,n,r]],extent:{center:{x:i,y:c}}}=e,a=Te(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=se(i,c,-a),[p,f]=u(o[0],o[1]),[g,_]=u(r[0],r[1]);this.extent=new ue({xmin:p,ymin:f,xmax:g,ymax:_,spatialReference:t}),this.rotation=a}toSourceNormalized(e){const{extent:t,rotation:o}=this;if(e==null||t==null)return null;const{xmin:n,ymin:r,xmax:i,ymax:c,center:a,spatialReference:u}=t;e=e.normalize();const p=K(e,u).geometry;if(p==null)return null;let f=p.x,g=p.y;return o&&([f,g]=se(a.x,a.y,-o)(f,g)),v(fe(f,n,i,0,1),fe(g,c,r,0,1))}};function se(e,t,o){const n=je(o),r=Math.cos(n),i=Math.sin(n);return(c,a)=>[r*(c-e)+i*(a-t)+e,r*(a-t)-i*(c-e)+t]}s([l({clonable:!1})],G.prototype,"coords",null),s([l({type:ue})],G.prototype,"extent",void 0),s([l({type:Number})],G.prototype,"rotation",void 0),G=s([x("esri.layers.support.ExtentAndRotationGeoreference")],G);const xt=G;function Rt(e){return(e==null?void 0:e.type)==="media"}function be(e,t){const o=He(t);return Rt(e)&&!!e.portalItem&&o!=null&&o>J.PORTAL_ITEM}function _t(e,t,o){var p;if(!e||e.type==="control-points")return e;const{coords:n}=e;if(((p=n==null?void 0:n.rings[0])==null?void 0:p.length)!==5)return null;const[r,i,c,a]=n.rings[0],{spatialReference:u}=n;return new Y({controlPoints:[{mapPoint:new h({x:r[0],y:r[1],spatialReference:u}),sourcePoint:v(0,o)},{mapPoint:new h({x:i[0],y:i[1],spatialReference:u}),sourcePoint:v(0,0)},{mapPoint:new h({x:c[0],y:c[1],spatialReference:u}),sourcePoint:v(t,0)},{mapPoint:new h({x:a[0],y:a[1],spatialReference:u}),sourcePoint:v(t,o)}],width:t,height:o})}const bt={key:"type",base:q,typeMap:{"control-points":Y,corners:vt,"extent-and-rotation":xt}},St={key:"type",base:q,typeMap:{"control-points":Y}};let C=class extends Ce(ve(xe)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Y.fromJSON(e)}writeGeoreference(e,t,o,n){var c;const r=(c=n==null?void 0:n.resources)==null?void 0:c.pendingOperations,i=()=>{var u;const a=_t(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),((u=a.controlPoints)==null?void 0:u.length)!==4&&(n==null?void 0:n.messages))return void n.messages.push(new T("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[o]=a.write({},n)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[o]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:o,contentHeight:n}=this;if(e==null||t==null||o===0||n===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=o,r.y*=n,r)}};s([l({types:bt,json:{write:!0,types:St}})],C.prototype,"georeference",void 0),s([X("georeference")],C.prototype,"readGeoreference",null),s([oe("georeference")],C.prototype,"writeGeoreference",null),s([l({json:{read:!1,write:!1}})],C.prototype,"opacity",void 0),C=s([x("esri.layers.support.MediaElementBase")],C);const de=C;let w=class extends de{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=Ne(t).then(n=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new T("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,o,n){return Ae(o.url,n)}writeImage(t,o,n,r){if(t==null)return;const i=r==null?void 0:r.portalItem,c=r==null?void 0:r.resources;if(!i||!c)return void(typeof t=="string"&&(o[n]=me(t,r)));const a=It(t)?t:null;if(a){if(Ve(a)==null)return void(o[n]=a);const u=me(a,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},We.NO);if(i&&u&&!Ge(u))return c.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(o[n]=u)}o[n]="<pending>",c.pendingOperations.push(Ot(t).then(u=>{const p=Et(u,i);o[n]=p.itemRelativeUrl,c.toAdd.push({resource:p,content:{type:"blob",blob:u},compress:!1,finish:f=>{this.image=f.url}})}))}write(t,o){const n=super.write(t,o);return"mediaType"in n&&!n.url&&delete n.mediaType,n}};s([l()],w.prototype,"animationOptions",void 0),s([l({readOnly:!0})],w.prototype,"content",void 0),s([l({readOnly:!0})],w.prototype,"contentWidth",null),s([l({readOnly:!0})],w.prototype,"contentHeight",null),s([l({json:{name:"url",type:String,write:{overridePolicy:(e,t,o)=>({enabled:!be(o==null?void 0:o.layer,o==null?void 0:o.origin)})}}})],w.prototype,"image",void 0),s([X("image",["url"])],w.prototype,"readImage",null),s([oe("image")],w.prototype,"writeImage",null),s([l({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],w.prototype,"type",void 0),w=s([x("esri.layers.support.ImageElement")],w);const Se=w;function It(e){return typeof e=="string"&&!Re(e)&&!ze(e)}async function Ot(e){return typeof e=="string"?Re(e)?Ue(e):(await Be(e,{responseType:"blob"})).data:new Promise(t=>$t(e).toBlob(t))}function $t(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),n}function Et(e,t){const o=Fe(),n=`${ke("media",o)}.${ht({type:"blob",blob:e})}`;return t.resourceFromPath(n)}let M=class extends de{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new T("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){var e;return((e=this.content)==null?void 0:e.videoWidth)??0}get contentHeight(){var e;return((e=this.content)==null?void 0:e.videoHeight)??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{var r;const n=De(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(n,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",(r=e.src)!=null&&r.includes("blob:")||(e.src=e.src))})}};s([l()],M.prototype,"autoplay",void 0),s([l({readOnly:!0})],M.prototype,"content",void 0),s([l({readOnly:!0})],M.prototype,"contentWidth",null),s([l({readOnly:!0})],M.prototype,"contentHeight",null),s([l()],M.prototype,"video",null),M=s([x("esri.layers.support.VideoElement")],M);const Ie=M,Lt={key:"type",defaultKeyValue:"image",base:de,typeMap:{image:Se,video:Ie}},Pe=te.ofType(Lt);let z=class extends xe.LoadableMixin(Je(Ke.EventedAccessor)){constructor(e){super(e),this._index=new ft,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const r=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const r=new pt({spatialReference:o,element:n});this._elementViewsMap.set(n,r);const i=Xe(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((n,r)=>this._elementsIndexes.set(n,r)),this.emit("refresh")},this.elements=new Pe}async load(e){if(qe(e),!this.spatialReference){const t=this.elements.find(o=>{var n;return((n=o.georeference)==null?void 0:n.coords)!=null});this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Ye(e,this._get("elements"),Pe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Qe(e.spatialReference,this.spatialReference,null,t);const o=Ze(e.spatialReference,this.spatialReference)?e:et(e,this.spatialReference);if(!o)return[];const n=o.normalize(),r=[];for(const i of n)this._index.forEachInBounds(tt(i),({normalizedCoords:c,element:a})=>{c!=null&&nt(i,c)&&r.push(a)});return r.sort((i,c)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(c)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),r=o!=null;this._index.delete(e),r&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([l()],z.prototype,"elements",null),s([l({readOnly:!0})],z.prototype,"fullExtent",null),s([l()],z.prototype,"spatialReference",null),z=s([x("esri.layers.support.LocalMediaElementSource")],z);const F=z;function le(e){return typeof e=="object"&&e!=null&&"type"in e}function Oe(e){return le(e)&&e.type==="image"}let m=class extends ot(rt(st(it(ve(ct))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=lt(async(t,o,n)=>{const{save:r,saveAs:i}=await ut(()=>import("./mediaLayerUtils-a6e6451a.js"),["assets/mediaLayerUtils-a6e6451a.js","assets/utils-16325b29.js","assets/index-76dad814.js","assets/index-d4471cb7.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/saveAPIKeyUtils-2361f1db.js","assets/saveUtils-4131570f.js","assets/resourceUtils-ad18197d.js","assets/resourceUtils-1a0beb53.js"]);switch(t){case Z.SAVE:return r(this,o);case Z.SAVE_AS:return i(this,n,o)}}),this.source=new F}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new T("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const o=this._getSourceOverride(t,this.georeference);o&&(this.setAtOrigin("source",o,"web-map"),this.setAtOrigin("source",o,"web-scene"),t=o);const n=le(t)?new F({elements:new te([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference),await n.load(e),this.spatialReference=n.spatialReference}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),this.effectiveSource!==this.source&&((t=this.source)==null||t.destroy())}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new F({elements:new te(e)}):e instanceof te?new F({elements:e}):e:null}readSource(e,t,o){if("itemId"in t&&t.itemId)return;const n=this._createSource(t);return n==null||n.read(t,o),n}writeSource(e,t,o,n){if(e&&e instanceof F){const r=e.elements.length;if(r!==1)return void((n==null?void 0:n.messages)&&n.messages.push(new T("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}Oe(e)?e.write(t,n):n!=null&&n.messages&&(e?n.messages.push(new T("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):n.messages.push(new T("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(Z.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(Z.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Se;case"video":return new Ie}return null}_getSourceOverride(e,t){if(le(e)&&this.originIdOf("source")===J.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===J.WEB_MAP||this.originIdOf("georeference")===J.WEB_SCENE)){const o=e.toJSON(),n=this._createSource(o);return n.read({...o},{origin:"portal-item"}),n.read({georeference:t},{origin:"web-map"}),n.read({georeference:t},{origin:"web-scene"}),n}return null}};s([l({readOnly:!0})],m.prototype,"effectiveSource",void 0),s([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],m.prototype,"georeference",void 0),s([X("web-document","georeference")],m.prototype,"readGeoreference",null),s([l({type:String})],m.prototype,"copyright",void 0),s([l({readOnly:!0})],m.prototype,"fullExtent",null),s([l({type:["MediaLayer"]})],m.prototype,"operationalLayerType",void 0),s([l({type:["show","hide"]})],m.prototype,"listMode",void 0),s([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:Y}},overridePolicy(e,t,o){return{enabled:!0,allowNull:!1,ignoreOrigin:be(this,o==null?void 0:o.origin)&&Oe(e)&&!!e.georeference&&e.originIdOf("georeference")>J.PORTAL_ITEM}}}}})],m.prototype,"source",null),s([at("source")],m.prototype,"castSource",null),s([X("source",["url"])],m.prototype,"readSource",null),s([oe("source")],m.prototype,"writeSource",null),s([l()],m.prototype,"spatialReference",void 0),s([l({readOnly:!0})],m.prototype,"type",void 0),m=s([x("esri.layers.MediaLayer")],m);const Ut=m;export{Ut as default};
