import{a7 as jt,db as qt,d8 as M,d5 as Yt,d6 as Xt,de as Q,d9 as Gt,da as Qt,gP as Kt,gQ as Zt,gR as Jt}from"./index-de9e02e1.js";import{d as te}from"./debounce-c198f28b.js";import{g as ee}from"./guid-4f97587b.js";function H(t){return t.split("-")[1]}function at(t){return t==="y"?"height":"width"}function F(t){return t.split("-")[0]}function X(t){return["top","bottom"].includes(F(t))?"x":"y"}function ft(t,e,n){let{reference:i,floating:o}=t;const s=i.x+i.width/2-o.width/2,r=i.y+i.height/2-o.height/2,a=X(e),c=at(a),l=i[c]/2-o[c]/2,h=F(e),f=a==="x";let d;switch(h){case"top":d={x:s,y:i.y-o.height};break;case"bottom":d={x:s,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:r};break;case"left":d={x:i.x-o.width,y:r};break;default:d={x:i.x,y:i.y}}switch(H(e)){case"start":d[a]-=l*(n&&f?-1:1);break;case"end":d[a]+=l*(n&&f?-1:1);break}return d}const ne=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:r}=n,a=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:f}=ft(l,i,c),d=i,u={},m=0;for(let p=0;p<a.length;p++){const{name:v,fn:g}=a[p],{x:w,y:b,data:E,reset:y}=await g({x:h,y:f,initialPlacement:i,placement:d,strategy:o,middlewareData:u,rects:l,platform:r,elements:{reference:t,floating:e}});if(h=w??h,f=b??f,u={...u,[v]:{...u[v],...E}},y&&m<=50){m++,typeof y=="object"&&(y.placement&&(d=y.placement),y.rects&&(l=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:o}):y.rects),{x:h,y:f}=ft(l,d,c)),p=-1;continue}}return{x:h,y:f,placement:d,strategy:o,middlewareData:u}};function ie(t){return{top:0,right:0,bottom:0,left:0,...t}}function St(t){return typeof t!="number"?ie(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Y(t,e){var n;e===void 0&&(e={});const{x:i,y:o,platform:s,rects:r,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:f="floating",altBoundary:d=!1,padding:u=0}=e,m=St(u),v=a[d?f==="floating"?"reference":"floating":f],g=Z(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(v)))==null||n?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:l,rootBoundary:h,strategy:c})),w=f==="floating"?{...r.floating,x:i,y:o}:r.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),E=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},y=Z(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:b,strategy:c}):w);return{top:(g.top-y.top+m.top)/E.y,bottom:(y.bottom-g.bottom+m.bottom)/E.y,left:(g.left-y.left+m.left)/E.x,right:(y.right-g.right+m.right)/E.x}}const oe=Math.min,se=Math.max;function ot(t,e,n){return se(t,oe(e,n))}const re=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:i=0}=t||{},{x:o,y:s,placement:r,rects:a,platform:c,elements:l}=e;if(n==null)return{};const h=St(i),f={x:o,y:s},d=X(r),u=at(d),m=await c.getDimensions(n),p=d==="y",v=p?"top":"left",g=p?"bottom":"right",w=p?"clientHeight":"clientWidth",b=a.reference[u]+a.reference[d]-f[d]-a.floating[u],E=f[d]-a.reference[d],y=await(c.getOffsetParent==null?void 0:c.getOffsetParent(n));let T=y?y[w]:0;(!T||!await(c.isElement==null?void 0:c.isElement(y)))&&(T=l.floating[w]||a.floating[u]);const C=b/2-E/2,R=h[v],_=T-m[u]-h[g],O=T/2-m[u]/2+C,x=ot(R,O,_),D=H(r)!=null&&O!=x&&a.reference[u]/2-(O<R?h[v]:h[g])-m[u]/2<0?O<R?R-O:_-O:0;return{[d]:f[d]-D,data:{[d]:x,centerOffset:O-x}}}}),kt=["top","right","bottom","left"],ut=kt.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),ae={left:"right",right:"left",bottom:"top",top:"bottom"};function J(t){return t.replace(/left|right|bottom|top/g,e=>ae[e])}function Pt(t,e,n){n===void 0&&(n=!1);const i=H(t),o=X(t),s=at(o);let r=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=J(r)),{main:r,cross:J(r)}}const ce={start:"end",end:"start"};function tt(t){return t.replace(/start|end/g,e=>ce[e])}function le(t,e,n){return(t?[...n.filter(o=>H(o)===t),...n.filter(o=>H(o)!==t)]:n.filter(o=>F(o)===o)).filter(o=>t?H(o)===t||(e?tt(o)!==o:!1):!0)}const fe=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o;const{rects:s,middlewareData:r,placement:a,platform:c,elements:l}=e,{crossAxis:h=!1,alignment:f,allowedPlacements:d=ut,autoAlignment:u=!0,...m}=t,p=f!==void 0||d===ut?le(f||null,u,d):d,v=await Y(e,m),g=((n=r.autoPlacement)==null?void 0:n.index)||0,w=p[g];if(w==null)return{};const{main:b,cross:E}=Pt(w,s,await(c.isRTL==null?void 0:c.isRTL(l.floating)));if(a!==w)return{reset:{placement:p[0]}};const y=[v[F(w)],v[b],v[E]],T=[...((i=r.autoPlacement)==null?void 0:i.overflows)||[],{placement:w,overflows:y}],C=p[g+1];if(C)return{data:{index:g+1,overflows:T},reset:{placement:C}};const R=T.map(x=>{const S=H(x.placement);return[x.placement,S&&h?x.overflows.slice(0,2).reduce((D,B)=>D+B,0):x.overflows[0],x.overflows]}).sort((x,S)=>x[1]-S[1]),O=((o=R.filter(x=>x[2].slice(0,H(x[0])?2:3).every(S=>S<=0))[0])==null?void 0:o[0])||R[0][0];return O!==a?{data:{index:g+1,overflows:T},reset:{placement:O}}:{}}}};function ue(t){const e=J(t);return[tt(t),e,tt(e)]}function de(t,e,n){const i=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?s:r;default:return[]}}function me(t,e,n,i){const o=H(t);let s=de(F(t),n==="start",i);return o&&(s=s.map(r=>r+"-"+o),e&&(s=s.concat(s.map(tt)))),s}const dt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:o,rects:s,initialPlacement:r,platform:a,elements:c}=e,{mainAxis:l=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:m=!0,...p}=t,v=F(i),g=F(r)===r,w=await(a.isRTL==null?void 0:a.isRTL(c.floating)),b=f||(g||!m?[J(r)]:ue(r));!f&&u!=="none"&&b.push(...me(r,m,u,w));const E=[r,...b],y=await Y(e,p),T=[];let C=((n=o.flip)==null?void 0:n.overflows)||[];if(l&&T.push(y[v]),h){const{main:x,cross:S}=Pt(i,s,w);T.push(y[x],y[S])}if(C=[...C,{placement:i,overflows:T}],!T.every(x=>x<=0)){var R,_;const x=(((R=o.flip)==null?void 0:R.index)||0)+1,S=E[x];if(S)return{data:{index:x,overflows:C},reset:{placement:S}};let D=(_=C.filter(B=>B.overflows[0]<=0).sort((B,V)=>B.overflows[1]-V.overflows[1])[0])==null?void 0:_.placement;if(!D)switch(d){case"bestFit":{var O;const B=(O=C.map(V=>[V.placement,V.overflows.filter(U=>U>0).reduce((U,Ut)=>U+Ut,0)]).sort((V,U)=>V[1]-U[1])[0])==null?void 0:O[0];B&&(D=B);break}case"initialPlacement":D=r;break}if(i!==D)return{reset:{placement:D}}}return{}}}};function mt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ht(t){return kt.some(e=>t[e]>=0)}const he=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...i}=t,{rects:o}=e;switch(n){case"referenceHidden":{const s=await Y(e,{...i,elementContext:"reference"}),r=mt(s,o.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:ht(r)}}}case"escaped":{const s=await Y(e,{...i,altBoundary:!0}),r=mt(s,o.floating);return{data:{escapedOffsets:r,escaped:ht(r)}}}default:return{}}}}};async function pe(t,e){const{placement:n,platform:i,elements:o}=t,s=await(i.isRTL==null?void 0:i.isRTL(o.floating)),r=F(n),a=H(n),c=X(n)==="x",l=["left","top"].includes(r)?-1:1,h=s&&c?-1:1,f=typeof e=="function"?e(t):e;let{mainAxis:d,crossAxis:u,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof m=="number"&&(u=a==="end"?m*-1:m),c?{x:u*h,y:d*l}:{x:d*l,y:u*h}}const ge=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,o=await pe(e,t);return{x:n+o.x,y:i+o.y,data:o}}}};function ve(t){return t==="x"?"y":"x"}const we=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:v=>{let{x:g,y:w}=v;return{x:g,y:w}}},...c}=t,l={x:n,y:i},h=await Y(e,c),f=X(F(o)),d=ve(f);let u=l[f],m=l[d];if(s){const v=f==="y"?"top":"left",g=f==="y"?"bottom":"right",w=u+h[v],b=u-h[g];u=ot(w,u,b)}if(r){const v=d==="y"?"top":"left",g=d==="y"?"bottom":"right",w=m+h[v],b=m-h[g];m=ot(w,m,b)}const p=a.fn({...e,[f]:u,[d]:m});return{...p,data:{x:p.x-n,y:p.y-i}}}}};function L(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function k(t){return L(t).getComputedStyle(t)}function Ht(t){return t instanceof L(t).Node}function $(t){return Ht(t)?(t.nodeName||"").toLowerCase():""}function P(t){return t instanceof L(t).HTMLElement}function A(t){return t instanceof L(t).Element}function pt(t){if(typeof ShadowRoot>"u")return!1;const e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function G(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function ye(t){return["table","td","th"].includes($(t))}function ct(t){const e=lt(),n=k(t);return n.transform!=="none"||n.perspective!=="none"||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function lt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes($(t))}const gt=Math.min,j=Math.max,et=Math.round;function Dt(t){const e=k(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=P(t),s=o?t.offsetWidth:n,r=o?t.offsetHeight:i,a=et(n)!==s||et(i)!==r;return a&&(n=s,i=r),{width:n,height:i,fallback:a}}function Ft(t){return A(t)?t:t.contextElement}const _t={x:1,y:1};function W(t){const e=Ft(t);if(!P(e))return _t;const n=e.getBoundingClientRect(),{width:i,height:o,fallback:s}=Dt(e);let r=(s?et(n.width):n.width)/i,a=(s?et(n.height):n.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const vt={x:0,y:0};function Bt(t,e,n){var i,o;if(e===void 0&&(e=!0),!lt())return vt;const s=t?L(t):window;return!n||e&&n!==s?vt:{x:((i=s.visualViewport)==null?void 0:i.offsetLeft)||0,y:((o=s.visualViewport)==null?void 0:o.offsetTop)||0}}function I(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const o=t.getBoundingClientRect(),s=Ft(t);let r=_t;e&&(i?A(i)&&(r=W(i)):r=W(t));const a=Bt(s,n,i);let c=(o.left+a.x)/r.x,l=(o.top+a.y)/r.y,h=o.width/r.x,f=o.height/r.y;if(s){const d=L(s),u=i&&A(i)?L(i):i;let m=d.frameElement;for(;m&&i&&u!==d;){const p=W(m),v=m.getBoundingClientRect(),g=getComputedStyle(m);v.x+=(m.clientLeft+parseFloat(g.paddingLeft))*p.x,v.y+=(m.clientTop+parseFloat(g.paddingTop))*p.y,c*=p.x,l*=p.y,h*=p.x,f*=p.y,c+=v.x,l+=v.y,m=L(m).frameElement}}return Z({width:h,height:f,x:c,y:l})}function N(t){return((Ht(t)?t.ownerDocument:t.document)||window.document).documentElement}function it(t){return A(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function xe(t){let{rect:e,offsetParent:n,strategy:i}=t;const o=P(n),s=N(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},a={x:1,y:1};const c={x:0,y:0};if((o||!o&&i!=="fixed")&&(($(n)!=="body"||G(s))&&(r=it(n)),P(n))){const l=I(n);a=W(n),c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-r.scrollLeft*a.x+c.x,y:e.y*a.y-r.scrollTop*a.y+c.y}}function Mt(t){return I(N(t)).left+it(t).scrollLeft}function be(t){const e=N(t),n=it(t),i=t.ownerDocument.body,o=j(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=j(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-n.scrollLeft+Mt(t);const a=-n.scrollTop;return k(i).direction==="rtl"&&(r+=j(e.clientWidth,i.clientWidth)-o),{width:o,height:s,x:r,y:a}}function z(t){if($(t)==="html")return t;const e=t.assignedSlot||t.parentNode||pt(t)&&t.host||N(t);return pt(e)?e.host:e}function $t(t){const e=z(t);return nt(e)?e.ownerDocument.body:P(e)&&G(e)?e:$t(e)}function q(t,e){var n;e===void 0&&(e=[]);const i=$t(t),o=i===((n=t.ownerDocument)==null?void 0:n.body),s=L(i);return o?e.concat(s,s.visualViewport||[],G(i)?i:[]):e.concat(i,q(i))}function Ee(t,e){const n=L(t),i=N(t),o=n.visualViewport;let s=i.clientWidth,r=i.clientHeight,a=0,c=0;if(o){s=o.width,r=o.height;const l=lt();(!l||l&&e==="fixed")&&(a=o.offsetLeft,c=o.offsetTop)}return{width:s,height:r,x:a,y:c}}function Te(t,e){const n=I(t,!0,e==="fixed"),i=n.top+t.clientTop,o=n.left+t.clientLeft,s=P(t)?W(t):{x:1,y:1},r=t.clientWidth*s.x,a=t.clientHeight*s.y,c=o*s.x,l=i*s.y;return{width:r,height:a,x:c,y:l}}function wt(t,e,n){let i;if(e==="viewport")i=Ee(t,n);else if(e==="document")i=be(N(t));else if(A(e))i=Te(e,n);else{const o=Bt(t);i={...e,x:e.x-o.x,y:e.y-o.y}}return Z(i)}function Nt(t,e){const n=z(t);return n===e||!A(n)||nt(n)?!1:k(n).position==="fixed"||Nt(n,e)}function Ce(t,e){const n=e.get(t);if(n)return n;let i=q(t).filter(a=>A(a)&&$(a)!=="body"),o=null;const s=k(t).position==="fixed";let r=s?z(t):t;for(;A(r)&&!nt(r);){const a=k(r),c=ct(r);!c&&a.position==="fixed"&&(o=null),(s?!c&&!o:!c&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||G(r)&&!c&&Nt(t,r))?i=i.filter(h=>h!==r):o=a,r=z(r)}return e.set(t,i),i}function Oe(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const r=[...n==="clippingAncestors"?Ce(e,this._c):[].concat(n),i],a=r[0],c=r.reduce((l,h)=>{const f=wt(e,h,o);return l.top=j(f.top,l.top),l.right=gt(f.right,l.right),l.bottom=gt(f.bottom,l.bottom),l.left=j(f.left,l.left),l},wt(e,a,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Re(t){return Dt(t)}function yt(t,e){return!P(t)||k(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ae(t){let e=z(t);for(;P(e)&&!nt(e);){if(ct(e))return e;e=z(e)}return null}function xt(t,e){const n=L(t);if(!P(t))return n;let i=yt(t,e);for(;i&&ye(i)&&k(i).position==="static";)i=yt(i,e);return i&&($(i)==="html"||$(i)==="body"&&k(i).position==="static"&&!ct(i))?n:i||Ae(t)||n}function Le(t,e,n){const i=P(e),o=N(e),s=n==="fixed",r=I(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(i||!i&&!s)if(($(e)!=="body"||G(o))&&(a=it(e)),P(e)){const l=I(e,!0,s,e);c.x=l.x+e.clientLeft,c.y=l.y+e.clientTop}else o&&(c.x=Mt(o));return{x:r.left+a.scrollLeft-c.x,y:r.top+a.scrollTop-c.y,width:r.width,height:r.height}}const st={getClippingRect:Oe,convertOffsetParentRelativeRectToViewportRelativeRect:xe,isElement:A,getDimensions:Re,getOffsetParent:xt,getDocumentElement:N,getScale:W,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t;const o=this.getOffsetParent||xt,s=this.getDimensions;return{reference:Le(e,await o(n),i),floating:{x:0,y:0,...await s(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>k(t).direction==="rtl"};function Se(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:a=!1}=i,c=o||s?[...A(t)?q(t):t.contextElement?q(t.contextElement):[],...q(e)]:[];c.forEach(u=>{const m=!A(u)&&u.toString().includes("V");o&&(!a||m)&&u.addEventListener("scroll",n,{passive:!0}),s&&u.addEventListener("resize",n)});let l=null;r&&(l=new ResizeObserver(()=>{n()}),A(t)&&!a&&l.observe(t),!A(t)&&t.contextElement&&!a&&l.observe(t.contextElement),l.observe(e));let h,f=a?I(t):null;a&&d();function d(){const u=I(t);f&&(u.x!==f.x||u.y!==f.y||u.width!==f.width||u.height!==f.height)&&n(),f=u,h=requestAnimationFrame(d)}return n(),()=>{var u;c.forEach(m=>{o&&m.removeEventListener("scroll",n),s&&m.removeEventListener("resize",n)}),(u=l)==null||u.disconnect(),l=null,a&&cancelAnimationFrame(h)}}const ke=(t,e,n)=>{const i=new Map,o={platform:st,...n},s={...o.platform,_c:i};return ne(t,e,{...o,platform:s})},Pe=globalThis.calciteComponentsConfig,He={floatingUINonChromiumPositioningFix:!0,...Pe},De=Fe();async function Fe(){function t(){return navigator.userAgentData}function e(){const i=t();return i!=null&&i.brands?i.brands.map(({brand:o,version:s})=>`${o}/${s}`).join(" "):navigator.userAgent}function n(){const i=t();return i!=null&&i.brands?!!i.brands.find(({brand:o,version:s})=>(o==="Google Chrome"||o==="Chromium")&&Number(s)>=109):!!navigator.userAgent.split(" ").find(o=>{const[s,r]=o.split("/");return s==="Chrome"&&parseInt(r)>=109})}if(He.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test(e())||n())){const{offsetParent:i}=await jt(()=>import("./composed-offset-position.esm-67e480f6.js"),[]),o=st.getOffsetParent;st.getOffsetParent=s=>o(s,i)}}const _e="data-placement",bt=100,Et=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Tt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Be({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:i,offsetSkidding:o,arrowEl:s,type:r}){const a=[we(),he()];if(r==="menu")return[...a,dt({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const c=[...a,ge({mainAxis:typeof i=="number"?i:0,crossAxis:typeof o=="number"?o:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?c.push(fe({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||c.push(dt(n?{fallbackPlacements:n}:{})),s&&c.push(re({element:s})),c}return[]}function nn(t,e){const n=t.filter(i=>Et.includes(i));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Et.map(i=>`"${i}"`).join(", ").trim()}`,{el:e}),n}function Me(t,e){const n=["left","right"];return qt(t)==="rtl"&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function $e(t,e,n=!1){if(t.open)return n?Ne(t,e):It(t,e)}const Ne=te(It,bt,{leading:!0,maxWait:bt}),Ie={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"};async function It(t,{referenceEl:e,floatingEl:n,overlayPositioning:i="absolute",placement:o,flipDisabled:s,flipPlacements:r,offsetDistance:a,offsetSkidding:c,arrowEl:l,type:h}){var E;if(!e||!n)return null;await De;const{x:f,y:d,placement:u,strategy:m,middlewareData:p}=await ke(e,n,{strategy:i,placement:o==="auto"||o==="auto-start"||o==="auto-end"?void 0:Me(n,o),middleware:Be({placement:o,flipDisabled:s,flipPlacements:r,offsetDistance:a,offsetSkidding:c,arrowEl:l,type:h})});if(l&&p.arrow){const{x:y,y:T}=p.arrow,C=u.split("-")[0],R=y!=null?"left":"top",_=Ie[C],O={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=C==="left"||C==="right"?"horizontal":"vertical"),Object.assign(l.style,{...O,[R]:`${R=="left"?y:T}px`,[C]:"100%",transform:_})}const g=((E=p.hide)==null?void 0:E.referenceHidden)?"hidden":null,w=g?"none":null;n.setAttribute(_e,u);const b=`translate(${Math.round(f)}px,${Math.round(d)}px)`;Object.assign(n.style,{visibility:g,pointerEvents:w,position:m,top:"0",left:"0",transform:b})}const rt=new WeakMap;function Ve(t,e,n){if(!n||!e)return;Vt(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning,top:"0",left:"0"});const i=Se;rt.set(t,i(e,n,()=>t.reposition()))}function Vt(t,e,n){if(!n||!e)return;const i=rt.get(t);i&&i(),rt.delete(t)}const Ct=4,We=Math.ceil(Math.hypot(Ct,Ct));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const K=new WeakMap;function ze(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function Ue(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function Ot(t){if(Wt(t),t.transitionEl){const e=ze.bind(t),n=Ue.bind(t);K.set(t,[t.transitionEl,e,n]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",n)}}function Wt(t){if(!K.has(t))return;const[e,n,i]=K.get(t);e.removeEventListener("transitionstart",n),e.removeEventListener("transitionend",i),K.delete(t)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const Rt={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},je={width:12,height:6,strokeWidth:1},qe=({floatingLayout:t,key:e,ref:n})=>{const{width:i,height:o,strokeWidth:s}=je,r=i/2,a=t==="vertical",c=`M0,0 H${i} L${i-r},${o} Q${r},${o} ${r},${o} Z`;return M("svg",{"aria-hidden":"true",class:Rt.arrow,height:i,key:e,ref:n,viewBox:`0 0 ${i} ${i+(a?0:s)}`,width:i+(a?s:0)},s>0&&M("path",{class:Rt.arrowStroke,d:c,fill:"none","stroke-width":s+1}),M("path",{d:c,stroke:"none"}))};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const Ye={container:"container"},Xe=500,At="aria-describedby";function zt(t){const{referenceElement:e}=t;return(typeof e=="string"?Kt(t,{id:e}):e)||null}class Ge{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverTimeout=null,this.hoveredTooltip=null,this.clickedTooltip=null,this.activeTooltip=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:n}=this,i=e.find(o=>n.has(o));return n.get(i)},this.keyDownHandler=e=>{if(e.key==="Escape"&&!e.defaultPrevented){const{activeTooltip:n}=this;if(n!=null&&n.open){this.clearHoverTimeout(),this.closeExistingTooltip();const i=zt(n);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.pointerMoveHandler=e=>{const n=e.composedPath(),{activeTooltip:i}=this;if((i==null?void 0:i.open)&&n.includes(i)){this.clearHoverTimeout();return}const s=this.queryTooltip(n);this.hoveredTooltip=s,!this.isClosableClickedTooltip(s)&&(this.clickedTooltip=null,s?this.toggleHoveredTooltip(s,!0):i&&this.toggleHoveredTooltip(i,!1))},this.pointerDownHandler=e=>{if(!Zt(e))return;const n=this.queryTooltip(e.composedPath());this.clickedTooltip=n,n!=null&&n.closeOnClick&&(this.toggleTooltip(n,!1),this.clearHoverTimeout())},this.focusInHandler=e=>{this.queryFocusedTooltip(e,!0)},this.focusOutHandler=e=>{this.queryFocusedTooltip(e,!1)},this.toggleHoveredTooltip=(e,n)=>{this.hoverTimeout=window.setTimeout(()=>{this.hoverTimeout!==null&&(this.closeExistingTooltip(),e===this.hoveredTooltip&&this.toggleTooltip(e,n))},Xe)}}registerElement(e,n){this.registeredElementCount++,this.registeredElements.set(e,n);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){const n=this.getReferenceElShadowRootNode(e);n&&this.unregisterShadowRoot(n),this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler,{capture:!0}),e.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler,{capture:!0}),e.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:!0}),document.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.addEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.addEventListener("focusin",this.focusInHandler,{capture:!0}),document.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.removeEventListener("focusin",this.focusInHandler,{capture:!0}),document.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverTimeout(){window.clearTimeout(this.hoverTimeout),this.hoverTimeout=null}closeExistingTooltip(){const{activeTooltip:e}=this;e!=null&&e.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,n){this.closeExistingTooltip(),n&&this.clearHoverTimeout(),this.toggleTooltip(e,n)}toggleTooltip(e,n){e.open=n,n&&(this.activeTooltip=e)}queryFocusedTooltip(e,n){const i=this.queryTooltip(e.composedPath());!i||this.isClosableClickedTooltip(i)||this.toggleFocusedTooltip(i,n)}isClosableClickedTooltip(e){return(e==null?void 0:e.closeOnClick)&&e===this.clickedTooltip}registerShadowRoot(e){const{registeredShadowRootCounts:n}=this,i=(n.get(e)??0)+1;i===1&&this.addShadowListeners(e),n.set(e,i)}unregisterShadowRoot(e){const{registeredShadowRootCounts:n}=this,i=n.get(e)-1;i===0&&this.removeShadowListeners(e),n.set(e,i)}getReferenceElShadowRootNode(e){return e instanceof Element?Jt(e):null}}const Qe="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}",Lt=new Ge,Ke=Yt(class extends Xt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=Q(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=Q(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=Q(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=Q(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${ee()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=t=>{this.transitionEl=t,Ot(this)},this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=zt(this.el),Ve(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:n,effectiveReferenceElement:i}=this;t&&n&&!i&&console.warn(`${e.tagName}: reference-element id "${n}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();"setAttribute"in t&&t.setAttribute(At,e),Lt.registerElement(t,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&t.removeAttribute(At),Lt.unregisterElement(t))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=We,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(t){t&&this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){Ot(this),this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),Vt(this,this.effectiveReferenceElement,this.el),Wt(this)}async reposition(t=!1){const{el:e,effectiveReferenceElement:n,placement:i,overlayPositioning:o,offsetDistance:s,offsetSkidding:r,arrowEl:a}=this;return $e(this,{floatingEl:e,referenceEl:n,overlayPositioning:o,placement:i,offsetDistance:s,offsetSkidding:r,arrowEl:a,type:"tooltip"},t)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:t,label:e,open:n,floatingLayout:i}=this,o=t&&n,s=!o;return M(Qt,{"aria-hidden":Gt(s),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":s,id:this.getId(),role:"tooltip"},M("div",{class:{[Tt.animation]:!0,[Tt.animationActive]:o},ref:this.setTransitionEl},M(qe,{floatingLayout:i,ref:r=>this.arrowEl=r}),M("div",{class:Ye.container},M("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return Qe}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],floatingLayout:[32],reposition:[64]}]);function Ze(){if(typeof customElements>"u")return;["calcite-tooltip"].forEach(e=>{switch(e){case"calcite-tooltip":customElements.get(e)||customElements.define(e,Ke);break}})}Ze();export{qe as F,Ke as T,Ve as a,We as b,Ot as c,Ze as d,Vt as e,nn as f,Wt as g,Tt as h,$e as r};
