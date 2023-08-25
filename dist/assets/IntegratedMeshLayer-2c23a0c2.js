import{n as i,q as a,aF as T,d7 as O,t as f,aB as b,aQ as L,dg as x,ga as N,an as R,cy as M,V as j,aj as $,X as A,d0 as D,cB as E,cC as J,b7 as V,cD as U,d1 as K,I as P,bt as C,ct as q,s as d,m as v,bd as z,e$ as B,ba as F,dL as G}from"./index-1f15e2a2.js";import{j as m}from"./persistable-874debf5.js";import{E as k,L as S}from"./SceneService-821e00b3.js";import{s as H,l as Q,u as X,m as W}from"./I3SLayerDefinitions-3d070f8e.js";import{x as w,p as Y,E as Z}from"./elevationInfoUtils-1fc9f5ed.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-6a834e10.js";import"./originUtils-1469eeaf.js";import"./resourceUtils-86929554.js";var h;let n=h=class extends b{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!L(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new x("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const l=new T;N(e,l,s.layer.spatialReference),t[o]=l.toJSON(s)}else t[o]=e.toJSON(s);delete t[o].spatialReference}clone(){return new h({geometry:R(this.geometry),type:this.type})}};i([a({type:T}),m()],n.prototype,"geometry",void 0),i([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=i([f("esri.layers.support.SceneModification")],n);const c=n;var p;let y=p=class extends M(j.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const s of e)o.add(c.fromJSON(s,t));return o}static async fromUrl(e,t,o){const s={url:$(e),origin:"service"},l=await A(e,{responseType:"json",signal:o==null?void 0:o.signal}),I=t.toJSON(),u=[];for(const g of l.data)u.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:I}},s));return new p({url:e,items:u})}};i([a({type:String})],y.prototype,"url",void 0),y=p=i([f("esri.layers.support.SceneModifications")],y);const _=y;let r=class extends k(D(E(J(V(U(K(F))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(P(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,G))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:C(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){q(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(S.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(S.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";w(v.getLogger(this),Y(t,"absolute-height",e)),w(v.getLogger(this),Z(t,e))}};i([a({type:String,readOnly:!0})],r.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],r.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],r.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([a({type:H,readOnly:!0})],r.prototype,"nodePages",void 0),i([a({type:[Q],readOnly:!0})],r.prototype,"materialDefinitions",void 0),i([a({type:[X],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),i([a({type:[W],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:_}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],r.prototype,"modifications",void 0),i([z(["web-scene","portal-item"],"modifications")],r.prototype,"readModifications",null),i([a(B)],r.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),r=i([f("esri.layers.IntegratedMeshLayer")],r);const le=r;export{le as default};
