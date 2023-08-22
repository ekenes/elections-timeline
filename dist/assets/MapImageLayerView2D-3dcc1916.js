import{t as o,v as a,bh as g,w as m,g as l,n as d,s as u,m as c}from"./index-de9e02e1.js";import{a as y}from"./BitmapContainer-bcfa66a3.js";import{f,d as w}from"./LayerView-09074446.js";import{o as x}from"./GraphicsView2D-a0637699.js";import{n as v}from"./HighlightGraphicContainer-b39ec913.js";import{v as _}from"./ExportStrategy-dcf75456.js";import{m as H}from"./ExportImageParameters-a23afb5a.js";import{a as I}from"./RefreshableLayerView-19263ade.js";import{U,r as V}from"./drapedUtils-0a4a9a8c.js";import"./WGLContainer-cd1e8fbd.js";import"./definitions-e16dc41c.js";import"./VertexArrayObject-367ef1ba.js";import"./Texture-f6c58d0d.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a4e48bf2.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-a08fbdcf.js";import"./GeometryUtils-2ba17613.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-de4603ec.js";import"./earcut-0b70cd4d.js";import"./featureConversionUtils-a956fd80.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./ExpandedCIM-bb6a98bc.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-fcb117b7.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8ff9218d.js";import"./floatRGBA-39af9b51.js";import"./normalizeUtilsSync-626d7f27.js";import"./normalizeUtilsCommon-3579e597.js";import"./projectionSupport-8ab1c9df.js";import"./json-48e3ea08.js";import"./AttributeStoreView-f36593a4.js";import"./TiledDisplayObject-cbede528.js";import"./visualVariablesUtils-2953d97f.js";import"./util-51d01e09.js";import"./Matcher-4be56039.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-5c2fb6f2.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-d93f788e.js";import"./ComputedAttributeStorage-d445d827.js";import"./arcadeTimeUtils-161f6392.js";import"./executionError-c92d3b85.js";import"./normalizeUtils-9deeb3c4.js";import"./utils-5b434a69.js";import"./BaseGraphicContainer-85c9fab9.js";import"./FeatureContainer-bc0e1379.js";import"./TileContainer-ea8cb7f6.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-dbabfd70.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-fa9086a7.js";import"./scaleUtils-00a284bd.js";import"./popupUtils-ec04f406.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return o([a()],e.prototype,"exportImageParameters",void 0),o([a({readOnly:!0})],e.prototype,"floors",null),o([a({readOnly:!0})],e.prototype,"exportImageVersion",null),o([a()],e.prototype,"layer",void 0),o([a()],e.prototype,"suspended",void 0),o([a(g)],e.prototype,"timeExtent",void 0),e=o([m("esri.views.layers.MapImageLayerView")],e),e};let p=class extends P(I(f(w))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(r=>{d(r)||u.getLogger(this).error(r)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:r}=this.layer,i=r>=10.3,n=r>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(s,h)=>V(s,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(s,h)=>{this._highlightView.graphicUpdateHandler({graphic:s,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:i,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,i){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...i})}fetchImageBitmap(t,e,r,i){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...i})}highlight(t){return this._popupHighlightHelper.highlight(t)}};o([a()],p.prototype,"strategy",void 0),o([a()],p.prototype,"updating",void 0),p=o([m("esri.views.2d.layers.MapImageLayerView2D")],p);const Gt=p;export{Gt as default};