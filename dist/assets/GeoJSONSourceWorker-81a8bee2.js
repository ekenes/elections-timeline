import{dL as _,dM as R,s as I,dN as Q,dO as A,dP as D,dQ as Z,dR as v,c2 as P,$ as G,am as M,U as N,dS as $}from"./index-02eff6e6.js";import{o as z,r as B,e as L,n as U,t as J}from"./featureConversionUtils-aa6583e8.js";import{u as W}from"./executeQueryForSnapping-1d622fac.js";import{m as H}from"./FeatureStore-91d0a907.js";import{x as F,j as b}from"./queryUtils-60c4a6a9.js";import{L as V}from"./QueryEngine-23d98145.js";import{I as Y,N as K,E as X}from"./geojson-53920ba7.js";import{u as ee,l as te,a as se}from"./clientSideDefaults-0446b858.js";import{j as ie,p as w,d as T,f as E,y as O}from"./sourceUtils-89848c5f.js";import"./timeSupport-4d47519e.js";import"./BoundsStore-118fb5de.js";import"./PooledRBush-1b7ef766.js";import"./optimizedFeatureQueryEngineAdapter-50f8b80a.js";import"./json-48e3ea08.js";import"./WhereClause-cb61301c.js";import"./QueryEngineCapabilities-a2d35a4c.js";import"./quantizationUtils-75dcba1a.js";import"./utils-9bf35a0c.js";import"./utils-7ccd7be0.js";import"./ClassBreaksDefinition-0149e616.js";import"./FixedIntervalBinParameters-2ec73721.js";import"./date-bbf7d1ee.js";import"./capabilities-1a2f6cc3.js";const ne={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Re{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=Y(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],d=e.hasZ!=null?e.hasZ:i.hasZ,p=i.geometryType;let y=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let r=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const u=new R(o);let l=u.get(y);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1,y=l.name):(l={alias:y,name:y,type:i.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(l));const h={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!Q.jsonValues.includes(a.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==l.name){const g=A(a);g!==void 0&&(h[a.name]=g)}a.length==null&&(a.length=D(a))}if(r){if(r.startTimeField){const a=u.get(r.startTimeField);a?(r.startTimeField=a.name,a.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const a=u.get(r.endTimeField);a?(r.endTimeField=a.name,a.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const a=u.get(r.trackIdField);a?r.trackIdField=a.name:(r.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}const c=p?ee(p):void 0,j=u.dateFields.length?{timeZoneIANA:Z}:null,f={warnings:n,featureErrors:[],layerDefinition:{...ne,drawingInfo:c??void 0,templates:te(h),extent:void 0,geometryType:p,objectIdField:y,fields:o,hasZ:!!d,timeInfo:r,dateFieldsTimeReference:j}};this._queryEngine=new V({fieldsIndex:R.fromLayerJSON({fields:o,timeInfo:r,dateFieldsTimeReference:j}),geometryType:p,hasM:!1,hasZ:d,objectIdField:y,spatialReference:m,timeInfo:r,featureStore:new H({geometryType:p,hasM:!1,hasZ:d})});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(l);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=se(h,y);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const k=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(k);const{fullExtent:C,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=C,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([ie(t,n),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),W(this._queryEngine,e,t.signal)}async queryAttributeBins(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeAttributeBinsQuery(e,t.signal)}async refresh(e){var s;this._loadOptions.customParameters=e,(s=this._snapshotTask)==null||s.abort(),this._snapshotTask=v(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const o=this._normalizeFeatures(i);o&&this._queryEngine.featureStore.addMany(o)},i=>{this._queryEngine.featureStore.clear(),P(i)||G.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=K(e,{geometryType:t,hasZ:n,objectIdField:s});if(!M(this._queryEngine.spatialReference,_))for(const o of i)o.geometry!=null&&(o.geometry=z(b(B(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,s=(await N(t??"",{responseType:"json",query:{...n},signal:e})).data;return X(s),s}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const o of e){const d=this._createDefaultAttributes(),p=w(s,d,o.attributes,!0);p?t==null||t.push(p):(this._assignObjectId(d,o.attributes,!0),o.attributes=d,o.objectId=d[n],i.push(o))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(i,t),n!=null&&n.length&&this._applyUpdateEdits(i,n),s==null?void 0:s.length){for(const p of s)i.deleteResults.push(T(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:o,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:d,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:o,objectIdField:d,spatialReference:p,featureStore:y,fieldsIndex:m}=this._queryEngine,r=[];for(const u of t){if(u.geometry&&s!==$(u.geometry)){n.push(E("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),h=w(m,l,u.attributes);if(h)n.push(h);else{if(this._assignObjectId(l,u.attributes),u.attributes=l,u.uid!=null){const c=u.attributes[d];e.uidToObjectId[u.uid]=c}if(u.geometry!=null){const c=u.geometry.spatialReference??p;u.geometry=b(O(u.geometry,c),c,p)}r.push(u),n.push(T(u.attributes[d]))}}y.addMany(L([],r,s,o,i,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:s,hasZ:i,objectIdField:o,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine;for(const m of t){const{attributes:r,geometry:u}=m,l=r==null?void 0:r[o];if(l==null){e.push(E(`Identifier field ${o} missing`));continue}if(!p.has(l)){e.push(E(`Feature with object id ${l} missing`));continue}const h=U(p.getFeature(l),n,i,s);if(u!=null){if(n!==$(u)){e.push(E("Incorrect geometry type."));continue}const c=u.spatialReference??d;h.geometry=b(O(u,c),c,d)}if(r){const c=w(y,h.attributes,r);if(c){e.push(c);continue}}p.add(J(h,n,i,s,o)),e.push(T(l))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if(n.type==="esriFieldTypeString")return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,n=!1){const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await F(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{Re as default};