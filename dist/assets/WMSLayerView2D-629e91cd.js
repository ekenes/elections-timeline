import{n as o,q as m,b3 as F,t as I,C as M,s as l,d as E,m as $,v as q,aH as R}from"./index-1f15e2a2.js";import{a as b}from"./BitmapContainer-f1057762.js";import{f as U,d as V}from"./LayerView-15a4e0f5.js";import{v as W}from"./ExportStrategy-f0b99d1a.js";import{a as H}from"./RefreshableLayerView-1277845f.js";import{o as L}from"./ExportWMSImageParameters-0c1bd741.js";import"./WGLContainer-5ccaed96.js";import"./definitions-40f22228.js";import"./FramebufferObject-8caf3a55.js";import"./Texture-25531b97.js";import"./enums-b14466b3.js";import"./ProgramTemplate-4b117714.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-1b578471.js";import"./enums-5e76797f.js";import"./GeometryUtils-54bea2e3.js";import"./StyleDefinition-4732b9f0.js";import"./config-1337d16e.js";import"./Container-d2f2c176.js";import"./earcut-a789ad67.js";import"./featureConversionUtils-cea8e812.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Bitmap-350507ec.js";const j=e=>{let t=class extends e{initialize(){this.exportImageParameters=new L({layer:this.layer})}destroy(){this.exportImageParameters=M(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:p}=a;if(!p)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:s,height:n,x:d,y:c}=u;if(!(i&&s&&n))throw new l("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:n});return a.fetchFeatureInfo(i,s,n,d,c)}};return o([m()],t.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],t.prototype,"exportImageVersion",null),o([m()],t.prototype,"layer",void 0),o([m(F)],t.prototype,"timeExtent",void 0),t=o([I("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends j(H(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{E(t)||$.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=M(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:p}=e,{spatialReference:u}=t;let i,s=0,n=0;if(r.children.some(C=>{const{width:x,height:f,resolution:w,x:y,y:g}=C,v=y+w*x,P=g-w*f;return a>=y&&a<=v&&p<=g&&p>=P&&(i=new R({xmin:y,ymin:P,xmax:v,ymax:g,spatialReference:u}),s=x,n=f,!0)}),!i)return null;const d=i.width/s,c=Math.round((a-i.xmin)/d),S=Math.round((i.ymax-p)/d);return{extent:i,width:s,height:n,x:c,y:S}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([I("esri.views.2d.layers.WMSLayerView2D")],h);const nt=h;export{nt as default};
