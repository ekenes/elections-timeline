import{a5 as s,a7 as p,A as r,B as a,F as m}from"./index-560772b3.js";import{a as n}from"./BitmapContainer-838afb01.js";import{f as h,y as d}from"./LayerView-66ec746c.js";import{_ as y}from"./ExportStrategy-47205936.js";import{i as c}from"./RefreshableLayerView-7058bae9.js";import"./WGLContainer-b92985b7.js";import"./definitions-f33e80b3.js";import"./LabelMetric-e5cabbab.js";import"./enums-fb32c1bb.js";import"./Texture-2049af6f.js";import"./enums-2e633670.js";import"./Program-1bed0bbf.js";import"./VertexElementDescriptor-2925c6af.js";import"./ProgramTemplate-b9442763.js";import"./vec3f32-ad1dc57f.js";import"./Container-2320f73b.js";import"./highlightReasons-362355b9.js";import"./StyleDefinition-df636448.js";import"./config-1337d16e.js";import"./earcut-243c9ad1.js";import"./featureConversionUtils-ca95abbe.js";import"./Bitmap-8679536f.js";let t=class extends c(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const V=t;export{V as default};