import{C as f,V as w,k as y,e as c,v as o,P as p,I as _,n as V,t as v}from"./index-a1a1303e.js";import{h as C}from"./Container-e3c6af12.js";import{r as H}from"./GroupContainer-e35ac4e5.js";import{f as b,d as I}from"./LayerView-4b9ba24f.js";import{i as g}from"./GraphicContainer-3a7265c1.js";import{r as d}from"./GraphicsView2D-b79c33f9.js";import"./definitions-b00ef347.js";import"./enums-b14466b3.js";import"./Texture-fc7a8be8.js";import"./WGLContainer-cbf7742d.js";import"./FramebufferObject-007f2c98.js";import"./ProgramTemplate-93bed428.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-9de7f8d3.js";import"./enums-f1a6a48a.js";import"./GeometryUtils-9091031e.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-6b045d10.js";import"./featureConversionUtils-b3c52e9d.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BaseGraphicContainer-0aa91f3b.js";import"./FeatureContainer-d4a6feab.js";import"./AttributeStoreView-918b05bb.js";import"./TiledDisplayObject-c4519d10.js";import"./visualVariablesUtils-75e963c5.js";import"./ExpandedCIM-c4b6b32c.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-2a399e3e.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a42981a8.js";import"./floatRGBA-226aef0b.js";import"./util-cf5e9e77.js";import"./TileContainer-c8f28a16.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-c108bf05.js";import"./projectionSupport-a0bdfc56.js";import"./json-48e3ea08.js";import"./Matcher-9e7b30c8.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-33a8836c.js";import"./ComputedAttributeStorage-1a3224d7.js";import"./TimeOnly-36610d4e.js";import"./arcadeTimeUtils-13bc9096.js";const m="sublayers",n="layerView";let l=class extends b(I){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new H}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):w.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(y);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([o(()=>s.visible,a=>r.container.visible=a,p),o(()=>r.updating,()=>this.notifyChange("updating"),p)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(_(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new C,r=new g(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",a.graphicUpdateHandler),o(()=>s.visible,u=>a.container.visible=u,p),o(()=>a.updating,()=>this.notifyChange("updating"),p)],n),h.addChild(a.container),this.container.addChild(h),i.push(a)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=V([v("esri.views.2d.layers.MapNotesLayerView2D")],l);const yi=l;export{yi as default};
