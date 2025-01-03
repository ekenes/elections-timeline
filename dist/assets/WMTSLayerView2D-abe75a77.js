import{am as h,cl as y,cm as w,cn as g,co as I,cp as p,c2 as f,$ as S,r as d,q as T,w as V}from"./index-02eff6e6.js";import{r as v,n as m}from"./imageUtils-ff5fa50e.js";import{j as x,y as q}from"./LayerView-d36db7e7.js";import{i as M}from"./RefreshableLayerView-25d4df13.js";import"./BitmapTechnique-d8d8de81.js";import"./Container-d78f5667.js";import"./Technique-ab058c0a.js";import"./GraphShaderModule-f9d77490.js";import"./BindType-d21d71dd.js";import"./Util-dd4663f8.js";import"./Program-99848a7b.js";import"./BufferObject-3b583792.js";import"./LabelMetric-d84c9df1.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-11b1375d.js";import"./ProgramTemplate-a13faaa7.js";import"./VertexArrayObject-98edc4cc.js";import"./vec3f32-ad1dc57f.js";import"./StyleDefinition-c67e7208.js";import"./config-1337d16e.js";import"./earcut-5a6c70eb.js";import"./featureConversionUtils-aa6583e8.js";import"./TileContainer-3b668984.js";const R=[0,0];let a=class extends M(v(x(q))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){var s;const{activeLayer:e}=this.layer,{tileMatrixSet:t}=e;if(t&&h((s=t.tileInfo)==null?void 0:s.spatialReference,this.view.spatialReference))return t;const i=this._getTileMatrixSetBySpatialReference(e);return i&&i.id!==e.tileMatrixSetId?(e.tileMatrixSetId=i.id,i):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new y(e),this._fetchQueue=new w({tileInfoView:this._tileInfoView,concurrency:16,process:(i,s)=>this.fetchTile(i,s),scheduler:this.scheduler,priority:g.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,s;return[(s=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:s.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var s;return h((s=i.tileInfo)==null?void 0:s.spatialReference,e)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:n=0}=t;if(!i)return this._fetchImage(e,s);const r=new p(0,0,0,0);let o;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),o=await this._fetchImage(r,s)}catch(l){if(f(l))throw l;if(n<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const u=new p(c),_=await this.fetchTile(u,{...t,resamplingLevel:n+1});return m(this._tileInfoView,_,u,e)}}throw l}return m(this._tileInfoView,o,r,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){f(t)||S.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){var t;return(t=e.tileMatrixSets)==null?void 0:t.find(i=>{var s;return h((s=i.tileInfo)==null?void 0:s.spatialReference,this.view.spatialReference)})}};d([T({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=d([V("esri.views.2d.layers.WMTSLayerView2D")],a);const Y=a;export{Y as default};