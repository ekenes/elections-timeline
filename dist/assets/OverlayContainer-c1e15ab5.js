import{y as r,hC as G,I as k,cH as P,hs as J,fx as K,W as Q,ht as V,fq as X,fv as Y,fr as Z,fs as tt,g2 as et,ft as st,am as ot,hD as it,hE as q}from"./index-09dc31eb.js";import{r as rt}from"./vec3f32-ad1dc57f.js";import{n as nt}from"./WGLContainer-fc45f33a.js";import{t as at,a as ht,i as pt}from"./FeatureCommandQueue-9a5df297.js";import{h as W,g as a,m as z,I as dt,C as g,P as B,a as lt,j as I,S as ct,b as ut,c as ft,G as vt,H as xt,l as mt,v as yt,w as gt,e as wt}from"./UpdateTracking2D-0d1114fe.js";class D extends dt{}r([W(0,g)],D.prototype,"pos",void 0),r([W(1,g)],D.prototype,"uv",void 0);class _t extends yt{}class H extends B{}r([a(lt)],H.prototype,"dvs",void 0);class x extends B{}r([a(g)],x.prototype,"perspective",void 0),r([a(g)],x.prototype,"texSize",void 0),r([a(I)],x.prototype,"wrapAroundShift",void 0),r([a(I)],x.prototype,"opacity",void 0),r([a(ct)],x.prototype,"texture",void 0);class y extends ut{vertex(e){const t=e.uv.divide(this.config.texSize),s=new I(1).add(ft(t,this.config.perspective)),o=new vt(e.pos.add(new g(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(o);return{uv:t,glPosition:new xt(i.xy.multiply(s),0,s)}}fragment(e){const t=mt(this.config.texture,e.uv).multiply(this.config.opacity),s=new gt;return s.glFragColor=t,s}}r([a(H)],y.prototype,"transform",void 0),r([a(x)],y.prototype,"config",void 0),r([G(0,z(D))],y.prototype,"vertex",null),r([G(0,z(_t))],y.prototype,"fragment",null);let Mt=class extends at{constructor(){super(...arguments),this.type=wt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(e,t){const{context:s,painter:o}=e,i=this._getMesh(e,t);o.setPipelineState(ht);const{isWrapAround:h,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};o.submitDrawMeshUntyped(s,f,i),h&&(u.wrapAroundShift=c,o.submitDrawMeshUntyped(s,f,i))}shutdown(){k(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const o=this._mesh.vertexBuffers.get("positions");if(!o)throw new Error("Buffer not found");o.setData(t.position)}else{const o=t.index!=null?t.index.length:t.position.length/2;this._mesh=new pt(s,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:P.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:P.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:J.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:o}]})}return this._mesh}};class It extends nt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=K(),this._overlayTechnique=new Mt}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==Q.MAP||!this.visible)return;const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:o,pixelRatio:i,resolution:h,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===s)return;const w=q(c),p=i*o[0],v=i*o[1];this._localOrigin=u.targetGeometry.clone();const{x:m,y:$}=this._localOrigin,_=V(m,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=h*p,b=h*v,n=X(this._dvsMat3);Y(n,n,f),Z(n,n,tt(p/2,v/2)),et(n,n,rt(p/S,-v/b,1)),st(n,n,-w),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:o,spatialReference:i,worldScreenWidth:h,size:c,viewpoint:u}=s,f=this._localOrigin;let w,p=0;const v=ot(i);if(v&&i.isWrappable){const m=c[0],$=c[1],_=q(o),S=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),n=Math.round(m*S+$*b),[T,j]=v.valid,d=it(i),{x:C,y:L}=u.targetGeometry,N=[C,L],O=[0,0];s.toScreen(O,N);const M=[0,0];let R;R=n>h?.5*h:.5*n;const E=Math.floor((C+.5*d)/d),U=T+E*d,F=j+E*d,A=[O[0]+R,0];s.toMap(M,A),M[0]>F&&(p=d),A[0]=O[0]-R,s.toMap(M,A),M[0]<U&&(p=-d),w={worldWidth:d,xBounds:[T,j]}}for(const m of t)m.updateDrawCoords(f,p,i,w)}}export{It as u};
