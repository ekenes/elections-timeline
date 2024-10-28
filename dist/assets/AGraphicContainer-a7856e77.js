import{b_ as g,fB as O,b$ as V,c0 as $,c1 as D,c2 as I,c3 as z,c4 as C,c5 as E,bE as w}from"./index-560772b3.js";import{i as L,r as N,a as T}from"./TechniqueInstance-c3c91016.js";import{s as F,N as k}from"./Container-2320f73b.js";import{h as c}from"./FeatureCommandQueue-bccd59cf.js";import{r as P}from"./vec3f32-ad1dc57f.js";import{b as U}from"./LabelMetric-e5cabbab.js";import{c as b}from"./Program-1bed0bbf.js";import{R as v,E as H,C as y,F as x}from"./enums-2e633670.js";import{o as W}from"./ProgramTemplate-b9442763.js";let q=0;function h(f,e){return new L(N(q++),f,e)}const d={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class j{constructor(){this.instances={fill:h(c.fill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),marker:h(c.marker,{uniforms:d,optionalAttributes:{zoomRange:!0}}),line:h(c.line,{uniforms:d,optionalAttributes:{zoomRange:!0}}),text:h(c.text,{uniforms:d,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:h(c.complexFill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),texturedLine:h(c.texturedLine,{uniforms:d,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}const G=Math.PI/180,Y=4;class J extends F{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=g(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=O(this._program)}doRender(e){const{context:t}=e,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,s),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const r=this._program;t.bindVAO(this._vao),t.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(H.LINES,8*s.length,y.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:g()}}_createShaderProgram(e){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,s=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=e.programCache.acquire(t,s,S().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:s,size:r,resolution:_,pixelRatio:a,rotation:o,viewpoint:i}=t,l=G*o,{x:n,y:B}=i.targetGeometry,M=V(n,t.spatialReference);this._localOrigin.x=M,this._localOrigin.y=B;const p=a*r[0],m=a*r[1],R=_*p,A=_*m,u=$(this._dvsMat3);D(u,u,s),I(u,u,z(p/2,m/2)),C(u,u,P(r[0]/R,-m/A,1)),E(u,u,-l)}_updateBufferData(e,t){const{x:s,y:r}=this._localOrigin,_=2*Y*t.length,a=new Float32Array(_),o=new Uint32Array(8*t.length);let i=0,l=0;for(const n of t)n&&(a[2*i]=n[0]-s,a[2*i+1]=n[1]-r,a[2*i+2]=n[0]-s,a[2*i+3]=n[3]-r,a[2*i+4]=n[2]-s,a[2*i+5]=n[3]-r,a[2*i+6]=n[2]-s,a[2*i+7]=n[1]-r,o[l]=i+0,o[l+1]=i+3,o[l+2]=i+3,o[l+3]=i+2,o[l+4]=i+2,o[l+5]=i+1,o[l+6]=i+1,o[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=b.createVertex(e,x.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=b.createIndex(e,x.DYNAMIC_DRAW,o),!this._vao){const n=S();this._vao=new W(e,n.attributes,n.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const S=()=>U("bounds",{geometry:[{location:0,name:"a_position",count:2,type:y.FLOAT}]});class ne extends T{constructor(e){super(e),this._instanceStore=new j,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=w(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new J(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const s of this.children){if(!s.visible)continue;const r=s.getDisplayList(this._instanceStore,k.STRICT_ORDER);r==null||r.render(e)}}}export{ne as i};
