import{fw as K,cP as D,aI as k,cL as Y,aw as S,ds as X,m as ee,eY as te,A,s as f,e_ as re,fx as N,bj as L,aZ as M,aH as U,n as i,q as n,dj as ie,fy as se,f0 as ne,f1 as ae,f2 as oe,cS as le,fv as ue,fu as pe,f4 as de,x as ye,br as O,f8 as H,t as Q,fz as ce,fA as he,fB as fe,fa as B,fC as be,fD as ge,fE as me,eT as ve,fF as we,fG as Se,bk as Fe,db as Ie,bl as Oe,cM as $e,dc as Ee,cN as Te,cO as je,de as _e,dd as Ce,V as C,eb as Ae,v as Le,dW as Pe,cF as xe,fH as Ge,fI as Ve,as as Re,bu as qe,fJ as De,fK as ke,fL as Ne,fM as Me,ei as Ue,_ as P,fN as He,fO as Qe,dg as Be,fP as Je,fQ as Ze,fR as ze,fS as We,fT as Ke,fU as Ye,ft as T,dh as Xe,eZ as et,fV as tt,cR as rt,d2 as x,fW as it,bo as st}from"./index-a1a1303e.js";const nt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],J={key:"type",base:ce,errorContext:"renderer",typeMap:{simple:A,"unique-value":he,"class-breaks":fe}},G=B(),V=K({types:J});let at=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ot(e){return new A({symbol:lt(e)})}function lt(e){switch(e){case"point":case"multipoint":return me.clone();case"polyline":return ge.clone();case"polygon":case"multipatch":return be.clone();default:return null}}function ut(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function pt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},a=Z(e,t);if(a!=null){const{defaultValues:o}=a;for(const u in o)s[u]=o[u]}return s[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const z="esri.layers.support.SubtypeSublayer";let l=class extends D(k(Y(ve))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${at++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:a}=this;let o;if(s){o=[];let u=0;s.forEach(({name:y,alias:c,editable:g,visible:m})=>{var $;if(!m)return;const d=($=a==null?void 0:a.fields)==null?void 0:$.find(F=>F.name===y);if(!d)return;const b={name:y};let w=!1;c!==d.alias&&(b.alias=c,w=!0),g!==d.editable&&(b.editable=g,w=!0),o.push(b),w&&u++}),u===0&&o.length===s.length&&(o=null)}else o=S(e);o!=null&&o.length&&X(r,o,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:a,subtypeField:o}=e,u=a==null?void 0:a.find(m=>m.code===r),y=u==null?void 0:u.defaultValues,c=u==null?void 0:u.domains,g=[];for(const m of s){const d=m.clone(),{name:b}=d,w=t==null?void 0:t.find(E=>E.name===b);if(d.visible=!t||!!w,w){const{alias:E,editable:W}=w;E&&(d.alias=E),W===!1&&(d.editable=!1)}const $=(y==null?void 0:y[b])??null;d.defaultValue=b===o?r:$;const F=(c==null?void 0:c[b])??null;d.domain=b===o?null:F?F.type==="inherited"?d.domain:F.clone():null,g.push(d)}return g}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ee.getLogger(z).error(v("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){te(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ot(e.geometryType):null}readRendererFromService(e,t,r){var y,c,g;if(t.type==="Table")return null;const s=(y=t.drawingInfo)==null?void 0:y.renderer,a=V(s,t,r);let o;const{subtypeCode:u}=this;if(u!=null&&ut(a,t.subtypeField)){const m=(c=a.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(u));m&&(o=new A({symbol:m.symbol}))}else(a==null?void 0:a.type)!=="simple"||(g=a.visualVariables)!=null&&g.length||(o=a);return o}readRenderer(e,t,r){var o,u,y;const s=(u=(o=t==null?void 0:t.layerDefinition)==null?void 0:o.drawingInfo)==null?void 0:u.renderer;return s?((y=s.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:V(s,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[pt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw v("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw v("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw v("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw v("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:a}=this;if(r){const{displayField:o,editFieldsInfo:u,objectIdField:y}=r;t={displayField:o,editFieldsInfo:u,fields:s,objectIdField:y,title:a}}return re(t,e)}createQuery(){if(!this.parent)throw v("createQuery");const e=N(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=L(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return nt.some(e=>this.originIdOf(e)===M.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw v("queryAttachments");const s=e.clone();return s.where=R(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw v("queryFeatures");const s=U.from(e)??r.createQuery();return e!=null&&(s.where=R(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([n({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([ie("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([n({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([n(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"floorInfo",null),i([n({type:se,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([n(I(S(ne)))],l.prototype,"labelsVisible",void 0),i([n({type:[ae],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:oe},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([n(I(S(le)))],l.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],l.prototype,"listMode",void 0),i([n((()=>{const e=S(ue);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"minScale",void 0),i([n((()=>{const e=S(pe);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"maxScale",void 0),i([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([n({clonable:!1})],l.prototype,"parent",void 0),i([n(I(S(de)))],l.prototype,"popupEnabled",void 0),i([n({type:ye,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([n({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([O("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([O("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([n({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([O("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([n({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([O("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),i([n({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([Q(z)],l);const R=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),a=`${t}=${r}`,o=e??"";return s.test(o)?o.replace(s,a):L(a,o)},v=e=>new f(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),j=l,h="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function q(e,t){return new f("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=B();let p=class extends we(Se(Fe(Ie(Oe($e(Ee(Te(je(D(_e(Ce(k(st))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(C.ofType(j)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=Ae(async(t,r,s)=>{const{save:a,saveAs:o}=await P(()=>import("./featureLayerUtils-a45a6304.js"),["assets/featureLayerUtils-a45a6304.js","assets/index-a1a1303e.js","assets/index-0e712e80.css","assets/originUtils-1469eeaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/utils-ff118193.js","assets/jsonContext-61c2f898.js","assets/fetchService-688f1703.js"]);switch(t){case T.SAVE:return a(this,r);case T.SAVE_AS:return o(this,s,r)}}),this.addHandles(Le(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Pe))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(xe).then(async()=>{if(!this.url)throw new f("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new f("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ge(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ve(this)}get parsedUrl(){const e=Re(this.url);return e!=null&&this.layerId!=null&&(e.path=qe(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?De(this.url,t):t}async addAttachment(e,t){return ke(this,e,t,h)}async updateAttachment(e,t,r){return Ne(this,e,t,r,h)}async applyEdits(e,t){return Me(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Ue(P(()=>import("./FeatureLayerSource-8cfcac19.js").then(r=>r.F),["assets/FeatureLayerSource-8cfcac19.js","assets/index-a1a1303e.js","assets/index-0e712e80.css","assets/mat4f64-1413b4a7.js","assets/MeshGeoreferencedRelativeVertexSpace-56e4cf03.js","assets/vec32-3dafe0f1.js","assets/editingSupport-da980f4a.js","assets/clientSideDefaults-fc41ae2c.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/QueryTask-98f21b10.js","assets/executeForIds-1a431b43.js","assets/query-0fb2e4ab.js","assets/pbfQueryUtils-61f7b846.js","assets/pbf-75d66840.js","assets/OptimizedGeometry-33b2eb0d.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/executeQueryJSON-e07e9845.js","assets/executeQueryPBF-6363f381.js","assets/featureConversionUtils-b3c52e9d.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=N(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=L(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return He(this,e,t,h)}async fetchRecomputedExtents(e){return Qe(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Be(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Je(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),s=U.from(e)??r.createQuery(),a=s.outFields??[];a.includes(this.subtypeField)||(a.push(this.subtypeField),s.outFields=a);const o=await r.source.queryFeatures(s,t);if(o!=null&&o.features)for(const u of o.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return o}async queryObjectIds(e,t){return Ze(this,e,t,h)}async queryFeatureCount(e,t){return ze(this,e,t,h)}async queryExtent(e,t){return We(this,e,t,h)}async queryRelatedFeatures(e,t){return Ke(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Ye(this,e,t,h)}async save(e){return this._debouncedSaveOperations(T.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(T.SAVE_AS,t,e)}write(e,t){var o;const{origin:r,layerContainerType:s,messages:a}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return a==null||a.push(q(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return a==null||a.push(q(this,"using a non-table source cannot be written to tables in web maps")),null;return(o=this.sublayers)!=null&&o.length?super.write(e,t):(a==null||a.push(new f("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&Xe(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new f("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new f("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),et(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return tt(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([n({readOnly:!0})],p.prototype,"createQueryVersion",null),i([n({readOnly:!0})],p.prototype,"editingEnabled",null),i([n({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([n({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([n(_.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([n(rt)],p.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),i([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),i([n(_.outFields)],p.prototype,"outFields",void 0),i([n({readOnly:!0})],p.prototype,"parsedUrl",null),i([n({clonable:!1})],p.prototype,"source",null),i([n({type:C.ofType(j),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:a})=>{const o=new j({subtypeCode:a});return o.read(t,r),o});return new(C.ofType(j))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),a=M.PORTAL_ITEM;let o=!0;if(x(s)===a&&x(r.origin)>a){const u=e.some(y=>y.hasUserOverrides());o=this._sublayersCollectionChanged||u}return{enabled:o,ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),i([n({type:it})],p.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([O("service","title",["name"])],p.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],p.prototype,"type",void 0),p=i([Q(dt)],p);const ct=p;export{ct as default};
