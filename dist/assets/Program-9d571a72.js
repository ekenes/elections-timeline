import{jU as _,hu as P,hn as g,jV as k,cH as D,jT as Te,jW as xe,jX as Ee,jY as be,x as z,jZ as Se,j_ as N,c as U,f2 as E,S as G,U as Ae,j$ as Y,k0 as y,k1 as S,k2 as De,fB as K,k3 as R,k4 as x,k5 as $}from"./index-09dc31eb.js";const q=()=>z.getLogger("esri.views.webgl.BufferObject");let Re=class F{static createIndex(e,r,t){return new F(e,_.ELEMENT_ARRAY_BUFFER,r,t)}static createVertex(e,r,t){return new F(e,_.ARRAY_BUFFER,r,t)}static createUniform(e,r,t){return new F(e,_.UNIFORM_BUFFER,r,t)}static createPixelPack(e,r=P.STREAM_READ,t){const n=new F(e,_.PIXEL_PACK_BUFFER,r);return t&&n.setSize(t),n}static createPixelUnpack(e,r=P.STREAM_DRAW,t){return new F(e,_.PIXEL_UNPACK_BUFFER,r,t)}static createTransformFeedback(e,r=P.STATIC_DRAW,t){const n=new F(e,_.TRANSFORM_FEEDBACK_BUFFER,r);return n.setSize(t),n}constructor(e,r,t,n){this._context=e,this.bufferType=r,this.usage=t,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(g.BufferObject,this),this._glName=this._context.gl.createBuffer(),k(this._context.gl),n&&this.setData(n)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===_.ELEMENT_ARRAY_BUFFER){if(this._indexType===D.UNSIGNED_INT)return 4*this._size;if(this._indexType===D.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===_.ELEMENT_ARRAY_BUFFER||this.bufferType===_.ARRAY_BUFFER}dispose(){var e;(e=this._context)!=null&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(g.BufferObject,this),this._context=null):this._glName&&q().warn("Leaked WebGL buffer object")}setSize(e,r=null){if(this.bufferType===_.ELEMENT_ARRAY_BUFFER&&r!=null)switch(this._indexType=r,r){case D.UNSIGNED_SHORT:e*=2;break;case D.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let r=e.byteLength;this.bufferType===_.ELEMENT_ARRAY_BUFFER&&(Te(e)?this._indexType=D.UNSIGNED_BYTE:xe(e)?(r/=2,this._indexType=D.UNSIGNED_SHORT):Ee(e)&&(r/=4,this._indexType=D.UNSIGNED_INT)),this._setBufferData(r,e)}_setBufferData(e,r=null){this._size=e;const t=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;r!=null?n.bufferData(this.bufferType,r,this.usage):n.bufferData(this.bufferType,e,this.usage),k(n),this._isVAOAware&&this._context.bindVAO(t)}setSubData(e,r,t,n){if(!e)return;const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:o}=this._context;o.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,e,t,n-t),k(o),this._isVAOAware&&this._context.bindVAO(s)}getSubData(e,r=0,t,n){if(t<0||n<0)return;const s=Fe(e)?e.BYTES_PER_ELEMENT:1;if(s*((t??0)+(n??0))>e.byteLength)return;r+s*(n??0)>this.usedMemory&&q().warn("Potential problem getting subdata: requested data exceeds buffer size!");const o=this._context.gl;this.bufferType===_.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,_.TRANSFORM_FEEDBACK_BUFFER),o.getBufferSubData(_.TRANSFORM_FEEDBACK_BUFFER,r,e,t,n),this._context.unbindBuffer(_.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,_.COPY_READ_BUFFER),o.getBufferSubData(_.COPY_READ_BUFFER,r,e,t,n),this._context.unbindBuffer(_.COPY_READ_BUFFER))}async getSubDataAsync(e,r=0,t,n){await this._context.clientWaitAsync(),this.getSubData(e,r,t,n)}};function Fe(i){return be(i)}let rt=class{constructor(e,r,t=r){this.internalFormat=e,this.width=r,this.height=t,this.multisampled=!1,this.samples=1}};function Me(i){return i.width<=0||i.height<=0||i.internalFormat==null?0:i.width*i.height*Se(i.internalFormat)}let Ue=class{constructor(e,r){this._context=e,this._descriptor=r,this.type=N.RenderBuffer,this._context.instanceCounter.increment(g.Renderbuffer,this);const t=this._context.gl;this.glName=t.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:n,height:s,internalFormat:o,multisampled:h}=r;h?t.renderbufferStorageMultisample(t.RENDERBUFFER,this.samples,o,n,s):t.renderbufferStorage(t.RENDERBUFFER,o,n,s),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,r=this._context.parameters.maxSamples;return e?Math.min(e,r):r}get usedMemory(){return Me(this._descriptor)}resize(e,r){const t=this._descriptor;if(t.width===e&&t.height===r)return;t.width=e,t.height=r;const n=this._context.gl;this._context.bindRenderbuffer(this),t.multisampled?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,t.internalFormat,t.width,t.height):n.renderbufferStorage(n.RENDERBUFFER,t.internalFormat,t.width,t.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(g.Renderbuffer,this),this._context=null)}};const ye=()=>z.getLogger("esri.views.webgl.FramebufferObject");let Ce=class C{constructor(e,r,t=null){this._context=e,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,e.instanceCounter.increment(g.FramebufferObject,this);const n=L(r)?r:new U(this._context,r);if(this._colorAttachments.set(E.COLOR_ATTACHMENT0,n),this._validateTextureDescriptor(n.descriptor),this._validateColorAttachmentPoint(E.COLOR_ATTACHMENT0),t!=null)if(Ne(t))this._depthStencilTexture=L(t)?t:new U(this._context,t),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const s=we(t)?t:new Ue(this._context,t);this._depthStencilBuffer=s,this._validateRenderBufferDescriptor(s.descriptor)}}dispose(){var r,t;if(this._colorAttachments.size===0&&!this._glName)return;const e=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((n,s)=>{var o;return(o=this.detachColorTexture(s))==null?void 0:o.dispose()}),(r=this.detachDepthStencilBuffer())==null||r.dispose(),(t=this.detachDepthStencilTexture())==null||t.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(g.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(E.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){var r;const e=this._colorAttachments.get(E.COLOR_ATTACHMENT0);return((r=e==null?void 0:e.descriptor)==null?void 0:r.width)??0}get height(){var r;const e=this._colorAttachments.get(E.COLOR_ATTACHMENT0);return((r=e==null?void 0:e.descriptor)==null?void 0:r.height)??0}get usedMemory(){var e;return[...this._colorAttachments].reduce((r,[t,n])=>r+n.usedMemory,((e=this.depthStencil)==null?void 0:e.usedMemory)??0)}getColorTexture(e){const r=this._colorAttachments.get(e);return r&&L(r)?r:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(e,r=E.COLOR_ATTACHMENT0){var n;if(!e)return;this._validateColorAttachmentPoint(r);const t=e.descriptor;this._validateTextureDescriptor(t),(n=this.detachColorTexture(r))==null||n.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,r)),this._colorAttachments.set(r,e)}detachColorTexture(e=E.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);if(r){if(this._initialized){const t=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e),this._context.bindFramebuffer(t)}return this._colorAttachments.delete(e),r}}setColorTextureTarget(e,r=E.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(r);t&&this._framebufferTexture2D(t.glName,r,e)}attachDepthStencil(e){if(e)switch(e.type){case N.Texture:return this._attachDepthStencilTexture(e);case N.RenderBuffer:return this._attachDepthStencilBuffer(e)}}_attachDepthStencilTexture(e){var t;if(e==null)return;const r=e.descriptor;r.pixelFormat!==G.DEPTH_STENCIL&&r.pixelFormat!==G.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==Ae.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,Y)),(t=this._depthStencilTexture)==null||t.dispose(),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;if(e&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,Y),this._context.bindFramebuffer(r)}return this._depthStencilTexture=null,e}_attachDepthStencilBuffer(e){if(e==null)return;const r=e.descriptor;if(this._validateRenderBufferDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,n=this._getGLAttachmentPoint(r);t.framebufferRenderbuffer(y.FRAMEBUFFER,n,t.RENDERBUFFER,e.glName)}this._depthStencilBuffer=e}detachDepthStencilBuffer(){const e=this._depthStencilBuffer;if(e&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const t=this._context.gl,n=this._getGLAttachmentPoint(e.descriptor);t.framebufferRenderbuffer(y.FRAMEBUFFER,n,t.RENDERBUFFER,null),this._context.bindFramebuffer(r)}return this._depthStencilBuffer=null,e}copyToTexture(e,r,t,n,s,o,h){(e<0||r<0||s<0||o<0)&&console.error("Offsets cannot be negative!"),(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!");const a=h.descriptor;h.descriptor.target!==S.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),((a==null?void 0:a.width)==null||(a==null?void 0:a.height)==null||e+t>this.width||r+n>this.height||s+t>a.width||o+n>a.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,c=l.bindTexture(h,U.TEXTURE_UNIT_FOR_UPDATES);l.setActiveTexture(U.TEXTURE_UNIT_FOR_UPDATES),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(S.TEXTURE_2D,0,s,o,e,r,t,n),l.bindTexture(c,U.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,t,n,s,o,h){(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,t,n,s,o,h)}async readPixelsAsync(e,r,t,n,s,o,h){const{gl:a}=this._context,l=Re.createPixelPack(this._context,P.STREAM_READ,h.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),a.readPixels(e,r,t,n,s,o,0),this._context.unbindBuffer(_.PIXEL_PACK_BUFFER),await l.getSubDataAsync(h),l.dispose()}resize(e,r){var n,s;if(this.width===e&&this.height===r)return;const t={width:e,height:r};v(t,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(o=>o.resize(t.width,t.height)),(n=this._depthStencilTexture)==null||n.resize(t.width,t.height),this._initialized&&(v(t,this._context.parameters.maxRenderbufferSize),(s=this._depthStencilBuffer)==null||s.resize(t.width,t.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(e=y.FRAMEBUFFER){const r=this._context.gl;if(this._initialized)return void r.bindFramebuffer(e,this.glName);this._glName&&r.deleteFramebuffer(this._glName);const t=r.createFramebuffer();if(r.bindFramebuffer(e,t),this._colorAttachments.forEach((n,s)=>this._framebufferTexture2D(n.glName,s,W(n),e)),this._depthStencilBuffer){const n=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);r.framebufferRenderbuffer(e,n,r.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,r.DEPTH_STENCIL_ATTACHMENT,W(this._depthStencilTexture),e);De()&&r.checkFramebufferStatus(e)!==r.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=t,this._initialized=!0}_framebufferTexture2D(e,r=E.COLOR_ATTACHMENT0,t=S.TEXTURE_2D,n=y.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(n,r,t,e,s)}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(y.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthStencilBuffer=K(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=K(this._depthStencilTexture))}_validateTextureDescriptor(e){e.target!==S.TEXTURE_2D&&e.target!==S.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),v(e,this._context.parameters.maxTextureSize),this._validateBufferDimensions(e)}_validateRenderBufferDescriptor(e){v(e,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(e)}_validateBufferDimensions(e){e.width<=0&&(e.width=this.width),e.height<=0&&(e.height=this.height),this.width>0&&this.height>0&&(this.width===e.width&&this.height===e.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(e){switch(e.internalFormat){case R.DEPTH_COMPONENT16:case R.DEPTH_COMPONENT24:case R.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case R.DEPTH24_STENCIL8:case R.DEPTH32F_STENCIL8:case R.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case R.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(C._MAX_COLOR_ATTACHMENTS===-1){const{gl:t}=this._context;C._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS)}const r=e-E.COLOR_ATTACHMENT0;r+1>C._MAX_COLOR_ATTACHMENTS&&z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${C._MAX_COLOR_ATTACHMENTS} color attachments`)}};function L(i){return i!=null&&"type"in i&&i.type===N.Texture}function we(i){return i!=null&&"type"in i&&i.type===N.RenderBuffer}function Ne(i){return L(i)||i!=null&&"pixelFormat"in i}function v(i,e){const r=Math.max(i.width,i.height);if(r>e){ye().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${e}`);const t=e/r;return i.width=Math.round(i.width*t),i.height=Math.round(i.height*t),!1}return!0}function W(i){return i.descriptor.target===S.TEXTURE_CUBE_MAP?S.TEXTURE_CUBE_MAP_POSITIVE_X:S.TEXTURE_2D}Ce._MAX_COLOR_ATTACHMENTS=-1;const ve=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],Be=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Q=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Pe=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];var T=999,Z=9999,I=0,j=1,J=2,ee=3,te=4,B=5,Le=6,Oe=7,ke=8,re=9,Ie=10,ie=11,je=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function He(){var i,e,r,t=0,n=0,s=T,o=[],h=[],a=1,l=0,c=0,f=!1,d=!1,p="";return function(u){return h=[],u!==null?ae(u.replace?u.replace(/\r\n/g,`
`):u):he()};function m(u){u.length&&h.push({type:je[s],data:u,position:c,line:a,column:l})}function ae(u){var A;for(t=0,r=(p+=u).length;i=p[t],t<r;){switch(A=t,s){case I:t=ue();break;case j:t=fe();break;case J:t=X();break;case ee:t=_e();break;case te:t=me();break;case ie:t=de();break;case B:t=ge();break;case Z:t=pe();break;case re:t=le();break;case T:t=ce()}A!==t&&(p[A]===`
`?(l=0,++a):++l)}return n+=t,p=p.slice(t),h}function he(u){return o.length&&m(o.join("")),s=Ie,m("(eof)"),h}function ce(){return o=o.length?[]:o,e==="/"&&i==="*"?(c=n+t-1,s=I,e=i,t+1):e==="/"&&i==="/"?(c=n+t-1,s=j,e=i,t+1):i==="#"?(s=J,c=n+t,t):/\s/.test(i)?(s=re,c=n+t,t):(f=/\d/.test(i),d=/[^\w_]/.test(i),c=n+t,s=f?te:d?ee:Z,t)}function le(){return/[^\s]/g.test(i)?(m(o.join("")),s=T,t):(o.push(i),e=i,t+1)}function X(){return i!=="\r"&&i!==`
`||e==="\\"?(o.push(i),e=i,t+1):(m(o.join("")),s=T,t)}function fe(){return X()}function ue(){return i==="/"&&e==="*"?(o.push(i),m(o.join("")),s=T,t+1):(o.push(i),e=i,t+1)}function _e(){if(e==="."&&/\d/.test(i))return s=B,t;if(e==="/"&&i==="*")return s=I,t;if(e==="/"&&i==="/")return s=j,t;if(i==="."&&o.length){for(;O(o););return s=B,t}if(i===";"||i===")"||i==="("){if(o.length)for(;O(o););return m(i),s=T,t+1}var u=o.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||u){for(;O(o););return s=T,t}return o.push(i),e=i,t+1}function O(u){for(var A,M,V=0;;){if(A=Q.indexOf(u.slice(0,u.length+V).join("")),M=Q[A],A===-1){if(V--+u.length>0)continue;M=u.slice(0,1).join("")}return m(M),c+=M.length,(o=o.slice(M.length)).length}}function de(){return/[^a-fA-F0-9]/.test(i)?(m(o.join("")),s=T,t):(o.push(i),e=i,t+1)}function me(){return i==="."||/[eE]/.test(i)?(o.push(i),s=B,e=i,t+1):i==="x"&&o.length===1&&o[0]==="0"?(s=ie,o.push(i),e=i,t+1):/[^\d]/.test(i)?(m(o.join("")),s=T,t):(o.push(i),e=i,t+1)}function ge(){return i==="f"&&(o.push(i),e=i,t+=1),/[eE]/.test(i)||i==="-"&&/[eE]/.test(e)?(o.push(i),e=i,t+1):/[^\d]/.test(i)?(m(o.join("")),s=T,t):(o.push(i),e=i,t+1)}function pe(){if(/[^\d\w_]/.test(i)){var u=o.join("");return s=Be.indexOf(u)>-1?ke:Pe.indexOf(u)>-1?Oe:Le,m(o.join("")),s=T,t}return o.push(i),e=i,t+1}}function $e(i){var e=He(),r=[];return r=(r=r.concat(e(i))).concat(e(null))}function ze(i){return $e(i)}function Xe(i){return i.map(e=>e.type!=="eof"?e.data:"").join("")}const H=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function Ve(i,e="100",r="300 es"){const t=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of i)if(n.type==="preprocessor"){const s=t.exec(n.data);if(s){const o=s[1].replaceAll(/\s{2,}/g," ");if(o===r)return o;if(o===e)return n.data="#version "+r,e;throw new Error("unknown glsl version: "+o)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:`
`}),null}function Ge(i,e){for(let r=e-1;r>=0;r--){const t=i[r];if(t.type!=="whitespace"&&t.type!=="block-comment"){if(t.type!=="keyword")break;if(t.data==="attribute"||t.data==="in")return!0}}return!1}function w(i,e,r,t){t=t||r;for(const n of i)if(n.type==="ident"&&n.data===r)return t in e?e[t]++:e[t]=0,w(i,e,t+"_"+e[t],t);return r}function oe(i,e,r="afterVersion"){function t(a,l){for(let c=l;c<a.length;c++){const f=a[c];if(f.type==="operator"&&f.data===";")return c}return null}function n(a){let l=-1,c=0,f=-1;for(let d=0;d<a.length;d++){const p=a[d];if(p.type==="preprocessor"&&(/#(if|ifdef|ifndef)\s+.+/.test(p.data)?++c:/#endif\s*.*/.test(p.data)&&--c),r!=="afterVersion"&&r!=="afterPrecision"||p.type==="preprocessor"&&p.data.startsWith("#version")&&(f=Math.max(f,d)),r==="afterPrecision"&&p.type==="keyword"&&p.data==="precision"){const m=t(a,d);if(m===null)throw new Error("precision statement not followed by any semicolons!");f=Math.max(f,m)}l<f&&c===0&&(l=d)}return l+1}const s={data:`
`,type:"whitespace"},o=a=>a<i.length&&/[^\r\n]$/.test(i[a].data);let h=n(i);o(h-1)&&i.splice(h++,0,s);for(const a of e)i.splice(h++,0,a);o(h-1)&&o(h)&&i.splice(h,0,s)}function Ye(i,e,r,t="lowp"){oe(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:t},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Ke(i,e,r,t,n="lowp"){oe(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:t.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function qe(i,e){let r,t,n=-1;for(let s=e;s<i.length;s++){const o=i[s];if(o.type==="operator"&&(o.data==="["&&(r=s),o.data==="]")){t=s;break}o.type==="integer"&&(n=parseInt(o.data,10))}return r&&t&&i.splice(r,t-r+1),n}function ne(i,e){if(i.startsWith("#version 300"))return i;const r=ze(i);if(Ve(r,"100","300 es")==="300 es")return i;let t=null,n=null;const s={},o={};for(let h=0;h<r.length;++h){const a=r[h];switch(a.type){case"keyword":e===x.VERTEX_SHADER&&a.data==="attribute"?a.data="in":a.data==="varying"&&(a.data=e===x.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replaceAll(/(2D|Cube|EXT)/g,"")),e===x.FRAGMENT_SHADER&&a.data==="gl_FragColor"&&(t||(t=w(r,s,"fragColor"),Ye(r,t,"vec4")),a.data=t),e===x.FRAGMENT_SHADER&&a.data==="gl_FragData"){const l=qe(r,h+1),c=w(r,s,"fragData");Ke(r,c,"vec4",l,"mediump"),a.data=c}else e===x.FRAGMENT_SHADER&&a.data==="gl_FragDepthEXT"&&(n||(n=w(r,s,"gl_FragDepth")),a.data=n);break;case"ident":if(ve.includes(a.data)){if(e===x.VERTEX_SHADER&&Ge(r,h))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in o||(o[a.data]=w(r,s,a.data)),a.data=o[a.data]}}}for(let h=r.length-1;h>=0;--h){const a=r[h];if(a.type==="preprocessor"){const l=a.data.match(/#extension\s+(.*):/);if(l!=null&&l[1]&&H.has(l[1].trim())){const d=r[h+1];r.splice(h,d&&d.type==="whitespace"?2:1)}const c=a.data.match(/#ifdef\s+(.*)/);c!=null&&c[1]&&H.has(c[1].trim())&&(a.data="#if 1");const f=a.data.match(/#ifndef\s+(.*)/);f!=null&&f[1]&&H.has(f[1].trim())&&(a.data="#if 0")}}return We(i,Xe(r))}function We(i,e){return e}const Qe=4294967295;class st{constructor(e,r,t,n,s=new Map,o=[]){var l;this._context=e,this._locations=n,this._uniformBlockBindings=s,this._transformFeedbackVaryings=o,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),r.length===0&&console.error("Shaders source should not be empty!"),r=ne(r,x.VERTEX_SHADER),t=ne(t,x.FRAGMENT_SHADER),this._vShader=se(this._context,x.VERTEX_SHADER,r),this._fShader=se(this._context,x.FRAGMENT_SHADER,t),et.enabled&&(this._linesOfCode=r.match(/\n/g).length+t.match(/\n/g).length+2,this._context.instanceCounter.increment(g.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(g.Shader,this),$()&&(this.vertexShader=r,this.fragmentShader=t),this.usedMemory=r.length+t.length;const h=this._context.gl,a=h.createProgram();h.attachShader(a,this._vShader),h.attachShader(a,this._fShader),this._locations.forEach((c,f)=>h.bindAttribLocation(a,c,f)),(l=this._transformFeedbackVaryings)!=null&&l.length&&h.transformFeedbackVaryings(a,this._transformFeedbackVaryings,h.SEPARATE_ATTRIBS),h.linkProgram(a),$()&&!h.getProgramParameter(a,h.LINK_STATUS)&&console.error(`Could not link shader
validated: ${h.getProgramParameter(a,h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader,h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader,h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(a)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[c,f]of this._uniformBlockBindings){const d=h.getUniformBlockIndex(a,c);d<Qe&&h.uniformBlockBinding(a,d,f)}this._glName=a,this._context.instanceCounter.increment(g.Program,this)}get glName(){return this._glName}get hasGLName(){return this._glName!=null}get hasTransformFeedbackVaryings(){var e;return!!((e=this._transformFeedbackVaryings)!=null&&e.length)}get compiled(){if(this._compiled)return!0;const e=this._context.gl.getExtension("KHR_parallel_shader_compile");return e==null||this.glName==null?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const e=this._context.gl,r=this._context.instanceCounter;this._nameToUniformLocation.forEach(t=>t&&r.decrement(g.Uniform,t)),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(r.decrement(g.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),e.deleteShader(this._vShader),this._vShader=null,r.decrement(g.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,r.decrement(g.Program,this))}ref(){++this._refCount}_getUniformLocation(e){const r=this._nameToUniformLocation.get(e);if(r!==void 0)return r;if(this.glName){const t=this._context.gl.getUniformLocation(this.glName,e);return this._nameToUniformLocation.set(e,t),t&&this._context.instanceCounter.increment(g.Uniform,t),t}return null}hasUniform(e){return this._getUniformLocation(e)!=null}setUniform1i(e,r){const t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1i(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1iv(e,r){b(this._nameToUniform1v,e,r)&&this._context.gl.uniform1iv(this._getUniformLocation(e),r)}setUniform2iv(e,r){b(this._nameToUniform2,e,r)&&this._context.gl.uniform2iv(this._getUniformLocation(e),r)}setUniform3iv(e,r){b(this._nameToUniform3,e,r)&&this._context.gl.uniform3iv(this._getUniformLocation(e),r)}setUniform4iv(e,r){b(this._nameToUniform4,e,r)&&this._context.gl.uniform4iv(this._getUniformLocation(e),r)}setUniform1f(e,r){const t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1f(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1fv(e,r){b(this._nameToUniform1v,e,r)&&this._context.gl.uniform1fv(this._getUniformLocation(e),r)}setUniform2f(e,r,t){const n=this._nameToUniform2.get(e);n===void 0?(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),this._nameToUniform2.set(e,[r,t])):r===n[0]&&t===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),n[0]=r,n[1]=t)}setUniform2fv(e,r){b(this._nameToUniform2,e,r)&&this._context.gl.uniform2fv(this._getUniformLocation(e),r)}setUniform3f(e,r,t,n){const s=this._nameToUniform3.get(e);s===void 0?(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),this._nameToUniform3.set(e,[r,t,n])):r===s[0]&&t===s[1]&&n===s[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),s[0]=r,s[1]=t,s[2]=n)}setUniform3fv(e,r){const t=this._getUniformLocation(e);t!=null&&b(this._nameToUniform3,e,r)&&this._context.gl.uniform3fv(t,r)}setUniform4f(e,r,t,n,s){const o=this._nameToUniform4.get(e);o===void 0?(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,s),this._nameToUniform4.set(e,[r,t,n,s])):o!==void 0&&r===o[0]&&t===o[1]&&n===o[2]&&s===o[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,s),o[0]=r,o[1]=t,o[2]=n,o[3]=s)}setUniform4fv(e,r){const t=this._getUniformLocation(e);t!=null&&b(this._nameToUniform4,e,r)&&this._context.gl.uniform4fv(t,r)}setUniformMatrix3fv(e,r,t=!1){const n=this._getUniformLocation(e);n!=null&&b(this._nameToUniformMatrix3,e,r)&&this._context.gl.uniformMatrix3fv(n,t,r)}setUniformMatrix4fv(e,r,t=!1){const n=this._getUniformLocation(e);n!=null&&b(this._nameToUniformMatrix4,e,r)&&this._context.gl.uniformMatrix4fv(n,t,r)}stop(){}}function se(i,e,r){const t=i.gl,n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),$()&&!t.getShaderParameter(n,t.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===x.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(t.getShaderInfoLog(n)),console.error(Ze(r))),n}function Ze(i){let e=2;return i.replaceAll(`
`,()=>`
`+Je(e++)+":")}function Je(i){return i>=1e3?i.toString():("  "+i).slice(-3)}function b(i,e,r){const t=i.get(e);if(!t)return i.set(e,Array.from(r)),!0;const n=r.length;if(t.length!==n)return i.set(e,Array.from(r)),!0;for(let s=0;s<n;++s){const o=r[s];if(t[s]!==o){for(t[s]=o;s<n;++s)t[s]=r[s];return!0}}return!1}const et={enabled:!1};export{Re as E,Ce as a,rt as i,st as r,Ue as s};
