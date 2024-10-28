import{s as g,a7 as U,c3 as b,jD as Y,aw as L}from"./index-560772b3.js";import"./enums-fb32c1bb.js";import{s as B,e as R,c as H}from"./Texture-2049af6f.js";import{U as u,C as h}from"./enums-2e633670.js";import"./Program-1bed0bbf.js";import{t as P}from"./VertexElementDescriptor-2925c6af.js";let y=class E{constructor(t,n,e,s,i,a,o){this.instanceId=t,this.textureKey=n,this.indexStart=e,this.indexCount=s,this.vertexStart=i,this.vertexCount=a,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new E(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,n,e,s,i,a,o,c){t.push(n),t.push(e),t.push(s),t.push(i),t.push(a),t.push(o),t.push(c)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const n=t.readInt32(),e=t.readInt32(),s=t.readInt32(),i=t.readInt32(),a=t.readInt32(),o=t.readInt32(),c=t.readInt32();return new E(n,e,s,i,a,o,c)}};y.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function I(r,t){if(t!==null){r.push(t.length);for(const n of t)n.serialize(r);return r}r.push(0)}function S(r,t,n){const e=r.readInt32(),s=new Array(e);for(let i=0;i<s.length;i++)s[i]=t.deserialize(r,n);return s}let k=class x{constructor(t,n){this.id=t,this.sortKey=n,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),I(t,this.records),t}static deserialize(t){const n=t.readInt32(),e=t.readF32(),s=new x(n,e);return s.records=S(t,y)??[],s}};k.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+y.byteSizeHint;const F=()=>U.getLogger("esri.views.2d.engine.webgl.Utils");function Q(r){switch(r){case u.UNSIGNED_BYTE:return 1;case u.UNSIGNED_SHORT_4_4_4_4:return 2;case u.FLOAT:return 4;default:return void F().error(new g("webgl-utils",`Unable to handle type ${r}`))}}function Z(r){switch(r){case u.UNSIGNED_BYTE:return Uint8Array;case u.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case u.FLOAT:return Float32Array;default:return void F().error(new g("webgl-utils",`Unable to handle type ${r}`))}}function v(r){var n;const t={};for(const e in r){const s=r[e];let i=0;t[e]=s.map(a=>{const o=new P(a.name,a.count,a.type,i,0,a.normalized||!1);return i+=a.count*B(a.type),o}),(n=t[e])==null||n.forEach(a=>a.stride=i)}return t}const C=r=>{const t=new Map;for(const n in r)for(const e of r[n])t.set(e.name,e.location);return t},z=r=>{const t={};for(const n in r){const e=r[n];t[n]=e!=null&&e.length?e[0].stride:0}return t},d=new Map,tt=(r,t)=>{if(!d.has(r)){const n=v(t),e={strides:z(n),bufferLayouts:n,attributes:C(t)};d.set(r,e)}return d.get(r)},et=r=>r.includes("data:image/svg+xml");function nt(r){const t=[];for(let n=0;n<r.length;n++)t.push(r.charCodeAt(n));return t}function rt(r,t,n){const e=new R(t.width,t.height);return e.dataType=t.dataType,t.depth&&(e.depth=t.depth),t.flipped&&(e.flipped=t.flipped),t.hasMipmap&&(e.hasMipmap=t.hasMipmap),e.internalFormat=t.internalFormat,t.isImmutable&&(e.isImmutable=t.isImmutable),t.isOpaque&&(e.isOpaque=t.isOpaque),t.maxAnisotropy&&(e.maxAnisotropy=t.maxAnisotropy),e.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(e.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(e.samplingMode=t.samplingMode),t.target&&(e.target=t.target),e.uniform=t.uniform,t.unpackAlignment&&(e.unpackAlignment=t.unpackAlignment),t.wrapMode&&(e.wrapMode=t.wrapMode),new H(r,e,n)}function st(r){return"url"in r&&"urlHash"in r?{...r,url:""}:r}let O=class p{constructor(t,n,e,s){this.computedX=0,this.computedY=0,this.center=b(t,n),this.centerT=Y(),this.halfWidth=e/2,this.halfHeight=s/2,this.width=e,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new p(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,n=4){const e=Math.abs(t.centerT[0]-this.centerT[0]),s=Math.abs(t.centerT[1]-this.centerT[1]),i=(t.halfWidth+this.halfWidth+n)/e,a=(t.halfHeight+this.halfHeight+n)/s,o=Math.min(i,a);return Math.log2(o)}extend(t){const n=Math.min(this.xmin,t.xmin),e=Math.min(this.ymin,t.ymin),s=Math.max(this.xmax,t.xmax)-n,i=Math.max(this.ymax,t.ymax)-e,a=n+s/2,o=e+i/2;this.width=s,this.height=i,this.halfWidth=s/2,this.halfHeight=i/2,this.x=a,this.y=o}static deserialize(t){const n=t.readF32(),e=t.readF32(),s=t.readInt32(),i=t.readInt32();return new p(n,e,s,i)}};const M=new Float32Array(1),D=new Uint32Array(M.buffer);function G(r){return M[0]=r,D[0]}function it(r,t){return 65535&r|t<<16}function m(r){const t=G(r),n=t>>>31;let e=t>>>23&255,s=8388607&t;return e-=127,e>15?n<<15|31744:e<-25?0:(e<-14&&(s+=8388608,s/=2**(-14-e),e=-15),e+=15,s/=8192,s=$(s,1023),n<<15|e<<10|s)}function $(r,t){const n=Math.floor(r),e=r-n;return n<t&&(e>.5||e===.5&&n%2==1)?n+1:n}function T(r){let t=r>>>15,n=r>>10&31,e=1023&r;return t=t?-1:1,n-=15,e/=1024,n>-15?e+=1:n=-14,t*2**n*e}function at(r){const t=r.map(({name:n,count:e,type:s})=>`${n}.${e}.${s}`).join(",");return L(t)}function f(r,t,n,e,s,i,a){if(r.primitiveName===t){for(const o in r)if(o===n){let c=e==null?void 0:e.readWithDefault(s,i,r[o]&&a);return r.type==="text"&&(c=c.toString()),void(r[o]=c)}}if("type"in r&&r.type!=null)switch(r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(r.symbolLayers)for(const o of r.symbolLayers)f(o,t,n,e,s,i,a);break;case"CIMHatchFill":r.lineSymbol&&f(r.lineSymbol,t,n,e,s,i,a);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(r.type==="CIMVectorMarker"&&r.markerGraphics)for(const o of r.markerGraphics)f(o,t,n,e,s,i,a),f(o.symbol,t,n,e,s,i,a)}}const W=400;function ot(r){const t=r.width;return r.effects!=null?W:Math.max(1.25*t,8)}function ht(r,t,n,e){const s=n.packPrecisionFactor??1;switch(n.type){case h.BYTE:if(n.count===1)r.setInt8(e+n.offset,t*s);else for(let i=0;i<n.count;i++){const a=i*Int8Array.BYTES_PER_ELEMENT;r.setInt8(e+n.offset+a,t[i]*s)}break;case h.UNSIGNED_BYTE:if(n.count===1)r.setUint8(e+n.offset,t*s);else for(let i=0;i<n.count;i++){const a=i*Uint8Array.BYTES_PER_ELEMENT;r.setUint8(e+n.offset+a,t[i]*s)}break;case h.SHORT:if(n.count===1)r.setInt16(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const a=i*Int16Array.BYTES_PER_ELEMENT;r.setInt16(e+n.offset+a,t[i]*s,!0)}break;case h.UNSIGNED_SHORT:if(n.count===1)r.setUint16(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(e+n.offset+a,t[i]*s,!0)}break;case h.INT:if(n.count===1)r.setInt32(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const a=i*Int32Array.BYTES_PER_ELEMENT;r.setInt32(e+n.offset+a,t[i]*s,!0)}break;case h.UNSIGNED_INT:if(n.count===1)r.setUint32(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const a=i*Uint32Array.BYTES_PER_ELEMENT;r.setUint32(e+n.offset+a,t[i]*s,!0)}break;case h.FLOAT:if(n.count===1)r.setFloat32(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const a=i*Float32Array.BYTES_PER_ELEMENT;r.setFloat32(e+n.offset+a,t[i]*s,!0)}break;case h.HALF_FLOAT:if(n.count===1)r.setUint16(e+n.offset,m(t*s),!0);else for(let i=0;i<n.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(e+n.offset+a,m(t[i]*s),!0)}}}function ct(r,t,n){switch(t.type){case h.BYTE:{if(t.count===1)return r.getInt8(n+t.offset);const e=[];for(let s=0;s<t.count;s++){const i=s*Int8Array.BYTES_PER_ELEMENT;e.push(r.getInt8(n+t.offset+i))}return e}case h.UNSIGNED_BYTE:{if(t.count===1)return r.getUint8(n+t.offset);const e=[];for(let s=0;s<t.count;s++){const i=s*Uint8Array.BYTES_PER_ELEMENT;e.push(r.getUint8(n+t.offset+i))}return e}case h.SHORT:{if(t.count===1)return r.getInt16(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Int16Array.BYTES_PER_ELEMENT;e.push(r.getInt16(n+t.offset+i,!0))}return e}case h.UNSIGNED_SHORT:{if(t.count===1)return r.getUint16(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;e.push(r.getUint16(n+t.offset+i,!0))}return e}case h.INT:{if(t.count===1)return r.getInt32(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Int32Array.BYTES_PER_ELEMENT;e.push(r.getInt32(n+t.offset+i,!0))}return e}case h.UNSIGNED_INT:{if(t.count===1)return r.getUint32(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Uint32Array.BYTES_PER_ELEMENT;e.push(r.getUint32(n+t.offset+i,!0))}return e}case h.FLOAT:{if(t.count===1)return r.getFloat32(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Float32Array.BYTES_PER_ELEMENT;e.push(r.getFloat32(n+t.offset+i,!0))}return e}case h.HALF_FLOAT:{if(t.count===1)return T(r.getUint16(n+t.offset,!0));const e=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;e.push(T(r.getUint16(n+t.offset+i,!0)))}return e}}}class w{constructor(t,n,e,s,i,a,o,c,l=[]){this.entityTexel=t,this.anchorX=n,this.anchorY=e,this.directionX=s,this.directionY=i,this.maxScale=a,this.minScale=o,this.referenceBounds=c,this.bounds=l}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),I(t,this.bounds)}static deserialize(t){const n=t.readInt32(),e=t.readF32(),s=t.readF32(),i=t.readF32(),a=t.readF32(),o=t.readF32(),c=t.readF32(),l=t.readF32(),_=t.readF32(),A=t.readF32(),N=S(t,O)??[];return new w(n,e,s,i,a,o,c,{size:l,offsetX:_,offsetY:A},N)}}export{st as M,rt as T,at as a,tt as b,Q as c,Z as d,ht as e,it as f,ot as g,ct as h,O as i,nt as j,S as n,f as o,w as r,k as s,y as t,et as y};
