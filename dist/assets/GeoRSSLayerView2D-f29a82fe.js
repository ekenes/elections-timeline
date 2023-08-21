import{l,f as h,V as g,k as f,a as w,c as d}from"./index-ee4f50bd.js";import{t as u,p as n}from"./jsonUtils-74f8db4e.js";import{d as V}from"./FeatureSet-0efa5877.js";import{f as b,d as S}from"./LayerView-dce66400.js";import{i as _}from"./GraphicContainer-28a74401.js";import{o as T}from"./GraphicsView2D-88623dd9.js";import"./UniqueValueRenderer-a5623276.js";import"./LegendOptions-417f0204.js";import"./diffUtils-de02d0fa.js";import"./SizeVariable-2679a0ff.js";import"./colorRamps-5f43d00d.js";import"./lengthUtils-e9b31b12.js";import"./ColorStop-d3e9f05c.js";import"./featureFlags-c091f4ff.js";import"./styleUtils-c573bb28.js";import"./DictionaryLoader-f3ff6942.js";import"./LRUCache-bb6160eb.js";import"./Version-eb4ced9c.js";import"./FieldsIndex-247aa784.js";import"./heatmapUtils-117ed7c9.js";import"./vec4f64-aa64c7e9.js";import"./Field-e1e55903.js";import"./fieldType-45f5bea8.js";import"./Container-e7a0bd03.js";import"./parser-c18899b3.js";import"./definitions-a2b23ed5.js";import"./enums-b14466b3.js";import"./Texture-c4e6d56d.js";import"./color-8bdae8be.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-75ad1953.js";import"./FeatureContainer-9e93f577.js";import"./AttributeStoreView-2e5d643e.js";import"./TiledDisplayObject-77b0039b.js";import"./LabelClass-3df682d7.js";import"./labelUtils-62b85608.js";import"./defaultsJSON-b087dd4d.js";import"./labelingInfo-ba648f1b.js";import"./WGLContainer-54c2e1cf.js";import"./VertexArrayObject-f71e54a8.js";import"./ProgramTemplate-c733f4e8.js";import"./GeometryUtils-06ee9ba8.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-3b327a67.js";import"./featureConversionUtils-e5238a3e.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-db78aead.js";import"./ExpandedCIM-18942485.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-487dda87.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-1f3c3d8e.js";import"./floatRGBA-557046f2.js";import"./clusterUtils-fd02cec7.js";import"./util-8413d46d.js";import"./TileContainer-a0a4af60.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtils-7a70564e.js";import"./normalizeUtilsCommon-527157a0.js";import"./utils-21f560fb.js";import"./normalizeUtilsSync-9b67be44.js";import"./projectionSupport-aaadc5c7.js";import"./json-48e3ea08.js";import"./Matcher-104864bb.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c8835fee.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-4f0586e6.js";import"./ComputedAttributeStorage-b0ab77a6.js";import"./arcadeTimeUtils-6bcdca73.js";import"./executionError-c92d3b85.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,o){if(!this.graphicsViews.length)return null;const e=this.layer;return this.graphicsViews.reverse().map(r=>{const t=this._popupTemplates.get(r),m=r.hitTest(i);for(const p of m)p.layer=e,p.sourceLayer=e,p.popupTemplate=t;return m}).flat().map(r=>({type:"graphic",graphic:r,layer:e,mapPoint:i}))}update(i){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:o,featureSet:e,layerDefinition:r}of i){const t=V.fromJSON(e),m=new g(t.features),p=r.drawingInfo,c=o?f.fromJSON(o):null,s=u(p.renderer),a=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:m,renderer:s,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=a,this._popupTemplates.set(a,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=w([d("esri.views.2d.layers.GeoRSSLayerView2D")],y);const zi=y;export{zi as default};