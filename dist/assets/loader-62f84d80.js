import{c1 as I,c0 as M,gA as ee,l0 as te,d2 as u,s as i,k6 as re,b5 as oe,k7 as ne,eN as se,d9 as ae,l1 as ie,l2 as ue,da as le,dU as ce,im as q,l3 as V,a8 as L,hL as _}from"./index-76dad814.js";import{e as J,r as B}from"./mat4f64-9a8384aa.js";import{v as fe}from"./quat-20f4ba14.js";import{e as de}from"./quatf64-81e039e4.js";import{u as X,F as pe,w as me,q as he,A as Te,V as we,B as ge,g as xe,d as be,i as D,c as H,x as ye,L as _e,O as Se,E as Ee}from"./BufferView-6edfd8ea.js";import{n as Ne,t as Re,o as Oe,r as Ae}from"./resourceUtils-13a1a5f1.js";import"./mat3f64-e19cdcb8.js";import"./basicInterfaces-d9412f98.js";function v(o,e){const r=o.count;e||(e=new o.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=o.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:v},Symbol.toStringTag,{value:"Module"}));function Ce(o={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...o}}function ve(o,e={}){return{data:o,parameters:{wrap:{s:I.REPEAT,t:I.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}let k=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const r=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,r,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var S,K;(function(o){o.SCALAR="SCALAR",o.VEC2="VEC2",o.VEC3="VEC3",o.VEC4="VEC4",o.MAT2="MAT2",o.MAT3="MAT3",o.MAT4="MAT4"})(S||(S={})),function(o){o[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(K||(K={}));const Q={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Ie={pbrMetallicRoughness:Q,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Me={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},z=(o={})=>{const e={...Q,...o.pbrMetallicRoughness},r=Le({...Me,...o.extras});return{...Ie,...o,pbrMetallicRoughness:e,extras:r}};function Le(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:ee(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const Fe={magFilter:M.LINEAR,minFilter:M.LINEAR_MIPMAP_LINEAR,wrapS:I.REPEAT,wrapT:I.REPEAT},Ue=o=>({...Fe,...o});function De(o){let e,r;return o.replace(/^(.*\/)?([^/]*)$/,(t,n,s)=>(e=n||"",r=s||"","")),{dirPart:e,filePart:r}}const A={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class g{constructor(e,r,t,n){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=De(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new i("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new i("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new i("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,r,t){if(re(r)){const a=oe(r);if(a&&a.mediaType!=="model/gltf-binary")try{const c=JSON.parse(a.isBase64?atob(a.data):a.data);return new g(e,r,c)}catch{}const l=ne(r);if(g._isGLBData(l))return this._fromGLBData(e,r,l)}if(Ve.test(r)||(t==null?void 0:t.expectedType)==="gltf"){const a=await e.loadJSON(r,t);return new g(e,r,a)}const n=await e.loadBinary(r,t);if(g._isGLBData(n))return this._fromGLBData(e,r,n);if(He.test(r)||(t==null?void 0:t.expectedType)==="glb")throw new i("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(r,t);return new g(e,r,s)}static _isGLBData(e){if(e==null)return!1;const r=new k(e);return r.remainingBytes()>=4&&r.readUint32()===A.MAGIC}static async _fromGLBData(e,r,t){const n=await g._parseGLBData(t);return new g(e,r,n.json,n.binaryData)}static async _parseGLBData(e){const r=new k(e);if(r.remainingBytes()<12)throw new i("gltf-loader-error","glb binary data is insufficiently large.");const t=r.readUint32(),n=r.readUint32(),s=r.readUint32();if(t!==A.MAGIC)throw new i("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new i("gltf-loader-error","glb binary data is smaller than header specifies.");if(n!==2)throw new i("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,l,c=0;for(;r.remainingBytes()>=8;){const f=r.readUint32(),h=r.readUint32();if(c===0){if(h!==A.CHUNK_TYPE_JSON)throw new i("gltf-loader-error","First glb chunk must be JSON.");if(f<0)throw new i("gltf-loader-error","No JSON data found.");a=await Ne(r.readUint8Array(f))}else if(c===1){if(h!==A.CHUNK_TYPE_BIN)throw new i("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");l=r.readUint8Array(f)}else L.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");c+=1}if(!a)throw new i("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:l}}async getBuffer(e,r){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new i("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,r);if(n.byteLength!==t.byteLength)throw new i("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,r){const t=this._bufferLoaders.get(e);if(t)return t;const n=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(n),r).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,r){if(!this.json.accessors)throw new i("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if((t==null?void 0:t.bufferView)==null)throw new i("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[S.MAT2,S.MAT3,S.MAT4])throw new i("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const n=this.json.bufferViews[t.bufferView],s=await this.getBuffer(n.buffer,r),a=$e[t.type],l=Ge[t.componentType],c=a*l,f=n.byteStride||c;return{raw:s.buffer,byteStride:f,byteOffset:s.byteOffset+(n.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:f===c,componentCount:a,componentByteSize:l,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,r){if(e.indices==null)return;const t=await this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case u.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case u.UNSIGNED_BYTE:return v(w(be,t));case u.UNSIGNED_SHORT:return v(w(xe,t));case u.UNSIGNED_INT:return v(w(ge,t))}}async getPositionData(e,r){if(e.attributes.POSITION==null)throw new i("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return w(D,t)}async getNormalData(e,r){if(e.attributes.NORMAL==null)throw new i("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return w(D,t)}async getTangentData(e,r){if(e.attributes.TANGENT==null)throw new i("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==4)throw new i("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return w(H,t)}async getTextureCoordinates(e,r){if(e.attributes.TEXCOORD_0==null)throw new i("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new i("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===u.FLOAT)return w(X,t);if(!t.normalized)throw new i("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return je(t)}async getVertexColors(e,r){if(e.attributes.COLOR_0==null)throw new i("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===u.FLOAT)return w(H,t);if(t.componentType===u.UNSIGNED_BYTE)return w(ye,t);if(t.componentType===u.UNSIGNED_SHORT)return w(_e,t)}else if(t.componentCount===3){if(t.componentType===u.FLOAT)return w(D,t);if(t.componentType===u.UNSIGNED_BYTE)return w(Se,t);if(t.componentType===u.UNSIGNED_SHORT)return w(Ee,t)}throw new i("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+u[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,r,t){var s,a,l,c,f,h,m,x,p,y;let n=e.material?this._materialCache.get(e.material):void 0;if(!n){const d=e.material!=null?z(this.json.materials[e.material]):z(),T=d.pbrMetallicRoughness,E=this.hasVertexColors(e),b=this.getTexture(T.baseColorTexture,r),N=this.getTexture(d.normalTexture,r),F=t?this.getTexture(d.occlusionTexture,r):void 0,U=t?this.getTexture(d.emissiveTexture,r):void 0,R=t?this.getTexture(T.metallicRoughnessTexture,r):void 0,O=e.material!=null?e.material:-1;n={alphaMode:d.alphaMode,alphaCutoff:d.alphaCutoff,color:T.baseColorFactor,doubleSided:!!d.doubleSided,colorTexture:await b,normalTexture:await N,name:d.name,id:O,occlusionTexture:await F,emissiveTexture:await U,emissiveFactor:d.emissiveFactor,metallicFactor:T.metallicFactor,roughnessFactor:T.roughnessFactor,metallicRoughnessTexture:await R,hasVertexColors:E,ESRI_externalColorMixMode:d.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(s=T==null?void 0:T.baseColorTexture)==null?void 0:s.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(c=(l=d.normalTexture)==null?void 0:l.extensions)==null?void 0:c.KHR_texture_transform,occlusionTextureTransform:(h=(f=d.occlusionTexture)==null?void 0:f.extensions)==null?void 0:h.KHR_texture_transform,emissiveTextureTransform:(x=(m=d.emissiveTexture)==null?void 0:m.extensions)==null?void 0:x.KHR_texture_transform,metallicRoughnessTextureTransform:(y=(p=T==null?void 0:T.metallicRoughnessTexture)==null?void 0:p.extensions)==null?void 0:y.KHR_texture_transform,receiveAmbientOcclusion:d.extras.ESRI_receiveAmbientOcclusion,receiveShadows:d.extras.ESRI_receiveShadows}}return n}async getTexture(e,r){if(!e)return;if((e.texCoord||0)!==0)throw new i("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,n=this.json.textures[t],s=Ue(n.sampler!=null?this.json.samplers[n.sampler]:{}),a=Y(n),l=this.json.images[a],c=await this._loadTextureImageData(t,n,r);return se(this._textureCache,t,()=>{const f=m=>m===33071||m===33648||m===10497,h=m=>{throw new i("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${m}`)};return{data:c,wrapS:f(s.wrapS)?s.wrapS:h(s.wrapS),wrapT:f(s.wrapT)?s.wrapT:h(s.wrapT),minFilter:s.minFilter,name:l.name,id:t}})}getNodeTransform(e){if(e===void 0)return Be;let r=this._nodeTransformCache.get(e);if(!r){const t=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?r=ae(J(),t,n.matrix):n.translation||n.rotation||n.scale?(r=B(t),n.translation&&ie(r,r,n.translation),n.rotation&&(C[3]=fe(C,n.rotation),ue(r,r,C[3],C)),n.scale&&le(r,r,n.scale)):r=B(t),this._nodeTransformCache.set(e,r)}return r}_resolveUri(e){return ce(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=q.parse(this.json.asset.version,"glTF");Pe.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new i("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}async _loadTextureImageData(e,r,t){const n=this._textureLoaders.get(e);if(n)return n;const s=this._createTextureLoader(r,t);return this._textureLoaders.set(e,s),s}async _createTextureLoader(e,r){const t=Y(e),n=this.json.images[t];if(n.uri){if(n.uri.endsWith(".ktx2")){const c=await this._context.loadBinary(this._resolveUri(n.uri),r);return new Re(new Uint8Array(c))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(n.bufferView==null)throw new i("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(n.mimeType==null)throw new i("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(s.byteStride!=null)throw new i("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const l=a.byteOffset+(s.byteOffset||0);return Oe(new Uint8Array(a.buffer,l,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await V(Array.from(this._bufferLoaders.values())),r=await V(Array.from(this._textureLoaders.values()));return e.reduce((t,n)=>t+((n==null?void 0:n.byteLength)??0),0)+r.reduce((t,n)=>t+(n?Ae(n)?n.data.byteLength:n.width*n.height*4:0),0)}}const Be=te(J(),Math.PI/2),Pe=new q(2,0,"glTF"),C=de(),$e={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ge={[u.BYTE]:1,[u.UNSIGNED_BYTE]:1,[u.SHORT]:2,[u.UNSIGNED_SHORT]:2,[u.HALF_FLOAT]:2,[u.FLOAT]:4,[u.INT]:4,[u.UNSIGNED_INT]:4};function je(o){switch(o.componentType){case u.BYTE:return new we(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_BYTE:return new Te(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.SHORT:return new he(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_SHORT:return new me(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_INT:return new pe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.FLOAT:return new X(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}}function w(o,e){return new o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function Y(o){var e;if(((e=o.extensions)==null?void 0:e.KHR_texture_basisu)!=null)return o.extensions.KHR_texture_basisu.source;if(o.source!==null)return o.source;throw new i("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const Ve=/\.gltf$/i,He=/\.glb$/i;let ke=0;async function st(o,e,r={},t=!0){var m,x;const n=await g.load(o,e,r),s="gltf_"+ke++,a={lods:[],materials:new Map,textures:new Map,meta:Ke(n)},l=!(!n.json.asset.extras||n.json.asset.extras.ESRI_type!=="symbolResource"),c=(x=(m=n.json.asset.extras)==null?void 0:m.ESRI_webstyleSymbol)==null?void 0:x.webstyle,f=new Map;await ze(n,async(p,y,d,T)=>{var j;const E=f.get(d)??0;f.set(d,E+1);const b=p.mode!==void 0?p.mode:_.TRIANGLES,N=b===_.TRIANGLES||b===_.TRIANGLE_STRIP||b===_.TRIANGLE_FAN?b:null;if(N==null)return void L.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+_[b]+"). Skipping primitive.");if(!n.hasPositions(p))return void L.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const F=n.getPositionData(p,r),U=n.getMaterial(p,r,t),R=n.hasNormals(p)?n.getNormalData(p,r):null,O=n.hasTangents(p)?n.getTangentData(p,r):null,P=n.hasTextureCoordinates(p)?n.getTextureCoordinates(p,r):null,$=n.hasVertexColors(p)?n.getVertexColors(p,r):null,W=n.getIndexData(p,r),Z={name:T,transform:B(y),attributes:{position:await F,normal:R?await R:null,texCoord0:P?await P:null,color:$?await $:null,tangent:O?await O:null},indices:await W,primitiveType:N,material:qe(a,await U,s)};let G=null;((j=a.meta)==null?void 0:j.ESRI_lod)!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(G=a.meta.ESRI_lod.thresholds[d]),a.lods[d]=a.lods[d]||{parts:[],name:T,lodThreshold:G},a.lods[d].parts[E]=Z});for(const p of a.lods)p.parts=p.parts.filter(y=>!!y);const h=await n.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:l,uri:n.uri,ESRI_webstyle:c},customMeta:{},size:h}}function Ke(o){const e=o.json;let r=null;return e.nodes.forEach(t=>{const n=t.extras;n!=null&&(n.ESRI_proxyEllipsoid||n.ESRI_lod)&&(r=n)}),r}async function ze(o,e){const r=o.json,t=r.scenes[r.scene||0].nodes,n=t.length>1,s=[];for(const l of t){const c=r.nodes[l];s.push(a(l,0)),Ye(c)&&!n&&c.extensions.MSFT_lod.ids.forEach((f,h)=>a(f,h+1))}async function a(l,c){const f=r.nodes[l],h=o.getNodeTransform(l);if(f.weights!=null&&L.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),f.mesh!=null){const m=r.meshes[f.mesh];for(const x of m.primitives)s.push(e(x,h,c,m.name))}for(const m of f.children||[])s.push(a(m,c))}await Promise.all(s)}function Ye(o){var e;return((e=o.extensions)==null?void 0:e.MSFT_lod)&&Array.isArray(o.extensions.MSFT_lod.ids)}function qe(o,e,r){const t=s=>{const a=`${r}_tex_${s&&s.id}${s!=null&&s.name?"_"+s.name:""}`;if(s&&!o.textures.has(a)){const l=ve(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:Je.has(s.minFilter),noUnpackFlip:!0});o.textures.set(a,l)}return a},n=`${r}_mat_${e.id}_${e.name}`;if(!o.materials.has(n)){const s=Ce({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});o.materials.set(n,s)}return n}const Je=new Set([M.LINEAR_MIPMAP_LINEAR,M.LINEAR_MIPMAP_NEAREST]);export{st as loadGLTF};
