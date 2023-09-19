import{W as h,eF as U,s as f,eG as I,eH as N,eI as $,eJ as x,b6 as C,aT as j,d as M,ac as L,a$ as O,dl as d,eK as V,ch as W}from"./index-10102046.js";import{c as X}from"./geojson-640ee4a0.js";import{o as F,n as T}from"./xmlUtils-444cb4c0.js";function z(a){return q(a)??Y(a)}function Y(a){const t=new Date(a).getTime();return Number.isNaN(t)?null:t}function q(a){const t=H.exec(a);if(!(t!=null&&t.groups))return null;const e=t.groups,n=+e.year,r=+e.month-1,s=+e.day,o=+(e.hours??"0"),i=+(e.minutes??"0"),u=+(e.seconds??"0");if(o>23||i>59||u>59)return null;const p=e.ms??"0",l=p?+p.padEnd(3,"0").substring(0,3):0;let c;if(e.isUTC)c=Date.UTC(n,r,s,o,i,u,l);else if(e.offsetSign){const m=+e.offsetHours,y=+e.offsetMinutes;c=6e4*(e.offsetSign==="+"?-1:1)*(60*m+y)+Date.UTC(n,r,s,o,i,u,l)}else c=new Date(n,r,s,o,i,u,l).getTime();return Number.isNaN(c)?null:c}const H=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,S="xlink:href",g="2.0.0",E="__esri_wfs_id__",_="wfs-layer:getWFSLayerTypeInfo-error",J="wfs-layer:empty-service",R="wfs-layer:feature-type-not-found",Q="wfs-layer:geojson-not-supported",B="wfs-layer:kvp-encoding-not-supported",K="wfs-layer:malformed-json",k="wfs-layer:unknown-geometry-type",Z="wfs-layer:unknown-field-type",ee="wfs-layer:unsupported-spatial-reference",te="wfs-layer:unsupported-wfs-version";async function Se(a,t){const e=ne((await h(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:g,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return se(a,e),e}function ne(a){const t=G(a);be(t),v(t);const e=t.firstElementChild,n=U(oe(e));return{operations:re(e),get featureTypes(){return Array.from(n())},readFeatureTypes:n}}const ae=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function re(a){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(F(a,{OperationsMetadata:{Operation:n=>{switch(n.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:r=>{e.GetCapabilities.url=r.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:r=>{e.DescribeFeatureType.url=r.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:r=>{e.GetFeature.url=r.getAttribute(S)}}},Parameter:r=>{if(r.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:s=>{const o=s.textContent;o&&ae.has(o.toLowerCase())&&(e.GetFeature.outputFormat=o)}}}}}}},Constraint:n=>{switch(n.getAttribute("name")){case"KVPEncoding":return{DefaultValue:r=>{t=r.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:r=>{e.GetFeature.supportsPagination=r.textContent.toLowerCase()==="true"}}}}}}),!t)throw new f(B,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new f(Q,"WFS service doesn't support GeoJSON output format");return e}function se(a,t){I(a)&&(N(a,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=$(t.operations.DescribeFeatureType.url)),N(a,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=$(t.operations.GetFeature.url)))}function P(a){var e,n,r;const t=parseInt(((r=(n=(e=a.textContent)==null?void 0:e.match(/(?<wkid>\d+$)/i))==null?void 0:n.groups)==null?void 0:r.wkid)??"",10);if(!Number.isNaN(t))return t}function oe(a){return T(a,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return F(t,{Name:r=>{const{name:s,prefix:o}=w(r.textContent);e.typeName=`${o}:${s}`,e.name=s,e.namespacePrefix=o,e.namespaceUri=r.lookupNamespaceURI(o)},Abstract:r=>{e.description=r.textContent},Title:r=>{e.title=r.textContent},WGS84BoundingBox:r=>{e.extent=ie(r)},DefaultCRS:r=>{const s=P(r);s&&(e.defaultSpatialReference=s,n.add(s))},OtherCRS:r=>{const s=P(r);s&&n.add(s)}}),e.title||(e.title=e.name),n.add(4326),e.supportedSpatialReferences.push(...n),e}}})}function ie(a){let t,e,n,r;for(const s of a.children)switch(s.localName){case"LowerCorner":[t,e]=s.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[n,r]=s.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:n,ymax:r,spatialReference:W}}function ue(a,t,e){return x(a,n=>e?n.name===t&&n.namespaceUri===e:n.typeName===t||n.name===t)}async function xe(a,t,e,n={}){const{featureType:r,extent:s}=await le(a,t,e,n),{fields:o,geometryType:i,swapXY:u,objectIdField:p,geometryField:l}=await pe(a,r,n);return{url:a.operations.GetCapabilities.url,name:r.name,namespaceUri:r.namespaceUri,fields:o,geometryField:l,geometryType:i,objectIdField:p,spatialReference:n.spatialReference??new C({wkid:r.defaultSpatialReference}),extent:s,swapXY:u,wfsCapabilities:a,customParameters:n.customParameters}}async function le(a,t,e,n={}){const r=a.readFeatureTypes(),s=t?ue(r,t,e):r.next().value,{spatialReference:o=new C({wkid:s==null?void 0:s.defaultSpatialReference})}=n;if(s==null)throw t?new f(R,`The type '${t}' could not be found in the service`):new f(J,"The service is empty");let i=new j({...s.extent,spatialReference:C.WGS84});if(!M(i.spatialReference,o))try{await L(i.spatialReference,o,void 0,n),i=O(i,o)}catch{throw new f(ee,"Projection not supported")}return{extent:i,spatialReference:o,featureType:s}}async function pe(a,t,e={}){var m,y,b;const{typeName:n,defaultSpatialReference:r}=t,[s,o]=await Promise.allSettled([me(a.operations.DescribeFeatureType.url,n,e),fe(a,n,r,e)]),i=D=>new f(_,`An error occurred while getting info about the feature type '${n}'`,{error:D});if(s.status==="rejected")throw i(s.reason);if(o.status==="rejected")throw i(o.reason);const{fields:u,errors:p}=s.value??{},l=((m=s.value)==null?void 0:m.geometryType)||((y=o.value)==null?void 0:y.geometryType),c=((b=o.value)==null?void 0:b.swapXY)??!1;if(l==null)throw new f(k,`The geometry type could not be determined for type '${n}`,{typeName:n,geometryType:l,fields:u,errors:p});return{...ce(u??[]),geometryType:l,swapXY:c}}function ce(a){const t=a.find(n=>n.type==="geometry");let e=a.find(n=>n.type==="oid");return a=a.filter(n=>n.type!=="geometry"),e||(e=new d({name:E,type:"oid",alias:E}),a.unshift(e)),{geometryField:(t==null?void 0:t.name)??null,objectIdField:e.name,fields:a}}async function fe(a,t,e,n={}){var p;let r,s=!1;const[o,i]=await Promise.all([we(a.operations.GetFeature.url,t,e,a.operations.GetFeature.outputFormat,{...n,count:1}),h(a.operations.GetFeature.url,{responseType:"text",query:A(t,e,void 0,{...n,count:1}),signal:n==null?void 0:n.signal})]),u=o.type==="FeatureCollection"&&((p=o.features[0])==null?void 0:p.geometry);if(u){let l;switch(r=V.fromJSON(X(u.type)),u.type){case"Point":l=u.coordinates;break;case"LineString":case"MultiPoint":l=u.coordinates[0];break;case"MultiLineString":case"Polygon":l=u.coordinates[0][0];break;case"MultiPolygon":l=u.coordinates[0][0][0]}const c=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(c){const m=l[0].toFixed(3),y=l[1].toFixed(3),b=parseFloat(c[1]).toFixed(3);m===parseFloat(c[2]).toFixed(3)&&y===b&&(s=!0)}}return{geometryType:r,swapXY:s}}async function me(a,t,e){return ye(t,(await h(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:g,TYPENAME:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function ye(a,t){const{name:e}=w(a),n=G(t);v(n);const r=x(T(n.firstElementChild,{element:s=>({name:s.getAttribute("name"),typeName:w(s.getAttribute("type")).name})}),({name:s})=>s===e);if(r!=null){const s=x(T(n.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===r.typeName);if(s!=null)return ge(s)}throw new f(R,`Type '${a}' not found in document`,{document:new XMLSerializer().serializeToString(n)})}const de=new Set(["objectid","fid"]);function ge(a){const t=[],e=[];let n;const r=T(a,{complexContent:{extension:{sequence:{element:s=>s}}}});for(const s of r){const o=s.getAttribute("name");if(!o)continue;let i,u;if(s.hasAttribute("type")?i=w(s.getAttribute("type")).name:F(s,{simpleType:{restriction:c=>(i=w(c.getAttribute("base")).name,{maxLength:m=>{u=+m.getAttribute("value")}})}}),!i)continue;const p=s.getAttribute("nillable")==="true";let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new d({name:o,alias:o,type:"integer",nullable:p}));break;case"float":case"double":case"decimal":e.push(new d({name:o,alias:o,type:"double",nullable:p}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new d({name:o,alias:o,type:"string",nullable:p,length:u??255}));break;case"datetime":case"date":e.push(new d({name:o,alias:o,type:"date",nullable:p,length:u??36}));break;case"pointpropertytype":n="point",l=!0;break;case"multipointpropertytype":n="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":n="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":n="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,t.push(new f(k,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(a)}));break;default:t.push(new f(Z,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(a)}))}l&&e.push(new d({name:o,alias:o,type:"geometry",nullable:p}))}for(const s of e)if(s.type==="integer"&&!s.nullable&&de.has(s.name.toLowerCase())){s.type="oid";break}return{geometryType:n,fields:e,errors:t}}async function we(a,t,e,n,r){var o;let{data:s}=await h(a,{responseType:"text",query:A(t,e,n,r),signal:r==null?void 0:r.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if((o=r==null?void 0:r.dateFields)!=null&&o.length){const i=new Set(r.dateFields);return JSON.parse(s,(u,p)=>i.has(u)?z(p):p)}return JSON.parse(s)}catch(i){throw new f(K,"Error while parsing the response",{response:s,error:i})}}function A(a,t,e,n){const r=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:g,TYPENAMES:a,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+r,STARTINDEX:n==null?void 0:n.startIndex,COUNT:n==null?void 0:n.count,...n==null?void 0:n.customParameters}}function G(a){return new DOMParser().parseFromString(a.trim(),"text/xml")}function w(a){const[t,e]=a.split(":");return{prefix:e?t:"",name:e??t}}function be(a){var e;const t=(e=a.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==g)throw new f(te,`Unsupported WFS version ${t}. Supported version: ${g}`)}function v(a){let t="",e="";if(F(a.firstElementChild,{Exception:n=>(t=n.getAttribute("exceptionCode"),{ExceptionText:r=>{e=r.textContent}})}),t)throw new f(`wfs-layer:${t}`,e)}export{E as F,Se as G,we as H,ue as M,xe as V,ce as Y};
