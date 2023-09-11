import{s as g,K as N,gh as ss,e as es,hr as ts,cE as v,hs as os,bu as f,X as d,cD as p,dx as as,az as rs,ht as ns,aB as _,g6 as is,aC as cs,cF as ps,g8 as ls,m as us}from"./index-a1a1303e.js";import{h as ds,N as ms,i as S,o as U,A as fs}from"./FeatureLayerSource-8cfcac19.js";import"./mat4f64-1413b4a7.js";import"./MeshGeoreferencedRelativeVertexSpace-56e4cf03.js";import"./vec32-3dafe0f1.js";import"./editingSupport-da980f4a.js";import"./clientSideDefaults-fc41ae2c.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./QueryTask-98f21b10.js";import"./executeForIds-1a431b43.js";import"./query-0fb2e4ab.js";import"./pbfQueryUtils-61f7b846.js";import"./pbf-75d66840.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-e07e9845.js";import"./executeQueryPBF-6363f381.js";import"./featureConversionUtils-b3c52e9d.js";const h="upload-assets",w=()=>new Error;class gs extends g{constructor(){super(`${h}:unsupported`,"Layer does not support asset uploads.",w())}}class hs extends g{constructor(){super(`${h}:no-glb-support`,"Layer does not support glb.",w())}}let ws=class extends g{constructor(){super(`${h}:no-supported-source`,"No supported external source found",w())}},ys=class extends g{constructor(){super(`${h}:not-base-64`,"Expected gltf data in base64 format after conversion.",w())}},Ps=class extends g{constructor(){super(`${h}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",w())}};class bs extends g{constructor(t,s){super(`${h}:bad-response`,`Bad response. Uploaded ${t} items and received ${s} results.`,w())}}let Ts=class extends g{constructor(t,s){super(`${h}-layer:upload-failed`,`Failed to upload mesh file ${t}. Error code: ${(s==null?void 0:s.code)??"-1"}. Error message: ${(s==null?void 0:s.messages)??"unknown"}`,w())}};class k extends g{constructor(t){super(`${h}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${t}, but it does not list it in its supported formats.`,w())}}let B=class extends g{constructor(){super(`${h}:convert3D-failed`,"convert3D failed.")}};const F={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function P(e,t=o=>{},s){return new As(e,t,s)}class As{constructor(t,s=a=>{},o){if(this.onProgress=s,this.taskName=o,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof t=="number"){this._weights={};for(let a=0;a<t;a++){const r=a,n=1/t;this._weights[r]=n,this._progressMap.set(r,0)}}else this._weights=t;this.emitProgress()}emitProgress(){let t=0;for(const[s,o]of this._progressMap.entries())t+=o*this._weights[s];if(t===1&&N("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[o,a]of this._timingsMap){const r=Math.round(a.end-a.start)/1e3,n=Math.round(r/s*100);console.log(this.taskName??"Task",{stepKey:o,stepTime:r,relativeTime:n})}}this.onProgress(t)}setProgress(t,s){if(this._progressMap.set(t,s),N("enable-feature:esri-3dofl-upload-timings")){const o=performance.now();this._startTime??(this._startTime=o);const a=ss(this._timingsMap,t,()=>({start:o,end:0}));s===1&&(a.end=o)}this.emitProgress()}simulate(t,s){return C(o=>this.setProgress(t,o),s)}makeOnProgress(t){return s=>this.setProgress(t,s)}}function C(e=s=>{},t=Fs){const s=performance.now();e(0);const o=setInterval(()=>{const a=performance.now()-s,r=1-Math.exp(-a/t);e(r)},vs);return es(()=>{clearInterval(o),e(1)})}function O(e,t=$s){return ts(os(e*xs/t))}const $s=20,xs=8e-6,vs=v(50),Fs=v(1e4),q=1e6,D=20*q,Ms=2e9,js=3;async function Es({data:e,name:t,description:s},o,a){let r=null;try{const n=f(o,"uploads"),i=f(n,"info"),{data:c}=await d(i,{query:{f:"json"},responseType:"json"});p(a);const m=as(o),u=c.maxUploadFileSize*q,y=m?Ms:u,x=m?Math.min(D,u):D;if(e.size>y)throw new Error("Data too large");const G=f(n,"register"),{data:M}=await d(G,{query:{f:"json",itemName:Is(t),description:s},responseType:"json",method:"post"});if(p(a),!M.success)throw new Error("Registration failed");const{itemID:J}=M.item;r=f(n,J);const K=f(r,"uploadPart"),j=Math.ceil(e.size/x),b=new Array;for(let l=0;l<j;++l)b.push(e.slice(l*x,Math.min((l+1)*x,e.size)));const T=b.slice().reverse(),E=new Array,W=P(j,a==null?void 0:a.onProgress,"uploadItem"),V=async()=>{for(;T.length!==0;){const l=b.length-T.length,A=T.pop(),$=new FormData,Q=W.simulate(l,O(A.size));try{const Y=A;$.append("f","json"),$.append("file",Y),$.append("partId",`${l}`);const{data:Z}=await d(K,{timeout:0,body:$,responseType:"json",method:"post"});if(p(a),!Z.success)throw new Error("Part upload failed")}finally{Q.remove()}}};for(let l=0;l<js&&T.length!==0;++l)E.push(V());await Promise.all(E);const X=f(r,"commit"),{data:I}=await d(X,{query:{f:"json",parts:b.map((l,A)=>A).join(",")},responseType:"json",method:"post"});if(p(a),!I.success)throw new Error("Commit failed");return I.item}catch(n){if(r!=null){const i=f(r,"delete");await d(i,{query:{f:"json"},responseType:"json",method:"post"})}throw n}}function Is(e){return e.replaceAll("/","_").replaceAll("\\","_")}async function Ae(e,t,s){var r;const o=e.length;if(!o)return(r=s==null?void 0:s.onProgress)==null||r.call(s,1),[];const a=P(o,s==null?void 0:s.onProgress,"uploadAssets");return Promise.all(e.map((n,i)=>Ns(n,t,{...s,onProgress:a.makeOnProgress(i)})))}async function Ns(e,{layer:t,ongoingUploads:s},o){var n;const a=s.get(e);if(a)return a;if(!Ws(t))throw new gs;if(Ds(e,t))return(n=o==null?void 0:o.onProgress)==null||n.call(o,1),e;const r=_s(e,t,o);s.set(e,r);try{await r}finally{s.delete(e)}return e}function Ds(e,t){const{parsedUrl:s}=t;return s!=null&&e.metadata.externalSources.some(o=>ds(o,s))}async function _s(e,t,s){const{metadata:o}=e,{displaySource:a}=o,r=L(a==null?void 0:a.source,t),n=!!r,i=o.externalSources.length>0,c=n?Ss(r,t,s):i?Us(e,t,s):ks(e,t,s),m=await c;return p(s),e.addExternalSources([m]),e}async function Ss(e,t,s){return{source:await R(e,t,s),original:!0}}async function Us(e,t,s){const o=H(t),{externalSources:a}=e.metadata,r=Cs(a,t);if(!r)throw new ws;const n=P(F.uploadConvertibleSource,s==null?void 0:s.onProgress,"uploadConvertibleSource"),i=await R(r,t,{onProgress:n.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:i,original:!0}]);const c=n.simulate("serviceAssetsToGlb",Vs(r));try{return{source:await Gs(i,t,o)}}finally{c.remove()}}async function ks(e,t,s){const o=P(F.uploadLocalMesh,s==null?void 0:s.onProgress,"uploadLocalMesh"),a=Bs(e,t,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await z([a],t,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}async function Bs(e,t,s){const o=H(t),a=await e.load(s),r=await a.toBinaryGLTF({ignoreLocalTransform:!0});p(s);const n=await r.buffer();return p(s),{blob:new Blob([n.data],{type:n.type}),assetName:`${rs()}.glb`,assetType:o}}function Cs(e,t){for(const s of e){const o=L(s.source,t);if(o)return o}return null}function L(e,t){if(!e)return null;const{infoFor3D:{supportedFormats:s,editFormats:o}}=t,a=fs(e),r=new Array;let n=!1;for(let i=0;i<a.length;++i){const c=Os(a[i],s);if(!c)return null;o.includes(c.assetType)&&(n=!0),r.push(c)}return n?r:null}function Os(e,t){const s=ms(e,t);return s?{asset:e,assetType:s}:null}async function R(e,t,s){return z(e.map(o=>qs(o,s)),t,s)}async function z(e,t,s){const o=P(F.uploadAssetBlobs,s==null?void 0:s.onProgress,"uploadAssetBlobs"),a=await Rs(e,t,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});p(s);const r=a.map(({item:i})=>i),{uploadResults:n}=await zs(r,t,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return p(s),e.map((i,c)=>Hs(a[c],n[c],t))}async function qs(e,t){const{asset:s,assetType:o}=e;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const a=await s.toBlob(t);return p(t),{blob:a,assetName:s.assetName,assetType:o}}async function Ls(e,t,s){const{blob:o,assetType:a,assetName:r}=e;let n=null;try{const i=await Es({data:o,name:r},t.url,s);p(s),n={assetType:a,assetUploadId:i.itemID}}catch(i){ps(i),Xs().warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!n){const i=await ls(o);if(p(s),!i.isBase64)throw new ys;n={assetType:a,assetData:i.data}}if(!n)throw new Ps;return{item:n,assetName:r}}function Rs(e,t,s){const o=P(e.length,s==null?void 0:s.onProgress,"prepareAssetItems");return Promise.all(e.map(async(a,r)=>{const n=Ls(await a,t,{...s,onProgress:o.makeOnProgress(r)});return p(s),n}))}async function zs(e,t,s){const o=C(s==null?void 0:s.onProgress);try{const a=await d(f(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(p(s),a.data.uploadResults.length!==e.length)throw new bs(e.length,a.data.uploadResults.length);return a.data}finally{o.remove()}}function Hs(e,t,s){const{success:o}=t;if(!o){const{error:m}=t;throw new Ts(e.assetName,m)}const{assetHash:a}=t,{assetName:r,item:{assetType:n}}=e,{infoFor3D:{supportedFormats:i}}=s,c=ns(n,i);if(!c)throw new k(n);return new S(r,c,[new U(`${s.parsedUrl.path}/assets/${a}`,a)])}async function Gs(e,t,s){var m;const o=e.map(({assetName:u,parts:y})=>({assetName:u,assetHash:y[0].partHash})),a=(m=t.capabilities)==null?void 0:m.operations.supportsAsyncConvert3D,r={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:a},n=f(t.parsedUrl.path,"convert3D"),i=(await(a?Ks:Js)(n,{query:r,responseType:"json",timeout:0})).data,{infoFor3D:{supportedFormats:c}}=t;return i.assets.map(u=>{const y=_(u.contentType,c);if(!y)throw new k(y);return new S(u.assetName,u.contentType,[new U(u.assetURL,u.assetHash)])})}async function Js(e,t){try{return await d(e,t)}catch{throw new B}}async function Ks(e,t){const s=(await d(e,t)).data.statusUrl;for(;;){const o=(await d(s,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return d(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":default:throw new B;case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":}await is(Qs)}}function Ws(e){return!!e.infoFor3D&&!!e.url}function H(e){const{infoFor3D:t}=e,s=_("model/gltf-binary",t.supportedFormats)??cs("glb",t.supportedFormats);if(!s)throw new hs;return s}function Vs(e){const t=e.reduce((s,{asset:o})=>o instanceof File?s+o.size:s,0);return O(t,Ys)}function Xs(){return us.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Qs=v(1e3),Ys=10;export{Vs as estimatedConversionTime,Ae as uploadAssets};
