import{G as u,V as f,R as w,m as o,z as p,L as y,t as _,w as V}from"./index-de9e02e1.js";import{h as v}from"./Container-de4603ec.js";import{r as C}from"./GroupContainer-47de31d1.js";import{f as H,d as b}from"./LayerView-09074446.js";import{i as c}from"./GraphicContainer-1d2b7435.js";import{o as g}from"./GraphicsView2D-a0637699.js";import"./definitions-e16dc41c.js";import"./enums-b14466b3.js";import"./Texture-f6c58d0d.js";import"./WGLContainer-cd1e8fbd.js";import"./VertexArrayObject-367ef1ba.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a4e48bf2.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-a08fbdcf.js";import"./GeometryUtils-2ba17613.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-0b70cd4d.js";import"./featureConversionUtils-a956fd80.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BaseGraphicContainer-85c9fab9.js";import"./FeatureContainer-bc0e1379.js";import"./AttributeStoreView-f36593a4.js";import"./TiledDisplayObject-cbede528.js";import"./visualVariablesUtils-2953d97f.js";import"./ExpandedCIM-bb6a98bc.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-fcb117b7.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8ff9218d.js";import"./floatRGBA-39af9b51.js";import"./util-51d01e09.js";import"./TileContainer-ea8cb7f6.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtils-9deeb3c4.js";import"./normalizeUtilsCommon-3579e597.js";import"./utils-5b434a69.js";import"./normalizeUtilsSync-626d7f27.js";import"./projectionSupport-8ab1c9df.js";import"./json-48e3ea08.js";import"./Matcher-4be56039.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-5c2fb6f2.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-d93f788e.js";import"./ComputedAttributeStorage-d445d827.js";import"./arcadeTimeUtils-161f6392.js";import"./executionError-c92d3b85.js";const m="sublayers",n="layerView",T=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends H(b){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new C}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):T}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new c(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([o(()=>s.visible,a=>r.container.visible=a,p),o(()=>r.updating,()=>this.notifyChange("updating"),p)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new v,r=new c(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",a.graphicUpdateHandler),o(()=>s.visible,d=>a.container.visible=d,p),o(()=>a.updating,()=>this.notifyChange("updating"),p)],n),h.addChild(a.container),this.container.addChild(h),i.push(a)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const Hi=l;export{Hi as default};
