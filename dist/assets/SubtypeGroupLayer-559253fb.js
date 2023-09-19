import{fy as K,cQ as D,aH as k,cM as X,av as S,ds as Z,n as ee,e_ as te,B as A,s as f,f0 as re,fz as N,bi as L,aY as M,aG as Q,q as i,t as n,dj as ie,fA as se,f2 as ne,f3 as ae,f4 as oe,cS as le,fx as ue,fw as pe,f6 as de,z as ye,bq as $,fa as U,v as H,fB as ce,fC as he,fD as fe,fc as B,fE as be,fF as ge,fG as me,eV as ve,fH as we,fI as Se,bj as Fe,db as Ie,bk as $e,cN as Oe,dc as Ee,cO as je,cP as Te,de as _e,dd as Ce,V as C,ec as Ae,w as Le,dW as Pe,cF as xe,fJ as Ge,fK as Ve,as as qe,bt as Re,fL as De,fM as ke,fN as Ne,fO as Me,ej as Qe,_ as P,fP as Ue,fQ as He,dg as Be,fR as ze,fS as Je,fT as We,fU as Ye,fV as Ke,fW as Xe,fv as j,dh as Ze,e$ as et,fX as tt,cR as rt,d2 as x,fY as it,bn as st}from"./index-10102046.js";const nt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],z={key:"type",base:ce,errorContext:"renderer",typeMap:{simple:A,"unique-value":he,"class-breaks":fe}},G=B(),V=K({types:z});let at=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ot(e){return new A({symbol:lt(e)})}function lt(e){switch(e){case"point":case"multipoint":return me.clone();case"polyline":return ge.clone();case"polygon":case"multipatch":return be.clone();default:return null}}function ut(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function J(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function pt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},a=J(e,t);if(a!=null){const{defaultValues:o}=a;for(const u in o)s[u]=o[u]}return s[t.subtypeField]=e,new U({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const W="esri.layers.support.SubtypeSublayer";let l=class extends D(k(X(ve))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${at++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:a}=this;let o;if(s){o=[];let u=0;s.forEach(({name:y,alias:c,editable:g,visible:m})=>{var O;if(!m)return;const d=(O=a==null?void 0:a.fields)==null?void 0:O.find(F=>F.name===y);if(!d)return;const b={name:y};let w=!1;c!==d.alias&&(b.alias=c,w=!0),g!==d.editable&&(b.editable=g,w=!0),o.push(b),w&&u++}),u===0&&o.length===s.length&&(o=null)}else o=S(e);o!=null&&o.length&&Z(r,o,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:a,subtypeField:o}=e,u=a==null?void 0:a.find(m=>m.code===r),y=u==null?void 0:u.defaultValues,c=u==null?void 0:u.domains,g=[];for(const m of s){const d=m.clone(),{name:b}=d,w=t==null?void 0:t.find(E=>E.name===b);if(d.visible=!t||!!w,w){const{alias:E,editable:Y}=w;E&&(d.alias=E),Y===!1&&(d.editable=!1)}const O=(y==null?void 0:y[b])??null;d.defaultValue=b===o?r:O;const F=(c==null?void 0:c[b])??null;d.domain=b===o?null:F?F.type==="inherited"?d.domain:F.clone():null,g.push(d)}return g}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ee.getLogger(W).error(v("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){te(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ot(e.geometryType):null}readRendererFromService(e,t,r){var y,c,g;if(t.type==="Table")return null;const s=(y=t.drawingInfo)==null?void 0:y.renderer,a=V(s,t,r);let o;const{subtypeCode:u}=this;if(u!=null&&ut(a,t.subtypeField)){const m=(c=a.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(u));m&&(o=new A({symbol:m.symbol}))}else(a==null?void 0:a.type)!=="simple"||(g=a.visualVariables)!=null&&g.length||(o=a);return o}readRenderer(e,t,r){var o,u,y;const s=(u=(o=t==null?void 0:t.layerDefinition)==null?void 0:o.drawingInfo)==null?void 0:u.renderer;return s?((y=s.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:V(s,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[pt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=J(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw v("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw v("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw v("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw v("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:a}=this;if(r){const{displayField:o,editFieldsInfo:u,objectIdField:y}=r;t={displayField:o,editFieldsInfo:u,fields:s,objectIdField:y,title:a}}return re(t,e)}createQuery(){if(!this.parent)throw v("createQuery");const e=N(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=L(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return nt.some(e=>this.originIdOf(e)===M.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw v("queryAttachments");const s=e.clone();return s.where=q(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw v("queryFeatures");const s=Q.from(e)??r.createQuery();return e!=null&&(s.where=q(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([n({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([ie("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([n({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([n(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"floorInfo",null),i([n({type:se,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([n(I(S(ne)))],l.prototype,"labelsVisible",void 0),i([n({type:[ae],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:oe},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([n(I(S(le)))],l.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],l.prototype,"listMode",void 0),i([n((()=>{const e=S(ue);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"minScale",void 0),i([n((()=>{const e=S(pe);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"maxScale",void 0),i([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([n({clonable:!1})],l.prototype,"parent",void 0),i([n(I(S(de)))],l.prototype,"popupEnabled",void 0),i([n({type:ye,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([n({types:z,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([n({type:[U],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([n({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([$("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),i([n({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([H(W)],l);const q=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),a=`${t}=${r}`,o=e??"";return s.test(o)?o.replace(s,a):L(a,o)},v=e=>new f(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=l,h="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function R(e,t){return new f("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=B();let p=class extends we(Se(Fe(Ie($e(Oe(Ee(je(Te(D(_e(Ce(k(st))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(C.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=Ae(async(t,r,s)=>{const{save:a,saveAs:o}=await P(()=>import("./featureLayerUtils-5db139f3.js"),["assets/featureLayerUtils-5db139f3.js","assets/index-10102046.js","assets/index-0e712e80.css","assets/originUtils-1469eeaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/utils-a1147180.js","assets/jsonContext-b65b26ad.js","assets/fetchService-b1de0ed5.js"]);switch(t){case j.SAVE:return a(this,r);case j.SAVE_AS:return o(this,s,r)}}),this.addHandles(Le(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Pe))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(xe).then(async()=>{if(!this.url)throw new f("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new f("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ge(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ve(this)}get parsedUrl(){const e=qe(this.url);return e!=null&&this.layerId!=null&&(e.path=Re(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?De(this.url,t):t}async addAttachment(e,t){return ke(this,e,t,h)}async updateAttachment(e,t,r){return Ne(this,e,t,r,h)}async applyEdits(e,t){return Me(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Qe(P(()=>import("./FeatureLayerSource-52c4a2ca.js").then(r=>r.F),["assets/FeatureLayerSource-52c4a2ca.js","assets/index-10102046.js","assets/index-0e712e80.css","assets/mat4f64-1413b4a7.js","assets/MeshGeoreferencedRelativeVertexSpace-063d4e82.js","assets/vec32-61be0e61.js","assets/editingSupport-3f336b9b.js","assets/clientSideDefaults-54fd22ba.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/QueryTask-5c9128f1.js","assets/executeForIds-64785e03.js","assets/query-ee1dd75d.js","assets/pbfQueryUtils-77b7e0c7.js","assets/pbf-43b1a242.js","assets/OptimizedGeometry-33b2eb0d.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/executeQueryJSON-ce8281b8.js","assets/executeQueryPBF-a840aa56.js","assets/featureConversionUtils-1947fb7d.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=N(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=L(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Ue(this,e,t,h)}async fetchRecomputedExtents(e){return He(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Be(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return ze(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),s=Q.from(e)??r.createQuery(),a=s.outFields??[];a.includes(this.subtypeField)||(a.push(this.subtypeField),s.outFields=a);const o=await r.source.queryFeatures(s,t);if(o!=null&&o.features)for(const u of o.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return o}async queryObjectIds(e,t){return Je(this,e,t,h)}async queryFeatureCount(e,t){return We(this,e,t,h)}async queryExtent(e,t){return Ye(this,e,t,h)}async queryRelatedFeatures(e,t){return Ke(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Xe(this,e,t,h)}async save(e){return this._debouncedSaveOperations(j.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(j.SAVE_AS,t,e)}write(e,t){var o;const{origin:r,layerContainerType:s,messages:a}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return a==null||a.push(R(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return a==null||a.push(R(this,"using a non-table source cannot be written to tables in web maps")),null;return(o=this.sublayers)!=null&&o.length?super.write(e,t):(a==null||a.push(new f("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&Ze(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new f("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new f("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),et(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return tt(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([n({readOnly:!0})],p.prototype,"createQueryVersion",null),i([n({readOnly:!0})],p.prototype,"editingEnabled",null),i([n({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([n({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([n(_.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([n(rt)],p.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),i([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),i([n(_.outFields)],p.prototype,"outFields",void 0),i([n({readOnly:!0})],p.prototype,"parsedUrl",null),i([n({clonable:!1})],p.prototype,"source",null),i([n({type:C.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:a})=>{const o=new T({subtypeCode:a});return o.read(t,r),o});return new(C.ofType(T))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),a=M.PORTAL_ITEM;let o=!0;if(x(s)===a&&x(r.origin)>a){const u=e.some(y=>y.hasUserOverrides());o=this._sublayersCollectionChanged||u}return{enabled:o,ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),i([n({type:it})],p.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([$("service","title",["name"])],p.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],p.prototype,"type",void 0),p=i([H(dt)],p);const ct=p;export{ct as default};
