import{a5 as s,a7 as p,A as r,B as a,F as m}from"./index-fc6a9042.js";import{a as n}from"./BitmapContainer-5fd0c0be.js";import{f as h,y as d}from"./LayerView-412a82b8.js";import{_ as y}from"./ExportStrategy-d95273b9.js";import{i as c}from"./RefreshableLayerView-03cfc6a3.js";import"./WGLContainer-b3b47aca.js";import"./definitions-f33e80b3.js";import"./LabelMetric-d3265a20.js";import"./enums-fb32c1bb.js";import"./Texture-4e202653.js";import"./enums-2e633670.js";import"./Program-81dfa525.js";import"./VertexElementDescriptor-2925c6af.js";import"./ProgramTemplate-54a71a54.js";import"./vec3f32-ad1dc57f.js";import"./Container-36caf941.js";import"./highlightReasons-202f1743.js";import"./StyleDefinition-df636448.js";import"./config-1337d16e.js";import"./earcut-8b67ab42.js";import"./featureConversionUtils-eabf19f1.js";import"./Bitmap-67737e88.js";let t=class extends c(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const V=t;export{V as default};