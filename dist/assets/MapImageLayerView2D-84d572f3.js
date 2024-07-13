import{x as r,y as a,z as m,k as g,q as l,w as d,A as u}from"./index-5bdaa4d1.js";import{a as c}from"./BitmapContainer-aba84a94.js";import{f as y,y as f}from"./LayerView-38297c4f.js";import{V as x}from"./GraphicsView2D-143e180a.js";import{h as _}from"./HighlightGraphicContainer-926c13ba.js";import{_ as w}from"./ExportStrategy-9faa7ee3.js";import{y as H}from"./ExportImageParameters-9361f57f.js";import{i as v}from"./timeSupport-fe50eb12.js";import{i as I}from"./RefreshableLayerView-2810c52d.js";import{_ as $,r as V}from"./drapedUtils-d488d372.js";import"./WGLContainer-ce0f5abc.js";import"./definitions-f33e80b3.js";import"./LabelMetric-087ac54c.js";import"./enums-fb32c1bb.js";import"./Texture-220394b4.js";import"./enums-2e633670.js";import"./Program-c7bb1576.js";import"./VertexElementDescriptor-2925c6af.js";import"./ProgramTemplate-6e9f21d3.js";import"./vec3f32-ad1dc57f.js";import"./Container-63c8a627.js";import"./highlightReasons-840a76c9.js";import"./StyleDefinition-df636448.js";import"./config-1337d16e.js";import"./earcut-ab02106a.js";import"./featureConversionUtils-8131e980.js";import"./UpdateTracking2D-566a65fd.js";import"./BidiEngine-26aff129.js";import"./GeometryUtils-ec854d53.js";import"./Rect-ea14f53a.js";import"./BindType-d21d71dd.js";import"./Util-a794de10.js";import"./AttributeStore-a93b55e7.js";import"./TimeOnly-1ac4a567.js";import"./timeSupport-e43eb43a.js";import"./json-48e3ea08.js";import"./FeatureCommandQueue-22ed79bc.js";import"./constants-991354c8.js";import"./normalizeUtilsSync-5e639f1d.js";import"./AGraphicContainer-b4e0e06c.js";import"./TechniqueInstance-fb29d95e.js";import"./TileContainer-3d4a9a65.js";import"./Bitmap-67c5c475.js";import"./scaleUtils-ad58c971.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-3a715c10.js";import"./popupUtils-bbaa83ee.js";const E=t=>{let i=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e;return((e=this.view)==null?void 0:e.floors)??null}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return v(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return r([a()],i.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],i.prototype,"floors",null),r([a({readOnly:!0})],i.prototype,"exportImageVersion",null),r([a()],i.prototype,"layer",void 0),r([a()],i.prototype,"suspended",void 0),r([a({readOnly:!0})],i.prototype,"timeExtent",null),i=r([m("esri.views.layers.MapImageLayerView")],i),i};let o=class extends E(I(y(f))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{l(e)||d.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,s=e>=10.3,n=e>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:s,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(u(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,s){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(t,i,e,s){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([a()],o.prototype,"strategy",void 0),r([a()],o.prototype,"updating",void 0),o=r([m("esri.views.2d.layers.MapImageLayerView2D")],o);const wt=o;export{wt as default};
