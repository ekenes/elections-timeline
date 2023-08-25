import{_ as R,e9 as K,a9 as B}from"./index-1f15e2a2.js";import{p as Q,m as X,y as Z}from"./MeshLocalVertexSpace-ccb6bb16.js";import{m as ee}from"./MeshGeoreferencedRelativeVertexSpace-df72599e.js";import{n as te,s as ne}from"./vec32-e3497f5d.js";import"./sphere-1ca70ebd.js";import"./ByteSizeUnit-d4757d40.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";var P,$;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(P||(P={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}($||($={}));function oe(){return F||(F=new Promise(e=>R(()=>import("./i3s-e7189160.js"),["assets/i3s-e7189160.js","assets/index-1f15e2a2.js","assets/index-0e712e80.css"]).then(t=>t.i).then(({default:t})=>{const n=t({locateFile:re,onRuntimeInitialized:()=>e(n)});delete n.then})).catch(e=>{throw e})),F}function re(e){return K(`esri/libs/i3s/${e}`)}let F;var j,w,k,V,H;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(j||(j={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(w||(w={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(k||(k={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(V||(V={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(H||(H={}));async function pe(e){r=await A();const t=[e.geometryBuffer];return{result:Y(r,e,t),transferList:t}}async function be(e){var i;r=await A();const t=[e.geometryBuffer],{geometryBuffer:n}=e,a=n.byteLength,s=r._malloc(a),d=new Uint8Array(r.HEAPU8.buffer,s,a);d.set(new Uint8Array(n));const f=r.dracoDecompressPointCloudData(s,d.byteLength);if(r._free(s),f.error.length>0)throw new Error(`i3s.wasm: ${f.error}`);const c=((i=f.featureIds)==null?void 0:i.length)>0?f.featureIds.slice():null,h=f.positions.slice();return c&&t.push(c.buffer),t.push(h.buffer),{result:{positions:h,featureIds:c},transferList:t}}async function Ee(e){await A(),ae(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function ge(e){await A(),ie(e)}async function _e(e){r=await A(),r.setLegacySchema(e.context,e.jsonSchema)}async function we(e){const{localMatrix:t,origin:n,positions:a,vertexSpace:s,local:d}=e,f=B.fromJSON(e.inSpatialReference),c=B.fromJSON(e.outSpatialReference),h={georeferenced:Q,georeferencedRelative:ee,local:X}[s.type].fromJSON(s);let i;if(h.type==="georeferenced"){const[{projectBuffer:l},{initializeProjection:p}]=await Promise.all([R(()=>import("./index-1f15e2a2.js").then(g=>g.lV),["assets/index-1f15e2a2.js","assets/index-0e712e80.css"]),R(()=>import("./index-1f15e2a2.js").then(g=>g.lW),["assets/index-1f15e2a2.js","assets/index-0e712e80.css"])]);await p(f,c),i=new Float64Array(a.length),l(a,f,0,i,c,0,i.length/3)}else{const{project:l}=await R(()=>import("./georeference-42cdf2e4.js").then(p=>p.c),["assets/georeference-42cdf2e4.js","assets/index-1f15e2a2.js","assets/index-0e712e80.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-525be803.js","assets/MeshLocalVertexSpace-ccb6bb16.js","assets/MeshGeoreferencedRelativeVertexSpace-df72599e.js","assets/quat-40782337.js","assets/quatf64-3363c48e.js","assets/vec32-e3497f5d.js","assets/BufferView-9b6f0f26.js"]);i=Z(l({positions:a,transform:t?{localMatrix:t}:void 0,vertexSpace:h,inSpatialReference:f,outSpatialReference:c,local:d}))}const S=i.length,[T,U,L]=n;for(let l=0;l<S;l+=3)i[l]-=T,i[l+1]-=U,i[l+2]-=L;return{result:{projected:i,original:a},transferList:[i.buffer,a.buffer]}}async function Ae({normalMatrix:e,normals:t}){const n=new Float32Array(t.length);return te(n,t,e),ne(n,n),{result:{transformed:n,original:t},transferList:[n.buffer,t.buffer]}}function Le(e){z(e)}let I,r;function ie(e){if(!r)return;const t=e.modifications,n=r._malloc(8*t.length),a=new Float64Array(r.HEAPU8.buffer,n,t.length);for(let s=0;s<t.length;++s)a[s]=t[s];r.setModifications(e.context,n,t.length,e.isGeodetic),r._free(n)}function Y(e,t,n){const{context:a,localOrigin:s,globalTrafo:d,mbs:f,obb:c,elevationOffset:h,geometryBuffer:i,geometryDescriptor:S,indexToVertexProjector:T,vertexToRenderProjector:U}=t,L=e._malloc(i.byteLength),l=33,p=e._malloc(l*Float64Array.BYTES_PER_ELEMENT),g=new Uint8Array(e.HEAPU8.buffer,L,i.byteLength);g.set(new Uint8Array(i));const u=new Float64Array(e.HEAPU8.buffer,p,l);_(u,s);let m=u.byteOffset+3*u.BYTES_PER_ELEMENT,y=new Float64Array(u.buffer,m);_(y,d),m+=16*u.BYTES_PER_ELEMENT,y=new Float64Array(u.buffer,m),_(y,f),m+=4*u.BYTES_PER_ELEMENT,c!=null&&(y=new Float64Array(u.buffer,m),_(y,c.center),m+=3*u.BYTES_PER_ELEMENT,y=new Float64Array(u.buffer,m),_(y,c.halfSize),m+=3*u.BYTES_PER_ELEMENT,y=new Float64Array(u.buffer,m),_(y,c.quaternion));const O=S,J={isDraco:!1,isLegacy:!1,color:t.layouts.some(b=>b.some(E=>E.name==="color")),normal:t.needNormals&&t.layouts.some(b=>b.some(E=>E.name==="normalCompressed")),uv0:t.layouts.some(b=>b.some(E=>E.name==="uv0")),uvRegion:t.layouts.some(b=>b.some(E=>E.name==="uvRegion")),featureIndex:O.featureIndex},o=e.process(a,!!t.obb,L,g.byteLength,O,J,p,h,T,U,t.normalReferenceFrame);if(e._free(p),e._free(L),o.error.length>0)throw new Error(`i3s.wasm: ${o.error}`);if(o.discarded)return null;const v=o.componentOffsets.length>0?o.componentOffsets.slice():null,M=o.featureIds.length>0?o.featureIds.slice():null,G=o.anchorIds.length>0?Array.from(o.anchorIds):null,q=o.anchors.length>0?Array.from(o.anchors):null,x=o.interleavedVertedData.slice().buffer,N=o.indicesType===P.Int16?new Uint16Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/2).slice():new Uint32Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/4).slice(),C=o.positions.slice(),D=o.positionIndicesType===P.Int16?new Uint16Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/2).slice():new Uint32Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/4).slice(),W={layout:t.layouts[0],interleavedVertexData:x,indices:N,hasColors:o.hasColors,hasModifications:o.hasModifications,positionData:{data:C,indices:D}};return M&&n.push(M.buffer),v&&n.push(v.buffer),n.push(x),n.push(N.buffer),n.push(C.buffer),n.push(D.buffer),{componentOffsets:v,featureIds:M,anchorIds:G,anchors:q,transformedGeometry:W,obb:o.obb}}function Ie(e){return e===0?w.Unmodified:e===1?w.PotentiallyModified:e===2?w.Culled:w.Unknown}function ae(e){if(!r)return;const{context:t,buffer:n}=e,a=r._malloc(n.byteLength),s=n.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(r.HEAPU8.buffer,a,s),f=new Float64Array(n);d.set(f),r.filterOBBs(t,a,s),f.set(d),r._free(a)}function z(e){r&&r.destroy(e)===0&&(r=null)}function _(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function Re(){r||await A()}function A(){return r?Promise.resolve(r):(I||(I=oe().then(e=>(r=e,I=null,r))),I)}const Pe={transform:(e,t)=>r&&Y(r,e,t),destroy:z};export{Le as destroyContext,be as dracoDecompressPointCloudData,Ee as filterObbsForModifications,ae as filterObbsForModificationsSync,Re as initialize,Ie as interpretObbModificationResults,pe as process,we as project,_e as setLegacySchema,ge as setModifications,ie as setModificationsSync,Pe as test,Ae as transformNormals};
