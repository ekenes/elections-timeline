import{B as a,C as o,V as g,k as m,e as s,n as p,q as l,t as c}from"./index-a1a1303e.js";import{f as n,d}from"./LayerView-4b9ba24f.js";import{i as u}from"./GraphicContainer-3a7265c1.js";import{r as w}from"./GraphicsView2D-b79c33f9.js";import"./Container-e3c6af12.js";import"./definitions-b00ef347.js";import"./enums-b14466b3.js";import"./Texture-fc7a8be8.js";import"./color-9de7f8d3.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-0aa91f3b.js";import"./FeatureContainer-d4a6feab.js";import"./AttributeStoreView-918b05bb.js";import"./TiledDisplayObject-c4519d10.js";import"./WGLContainer-cbf7742d.js";import"./FramebufferObject-007f2c98.js";import"./ProgramTemplate-93bed428.js";import"./GeometryUtils-9091031e.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-6b045d10.js";import"./featureConversionUtils-b3c52e9d.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-75e963c5.js";import"./ExpandedCIM-c4b6b32c.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-2a399e3e.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a42981a8.js";import"./floatRGBA-226aef0b.js";import"./util-cf5e9e77.js";import"./TileContainer-c8f28a16.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-c108bf05.js";import"./projectionSupport-a0bdfc56.js";import"./json-48e3ea08.js";import"./Matcher-9e7b30c8.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-33a8836c.js";import"./ComputedAttributeStorage-1a3224d7.js";import"./TimeOnly-36610d4e.js";import"./arcadeTimeUtils-13bc9096.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=a(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof o?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):g.isCollection(i)&&i.length>0&&(t=i.map(r=>r&&r.uid).toArray());const h=t==null?void 0:t.filter(m);return h!=null&&h.length?(this._addHighlight(h),s(()=>this._removeHighlight(h))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const h=this._highlightIds.get(t);this._highlightIds.set(t,h+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const h=this._highlightIds.get(t)-1;h===0?this._highlightIds.delete(t):this._highlightIds.set(t,h)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([l()],e.prototype,"graphicsView",void 0),e=p([c("esri.views.2d.layers.GraphicsLayerView2D")],e);const oi=e;export{oi as default};
