import{fk as V,fl as H,ci as D,ac as m,aB as N,aA as $,Q as L,t as E,v as x,eA as B,k as W,N as J,R as v,fm as z,aT as X,cV as Y,d1 as Z,bo as M,a7 as K,a as A,ex as ee,f6 as te,cv as se,dW as ae,a$ as re,fn as k,ev as ne,s as I,eu as ie,a6 as oe,G as ue,dk as le,fo as ce,aF as de,w as pe,b7 as he}from"./index-a45a8fa1.js";import{e as ye}from"./mat4f64-1413b4a7.js";import{m as me}from"./MeshGeoreferencedRelativeVertexSpace-5d62c005.js";import{r as fe}from"./vec32-f4871a4c.js";import{isFeatureIdentifierArrayWithGlobalId as ge,isFeatureIdentifierArrayWithObjectId as be}from"./editingSupport-8172509f.js";import{o as Re}from"./clientSideDefaults-4d890356.js";import{x as Fe}from"./QueryTask-985947d6.js";import{s as Se}from"./executeQueryJSON-fe053372.js";function we(t){const{vertexSpace:e}=t;if(e.isRelative)return t.clone();const{anchor:s}=t,a=s.clone(),r=V(_e,[-a.x,-a.y,-a.z]),u=new me({origin:[a.x,a.y,a.z]}),n=t.cloneWithVertexSpace(u),{position:i}=n.vertexAttributes;return n.vertexAttributes.position=fe(new Float64Array(i.length),i,r),n.vertexAttributesChanged(),n}const _e=ye();class G{constructor(e,s,a){this.assetName=e,this.assetMimeType=s,this.parts=a}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&H(this.parts,e.parts,(s,a)=>s.equals(a))}isOnService(e){return this.parts.every(s=>s.isOnService(e))}makeHash(){let e="";for(const s of this.parts)e+=s.partHash;return e}async toBlob(e){const{parts:s}=this;if(s.length===1)return s[0].toBlob(e);const a=await Promise.all(s.map(r=>r.toBlob(e)));return D(e),new Blob(a)}}class Pe{constructor(e,s){this.partUrl=e,this.partHash=s}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith(`${e.path}/assets/`)}async toBlob(e){const{data:s}=await m(this.partUrl,{responseType:"blob"});return D(e),s}}function Qe(t){return Ae(t==null?void 0:t.source)}function U(t){return Array.isArray(t)?t.every(e=>e instanceof G):!1}const j=/^(model\/gltf\+json)|(model\/gltf-binary)$/,C=/\.(gltf|glb)/i;function Ae(t){return t?Array.isArray(t)?t.some(P):P(t):!1}function P(t){if(t instanceof File){const{type:e,name:s}=t;return j.test(e)||C.test(s)}return j.test(t.assetMimeType)||C.test(t.assetName)}function De(t,e){if(!t)return!1;const{source:s}=t;return qe(s,e)}function Le(t,e){if(t===e)return!0;const{source:s}=t,{source:a}=e;if(s===a)return!0;if(U(s)&&U(a)){if(s.length!==a.length)return!1;const r=(i,o)=>i.assetName<o.assetName?-1:i.assetName>o.assetName?1:0,u=[...s].sort(r),n=[...a].sort(r);for(let i=0;i<u.length;++i)if(!u[i].equals(n[i]))return!1;return!0}return!1}function qe(t,e){return Array.isArray(t)?t.every(s=>Q(s,e)):Q(t,e)}function Q(t,e){return t instanceof G&&t.isOnService(e)}function Ge(t,e){return t instanceof File?N(t.name,e)??$(t.type,e):$(t.assetMimeType,e)??N(t.assetName,e)}function Ve(t){return Array.isArray(t)?t:[t]}function Oe(t){return!!t.original}const Ee=new L({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),Ie=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),xe=new L({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let w=class extends B{constructor(){super(...arguments),this.type="feature-layer",this.refresh=W(async()=>{var s,a;await this.load();const t=(s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=t!=null?t.signal:null,s=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(s,e)),Promise.resolve(this)}get queryTask(){var d;const{capabilities:t,parsedUrl:e,dynamicDataSource:s,infoFor3D:a,gdbVersion:r,spatialReference:u,fieldsIndex:n}=this.layer,i=J("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&a==null,o=((d=t==null?void 0:t.operations)==null?void 0:d.supportsQueryAttachments)??!1;return new Fe({url:e.path,pbfSupported:i,fieldsIndex:n,infoFor3D:a,dynamicDataSource:s,gdbVersion:r,sourceSpatialReference:u,queryAttachmentsSupported:o})}async addAttachment(t,e){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",r=this._getLayerRequestOptions(),u=this._getFormDataForAttachment(e,r.query);try{const n=await m(a,{body:u});return this._createFeatureEditResult(n.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(s,n)}}async updateAttachment(t,e,s){await this.load();const a=t.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",u=this._getLayerRequestOptions({query:{attachmentId:e}}),n=this._getFormDataForAttachment(s,u.query);try{const i=await m(r,{body:n});return this._createFeatureEditResult(i.data.updateAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(a,i)}}async applyEdits(t,e){var _,q,b,S,O,T;await this.load();const{layer:s}=this,a=s.infoFor3D,r=a!=null,u=r||((e==null?void 0:e.globalIdUsed)??!1),n=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,i=((_=t.addFeatures)==null?void 0:_.map(F=>this._getFeatureJSON(F,a)))??[],o=(await Promise.all(i)).filter(v),d=((q=t.updateFeatures)==null?void 0:q.map(F=>this._getFeatureJSON(F,a)))??[],h=(await Promise.all(d)).filter(v),y=this._getFeatureIds(t.deleteFeatures,u);z(o,h,s.spatialReference);const p=await this._getAttachmentEditsJSON(t),R=s.capabilities.editing.supportsAsyncApplyEdits&&r,l={gdbVersion:(e==null?void 0:e.gdbVersion)||s.gdbVersion,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:u,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,sessionId:e==null?void 0:e.sessionId,async:R};e!=null&&e.returnServiceEditsOption?(l.edits=JSON.stringify([{id:s.layerId,adds:o,updates:h,deletes:y,attachments:p,assetMaps:n}]),l.returnServiceEditsOption=Ee.toJSON(e==null?void 0:e.returnServiceEditsOption),l.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(l.adds=o.length?JSON.stringify(o):null,l.updates=h.length?JSON.stringify(h):null,l.deletes=y.length?u?JSON.stringify(y):y.join(","):null,l.attachments=p&&JSON.stringify(p),l.assetMaps=n!=null?JSON.stringify(n):void 0);const c=this._getLayerRequestOptions({method:"post",query:l}),f=e!=null&&e.returnServiceEditsOption?s.url:s.parsedUrl.path,g=R?await this._asyncApplyEdits(f+"/applyEdits",c):await m(f+"/applyEdits",c);if(!((b=s.capabilities.operations)!=null&&b.supportsEditing)&&((O=(S=s.effectiveCapabilities)==null?void 0:S.operations)!=null&&O.supportsEditing)){const F=(T=he)==null?void 0:T.findCredential(s.url);await(F==null?void 0:F.refreshToken())}return this._createEditsResult(g)}async deleteAttachments(t,e){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await m(a,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(r){throw this._createAttachmentErrorResult(s,r)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const s=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:u}=await m(`${r}/${a}`,s),{id:n,extent:i,fullExtent:o,timeExtent:d}=u,h=i||o;return{id:n,fullExtent:h&&X.fromJSON(h),timeExtent:d&&Y.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(t,e={}){await this.load();const s=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!Z(this.layer.url))return"unavailable";const t=M(this.layer.url,"status"),e=await m(t,{query:{f:"json"}});return xe.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:s}=await K(()=>import("./uploadAssets-a25567c1.js"),["assets/uploadAssets-a25567c1.js","assets/index-a45a8fa1.js","assets/index-0e712e80.css","assets/mat4f64-1413b4a7.js","assets/MeshGeoreferencedRelativeVertexSpace-5d62c005.js","assets/vec32-f4871a4c.js","assets/editingSupport-8172509f.js","assets/normalizeUtils-20ffbf71.js","assets/normalizeUtilsCommon-1c682906.js","assets/utils-33471d6a.js","assets/clientSideDefaults-4d890356.js","assets/QueryEngineCapabilities-42e44ded.js","assets/QueryTask-985947d6.js","assets/executeForIds-88592eb0.js","assets/query-ac1ce742.js","assets/pbfQueryUtils-87f27c3b.js","assets/pbf-48aa0525.js","assets/OptimizedGeometry-33b2eb0d.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/executeQueryJSON-fe053372.js","assets/executeQueryPBF-f9cb8304.js","assets/featureConversionUtils-9d7a7d0e.js"]);return s(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(t,e){const s=(await m(t,e)).data.statusUrl;for(;;){const a=(await m(s,{query:{f:"json"},responseType:"json"})).data;switch(a.status){case"Completed":return m(a.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new A("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new A("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await ee(ve)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:a}=await m(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:J("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=await this._patchServiceJSON(t,e);const s=t.type;if(!Ie.has(s))throw new A("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}async _patchServiceJSON(t,e){var s;if(t.type!=="Table"&&t.geometryType&&!((s=t==null?void 0:t.drawingInfo)!=null&&s.renderer)&&!t.defaultSymbol){const a=Re(t.geometryType).renderer;te("drawingInfo.renderer",a,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:a}=await m(this.layer.url,this._getLayerRequestOptions({signal:e}));a.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:a.spatialReference})}catch(a){se(a)}return t}async _getFeatureJSON(t,e){const{geometry:s}=t,a={...t.attributes};if(e!=null&&(s==null?void 0:s.type)==="mesh"){const{transformFieldRoles:r}=e,{origin:u,spatialReference:n,transform:i}=s,o=this.layer.spatialReference;await ae(n,o);const d=re(u,o);if(a[r.originX]=d.x,a[r.originY]=d.y,a[r.originZ]=d.z??0,i!=null){const{translation:h,scale:y,rotation:p}=i,{vertexSpace:R}=s,l=R.isGeoreferenced?1:k(n)/k(o);a[r.translationX]=h[0]*l,a[r.translationY]=-h[2]*l,a[r.translationZ]=h[1]*l,a[r.scaleX]=y[0],a[r.scaleY]=y[2],a[r.scaleZ]=y[1],a[r.rotationX]=p[0],a[r.rotationY]=p[2],a[r.rotationZ]=p[1],a[r.rotationDeg]=p[3]}return{geometry:null,attributes:a}}return s==null?{attributes:a}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:a}}async _getAttachmentEditsJSON(t){const e=await Promise.all((t.addAttachments??[]).map(r=>this._getAttachmentEditJSON(r))),s=await Promise.all((t.updateAttachments??[]).map(r=>this._getAttachmentEditJSON(r))),a=t.deleteAttachments??[];return e.length||s.length||a.length?{adds:e,updates:s,deletes:[...a]}:null}async _getAttachmentEditJSON(t){const{feature:e,attachment:s}=t,{globalId:a,name:r,contentType:u,data:n,uploadId:i}=s,o={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(o.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),i)o.uploadId=i;else if(n){const d=await ne(n);d&&(o.contentType=d.mediaType,o.data=d.data),n instanceof File&&(o.name=n.name)}return r&&(o.name=r),u&&(o.contentType=u),o}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length))return null;const s=await this._filterRedundantAssetMaps(e);if(!(e!=null&&e.length))return null;const a=new Array,r=new Map;for(const u of s){const{geometry:n}=u,{vertexSpace:i}=n;if(i.isRelative)a.push(n);else{const o=we(n);r.set(o,n),u.geometry=o,a.push(o)}}await this.uploadAssets(a);for(const[u,n]of r)n.addExternalSources(u.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(s),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,s=this.layer.globalIdField,a=this.layer.parsedUrl;for(const r of t){const u=r.geometry,{metadata:n}=u,i=n.getExternalSourcesOnService(a),o=r.getAttribute(s);if(i.length===0){I.getLogger(this).error(`Skipping feature ${o}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=i.find(Oe)??i[0],{vertexSpace:h}=u,y=h.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const p of d)p.parts.length===1?e.push({globalId:ie(),parentGlobalId:o,assetName:p.assetName,assetHash:p.parts[0].partHash,flags:y}):I.getLogger(this).error(`Skipping asset ${p.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_getFeatureIds(t,e){if(!t||t.length===0)return[];if(e&&ge(t))return t.map(r=>r.globalId);if(be(t))return t.map(r=>r.objectId);const{layer:s}=this,a=e?s.globalIdField:s.objectIdField;return a?t.map(r=>r.getAttribute(a)):[]}_createEditsResult(t){var o,d,h,y,p,R;const e=t.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(e))for(const l of e)a.push({id:l.id,editedFeatures:l.editedFeatures}),l.id===s&&(r={addResults:l.addResults??[],updateResults:l.updateResults??[],deleteResults:l.deleteResults??[],attachments:l.attachments,editMoment:l.editMoment});else r=e;const u=r==null?void 0:r.assetMaps;if(u){for(const l of u.addResults)l.success||I.getLogger(this).error(`Failed to map asset to feature with globalId ${l.globalId}.`);for(const l of u.updateResults)l.success||I.getLogger(this).error(`Failed to map asset to feature with globalId ${l.globalId}.`)}const n=r==null?void 0:r.attachments,i={addFeatureResults:((o=r==null?void 0:r.addResults)==null?void 0:o.map(this._createFeatureEditResult,this))??[],updateFeatureResults:((d=r==null?void 0:r.updateResults)==null?void 0:d.map(this._createFeatureEditResult,this))??[],deleteFeatureResults:((h=r==null?void 0:r.deleteResults)==null?void 0:h.map(this._createFeatureEditResult,this))??[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(r!=null&&r.editMoment&&(i.editMoment=r.editMoment),a.length>0){i.editedFeatureResults=[];for(const l of a){const{editedFeatures:c}=l,f=c!=null&&c.spatialReference?new oe(c.spatialReference):null;i.editedFeatureResults.push({layerId:l.id,editedFeatures:{adds:((y=c==null?void 0:c.adds)==null?void 0:y.map(g=>this._createEditedFeature(g,f)))||[],updates:((p=c==null?void 0:c.updates)==null?void 0:p.map(g=>({original:this._createEditedFeature(g[0],f),current:this._createEditedFeature(g[1],f)})))||[],deletes:((R=c==null?void 0:c.deletes)==null?void 0:R.map(g=>this._createEditedFeature(g,f)))||[],spatialReference:f}})}}return i}_createEditedFeature(t,e){return new ue({attributes:t.attributes,geometry:le({...t.geometry,spatialReference:e})})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new A("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const s=e.details.messages&&e.details.messages[0]||e.message,a=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new A("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const a in e){const r=e[a];r!=null&&(s.set?s.set(a,r):s.append(a,r))}return s}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:s,dynamicDataSource:a}=this.layer;return{...t,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:s,infoFor3D:a,parsedUrl:r}=e;if(a==null||s==null)return t;const u=ce(a);if(u==null)return t;const n=M(r.path,`../${u.id}`),i=new Array,o=new Array;for(const c of t)c.geometry.metadata.getExternalSourcesOnService(r).length>0?o.push(c):i.push(c);const d=o.map(c=>c.getAttribute(s)).filter(v);if(d.length===0)return t;const{assetMapFieldRoles:{parentGlobalId:h,assetHash:y}}=a,p=new de;p.where=`${h} IN (${d.map(c=>`'${c}'`)})`,p.outFields=[y,h],p.returnGeometry=!1;const R=await Se(n,p),{features:l}=R;return l.length===0?t:[...i,...o.filter(c=>{const f=c.getAttribute(s);if(!f)return!0;const{metadata:g}=c.geometry,_=l.filter(b=>b.getAttribute(h)===f);if(_.length===0)return!0;const q=_.map(b=>b.getAttribute(y));return g.getExternalSourcesOnService(r).flatMap(({source:b})=>b.flatMap(S=>S.parts.map(O=>O.partHash))).some(b=>q.every(S=>b!==S))})]}};E([x()],w.prototype,"type",void 0),E([x({constructOnly:!0})],w.prototype,"layer",void 0),E([x({readOnly:!0})],w.prototype,"queryTask",null),w=E([pe("esri.layers.graphics.sources.FeatureLayerSource")],w);const ve=1e3,Te=w,He=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));export{He as F,Ve as N,G as a,Ge as g,Le as h,Pe as i,De as m,Qe as o};
