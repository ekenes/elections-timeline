import{eC as k,x as M,a as O,b as x,c as C,ej as j,d9 as D,v as N,a1 as g,R as v,aR as U,aC as L,cL as P,aY as Q,by as J,_ as G,T as E,eD as V,bb as H,a6 as W,ax as Y,ay as z,eE as $,eF as X,s as I,eG as Z,N as B,j as K,aJ as ee,eH as te}from"./index-ee4f50bd.js";import{e as se}from"./mat4f64-1413b4a7.js";import{m as ae}from"./MeshGeoreferencedRelativeVertexSpace-de717c36.js";import{r as re}from"./vec32-9ab6f0a8.js";import{A as ie}from"./External-c2b729a7.js";import{isFeatureIdentifierArrayWithGlobalId as ne,isFeatureIdentifierArrayWithObjectId as oe}from"./editingSupport-539fd966.js";import{o as ue}from"./clientSideDefaults-56672e8d.js";import{x as le}from"./QueryTask-c2d5d6c6.js";import{s as de}from"./executeQueryJSON-a3ee9c6d.js";import{i as ce}from"./editsZScale-dc9b87a9.js";import{b as pe}from"./Query-639ad700.js";import"./normalizeUtils-7a70564e.js";import"./normalizeUtilsCommon-527157a0.js";import"./utils-21f560fb.js";import"./EditBusLayer-4984298f.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./executeForIds-bc8d2a1c.js";import"./query-b0550d69.js";import"./pbfQueryUtils-1672999e.js";import"./pbf-c01caecc.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-57cbab0b.js";import"./executeQueryPBF-a8d3fee1.js";import"./featureConversionUtils-e5238a3e.js";import"./FeatureSet-0efa5877.js";import"./Field-e1e55903.js";import"./fieldType-45f5bea8.js";function he(t){const{vertexSpace:e}=t;if(e.isRelative)return t.clone();const{anchor:a}=t,s=a.clone(),r=k(ye,[-s.x,-s.y,-s.z]),u=new ae({origin:[s.x,s.y,s.z]}),i=t.cloneWithVertexSpace(u),{position:l}=i.vertexAttributes;return i.vertexAttributes.position=re(new Float64Array(l.length),l,r),i.vertexAttributesChanged(),i}const ye=se(),me=new M({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),ge=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),fe=new M({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let S=class extends j{constructor(){super(...arguments),this.type="feature-layer",this.refresh=D(async()=>{var a,s;await this.load();const t=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=t!=null?t.signal:null,a=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(a,e)),Promise.resolve(this)}get queryTask(){var c;const{capabilities:t,parsedUrl:e,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:u,fieldsIndex:i}=this.layer,l=N("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&s==null,n=((c=t==null?void 0:t.operations)==null?void 0:c.supportsQueryAttachments)??!1;return new le({url:e.path,pbfSupported:l,fieldsIndex:i,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:u,queryAttachmentsSupported:n})}async addAttachment(t,e){await this.load();const a=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/addAttachment",r=this._getLayerRequestOptions(),u=this._getFormDataForAttachment(e,r.query);try{const i=await g(s,{body:u});return this._createFeatureEditResult(i.data.addAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(a,i)}}async updateAttachment(t,e,a){await this.load();const s=t.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",u=this._getLayerRequestOptions({query:{attachmentId:e}}),i=this._getFormDataForAttachment(a,u.query);try{const l=await g(r,{body:i});return this._createFeatureEditResult(l.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(s,l)}}async applyEdits(t,e){var _,q,R,w,A,T;await this.load();const{layer:a}=this,s=a.infoFor3D,r=s!=null,u=r||((e==null?void 0:e.globalIdUsed)??!1),i=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,l=((_=t.addFeatures)==null?void 0:_.map(F=>this._getFeatureJSON(F,s)))??[],n=(await Promise.all(l)).filter(v),c=((q=t.updateFeatures)==null?void 0:q.map(F=>this._getFeatureJSON(F,s)))??[],h=(await Promise.all(c)).filter(v),y=this._getFeatureIds(t.deleteFeatures,u);ce(n,h,a.spatialReference);const p=await this._getAttachmentEditsJSON(t),b=a.capabilities.editing.supportsAsyncApplyEdits&&r,o={gdbVersion:(e==null?void 0:e.gdbVersion)||a.gdbVersion,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:u,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,sessionId:e==null?void 0:e.sessionId,async:b};e!=null&&e.returnServiceEditsOption?(o.edits=JSON.stringify([{id:a.layerId,adds:n,updates:h,deletes:y,attachments:p,assetMaps:i}]),o.returnServiceEditsOption=me.toJSON(e==null?void 0:e.returnServiceEditsOption),o.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(o.adds=n.length?JSON.stringify(n):null,o.updates=h.length?JSON.stringify(h):null,o.deletes=y.length?u?JSON.stringify(y):y.join(","):null,o.attachments=p&&JSON.stringify(p),o.assetMaps=i!=null?JSON.stringify(i):void 0);const d=this._getLayerRequestOptions({method:"post",query:o}),m=e!=null&&e.returnServiceEditsOption?a.url:a.parsedUrl.path,f=b?await this._asyncApplyEdits(m+"/applyEdits",d):await g(m+"/applyEdits",d);if(!((R=a.capabilities.operations)!=null&&R.supportsEditing)&&((A=(w=a.effectiveCapabilities)==null?void 0:w.operations)!=null&&A.supportsEditing)){const F=(T=U)==null?void 0:T.findCredential(a.url);await(F==null?void 0:F.refreshToken())}return this._createEditsResult(f)}async deleteAttachments(t,e){await this.load();const a=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await g(s,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(r){throw this._createAttachmentErrorResult(a,r)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const a=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:u}=await g(`${r}/${s}`,a),{id:i,extent:l,fullExtent:n,timeExtent:c}=u,h=l||n;return{id:i,fullExtent:h&&L.fromJSON(h),timeExtent:c&&P.fromJSON({start:c[0],end:c[1]})}})}async queryAttachments(t,e={}){await this.load();const a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!Q(this.layer.url))return"unavailable";const t=J(this.layer.url,"status"),e=await g(t,{query:{f:"json"}});return fe.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:a}=await G(()=>import("./uploadAssets-04bc2f2c.js"),["assets/uploadAssets-04bc2f2c.js","assets/index-ee4f50bd.js","assets/External-c2b729a7.js"]);return a(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(t,e){const a=(await g(t,e)).data.statusUrl;for(;;){const s=(await g(a,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return g(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new E("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new E("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await V(Re)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:s}=await g(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:N("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=s}this.sourceJSON=await this._patchServiceJSON(t,e);const a=t.type;if(!ge.has(a))throw new E("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){var a;if(t.type!=="Table"&&t.geometryType&&!((a=t==null?void 0:t.drawingInfo)!=null&&a.renderer)&&!t.defaultSymbol){const s=ue(t.geometryType).renderer;H("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await g(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){W(s)}return t}async _getFeatureJSON(t,e){const{geometry:a}=t,s={...t.attributes};if(e!=null&&(a==null?void 0:a.type)==="mesh"){const{transformFieldRoles:r}=e,{origin:u,spatialReference:i,transform:l}=a,n=this.layer.spatialReference;await Y(i,n);const c=z(u,n);if(s[r.originX]=c.x,s[r.originY]=c.y,s[r.originZ]=c.z??0,l!=null){const{translation:h,scale:y,rotation:p}=l,{vertexSpace:b}=a,o=b.isGeoreferenced?1:$(i)/$(n);s[r.translationX]=h[0]*o,s[r.translationY]=-h[2]*o,s[r.translationZ]=h[1]*o,s[r.scaleX]=y[0],s[r.scaleY]=y[2],s[r.scaleZ]=y[1],s[r.rotationX]=p[0],s[r.rotationY]=p[2],s[r.rotationZ]=p[1],s[r.rotationDeg]=p[3]}return{geometry:null,attributes:s}}return a==null?{attributes:s}:a.type==="mesh"||a.type==="extent"?null:{geometry:a.toJSON(),attributes:s}}async _getAttachmentEditsJSON(t){const e=await Promise.all((t.addAttachments??[]).map(r=>this._getAttachmentEditJSON(r))),a=await Promise.all((t.updateAttachments??[]).map(r=>this._getAttachmentEditJSON(r))),s=t.deleteAttachments??[];return e.length||a.length||s.length?{adds:e,updates:a,deletes:[...s]}:null}async _getAttachmentEditJSON(t){const{feature:e,attachment:a}=t,{globalId:s,name:r,contentType:u,data:i,uploadId:l}=a,n={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(n.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),l)n.uploadId=l;else if(i){const c=await X(i);c&&(n.contentType=c.mediaType,n.data=c.data),i instanceof File&&(n.name=i.name)}return r&&(n.name=r),u&&(n.contentType=u),n}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length))return null;const a=await this._filterRedundantAssetMaps(e);if(!(e!=null&&e.length))return null;const s=new Array,r=new Map;for(const u of a){const{geometry:i}=u,{vertexSpace:l}=i;if(l.isRelative)s.push(i);else{const n=he(i);r.set(n,i),u.geometry=n,s.push(n)}}await this.uploadAssets(s);for(const[u,i]of r)i.addExternalSources(u.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,a=this.layer.globalIdField,s=this.layer.parsedUrl;for(const r of t){const u=r.geometry,{metadata:i}=u,l=i.getExternalSourcesOnService(s),n=r.getAttribute(a);if(l.length===0){I.getLogger(this).error(`Skipping feature ${n}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:c}=l.find(ie)??l[0],{vertexSpace:h}=u,y=h.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const p of c)p.parts.length===1?e.push({globalId:Z(),parentGlobalId:n,assetName:p.assetName,assetHash:p.parts[0].partHash,flags:y}):I.getLogger(this).error(`Skipping asset ${p.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_getFeatureIds(t,e){if(!t||t.length===0)return[];if(e&&ne(t))return t.map(r=>r.globalId);if(oe(t))return t.map(r=>r.objectId);const{layer:a}=this,s=e?a.globalIdField:a.objectIdField;return s?t.map(r=>r.getAttribute(s)):[]}_createEditsResult(t){var n,c,h,y,p,b;const e=t.data,{layerId:a}=this.layer,s=[];let r=null;if(Array.isArray(e))for(const o of e)s.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===a&&(r={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else r=e;const u=r==null?void 0:r.assetMaps;if(u){for(const o of u.addResults)o.success||I.getLogger(this).error(`Failed to map asset to feature with globalId ${o.globalId}.`);for(const o of u.updateResults)o.success||I.getLogger(this).error(`Failed to map asset to feature with globalId ${o.globalId}.`)}const i=r==null?void 0:r.attachments,l={addFeatureResults:((n=r==null?void 0:r.addResults)==null?void 0:n.map(this._createFeatureEditResult,this))??[],updateFeatureResults:((c=r==null?void 0:r.updateResults)==null?void 0:c.map(this._createFeatureEditResult,this))??[],deleteFeatureResults:((h=r==null?void 0:r.deleteResults)==null?void 0:h.map(this._createFeatureEditResult,this))??[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(r!=null&&r.editMoment&&(l.editMoment=r.editMoment),s.length>0){l.editedFeatureResults=[];for(const o of s){const{editedFeatures:d}=o,m=d!=null&&d.spatialReference?new B(d.spatialReference):null;l.editedFeatureResults.push({layerId:o.id,editedFeatures:{adds:((y=d==null?void 0:d.adds)==null?void 0:y.map(f=>this._createEditedFeature(f,m)))||[],updates:((p=d==null?void 0:d.updates)==null?void 0:p.map(f=>({original:this._createEditedFeature(f[0],m),current:this._createEditedFeature(f[1],m)})))||[],deletes:((b=d==null?void 0:d.deletes)==null?void 0:b.map(f=>this._createEditedFeature(f,m)))||[],spatialReference:m}})}}return l}_createEditedFeature(t,e){return new K({attributes:t.attributes,geometry:ee({...t.geometry,spatialReference:e})})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new E("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const a=e.details.messages&&e.details.messages[0]||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new E("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(t,e){const a=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(a)for(const s in e){const r=e[s];r!=null&&(a.set?a.set(s,r):a.append(s,r))}return a}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...t,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:a,infoFor3D:s,parsedUrl:r}=e;if(s==null||a==null)return t;const u=te(s);if(u==null)return t;const i=J(r.path,`../${u.id}`),l=new Array,n=new Array;for(const d of t)d.geometry.metadata.getExternalSourcesOnService(r).length>0?n.push(d):l.push(d);const c=n.map(d=>d.getAttribute(a)).filter(v);if(c.length===0)return t;const{assetMapFieldRoles:{parentGlobalId:h,assetHash:y}}=s,p=new pe;p.where=`${h} IN (${c.map(d=>`'${d}'`)})`,p.outFields=[y,h],p.returnGeometry=!1;const b=await de(i,p),{features:o}=b;return o.length===0?t:[...l,...n.filter(d=>{const m=d.getAttribute(a);if(!m)return!0;const{metadata:f}=d.geometry,_=o.filter(R=>R.getAttribute(h)===m);if(_.length===0)return!0;const q=_.map(R=>R.getAttribute(y));return f.getExternalSourcesOnService(r).flatMap(({source:R})=>R.flatMap(w=>w.parts.map(A=>A.partHash))).some(R=>q.every(w=>R!==w))})]}};O([x()],S.prototype,"type",void 0),O([x({constructOnly:!0})],S.prototype,"layer",void 0),O([x({readOnly:!0})],S.prototype,"queryTask",null),S=O([C("esri.layers.graphics.sources.FeatureLayerSource")],S);const Re=1e3,Ye=S;export{Ye as default};
