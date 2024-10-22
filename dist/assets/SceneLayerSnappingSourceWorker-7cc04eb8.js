import{iW as Rt,bP as I,dA as Z,iX as At,bb as F,dB as y,dD as B,iY as tt,bc as p,gb as et,iZ as Y,y as Et,A as St,dE as Ft,dz as v}from"./index-09dc31eb.js";import{v as Nt,h as xt,l as Mt}from"./lineSegment-f0921bf3.js";import{s as lt,m as nt,O as w,l as ot,N as q,H as it,U as _,E as j,i as _t}from"./sphere-eed9422d.js";import"./plane-9afac152.js";import{i as mt}from"./Util-2ae7b611.js";import{m as jt}from"./edgeProcessing-273aaed2.js";import"./mat3f64-e19cdcb8.js";import"./mat4f64-9a8384aa.js";import"./quatf64-81e039e4.js";import"./deduplicate-612807f3.js";import"./Indices-acad5385.js";import"./InterleavedLayout-f3ef7dc0.js";import"./BufferView-29927bc1.js";import"./types-1305598a.js";import"./VertexAttribute-ace1421c.js";import"./glUtil-6a85faa9.js";import"./VertexElementDescriptor-2925c6af.js";function ft(o){return o?{ray:nt(o.ray),c0:o.c0,c1:o.c1}:{ray:nt(),c0:0,c1:Number.MAX_VALUE}}new lt(()=>ft());function H(o,t){for(let e=0;e<Bt;e++){const n=o[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}var st,c;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(st||(st={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(c||(c={}));c.FAR_BOTTOM_RIGHT,c.NEAR_BOTTOM_RIGHT,c.NEAR_BOTTOM_LEFT,c.FAR_BOTTOM_LEFT,c.NEAR_BOTTOM_LEFT,c.NEAR_BOTTOM_RIGHT,c.NEAR_TOP_RIGHT,c.NEAR_TOP_LEFT,c.FAR_BOTTOM_RIGHT,c.FAR_BOTTOM_LEFT,c.FAR_TOP_LEFT,c.FAR_TOP_RIGHT,c.NEAR_BOTTOM_RIGHT,c.FAR_BOTTOM_RIGHT,c.FAR_TOP_RIGHT,c.NEAR_TOP_RIGHT,c.FAR_BOTTOM_LEFT,c.NEAR_BOTTOM_LEFT,c.NEAR_TOP_LEFT,c.FAR_TOP_LEFT,c.FAR_TOP_LEFT,c.NEAR_TOP_LEFT,c.NEAR_TOP_RIGHT,c.FAR_TOP_RIGHT;const Bt=6;new lt(ft);let D=class J{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new u,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),u.clearPool(),U[0]=null,x.prune(),M.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=u.acquire();for(let i=0;i<e;i++){const s=t[i];this._isDegenerate(s)?this._degenerateObjects.add(s):(n.init(this._root),this._add(s,n))}u.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=u.acquire();for(const i of t){const s=e??w(this.objectToBoundingSphere(i),Dt);z(s[3])?(n.init(this._root),Pt(i,s,n)):this._degenerateObjects.delete(i)}u.release(n),this._shrink()}update(t,e){if(!z(e[3])&&this._isDegenerate(t))return;const n=wt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=ot(t,e);N(this._root,s=>{if(!zt(i,s))return!1;const a=s.node;return a.terminals.forAll(h=>{this._intersectsObject(i,h)&&n(h)}),a.residents!==null&&a.residents.forAll(h=>{this._intersectsObject(i,h)&&n(h)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,i){const s=ot(t,e);N(this._root,a=>{if(!It(s,a,i))return!1;const h=a.node;return h.terminals.forAll(r=>{this._intersectsObjectWithOffset(s,r,i)&&n(r)}),h.residents!==null&&h.residents.forAll(r=>{this._intersectsObjectWithOffset(s,r,i)&&n(r)}),!0})}forEach(t){N(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=()=>!0,s=1/0){let a=1/0,h=1/0,r=null;const d=k(t,e),m=l=>{if(--s,!i(l))return;const T=this.objectToBoundingSphere(l);if(!H(n,T))return;const R=S(t,e,_(T)),P=R-T[3],f=R+T[3];P<a&&(a=P,h=f,r=l)};return rt(this._root,l=>{if(s<=0||!H(n,l.bounds)||(y(g,d,l.halfSize),B(g,g,_(l.bounds)),S(t,e,g)>h))return!1;const T=l.node;return T.terminals.forAll(R=>m(R)),T.residents!==null&&T.residents.forAll(R=>m(R)),!0},t,e),r}forEachInDepthRange(t,e,n,i,s,a,h){let r=-1/0,d=1/0;const m={setRange:f=>{n===J.DepthOrder.FRONT_TO_BACK?(r=Math.max(r,f.near),d=Math.min(d,f.far)):(r=Math.max(r,-f.far),d=Math.min(d,-f.near))}};m.setRange(i);const l=S(e,n,t),T=k(e,n),R=k(e,-n),P=f=>{if(!h(f))return;const E=this.objectToBoundingSphere(f),L=_(E),Q=S(e,n,L)-l,bt=Q-E[3],gt=Q+E[3];bt>d||gt<r||!H(a,E)||s(f,m)};rt(this._root,f=>{if(!H(a,f.bounds)||(y(g,T,f.halfSize),B(g,g,_(f.bounds)),S(e,n,g)-l>d)||(y(g,R,f.halfSize),B(g,g,_(f.bounds)),S(e,n,g)-l<r))return!1;const E=f.node;return E.terminals.forAll(L=>P(L)),E.residents!==null&&E.residents.forAll(L=>P(L)),!0},e,n)}forEachNode(t){N(this._root,e=>t(e.node,e.bounds,e.halfSize,e.depth))}forEachNeighbor(t,e){const n=q(e),i=_(e),s=r=>{const d=this.objectToBoundingSphere(r),m=q(d),l=n+m;return!(tt(_(d),i)-l*l<=0)||t(r)};let a=!0;const h=r=>{a&&(a=s(r))};N(this._root,r=>{const d=q(r.bounds),m=n+d;if(tt(_(r.bounds),i)-m*m>0)return!1;const l=r.node;return l.terminals.forAll(h),a&&l.residents!==null&&l.residents.forAll(h),a}),a&&this.forEachDegenerateObject(h)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||it(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this.objectToBoundingSphere(e);return!(i[3]>0)||it(n.applyToBoundingSphere(i),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=u.acquire().init(t);this._add(e.at(n),i),u.release(i)}}_grow(t,e){if(e!==0&&(at(t,e,n=>this.objectToBoundingSphere(n),A),z(A[3])&&!this._fitsInsideTree(A)))if(pt(this._root.node))w(A,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(A);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(A,n):this._growRootAsSubNode(n),u.release(n)}}_rebuildTree(t,e){Z(_(K),_(e.bounds)),K[3]=e.halfSize,at([t,K],2,i=>i,W);const n=u.acquire().init(this._root);this._root.initFrom(null,W,W[3]),this._root.increaseHalfSize(1.25),N(n,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),u.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return N(this._root,i=>(n=Math.max(n,i.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const s=this._root.bounds,a=this._root.halfSize;for(let r=0;r<3;r++){const d=s[r]-a-(n[r]-e),m=n[r]+e-(s[r]+a),l=Math.max(0,Math.ceil(d/(2*a))),T=Math.max(0,Math.ceil(m/(2*a)))+1,R=2**Math.ceil(Math.log(l+T)*Math.LOG2E);i=Math.max(i,R),C[r].min=l,C[r].max=T}for(let r=0;r<3;r++){let d=C[r].min,m=C[r].max;const l=(i-(d+m))/2;d+=Math.ceil(l),m+=Math.floor(l);const T=s[r]-a-d*a*2;V[r]=T+(m+d)*a}const h=i*a;return V[3]=h*Ot,u.acquire().initFrom(null,V,h,0)}_growRootAsSubNode(t){const e=this._root.node;Z(_(A),_(this._root.bounds)),A[3]=this._root.halfSize,this._root.init(t),t.advanceTo(A,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&t==null;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!z(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(t){var s,a;const e=t.children.map(h=>h?this._nodeToJSON(h):null),n=(s=t.residents)==null?void 0:s.map(h=>this.objectToBoundingSphere(h)),i=(a=t.terminals)==null?void 0:a.map(h=>this.objectToBoundingSphere(h));return{children:e,residents:n,terminals:i}}static fromJSON(t){const e=new J(n=>n,{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}};class u{constructor(){this.bounds=j(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=t??u.createEmptyNode(),e&&w(e,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*Ot}advance(t){let e=this.node.children[t];e||(e=u.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=Tt[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new I({shrink:!0}),residents:new I({shrink:!0})}}static acquire(){return u._pool.acquire()}static release(t){u._pool.release(t)}static clearPool(){u._pool.prune()}}function N(o,t){let e=u.acquire().init(o);const n=[e];for(;n.length!==0;){if(e=n.pop(),t(e)&&!e.isLeaf())for(let i=0;i<e.node.children.length;i++)e.node.children[i]&&n.push(u.acquire().init(e).advance(i));u.release(e)}}function rt(o,t,e,n=D.DepthOrder.FRONT_TO_BACK){let i=u.acquire().init(o);const s=[i];for(vt(e,n,dt);s.length!==0;){if(i=s.pop(),t(i)&&!i.isLeaf())for(let a=7;a>=0;--a){const h=dt[a];i.node.children[h]&&s.push(u.acquire().init(i).advance(h))}u.release(i)}}function Pt(o,t,e){x.clear();const n=e.advanceTo(t,(i,s)=>{x.push(i.node),x.push(s)})?e.node.terminals:e.node.residents;if(n.removeUnordered(o),n.length===0)for(let i=x.length-2;i>=0&&Lt(x.data[i],x.data[i+1]);i-=2);}function Lt(o,t){return t>=0&&(o.children[t]=null),!!pt(o)&&(o.residents===null&&(o.residents=new I({shrink:!0})),!0)}function zt(o,t){return $(_(t.bounds),2*-t.halfSize,O),$(_(t.bounds),2*t.halfSize,b),mt(o.origin,o.direction,O,b)}function It(o,t,e){return $(_(t.bounds),2*-t.halfSize,O),$(_(t.bounds),2*t.halfSize,b),e.applyToMinMax(O,b),mt(o.origin,o.direction,O,b)}function pt(o){if(o.terminals.length!==0)return!1;if(o.residents!==null)return o.residents.length===0;for(let t=0;t<o.children.length;t++)if(o.children[t])return!1;return!0}function Ht(o,t){o[0]=Math.min(o[0],t[0]-t[3]),o[1]=Math.min(o[1],t[1]-t[3]),o[2]=Math.min(o[2],t[2]-t[3])}function Ct(o,t){o[0]=Math.max(o[0],t[0]+t[3]),o[1]=Math.max(o[1],t[1]+t[3]),o[2]=Math.max(o[2],t[2]+t[3])}function $(o,t,e){e[0]=o[0]+t,e[1]=o[1]+t,e[2]=o[2]+t}function at(o,t,e,n){if(t===1){const i=e(o[0]);w(i,n)}else{O[0]=1/0,O[1]=1/0,O[2]=1/0,b[0]=-1/0,b[1]=-1/0,b[2]=-1/0;for(let i=0;i<t;i++){const s=e(o[i]);z(s[3])&&(Ht(O,s),Ct(b,s))}At(_(n),O,b,.5),n[3]=Math.max(b[0]-O[0],b[1]-O[1],b[2]-O[2])/2}}function vt(o,t,e){if(!M.length)for(let n=0;n<8;++n)M.push({index:0,distance:0});for(let n=0;n<8;++n){const i=Tt[n];M.data[n].index=n,M.data[n].distance=S(o,t,i)}M.sort((n,i)=>n.distance-i.distance);for(let n=0;n<8;++n)e[n]=M.data[n].index}function k(o,t){let e,n=1/0;for(let i=0;i<8;++i){const s=S(o,t,ht[i]);s<n&&(n=s,e=ht[i])}return e}function S(o,t,e){return t*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2])}function z(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}u._pool=new Rt(u),function(o){var t;(t=o.DepthOrder||(o.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(D||(D={}));const Tt=[p(-1,-1,-1),p(1,-1,-1),p(-1,1,-1),p(1,1,-1),p(-1,-1,1),p(1,-1,1),p(-1,1,1),p(1,1,1)],ht=[p(-1,-1,-1),p(-1,-1,1),p(-1,1,-1),p(-1,1,1),p(1,-1,-1),p(1,-1,1),p(1,1,-1),p(1,1,1)],Ot=Math.sqrt(3),U=[null];function wt(o){return U[0]=o,U}const V=j(),g=F(),O=F(),b=F(),x=new I,Dt=j(),A=j(),K=j(),W=j(),C=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],M=new I,dt=[0,0,0,0,0,0,0,0],ct=D,$t=1e3;function Gt(o,t,e){const n=j(),i=_(n);return et(i,i,o,.5),et(i,i,t,.5),n[3]=Y(i,o),B(i,i,e),n}let X=class{constructor(){this._idToComponent=new Map,this._components=new ct(o=>o.bounds),this._edges=new ct(o=>o.bounds),this._tmpLineSegment=Nt(),this._tmpP1=F(),this._tmpP2=F(),this._tmpP3=F(),this.remoteClient=null}async fetchCandidates(o,t){await Promise.resolve(),Ft(t),await this._ensureEdgeLocations(o,t);const e=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(o,n,e),e.length<$t),o.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(o,t){const e=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:a,uid:h}=s;e.push({id:a,uid:h})}return!0},o.bounds),!e.length)return;const n={components:e},i=await this.remoteClient.invoke("fetchAllEdgeLocations",n,t??{});for(const s of i.components)this._setFetchEdgeLocations(s)}async add(o){const t=new G(o.id,o.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(o){const t=this._idToComponent.get(o.id);if(t){const e=[];this._edges.forEachNeighbor(n=>(n.component===t&&e.push(n),!0),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(o){const t=this._idToComponent.get(o.id);if(t==null||o.uid!==t.uid)return;const e=jt.createView(o.locations),n=new Array(e.count),i=F(),s=F();for(let r=0;r<e.count;r++){e.position0.getVec(r,i),e.position1.getVec(r,s);const d=Gt(i,s,o.origin),m=new yt(t,r,d);n[r]=m}this._edges.add(n);const{objectIds:a,origin:h}=o;t.info={locations:e,objectIds:a,origin:h}}_addCandidates(o,t,e){const{info:n}=t.component,{origin:i,objectIds:s}=n,a=n.locations,h=a.position0.getVec(t.index,this._tmpP1),r=a.position1.getVec(t.index,this._tmpP2);B(h,h,i),B(r,r,i);const d=s[a.componentIndex.get(t.index)];this._addEdgeCandidate(o,d,h,r,e),ut(o,d,h,e),ut(o,d,r,e)}_addEdgeCandidate(o,t,e,n,i){if(!o.returnEdge)return;const s=_(o.bounds),a=xt(e,n,this._tmpLineSegment),h=Mt(a,s,this._tmpP3);_t(o.bounds,h)&&i.push({type:"edge",objectId:t,target:v(h),distance:Y(s,h),start:v(e),end:v(n)})}};X=Et([St("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],X);const re=X;function ut(o,t,e,n){if(!o.returnVertex||!_t(o.bounds,e))return;const i=_(o.bounds);n.push({type:"vertex",objectId:t,target:v(e),distance:Y(i,e)})}class G{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++G.uid}}G.uid=0;class yt{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}export{re as default};
