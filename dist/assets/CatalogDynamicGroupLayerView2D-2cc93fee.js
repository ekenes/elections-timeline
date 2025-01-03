import{r as n,q as l,w as $,ah as S,fH as U,gI as H,bU as I,gJ as _,$ as x,d2 as g}from"./index-02eff6e6.js";import{j as O,y as T}from"./LayerView-d36db7e7.js";import"./Container-d78f5667.js";const u=Symbol(),A=p=>{let r=class extends p{constructor(){super(...arguments),this.layerViews=new S,this._debouncedUpdate=U(async()=>{const{layer:e,parent:t}=this,i=t==null?void 0:t.footprintLayerView;let s=[];const d=this._createQuery();if(d&&i){const{features:h}=await i.queryFeatures(d);this.suspended||(s=h.map(c=>e.acquireLayer(c)))}this.removeHandles(u),this.addHandles(s,u)})}get creatingLayerViews(){var e;return((e=this.view)==null?void 0:e.layerViewManager.isCreatingLayerViewsForLayer(this.layer))??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(e=>e.updating)}enableLayerUpdates(){return H([this._updatingHandles.addWhen(()=>{var e,t;return((t=(e=this.parent)==null?void 0:e.footprintLayerView)==null?void 0:t.dataUpdating)===!1},()=>this.updateLayers()),this._updatingHandles.add(()=>{var e,t,i,s,d;return[this.layer.maximumVisibleSublayers,(e=this.layer.parent)==null?void 0:e.orderBy,(i=(t=this.parent)==null?void 0:t.footprintLayerView)==null?void 0:i.filter,(d=(s=this.parent)==null?void 0:s.footprintLayerView)==null?void 0:d.timeExtent,this.suspended]},()=>this.updateLayers()),I(()=>this.removeHandles(u))])}updateLayers(){this.suspended?this.removeHandles(u):this._updatingHandles.addPromise(_(this._debouncedUpdate()).catch(e=>{x.getLogger(this).error(e)}))}_createQuery(){var V,v;const e=(V=this.parent)==null?void 0:V.footprintLayerView,t=(v=this.layer)==null?void 0:v.parent;if(!e||!t||t.destroyed)return null;const{layer:{maximumVisibleSublayers:i},view:{scale:s}}=this;if(!i)return null;const{itemTypeField:d,itemSourceField:h,itemNameField:c,minScaleField:m,maxScaleField:f,objectIdField:b,orderBy:w}=t,C=g(`${m} IS NULL OR ${s} <= ${m} OR ${m} = 0`,`${f} IS NULL OR ${s} >= ${f}`),o=w==null?void 0:w.find(y=>y.field&&!y.valueExpression),a=e.createQuery();if(a.returnGeometry=!1,a.num=i,a.outFields=[b,h,c],a.where=g(a.where,C),this.unsupportedItemTypes!=null){const y=`${d} NOT IN (${this.unsupportedItemTypes.map(F=>`'${F}'`)})`;a.where=g(a.where,y)}return o!=null&&o.field&&(a.orderByFields=[`${o.field} ${o.order==="descending"?"DESC":"ASC"}`],a.outFields.push(o.field)),a}};return n([l({readOnly:!0})],r.prototype,"creatingLayerViews",null),n([l()],r.prototype,"layer",void 0),n([l()],r.prototype,"layerViews",void 0),n([l({readOnly:!0})],r.prototype,"unsupportedItemTypes",void 0),n([l()],r.prototype,"parent",void 0),n([l({readOnly:!0})],r.prototype,"isUpdating",null),r=n([$("esri.views.layers.CatalogDynamicGroupLayerView")],r),r};let L=class extends A(O(T)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new S}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(p){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((p,r)=>this.container.addChildAt(p.container,r))}};L=n([$("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],L);const D=L;export{D as default};