import{w as y,o as U,s as m,U as F,G as K,S as H,C as J,a as i,i as p,b as d,c as q,R as z,_ as Q,p as X,f as Y,n as Z,W as $,m as ee,I as ae,d as _,L as A,j as te,e as oe,g as re}from"./index-560772b3.js";import{i as ne}from"./originUtils-cfe4feaf.js";import{p as P}from"./resourceUtils-86292ca8.js";import{i as O}from"./saveAPIKeyUtils-d100d74f.js";import{r as T,t as S}from"./saveUtils-b73dba66.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-8bf8943e.js";const ie=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map(a=>a.toLowerCase());async function xe(a,e,t){t??(t={}),se(a,e),await y(()=>!e.updatingFromView),await e.load(),await V(e),await T(e),await E(a,e);const o=e.portalItem,{json:r,jsonContext:n}=await C(e,o);return S(n,{errorName:`${a.name}:save`},t),await G(e,o),await Oe(a,e,o,r,n),await Promise.all([e.updateItemThumbnail(),P(e.resourceReferences,n)]),o}async function C(a,e){const t=U(e,"web-map",!0),o=a.write({},t);return await Promise.all(t.resources.pendingOperations),{json:o,jsonContext:t}}async function je(a,e,t,o){o??(o={});const r=le(a,t);await y(()=>!e.updatingFromView),await e.load(),await V(e),await T(e),await E(a,e);const{json:n,jsonContext:s}=await C(e,r);S(s,{errorName:`${a.name}:save`},o),await de(e,r);const l=e.getThumbnailState();return await Te(a,e,r,n,s,o)&&(e.resourceReferences.portalItem=r),e.restoreThumbnailFromState(l),await Promise.all([e.updateItemThumbnail(),P(e.resourceReferences,s)]),r}function se(a,e){if(!e.portalItem)throw new m(`${a.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");O(e.portalItem),D(a,e.portalItem)}function D(a,e){if(e.type!==a.itemType)throw new m(`${a.name}:portal-item-wrong-type`,`Portal item needs to have type "${a.itemType}"`)}async function E(a,e){var o;if(!((o=e.basemap)!=null&&o.baseLayers.length))throw new m(`${a.name}:save`,"Map does not have a valid basemap with a base layer.");let t=null;if(await y(()=>{const r=F(e.initialViewProperties,e.basemap);return t=r.spatialReference,!r.updating}),!K(t,e.initialViewProperties.spatialReference))throw new m(`${a.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:e.initialViewProperties.spatialReference,actual:t})}function le(a,e){let t=H.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type=a.itemType),t.portal||(t.portal=J.getDefault()),O(t),D(a,t),t}function V(a){const e=[];return a.basemap&&e.push(a.basemap.load()),a.ground&&e.push(a.ground.load()),Promise.allSettled(e).then(()=>{})}async function G(a,e){e.extent=await ve(a.portalItem,a.initialViewProperties.viewpoint.targetGeometry),await me(a,e)}const pe=_.JSAPI,L="CollectorDisabled",g="Collector",b="Data Editing",M="OfflineDisabled",R="Offline",k="Workforce Project",x="Workforce Worker",j="Workforce Dispatcher",ce="Offline Map Areas",ue="FieldMapsDisabled",v=_.DEVELOPER_BASEMAP,W="UtilityNetwork",I="IPS";async function de(a,e){i(e,L),i(e,ue),i(e,_.METADATA),i(e,M),i(e,ce),i(e,j),i(e,k),i(e,x),await G(a,e)}async function me(a,e){p(e,pe),await fe(a),ye(a,e),_e(a,e),he(a,e),ge(a,e),be(a,e),Re(a,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,o,r)=>r.indexOf(t)===o))}function fe(a){const e=h(a).map(t=>t.load()).toArray();return Promise.allSettled(e).then(()=>{})}function h(a){return a.allLayers.concat(a.allTables)}function B(a){return h(a).some(e=>e.loaded&&A(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled&&(e.type!=="subtype-group"||e.sublayers.some(t=>t.editingEnabled)))}function we(a){return h(a).filter(e=>e.type!=="group").every(e=>e.loaded&&Ae(a,e))}function ye(a,e){d(e,L)||d(e,k)||d(e,x)||d(e,j)||!B(a)?i(e,g):p(e,g)}function _e(a,e){B(a)?p(e,b):i(e,b)}function he(a,e){!d(e,M)&&we(a)?p(e,R):i(e,R)}function ge(a,e){q(a.basemap)?p(e,v):i(e,v)}function be(a,e){var t;(t=a.utilityNetworks)!=null&&t.length?p(e,W):i(e,W)}function Re(a,e){a.ipsInfo?p(e,I):i(e,I)}async function ve(a,e){const t=e.clone().normalize();let o;if(t.length>1)for(const r of t)o?r.width>o.width&&(o=r):o=r;else o=t[0];return We(a,o)}async function We(a,e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return z(e);const{getGeometryServiceURL:o}=await Q(()=>import("./geometryServiceUtils-3015b340.js"),["assets/geometryServiceUtils-3015b340.js","assets/index-560772b3.js","assets/index-d85835aa.css"]),r=await o(a),n=new X({geometries:[e],outSpatialReference:Y.WGS84});return(await Z(r,n))[0]}function Ie(a){return re(a)||a.type==="map-notes"||a.type==="route"}function Ae(a,e){return A(e)&&e.capabilities.operations.supportsSync||Ie(e)&&!e.portalItem||(e.type==="tile"||e.type==="vector-tile")&&(e.capabilities.operations.supportsExportTiles||Pe(e)||te(e))&&e.spatialReference.equals(a.initialViewProperties.spatialReference)}function Pe(a){return a.type==="tile"&&oe(a.url)&&ie.some(e=>{var t;return(t=a.url)==null?void 0:t.toLowerCase().includes("/"+e+"/")})}async function Oe(a,e,t,o,r){await t.update({data:o}),N(a,e,t,o,r)}async function Te(a,e,t,o,r,n){const s=e.portalItem,l={item:s,authenticated:!(!(s!=null&&s.id)||!s.portal.user)},c=t.portal;await c.signIn();const{copyAllowed:f,itemReloaded:u}=await Se(l,c);if(l.authenticated||(l.authenticated=u),!f)throw new m(`${a.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const w=await Ce(t,l,o,n);return e.portalItem=t,N(a,e,t,o,r),w}async function Se(a,e){var r;const{item:t,authenticated:o}=a;return t!=null&&t.id&&((r=t.typeKeywords)!=null&&r.includes("useOnly"))?t.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(o||await t.reload(),{copyAllowed:t.itemControl==="admin"||t.itemControl==="update",itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}async function Ce(a,e,t,o){var f;const r=a.portal,{item:n}=e,{folder:s,copyAllResources:l}=o;let c=!1;if(l&&(n!=null&&n.id)&&$(n.portal.url,r.url)&&parseInt(n.portal.currentVersion,10)>=2023){const{total:u}=await n.fetchResources();c=!!u}if(c){const u=await n.copy({copyResources:"all",folder:s});a.id=u.id,a.portal=u.portal;const w=a.toJSON();await a.load(),a.read(w),await a.update({data:t})}else await((f=r.user)==null?void 0:f.addItem({item:a,folder:s,data:t}));return c}function N(a,e,t,o,r){ee.prototype.read.call(e,{version:o.version,authoringApp:o.authoringApp,authoringAppVersion:o.authoringAppVersion},{origin:a.origin,ignoreDefaults:!0,url:t.itemUrl?ae(t.itemUrl):void 0}),ne(r),e.resourceInfo=o}export{C as createJSON,xe as save,je as saveAs};
