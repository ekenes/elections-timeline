import{A as t,B as a,F as n,aY as l}from"./index-f5007bd6.js";import{f as y,y as d}from"./LayerView-83e8994e.js";import"./Container-ba803f6a.js";import"./highlightReasons-31a2d5fd.js";import"./definitions-f33e80b3.js";import"./enums-2e633670.js";import"./Texture-8ec90cff.js";const p=o=>{let e=class extends o{constructor(...i){super(...i),this.layerViews=new l}get dynamicGroupLayerView(){return this.layerViews.find(i=>{var r;return i.layer===((r=this.layer)==null?void 0:r.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(i=>{var r;return i.layer===((r=this.layer)==null?void 0:r.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return t([a()],e.prototype,"layer",void 0),t([a()],e.prototype,"layerViews",void 0),t([a({readOnly:!0})],e.prototype,"dynamicGroupLayerView",null),t([a({readOnly:!0})],e.prototype,"footprintLayerView",null),e=t([n("esri.views.layers.CatalogLayerView")],e),e};let s=class extends p(y(d)){constructor(){super(...arguments),this.layerViews=new l}update(o){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((o,e)=>this.container.addChildAt(o.container,e))}};t([a()],s.prototype,"layerViews",void 0),s=t([n("esri.views.2d.layers.CatalogLayerView2D")],s);const f=s;export{f as default};