import{x as i,z as t,b5 as h,q as l,w as d}from"./index-5bdaa4d1.js";const f=s=>{let e=class extends s{initialize(){this.addHandles(h(()=>this.layer,"refresh",r=>{this.doRefresh(r.dataChanged).catch(a=>{l(a)||d.getLogger(this).error(a)})}),"RefreshableLayerView")}};return e=i([t("esri.views.layers.RefreshableLayerView")],e),e};export{f as i};
