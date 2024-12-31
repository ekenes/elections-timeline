import{aZ as u,aY as f,O as w,a4 as c,by as a,bz as o,br as y,A as _,F as V}from"./index-fc6a9042.js";import{t as v}from"./highlightReasons-202f1743.js";import{f as b,y as C}from"./LayerView-412a82b8.js";import{t as g}from"./GraphicContainer-c5d748f1.js";import{V as d}from"./GraphicsView2D-f2037a51.js";import"./Container-36caf941.js";import"./definitions-f33e80b3.js";import"./enums-2e633670.js";import"./Texture-4e202653.js";import"./AGraphicContainer-0310512f.js";import"./TechniqueInstance-daf4ae43.js";import"./UpdateTracking2D-bb405758.js";import"./BidiEngine-26aff129.js";import"./GeometryUtils-7c36778f.js";import"./enums-fb32c1bb.js";import"./Rect-ea14f53a.js";import"./LabelMetric-d3265a20.js";import"./Program-81dfa525.js";import"./VertexElementDescriptor-2925c6af.js";import"./BindType-d21d71dd.js";import"./Util-9520c612.js";import"./TileContainer-752959f7.js";import"./WGLContainer-b3b47aca.js";import"./ProgramTemplate-54a71a54.js";import"./vec3f32-ad1dc57f.js";import"./StyleDefinition-df636448.js";import"./config-1337d16e.js";import"./earcut-8b67ab42.js";import"./featureConversionUtils-eabf19f1.js";import"./FeatureCommandQueue-1c6caf88.js";import"./constants-991354c8.js";import"./AttributeStore-d026341f.js";import"./TimeOnly-b4fd9a3f.js";import"./timeSupport-a1a26a23.js";import"./json-48e3ea08.js";import"./normalizeUtilsSync-372688c1.js";const m="sublayers",l="layerView";let n=class extends b(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:h});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=v("highlight");for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const ai=n;export{ai as default};