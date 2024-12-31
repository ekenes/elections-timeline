import{A as t,B as i,F as d,J as C,cn as O,eU as P,Q as q,bp as x,aY as _,bW as E,ai as T,s as I,by as p,gu as l,br as U,iQ as V,dX as H,iR as j,cT as N,bY as L,iS as M,a7 as k,bE as D,iT as A}from"./index-fc6a9042.js";import{h as F}from"./Container-36caf941.js";let c=class extends C{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([i({readOnly:!0})],c.prototype,"version",null),c=t([d("esri.views.layers.support.ClipArea")],c);const b=c;var m;let h=m=class extends b{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new m({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([i({type:[Number,String],json:{write:!0}})],h.prototype,"left",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"right",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"top",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"bottom",void 0),h=m=t([d("esri.views.layers.support.ClipRect")],h);const z=h;var f;const B={base:P,key:"type",typeMap:{extent:q,polygon:x}};let y=f=class extends b{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e;return new f({geometry:((e=this.geometry)==null?void 0:e.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};t([i({types:B,json:{read:O,write:!0}})],y.prototype,"geometry",void 0),y=f=t([d("esri.views.layers.support.Geometry")],y);const Q=y;let v=class extends b{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([i({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=t([d("esri.views.layers.support.Path")],v);const Y=v,g=_.ofType({key:"type",base:null,typeMap:{rect:z,path:Y,geometry:Q}}),W=e=>{let r=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new g,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var u,w,S;const s=((u=this.view)==null?void 0:u.spatialReferenceLocked)??!0;((w=this.view)==null?void 0:w.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new I("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new F),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([p(()=>this.suspended,n=>{this.container&&(this.container.visible=!n)},l),p(()=>this.updateSuspended,n=>{this.view&&!n&&this.updateRequested&&this.view.requestUpdate()},l),p(()=>{var n;return((n=this.layer)==null?void 0:n.opacity)??1},n=>{this.container&&(this.container.opacity=n)},l),p(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",n=>{this.container&&(this.container.blendMode=n)},l),p(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,n=>{this.container&&(this.container.effect=n)},l),p(()=>this.highlightOptions,n=>this.container.highlightOptions=n,l),U(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},l),p(()=>{var n;return{scale:(n=this.view)==null?void 0:n.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:n,scaleRange:$})=>{const R=V($,n);R!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=R)},l)],"constructor"),(S=this.view)!=null&&S.whenLayerView?this.view.whenLayerView(this.layer).then(n=>{n===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var a;const s=(a=this.view)==null?void 0:a.spatialReference;return s==null||this.supportsSpatialReference(s)}get updating(){var s;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((s=this._updatingHandles)!=null&&s.updating))}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(s){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",s),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(s))):this.updateRequested=!1}hitTest(s,a){return Promise.resolve(null)}supportsSpatialReference(s){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const s=super.getSuspendInfo(),a=!this.spatialReferenceSupported;return a&&(s.spatialReferenceNotSupported=a),s}addAttachHandles(s){this.addHandles(s,"attach")}};return t([i()],r.prototype,"attached",void 0),t([i({type:g,set(s){const a=E(s,this._get("clips"),g);this._set("clips",a)}})],r.prototype,"clips",void 0),t([i()],r.prototype,"container",void 0),t([i({type:T})],r.prototype,"highlightOptions",void 0),t([i()],r.prototype,"moving",void 0),t([i({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),t([i({readOnly:!0})],r.prototype,"updateParameters",void 0),t([i()],r.prototype,"updateRequested",void 0),t([i()],r.prototype,"updating",null),t([i()],r.prototype,"view",void 0),t([i()],r.prototype,"_visibleAtCurrentScale",void 0),t([i({readOnly:!0})],r.prototype,"visibleAtCurrentScale",null),r=t([d("esri.views.2d.layers.LayerView2D")],r),r};let o=class extends H(j(N.EventedMixin(L))){constructor(e){super(e),this._updatingHandles=new M,this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{var r;if(e.name!=="layerview:create-error"){const s=this.layer&&this.layer.id||"no id",a=((r=this.layer)==null?void 0:r.title)||"no title";k.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${a}', id: '${s}')`,e)}})}destroy(){this._updatingHandles=D(this._updatingHandles)}get fullOpacity(){var e,r;return(((e=this.layer)==null?void 0:e.opacity)??1)*(((r=this.parent)==null?void 0:r.fullOpacity)??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this._updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var s;const e=this.view.timeExtent,r=(s=this.layer)==null?void 0:s.visibilityTimeExtent;return!e||!r||!e.intersection(r).isEmpty}canResume(){var r,s,a;const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((r=this.layer)==null?void 0:r.loaded)&&!((s=this.parent)!=null&&s.suspended)&&((a=this.view)==null?void 0:a.ready)&&A(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var a,u;const e=(a=this.parent)!=null&&a.suspended?this.parent.suspendInfo:{};(u=this.view)!=null&&u.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return A(s)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};t([i()],o.prototype,"view",void 0),t([i()],o.prototype,"fullOpacity",null),t([i()],o.prototype,"layer",void 0),t([i()],o.prototype,"parent",void 0),t([i({readOnly:!0})],o.prototype,"suspended",null),t([i({readOnly:!0})],o.prototype,"suspendInfo",null),t([i({readOnly:!0})],o.prototype,"legendEnabled",null),t([i({type:Boolean,readOnly:!0})],o.prototype,"updating",null),t([i({readOnly:!0})],o.prototype,"updatingProgress",null),t([i()],o.prototype,"updateSuspended",null),t([i()],o.prototype,"visible",null),t([i({readOnly:!0})],o.prototype,"visibleAtCurrentScale",null),t([i({readOnly:!0})],o.prototype,"visibleAtCurrentTimeExtent",null),o=t([d("esri.views.layers.LayerView")],o);const X=o;export{Q as a,W as f,X as y};