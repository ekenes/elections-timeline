import{ci as p,S as l,bY as o,bZ as g,a as u,c0 as _,n as d,s as f}from"./index-de9e02e1.js";import{r as w,s as E}from"./featureConversionUtils-a956fd80.js";import{m as q}from"./FeatureStore-a05957f6.js";import{g as F,f as S}from"./projectionSupport-8ab1c9df.js";import{e as x}from"./QueryEngine-c7f58b88.js";import{T,I as b}from"./geojson-be8a401b.js";import{d as I}from"./sourceUtils-a74e69d7.js";import{H as j}from"./wfsUtils-324a29ec.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BoundsStore-584404bc.js";import"./PooledRBush-55ca996e.js";import"./timeSupport-a43e48ef.js";import"./normalizeUtils-9deeb3c4.js";import"./normalizeUtilsCommon-3579e597.js";import"./utils-5b434a69.js";import"./json-48e3ea08.js";import"./WhereClause-26bfc530.js";import"./executionError-c92d3b85.js";import"./QueryEngineCapabilities-42e44ded.js";import"./quantizationUtils-8ff9218d.js";import"./utils-e643a5bb.js";import"./generateRendererUtils-dbdc12ad.js";import"./xmlUtils-444cb4c0.js";class ee{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await j(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await T(s),p(e);const a=b(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,o))for(const r of a)r.geometry!=null&&(r.geometry=w(F(E(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};I(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:h,objectIdField:y,customParameters:m}=e;this._featureType=h,this._customParameters=m,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new g(r),await this._checkProjection(n),p(t),this._queryEngine=new x({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new q({geometryType:i,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(t.signal);return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=_(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),d(s)||f.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await S(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{ee as default};