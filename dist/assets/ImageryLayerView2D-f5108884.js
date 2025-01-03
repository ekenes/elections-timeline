import{r as n,q as o,w as v,d1 as R,c2 as b,$ as _,ai as P,bo as V,fH as U,B,cv as f,hx as z,U as A,ez as T,s as F,a1 as C,g9 as O,Y as E,ck as L,f8 as S,ah as $,bU as q,a7 as M}from"./index-02eff6e6.js";import{d as j,f as H,a as N}from"./RasterVFDisplayObject-68b827ac.js";import{j as G,y as J}from"./LayerView-d36db7e7.js";import{E as W}from"./GraphicsView2D-8809fff6.js";import{h as Y}from"./HighlightGraphicContainer-53b9c2e0.js";import{M as K,m as Q,f as X}from"./dataUtils-4579a822.js";import{t as Z}from"./BitmapContainer-64852747.js";import{n as ee}from"./Container-d78f5667.js";import{l as te}from"./BitmapTechnique-d8d8de81.js";import{_ as ie}from"./ExportStrategy-b798841f.js";import{V as re,C as ae,O as se}from"./rasterProjectionHelper-e7904c0e.js";import{n as ne}from"./WGLContainer-11b1375d.js";import{i as oe}from"./timeSupport-0b9d01ce.js";import{p as le}from"./popupUtils-d22362f2.js";import{i as he}from"./RefreshableLayerView-25d4df13.js";import"./BufferObject-3b583792.js";import"./VertexArrayObject-98edc4cc.js";import"./VertexElementDescriptor-2925c6af.js";import"./LabelMetric-d84c9df1.js";import"./Program-99848a7b.js";import"./UpdateTracking2D-9382ce27.js";import"./BidiEngine-664145a5.js";import"./GeometryUtils-2ffbfd16.js";import"./rasterizingUtils-286ec3de.js";import"./floatRGBA-7569b6cb.js";import"./Rect-ea14f53a.js";import"./GraphShaderModule-f9d77490.js";import"./BindType-d21d71dd.js";import"./Util-dd4663f8.js";import"./OverrideHelper-6c639819.js";import"./quantizationUtils-75dcba1a.js";import"./AttributeStore-2c7fbf9b.js";import"./featureConversionUtils-aa6583e8.js";import"./queryUtils-60c4a6a9.js";import"./json-48e3ea08.js";import"./timeSupport-4d47519e.js";import"./FeatureCommandQueue-c39cbc74.js";import"./Technique-ab058c0a.js";import"./normalizeUtilsSync-734347b1.js";import"./dehydratedFeatures-f5766108.js";import"./AGraphicContainer-6366aa45.js";import"./TechniqueInstance-ced5da48.js";import"./TileContainer-3b668984.js";import"./vec3f32-ad1dc57f.js";import"./ProgramTemplate-a13faaa7.js";import"./StyleDefinition-c67e7208.js";import"./config-1337d16e.js";import"./earcut-5a6c70eb.js";let p=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ee,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Z}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new ie({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:i}=t;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=a=>this.layer.pixelFilter?this.layer.applyFilter(a):{...r,extent:i.extent}}).catch(t=>{b(t)||_.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const i=this.view.extent,r=t.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(i)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),a=K(r,i);return a!=null?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}async _fetchImage(t,i,r,a){var h;(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,a.returnImageBitmap=!0;const s=await this.layer.fetchImage(t,i,r,a);if(s.imageBitmap)return s.imageBitmap;const l=await this.layer.applyRenderer(s.pixelData,{signal:a.signal}),m=new te(l.pixelBlock,(h=l.extent)==null?void 0:h.clone(),s.pixelData.pixelBlock);return m.filter=c=>this.layer.applyFilter(c),m}};n([o()],p.prototype,"attached",void 0),n([o()],p.prototype,"container",void 0),n([o()],p.prototype,"layer",void 0),n([o()],p.prototype,"strategy",void 0),n([o()],p.prototype,"timeExtent",void 0),n([o()],p.prototype,"view",void 0),n([o()],p.prototype,"updateRequested",void 0),n([o()],p.prototype,"updating",null),n([o()],p.prototype,"type",void 0),p=n([v("esri.views.2d.layers.imagery.ImageryView2D")],p);const pe=p;class ce extends ne{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[j],target:()=>this.children,drawPhase:V.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===V.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=U((t,i)=>this._update(t,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:a}=e.state,s=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,m]=e.state.size;this._loading=this.fetchPixels(s,l,m,i);const h=await this._loading;this._addToDisplay(h,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=e,s=new H(a);s.offset=[0,0],s.symbolizerParameters=t,s.rawPixelData=e,s.invalidateVAO(),s.x=r.xmin,s.y=r.ymax,s.pixelRatio=i.pixelRatio,s.rotation=i.rotation,s.resolution=i.resolution,s.width=a.width*t.symbolTileSize,s.height=a.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(s)}};n([o()],y.prototype,"fetchPixels",void 0),n([o()],y.prototype,"container",void 0),n([o()],y.prototype,"_loading",void 0),n([o()],y.prototype,"updating",null),y=n([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const de=y;let d=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ce,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:s}=this.layer.renderer,{extent:l,width:m,height:h}=Q(e,t,i,s,a);if(a!=null&&!a.intersects(e))return{extent:l,pixelBlock:null};const c={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:s,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===c.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,m,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=c;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?X(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new de({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),z),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{b(t)||_.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&r&&a}async _getProjectedFullExtent(e){try{return re(this.layer.fullExtent,e)}catch{try{const i=(await A(this.layer.url,{query:{option:"footprints",outSR:T(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){(e==null?void 0:e.type)==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};n([o()],d.prototype,"attached",void 0),n([o()],d.prototype,"container",void 0),n([o()],d.prototype,"layer",void 0),n([o()],d.prototype,"timeExtent",void 0),n([o()],d.prototype,"type",void 0),n([o()],d.prototype,"view",void 0),n([o()],d.prototype,"updating",null),d=n([v("esri.views.2d.layers.imagery.VectorFieldView2D")],d);const me=d,ue=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){var i;return oe(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,r){const{layer:a}=this;if(!i)throw new F("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:s}=a,l=le(a,r);if(!s||l==null)return[];const m=await l.getRequiredFields();C(r);const h=new O;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=m,h.outSpatialReference=i.spatialReference;const{resolution:c,spatialReference:g}=this.view,x=this.view.type==="2d"?new E(c,c,g):new E(.5*c,.5*c,g),{returnTopmostRaster:u,showNoDataRecords:D}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:D,signal:r==null?void 0:r.signal};return a.queryVisibleRasters(h,k).then(I=>I)}async getSourceScale(){return await ae(),await this.layer.load(),se(this.layer.serviceRasterInfo,this.view.spatialReference)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return n([o()],t.prototype,"layer",void 0),n([o()],t.prototype,"suspended",void 0),n([o({readOnly:!0})],t.prototype,"timeExtent",null),n([o()],t.prototype,"view",void 0),t=n([v("esri.views.layers.ImageryLayerView")],t),t};let w=class extends ue(he(G(J))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new L,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new W({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Y(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},S),f(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},S),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:$.isCollection(e)?e.at(0):e)instanceof P))return q();let i=[];return Array.isArray(e)||$.isCollection(e)?i=e.map(r=>r.clone()):e instanceof P&&(i=[e.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var t,i;const e=!this.subview||this.subview.updating||!!((t=this._highlightView)!=null&&t.updating);return M("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),e}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:a}=this.subview;if(a===t)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new pe({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new me({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new N({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};n([o()],w.prototype,"pixelData",null),n([o()],w.prototype,"subview",void 0),w=n([v("esri.views.2d.layers.ImageryLayerView2D")],w);const pt=w;export{pt as default};