import{bo as y,ac as m,ci as p,d1 as M,a as u,eu as J,cv as O,s as k,ev as G,ew as V,aA as x,ex as W,aB as K}from"./index-de9e02e1.js";import{m as Q,g as X,a as v,i as A,N as Y}from"./FeatureLayerSource-01904c44.js";import"./mat4f64-1413b4a7.js";import"./MeshGeoreferencedRelativeVertexSpace-c0a3d294.js";import"./vec32-eae9dabb.js";import"./editingSupport-09af1d05.js";import"./normalizeUtils-9deeb3c4.js";import"./normalizeUtilsCommon-3579e597.js";import"./utils-5b434a69.js";import"./clientSideDefaults-782202b2.js";import"./QueryEngineCapabilities-42e44ded.js";import"./QueryTask-631a6048.js";import"./executeForIds-aa1abe00.js";import"./query-8c72b5f2.js";import"./pbfQueryUtils-4437fe49.js";import"./pbf-61f8d833.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-ee98f30d.js";import"./executeQueryPBF-95398315.js";import"./featureConversionUtils-a956fd80.js";const N=1e6,D=20*N,Z=2e9,_=3;async function ee({data:e,name:a,description:t},s,n){let r=null;try{const o=y(s,"uploads"),i=y(o,"info"),{data:l}=await m(i,{query:{f:"json"},responseType:"json"});p(n);const c=M(s),d=l.maxUploadFileSize*N,w=c?Z:d,E=c?Math.min(D,d):D;if(e.size>w)throw new Error("Data too large");const P=y(o,"register"),{data:$}=await m(P,{query:{f:"json",itemName:a,description:t},responseType:"json",method:"post"});if(p(n),!$.success)throw new Error("Registration failed");const{itemID:R}=$.item;r=y(o,R);const C=y(r,"uploadPart"),B=Math.ceil(e.size/E),h=new Array;for(let f=0;f<B;++f)h.push(e.slice(f*E,Math.min((f+1)*E,e.size)));const g=h.slice().reverse(),j=new Array,L=async()=>{for(;g.length!==0;){const f=h.length-g.length,b=g.pop(),T=new FormData;T.append("f","json"),T.append("file",b),T.append("partId",`${f}`);const{data:H}=await m(C,{timeout:0,body:T,responseType:"json",method:"post"});if(p(n),!H.success)throw new Error("Part upload failed")}};for(let f=0;f<_&&g.length!==0;++f)j.push(L());await Promise.all(j);const z=y(r,"commit"),{data:F}=await m(z,{query:{f:"json",parts:h.map((f,b)=>b).join(",")},responseType:"json",method:"post"});if(p(n),!F.success)throw new Error("Commit failed");return F.item}catch(o){if(r!=null){const i=y(r,"delete");await m(i,{query:{f:"json"},responseType:"json",method:"post"})}throw o}}async function ze(e,a,t){return e.length?Promise.all(e.map(s=>te(s,a,t))):[]}async function te(e,{layer:a,ongoingUploads:t},s){const n=t.get(e);if(n)return n;if(!we(a))throw new u(`${a.type}-layer:upload-failure`,"Layer does not support asset uploads.",new Error);if(ae(e,a))return e;const r=se(e,a,s);t.set(e,r);try{await r}finally{t.delete(e)}return e}function ae(e,a){const{parsedUrl:t}=a;return t!=null&&e.metadata.externalSources.some(s=>Q(s,t))}async function se(e,a,t){const{metadata:s}=e,{displaySource:n}=s,r=U(n==null?void 0:n.source,a),o=!!r,i=s.externalSources.length>0,l=o?oe(r,a,t):i?re(e,a,t):ne(e,a,t),c=await l;return p(t),e.addExternalSources([c]),e}async function oe(e,a,t){return{source:await S(e,a,t),original:!0}}async function re(e,a,t){const s=q(a),{externalSources:n}=e.metadata,r=pe(n,a);if(!r)throw new u(`${a.type}-layer:upload-failure`,"Could not find an external source that is supported by the service.",new Error);const o=await S(r,a,t);return e.addExternalSources([{source:o,original:!0}]),{source:await me(o,a,s)}}async function ne(e,a,t){const s=ie(e,a,t);return{source:await I([s],a,t),extent:e.extent.clone(),original:!0}}async function ie(e,a,t){const s=q(a),n=await e.load(t),r=await n.toBinaryGLTF({ignoreLocalTransform:!0});p(t);const o=await r.buffer();return p(t),{blob:new Blob([o.data],{type:o.type}),assetName:`${J()}.glb`,assetType:s}}function pe(e,a){for(const t of e){const s=U(t.source,a);if(s)return s}return null}function U(e,a){if(!e)return null;const{infoFor3D:{supportedFormats:t,editFormats:s}}=a,n=Y(e),r=new Array;let o=!1;for(let i=0;i<n.length;++i){const l=le(n[i],t);if(!l)return null;s.includes(l.assetType)&&(o=!0),r.push(l)}return o?r:null}function le(e,a){const t=X(e,a);return t?{asset:e,assetType:t}:null}async function S(e,a,t){return I(e.map(s=>ue(s,t)),a,t)}async function I(e,a,t){const s=await Promise.all(e.map(async r=>{const o=ce(await r,a,t);return p(t),o}));p(t);const{uploadResults:n}=await de(s.map(({item:r})=>r),a,t);return p(t),e.map((r,o)=>fe(s[o],n[o],a))}async function ue(e,a){const{asset:t,assetType:s}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:s};const n=await t.toBlob(a);return p(a),{blob:n,assetName:t.assetName,assetType:s}}async function ce(e,a,t){const{blob:s,assetType:n,assetName:r}=e;let o=null;try{const i=await ee({data:s,name:r},a.url,t);p(t),o={assetType:n,assetUploadId:i.itemID}}catch(i){O(i),k.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${a.url} does not support the REST Uploads API.`)}if(!o){const i=await G(s);if(p(t),!i.isBase64)throw new u(`${a.type}-layer:uploadAssets-failure`,"Expected gltf data in base64 format after conversion.",new Error);o={assetType:n,assetData:i.data}}if(!o)throw new u(`${a.type}-layer:uploadAssets-failure`,"Unable to prepare uploadAsset request options.",new Error);return{item:o,assetName:r}}async function de(e,a,t){const s=await m(y(a.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(p(t),s.data.uploadResults.length!==e.length)throw new u(`${a.type}-layer:uploadAssets-failure`,`Bad response. Uploaded ${e.length} items and received ${s.data.uploadResults.length} results.`,new Error);return s.data}function fe(e,a,t){const{success:s}=a;if(!s){const{error:c}=a;throw new u(`${t.type}-layer:upload-failure`,`Failed to upload mesh file ${e.assetName}. Error code: ${c.code}. Error message: ${c.messages}`,new Error)}const{assetHash:n}=a,{assetName:r,item:{assetType:o}}=e,{infoFor3D:{supportedFormats:i}}=t,l=V(o,i);if(!l)throw new u(`${t.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${o}, but it does not list it in its supported formats.`,new Error);return new v(r,l,[new A(`${t.parsedUrl.path}/assets/${n}`,n)])}async function me(e,a,t){var c;const s=e.map(({assetName:d,parts:w})=>({assetName:d,assetHash:w[0].partHash})),n=(c=a.capabilities)==null?void 0:c.operations.supportsAsyncConvert3D,r={query:{f:"json",assets:JSON.stringify(s),transportType:"esriTransportTypeUrl",targetFormat:t,async:n},responseType:"json",timeout:0},o=y(a.parsedUrl.path,"convert3D"),i=(n?await ye(o,r):await m(o,r)).data,{infoFor3D:{supportedFormats:l}}=a;return i.assets.map(d=>{const w=x(d.contentType,l);if(!w)throw new u(`${a.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${w}, but it does not list it in its supported formats.`,new Error);return new v(d.assetName,d.contentType,[new A(d.assetURL,d.assetHash)])})}async function ye(e,a){const t=(await m(e,a)).data.statusUrl;for(;;){const s=(await m(t,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return m(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new u("async-convert3D-failed","asynchronous convert3D call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new u("async-convert3D-failed","asynchronous convert3D call failed (undefined response status)")}await W(he)}}function we(e){return!!e.infoFor3D&&!!e.url}function q(e){const{infoFor3D:a}=e,t=x("model/gltf-binary",a.supportedFormats)??K("glb",a.supportedFormats);if(!t)throw new u(`${e.type}-layer:upload-failure`,"Layer does not support glb.",new Error);return t}const he=1e3;export{ze as uploadAssets};
