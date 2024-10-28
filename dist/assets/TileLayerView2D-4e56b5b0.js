import{a0 as w,a1 as y,a2 as I,a3 as V,a4 as H,G as v,a5 as o,a6 as u,a7 as T,A as n,B as g,F as q}from"./index-560772b3.js";import"./GeometryUtils-254cd043.js";import"./UpdateTracking2D-af8ddc2a.js";import"./enums-fb32c1bb.js";import"./definitions-f33e80b3.js";import"./floatRGBA-333fb6fe.js";import"./Container-2320f73b.js";import"./WGLContainer-b92985b7.js";import"./Texture-2049af6f.js";import"./enums-2e633670.js";import"./Program-1bed0bbf.js";import"./LabelMetric-e5cabbab.js";import"./StyleDefinition-df636448.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-70025465.js";import"./FeatureCommandQueue-bccd59cf.js";import"./PieChartMeshWriter-6658514d.js";import"./renderState-303ecedc.js";import"./interfaces-8918b36f.js";import"./testSVGPremultipliedAlpha-c9123a18.js";import{V as U}from"./GraphicsView2D-4b0d3334.js";import"./earcut-243c9ad1.js";import"./vec3f32-ad1dc57f.js";import{r as b,o as f,n as d}from"./imageUtils-b7786901.js";import{f as C,y as Q}from"./LayerView-66ec746c.js";import{h as S}from"./HighlightGraphicContainer-891251d3.js";import{i as $}from"./RefreshableLayerView-7058bae9.js";import{U as P,_ as F,r as L}from"./drapedUtils-03c8c432.js";import"./BidiEngine-26aff129.js";import"./Rect-ea14f53a.js";import"./BindType-d21d71dd.js";import"./Util-f3f9ef9e.js";import"./highlightReasons-362355b9.js";import"./ProgramTemplate-b9442763.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./featureConversionUtils-ca95abbe.js";import"./CircularArray-50add9d1.js";import"./AttributeStore-3149f7e0.js";import"./TimeOnly-4eec8dd0.js";import"./timeSupport-07da3760.js";import"./json-48e3ea08.js";import"./constants-991354c8.js";import"./TurboLine-f21dcccd.js";import"./basicInterfaces-d9412f98.js";import"./normalizeUtilsSync-01883bed.js";import"./Bitmap-8679536f.js";import"./TileContainer-d9245c56.js";import"./AGraphicContainer-a7856e77.js";import"./TechniqueInstance-c3c91016.js";import"./scaleUtils-ea82622e.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-ca33f594.js";import"./popupUtils-774f0c92.js";const k=[0,0];let a=class extends $(b(C(Q))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,h)=>this.fetchTile(i,h)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),P(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new S(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new F({createFetchPopupFeaturesQueryGeometry:(h,r)=>L(h,r,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,r)=>{i.graphicUpdateHandler({graphic:h,property:r})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):H()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return v((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(k,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:h,resamplingLevel:r=0}=e;if(!i)try{return await this._fetchImage(t,h)}catch(s){if(!o(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(r<3){const c=this._tileInfoView.getTileParentId(t.id);if(c){const m=new u(c),_=await this.fetchTile(m,{...e,resamplingLevel:r+1});return d(this._tileInfoView,_,m,t)}}throw s}const l=new u(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:h}),l.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,h)}catch(s){if(o(s))throw s;p=await this._fetchImage(t,h)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Gt=a;export{Gt as default};
