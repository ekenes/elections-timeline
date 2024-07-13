import{x as n,y as o,z as v,bv as R,q as b,w as _,I as P,eH as I,b4 as D,A as f,gb as z,U as T,ee as F,s as U,dj as C,f1 as L,ao as V,k as M,eK as E,V as $,o as S,af as O}from"./index-5bdaa4d1.js";import{d as H,f as j,a as N}from"./RasterVFDisplayObject-21ca8595.js";import{f as G,y as J}from"./LayerView-38297c4f.js";import{V as W}from"./GraphicsView2D-143e180a.js";import{h as K}from"./HighlightGraphicContainer-926c13ba.js";import{M as Q,m as X,f as Y}from"./dataUtils-a24c5096.js";import{a as Z}from"./BitmapContainer-aba84a94.js";import{h as ee,E as q}from"./Container-63c8a627.js";import{l as te}from"./Bitmap-67c5c475.js";import{_ as ie}from"./ExportStrategy-9faa7ee3.js";import{J as re}from"./rasterProjectionHelper-4cf246b1.js";import{n as se}from"./WGLContainer-ce0f5abc.js";import{i as ae}from"./timeSupport-fe50eb12.js";import{p as ne}from"./popupUtils-bbaa83ee.js";import{i as oe}from"./RefreshableLayerView-2810c52d.js";import"./Program-c7bb1576.js";import"./Texture-220394b4.js";import"./enums-2e633670.js";import"./ProgramTemplate-6e9f21d3.js";import"./VertexElementDescriptor-2925c6af.js";import"./LabelMetric-087ac54c.js";import"./enums-fb32c1bb.js";import"./UpdateTracking2D-566a65fd.js";import"./BidiEngine-26aff129.js";import"./GeometryUtils-ec854d53.js";import"./definitions-f33e80b3.js";import"./Rect-ea14f53a.js";import"./BindType-d21d71dd.js";import"./Util-a794de10.js";import"./highlightReasons-840a76c9.js";import"./AttributeStore-a93b55e7.js";import"./TimeOnly-1ac4a567.js";import"./timeSupport-e43eb43a.js";import"./featureConversionUtils-8131e980.js";import"./json-48e3ea08.js";import"./FeatureCommandQueue-22ed79bc.js";import"./constants-991354c8.js";import"./normalizeUtilsSync-5e639f1d.js";import"./AGraphicContainer-b4e0e06c.js";import"./TechniqueInstance-fb29d95e.js";import"./TileContainer-3d4a9a65.js";import"./vec3f32-ad1dc57f.js";import"./StyleDefinition-df636448.js";import"./config-1337d16e.js";import"./earcut-ab02106a.js";let p=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ee,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Z}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new ie({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:i}=t;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=s=>this.layer.pixelFilter?this.layer.applyFilter(s):{...r,extent:i.extent}}).catch(t=>{b(t)||_.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const i=this.view.extent,r=t.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(i)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),s=Q(r,i);return s!=null?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(t,i,r,s){var h;(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const a=await this.layer.fetchImage(t,i,r,s);if(a.imageBitmap)return a.imageBitmap;const l=await this.layer.applyRenderer(a.pixelData,{signal:s.signal}),m=new te(l.pixelBlock,(h=l.extent)==null?void 0:h.clone(),a.pixelData.pixelBlock);return m.filter=d=>this.layer.applyFilter(d),m}};n([o()],p.prototype,"attached",void 0),n([o()],p.prototype,"container",void 0),n([o()],p.prototype,"layer",void 0),n([o()],p.prototype,"strategy",void 0),n([o()],p.prototype,"timeExtent",void 0),n([o()],p.prototype,"view",void 0),n([o()],p.prototype,"updateRequested",void 0),n([o()],p.prototype,"updating",null),n([o()],p.prototype,"type",void 0),p=n([v("esri.views.2d.layers.imagery.ImageryView2D")],p);const le=p;class he extends se{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[H],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=I((t,i)=>this._update(t,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,a=new D({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,m]=e.state.size;this._loading=this.fetchPixels(a,l,m,i);const h=await this._loading;this._addToDisplay(h,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,a=new j(s);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=r.xmin,a.y=r.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=s.width*t.symbolTileSize,a.height=s.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(a)}};n([o()],y.prototype,"fetchPixels",void 0),n([o()],y.prototype,"container",void 0),n([o()],y.prototype,"_loading",void 0),n([o()],y.prototype,"updating",null),y=n([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pe=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:l,width:m,height:h}=X(e,t,i,a,s);if(s!=null&&!s.intersects(e))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,m,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Y(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pe({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),z),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{b(t)||_.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return re(this.layer.fullExtent,e)}catch{try{const i=(await T(this.layer.url,{query:{option:"footprints",outSR:F(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?D.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};n([o()],c.prototype,"attached",void 0),n([o()],c.prototype,"container",void 0),n([o()],c.prototype,"layer",void 0),n([o()],c.prototype,"timeExtent",void 0),n([o()],c.prototype,"type",void 0),n([o()],c.prototype,"view",void 0),n([o()],c.prototype,"updating",null),c=n([v("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const de=c,ce=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){var i;return ae(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,r){const{layer:s}=this;if(!i)throw new U("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:a}=s,l=ne(s,r);if(!a||l==null)return[];const m=await l.getRequiredFields();C(r);const h=new L;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=m,h.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:g}=this.view,x=this.view.type==="2d"?new V(d,d,g):new V(.5*d,.5*d,g),{returnTopmostRaster:u,showNoDataRecords:B}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:B,signal:r==null?void 0:r.signal};return s.queryVisibleRasters(h,k).then(A=>A)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return n([o()],t.prototype,"layer",void 0),n([o()],t.prototype,"suspended",void 0),n([o({readOnly:!0})],t.prototype,"timeExtent",null),n([o()],t.prototype,"view",void 0),t=n([v("esri.views.layers.ImageryLayerView")],t),t};let w=class extends ce(oe(G(J))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new M,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new W({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new K(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},E),f(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},E),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:$.isCollection(e)?e.at(0):e)instanceof P))return S();let i=[];return Array.isArray(e)||$.isCollection(e)?i=e.map(r=>r.clone()):e instanceof P&&(i=[e.clone()]),this._highlightGraphics.addMany(i),S(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var t,i;const e=!this.subview||this.subview.updating||!!((t=this._highlightView)!=null&&t.updating);return O("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),e}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:s}=this.subview;if(s===t)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new de({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new N({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};n([o()],w.prototype,"pixelData",null),n([o()],w.prototype,"subview",void 0),w=n([v("esri.views.2d.layers.ImageryLayerView2D")],w);const at=w;export{at as default};
