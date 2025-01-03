import{cD as B,cE as Tn,_ as _n,B as F,cF as L,br as W,F as vn,bF as sn,Y as _,bK as Cn,cG as zn,s as wn,cH as z,cI as C,cJ as cn,cK as In,cL as Ln,C as Mn,cM as fn}from"./index-02eff6e6.js";var tn;function Rn(n,t,e){return!zn(n,t,e)}function O(n,t,e){const o=Rn(n,t,e);if(o&&!B())throw new wn("rasterprojectionhelper-project","projection engine is not loaded");return o}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(tn||(tn={}));const un=(n,t,e,o=0)=>{if(e[0]===1)return[0,0];let r=1,i=-1,s=1,u=-1;for(let c=0;c<n.length;c+=2)isNaN(n[c])||(r=r>n[c]?n[c]:r,i=i>n[c]?i:n[c],s=s>n[c+1]?n[c+1]:s,u=u>n[c+1]?u:n[c+1]);const{cols:a,rows:l}=t,f=(i-r)/a/e[0],d=(u-s)/l/e[1],m=2*o;let x=0,h=!1,g=[0,0];for(let c=0;c<a-3;c++){for(let R=0;R<l-3;R++){const y=c*l*2+2*R,p=(n[y]+n[y+4]+n[y+4*l]+n[y+4*l+4])/4,w=(n[y+1]+n[y+5]+n[y+4*l+1]+n[y+4*l+5])/4,M=Math.abs((p-n[y+2*l+2])/f),S=Math.abs((w-n[y+2*l+3])/d);if(M+S>x&&(x=M+S,g=[M,S]),m&&x>m){h=!0;break}}if(h)break}return g},On={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},Y=32,q=4,Q=q,V=new Map,Z=new Map,J=500,Wn=39.37,$n=96;let K=null;async function Dn(){K&&B()||(B()||await Tn(),K=await _n(()=>import("./geometryEngine-38ce99f8.js"),["assets/geometryEngine-38ce99f8.js","assets/index-02eff6e6.js","assets/index-d85835aa.css","assets/geometryEngineBase-58446043.js","assets/_commonjsHelpers-2f3e7994.js","assets/hydrated-2b98f583.js"]))}function jn(n,t,e){return O(n.spatialReference,t),e?fn(t,n.spatialReference,n):fn(n.spatialReference,t,n)}function Un(n,t,e,o=null){const r=n.spatialReference;if(!r||!t||r.equals(t))return n;O(r,t,o);const i=e.center,s=new F({xmin:i.x-n.x/2,xmax:i.x+n.x/2,ymin:i.y-n.y/2,ymax:i.y+n.y/2,spatialReference:r}),u=L(s,t,o),a=v(t);return u==null||a!=null&&u.width>=a?A(n,r,t):{x:u.width,y:u.height}}function A(n,t,e){const o=W(t)/W(e);return{x:n.x*o,y:n.y*o}}function en(n,t,e){const{spatialReference:o}=e;if(!o||!t||o.equals(t))return n;if(o.isGeographic&&t.isGeographic)return A(n,o,t);if(O(o,t),!K)throw new wn("raster-projection-helper:project-dataset-resolution","geometry engine is not loaded");let{x:r,y:i}=n;const s=(r+i)/2*W(o);let u=1;s>30&&(u=30/s,r*=u,i*=u);const a=256,l=r*a/2,f=i*a/2,{x:d,y:m}=e.center,x=[];for(let b=0;b<=a;b++)x.push([d-l,m-f+b*i]);for(let b=1;b<=a;b++)x.push([d-l+b*r,m+f]);for(let b=1;b<=a;b++)x.push([d+l,m+f-b*i]);for(let b=1;b<a;b++)x.push([d+l-b*r,m-f]);x.push(x[0]);const h=new sn({rings:[x],spatialReference:o}),g=L(h,t);if(!g)return A(n,o,t);const c=g.extent,R=v(t);if(c==null||R!=null&&c.width>=R)return A(n,o,t);const y=K.planarArea(g),p=r*i*a*a,w=Math.sqrt(y/p)/u,M={x:c.width/u/a,y:c.height/u/a},S={x:r*w,y:i*w},k=M.x*M.y;return Math.abs(k-S.x*S.y)/k<.1?M:S}function on(n,t){return(typeof n=="number"?n:(n.x+n.y)/2)*W(t)*$n*Wn}function Hn(n,t){const{pixelSize:e,extent:o}=n;return on(en(e,t,o),t)}function T(n,t=.01){return W(n)?t/W(n):0}function xn(n,t,e=null,o=!0){const r=n.spatialReference;if(r.equals(t))return n;O(r,t,e);const i=L(n,t,e);return o&&i&&Sn([n],[i],r,t),i}function Sn(n,t,e,o){const r=X(e,!0),i=X(o,!0),s=T(e,J),u=T(o,J);if(s&&r!=null&&i!=null)for(let a=0;a<n.length;a++){const l=t[a];if(!l)continue;const{x:f}=n[a],{x:d}=l;d>=i[1]-u&&Math.abs(f-r[0])<s?l.x-=i[1]-i[0]:d<=i[0]+u&&Math.abs(f-r[1])<s&&(l.x+=i[1]-i[0])}}function Fn(n){const{inSR:t,outSR:e,datumTransformation:o,preferPE:r}=n;if(t.equals(e)){const{points:i}=rn(n,null);return i}return t.isWebMercator&&e.isWGS84||t.isWGS84&&e.isWebMercator?Bn(n):O(t,e,o)&&r&&(t.isGeographic||$(t)!=null)?hn(n):An(n)}function An(n){const{points:t}=rn(n,null),{inSR:e,outSR:o,datumTransformation:r}=n,i=t.map(u=>new _(u[0],u[1],e)),s=L(i,o,r);return r&&Sn(i,s,e,o),s.map(u=>u?[u.x,u.y]:[NaN,NaN])}function hn(n){const{inSR:t,outSR:e,datumTransformation:o}=n,r=$(t),{points:i,mask:s}=rn(n,r);if(!t.isGeographic){const a=t.wkid?z.coordsys(t.wkid):z.fromString(t.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,t.wkt2||t.wkt);cn.projToGeog(a,i.length,i)}if(o!=null&&o.steps.length){let a;if(e.isGeographic&&(a=i.map(([f])=>f>179.9955?1:f<-179.9955?-1:0)),o.steps.forEach(f=>{const d=f.wkid?z.geogtran(f.wkid):z.fromString(C.PE_TYPE_GEOGTRAN,f.wkt);In.geogToGeog(d,i.length,i,null,f.isInverse?C.PE_TRANSFORM_2_TO_1:C.PE_TRANSFORM_1_TO_2)}),a)for(let f=0;f<i.length;f++){const d=a[f],m=i[f][0],x=m>179.9955?1:m<-179.9955?-1:0;d&&x&&d!==x&&(i[f][0]=d>0?m+360:m-360)}}if(!e.isGeographic){const a=$(e,!0),l=a!=null&&a.isEnvelope?[a.bbox[1],a.bbox[3]]:[-90,90];Yn(i,l);const f=e.wkid?z.coordsys(e.wkid):z.fromString(e.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,e.wkt2||e.wkt);cn.geogToProj(f,i.length,i)}let u=i;if(s&&i.length!==s.length){u=[];for(let a=0,l=0;a<s.length;a++)s[a]?u.push(i[l++]):u.push([NaN,NaN])}return u}function Bn(n){const{cols:t,rows:e,xres:o,yres:r,usePixelCenter:i,inSR:s,outSR:u}=n;let{xmin:a,ymax:l}=n;i&&(a+=o/2,l-=r/2);const f=[],d=[],m=Math.max(t,e);for(let h=0;h<m;h++){const g=a+o*Math.min(t,h),c=l-r*Math.min(e,h),R=L(new _({x:g,y:c,spatialReference:s}),u);h<=t&&f.push(R.x),h<=e&&d.push(R.y)}const x=[];for(let h=0;h<t;h++)for(let g=0;g<e;g++)x.push([f[h],d[g]]);return x}function $(n,t=!1){let e=n.wkid||n.wkt2||n.wkt;if(!e||n.isGeographic)return null;if(e=String(e),V.has(e)){const s=V.get(e);return t?s==null?void 0:s.gcs:s==null?void 0:s.pcs}const o=n.wkid?z.coordsys(n.wkid):z.fromString(n.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,n.wkt2||n.wkt),r=mn(o,T(n,1e-4)),i=mn(o,0,!0);return V.set(e,{pcs:r,gcs:i}),t?i:r}function mn(n,t=0,e=!1){const o=Ln.generate(n),r=e?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!o||!(r!=null&&r.length))return null;let i=!1,s=r.find(c=>c.getInclusive()===1&&c.getKind()===1);if(!s){if(s=r.find(c=>c.getInclusive()===1&&c.getKind()===0),!s)return null;i=!0}const u=e?0:(o.getNorthPoleLocation()===2?1:0)|(o.getSouthPoleLocation()===2?2:0),a=o.isPannableRectangle(),l=s.getCoord();if(i)return{isEnvelope:i,isPannable:a,vertices:l,coef:null,bbox:[l[0][0]-t,l[0][1]-t,l[1][0]+t,l[1][1]+t],poleLocation:u};let f=0;const d=[];let[m,x]=l[0],[h,g]=l[0];for(let c=0,R=l.length;c<R;c++){f++,f===R&&(f=0);const[y,p]=l[c],[w,M]=l[f];if(M===p)d.push([y,w,p,M,2]);else{const S=(w-y)/(M-p||1e-4),k=y-S*p;p<M?d.push([S,k,p,M,0]):d.push([S,k,M,p,1])}m=m<y?m:y,x=x<p?x:p,h=h>y?h:y,g=g>p?g:p}return{isEnvelope:!1,isPannable:a,vertices:l,coef:d,bbox:[m,x,h,g],poleLocation:u}}function rn(n,t){const e=[],{cols:o,rows:r,xres:i,yres:s,usePixelCenter:u}=n;let{xmin:a,ymax:l}=n;if(u&&(a+=i/2,l-=s/2),t==null){for(let x=0;x<o;x++)for(let h=0;h<r;h++)e.push([a+i*x,l-s*h]);return{points:e}}const f=new Uint8Array(o*r);if(t.isEnvelope){const{bbox:[x,h,g,c]}=t;for(let R=0,y=0;R<o;R++){const p=a+i*R,w=t.isPannable||p>=x&&p<=g;for(let M=0;M<r;M++,y++){const S=l-s*M;w&&S>=h&&S<=c&&(e.push([p,S]),f[y]=1)}}return{points:e,mask:f}}const d=t.coef,m=[];for(let x=0;x<r;x++){const h=l-s*x,g=[],c=[];for(let y=0;y<d.length;y++){const[p,w,M,S,k]=d[y];if(h===M&&M===S)g.push(p),g.push(w),c.push(2),c.push(2);else if(h>=M&&h<=S){const b=p*h+w;g.push(b),c.push(k)}}let R=g;if(g.length>2){let y=c[0]===2?0:c[0],p=g[0];R=[];for(let w=1;w<c.length;w++)c[w]===2&&w!==c.length-1||(c[w]!==y&&(R.push(y===0?Math.min(p,g[w-1]):Math.max(p,g[w-1])),y=c[w],p=g[w]),w===c.length-1&&R.push(c[w]===0?Math.min(p,g[w]):Math.max(p,g[w])));R.sort((w,M)=>w-M)}else g[0]>g[1]&&(R=[g[1],g[0]]);m.push(R)}for(let x=0,h=0;x<o;x++){const g=a+i*x;for(let c=0;c<r;c++,h++){const R=l-s*c,y=m[c];if(y.length===2)g>=y[0]&&g<=y[1]&&(e.push([g,R]),f[h]=1);else if(y.length>2){let p=!1;for(let w=0;w<y.length;w+=2)if(g>=y[w]&&g<=y[w+1]){p=!0;break}p&&(e.push([g,R]),f[h]=1)}}}return{points:e,mask:f}}function Yn(n,t){const[e,o]=t;for(let r=0;r<n.length;r++){const i=n[r][1];(i<e||i>o)&&(n[r]=[NaN,NaN])}}function bn(n,t){const e=v(n[0].spatialReference);if(n.length<2||e==null||(t=t??T(n[0].spatialReference),(n=n.filter(u=>u.width>t)).length===1))return n[0];let{xmin:o,xmax:r,ymin:i,ymax:s}=n[0];for(let u=1;u<n.length;u++){const a=n[u];r=a.xmax+e*u,i=Math.min(i,a.ymin),s=Math.max(s,a.ymax)}return new F({xmin:o,xmax:r,ymin:i,ymax:s,spatialReference:n[0].spatialReference})}function Pn(n,t,e=null,o=!0){const r=n.spatialReference;if(r.equals(t))return n;const i=Gn(n),s=v(r,!0),u=v(t);if(i===0||s==null||u==null){const l=pn(n,t,e,o);if(s==null&&u!=null&&Math.abs(l.width-u)<T(t)&&B()){const f=$(r);if(f!=null&&f.poleLocation===tn.None&&n.width<(f.bbox[2]-f.bbox[0])/2)return qn(n,t)||l}return l}const a=n.clone().normalize();if(a.length===1&&n.xmax<s&&n.xmax-s/2>T(r)){const{xmin:l,xmax:f}=n;for(let d=0;d<=i;d++){const m=d===0?l:-s/2,x=d===i?f-s*d:s/2;a[d]=new F({xmin:m,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:r})}}return bn(a.map(l=>pn(l,t,e,o)).filter(vn))}function Qn(n,t,e){if(n.type==="extent"){const{xmin:o,ymin:r,xmax:i,ymax:s,spatialReference:u}=n;n=new sn({rings:[[[o,s],[i,s],[i,r],[o,r],[o,s]]],spatialReference:u})}return n.spatialReference.equals(t)?n:(O(n.spatialReference,t,e),L(n,t,e))}function qn(n,t){const e=v(t);if(e==null)return null;let{xmin:o,ymin:r,xmax:i,ymax:s}=n;const u=n.spatialReference,a=new sn({spatialReference:u,rings:[[[o,r],[i,r],[i,s],[o,s],[o,r]]]}),l=L(a,t);if(l.rings.length!==2||!l.rings[0].length||!l.rings[1].length)return null;const{rings:f}=l,d=T(u),m=new F({spatialReference:t});for(let x=0;x<2;x++){o=i=f[x][0][0],r=s=f[x][0][1];for(let h=0;h<f[x].length;h++)o=o>f[x][h][0]?f[x][h][0]:o,i=i<f[x][h][0]?f[x][h][0]:i,r=r>f[x][h][1]?f[x][h][1]:r,s=s<f[x][h][1]?f[x][h][1]:s;if(x===0)m.ymin=r,m.ymax=s,m.xmin=o,m.xmax=i;else if(m.ymin=Math.min(m.ymin,r),m.ymax=Math.max(m.ymax,s),Math.abs(i-e/2)<d)m.xmin=o,m.xmax=m.xmax+e;else{if(!(Math.abs(o+e/2)<d))return null;m.xmax=i+e}}return m}function pn(n,t,e=null,o=!0,r=!0){const i=n.spatialReference;if(i.equals(t)||!t)return n;O(i,t,e);const s=L(n,t,e);if(r&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508342787e-6,s.ymax),s.ymin=Math.max(-20037508342787e-6,s.ymin),s.ymin>=s.ymax))return null;if(!o||!s)return s;const u=X(i,!0),a=X(t,!0);if(u==null||a==null)return s;const l=T(i,.001),f=T(i,J),d=T(t,.001);if(Math.abs(s.xmin-a[0])<d&&Math.abs(s.xmax-a[1])<d){const m=Math.abs(n.xmin-u[0]),x=Math.abs(u[1]-n.xmax);if(m<l&&x>f){s.xmin=a[0];const h=[];h.push(new _(n.xmax,n.ymin,i)),h.push(new _(n.xmax,(n.ymin+n.ymax)/2,i)),h.push(new _(n.xmax,n.ymax,i));const g=h.map(c=>xn(c,t,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);s.xmax=Math.max.apply(null,g)}if(x<l&&m>f){s.xmax=a[1];const h=[];h.push(new _(n.xmin,n.ymin,i)),h.push(new _(n.xmin,(n.ymin+n.ymax)/2,i)),h.push(new _(n.xmin,n.ymax,i));const g=h.map(c=>xn(c,t,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);s.xmin=Math.min.apply(null,g)}}else{const m=T(t,.001);Math.abs(s.xmin-a[0])<m&&(s.xmin=a[0]),Math.abs(s.xmax-a[1])<m&&(s.xmax=a[1])}return s}function v(n,t=!1){if(!n)return null;const e=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*e:n.wkid&&n.isGeographic?360:2*On[n.wkid]||null}function X(n,t=!1){if(n.isGeographic)return[-180,180];const e=v(n,t);return e!=null?[-e/2,e/2]:null}function gn(n,t,e,o){let r=(n-t)/e;return r-Math.floor(r)!=0?r=Math.floor(r):o&&(r-=1),r}function Gn(n,t=!1){const e=v(n.spatialReference);if(e==null)return 0;const o=t?0:-(e/2),r=T(n.spatialReference),i=!t&&Math.abs(n.xmax-e/2)<r?e/2:n.xmax,s=!t&&Math.abs(n.xmin+e/2)<r?-e/2:n.xmin;return gn(i,o,e,!0)-gn(s,o,e,!1)}function Vn(n){const t=n.storageInfo.origin.x,e=v(n.spatialReference,!0);if(e==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const o=e/2,{nativePixelSize:r,storageInfo:i,extent:s}=n,{maximumPyramidLevel:u,blockWidth:a,pyramidScalingFactor:l}=i;let f=r.x;const d=[],m=n.transform!=null&&n.transform.type==="gcs-shift",x=t+(m?0:o),h=m?e-t:o-t;for(let g=0;g<=u;g++){const c=(s.xmax-t)/f/a,R=c-Math.floor(c)==0?c:Math.ceil(c),y=h/f/a,p=y-Math.floor(y)==0?y:Math.ceil(y),w=Math.floor(x/f/a),M=Math.round(x/f)%a,S=(a-Math.round(h/f)%a)%a;d.push({resolutionX:f,blockWidth:a,datasetColumnCount:R,worldColumnCountFromOrigin:p,leftMargin:M,rightPadding:S,originColumnOffset:w}),f*=l}return{originX:t,halfWorldWidth:o,pyramidsInfo:d,hasGCSSShiftTransform:m}}function Jn(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt2||n.wkt);let e;return Z.has(t)?e=Z.get(t):(e=(n.wkid?z.coordsys(n.wkid):z.fromString(C.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),Z.set(t,e)),new Mn({wkid:e})}function Zn(n){const t=n.isAdaptive&&n.spacing==null;let e=n.spacing||[Y,Y],o=nn(n),r={cols:o.size[0]+1,rows:o.size[1]+1};const i=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;let s=o.outofBoundPointCount===o.offsets.length/2||t&&i?[0,0]:un(o.offsets,r,e,Q);const u=(s[0]+s[1])/2,a=n.projectedExtent.spatialReference,l=n.srcBufferExtent.spatialReference;if(t&&(i||u>Q)&&(Rn(a,l,n.datumTransformation)&&(a.isGeographic||$(a)),e=[q,q],o=nn({...n,spacing:e}),r={cols:o.size[0]+1,rows:o.size[1]+1},s=un(o.offsets,r,e,Q)),o.error=s,e[0]>1&&(o.coefficients=yn(o.offsets,r,i)),n.includeGCSGrid&&!a.isGeographic&&!a.isWebMercator)if(l.isGeographic)o.gcsGrid={offsets:o.offsets,coefficients:o.coefficients,spacing:e};else{const f=$(a);if(f!=null&&!f.isEnvelope){const d=Jn(a),m=Pn(n.projectedExtent,d),{offsets:x}=nn({...n,srcBufferExtent:m,spacing:e}),h=yn(x,r,i);o.gcsGrid={offsets:x,coefficients:h,spacing:e}}}return o}function nn(n){const{projectedExtent:t,srcBufferExtent:e,pixelSize:o,datumTransformation:r,rasterTransform:i}=n,s=t.spatialReference,u=e.spatialReference,a=O(s,u),{xmin:l,ymin:f,xmax:d,ymax:m}=t,x=v(u),h=x!=null&&(n.hasWrapAround||(i==null?void 0:i.type)==="gcs-shift"),g=n.spacing||[Y,Y],c=g[0]*o.x,R=g[1]*o.y,y=g[0]===1,p=Math.ceil((d-l)/c-.1/g[0])+(y?0:1),w=Math.ceil((m-f)/R-.1/g[1])+(y?0:1),M=Fn({cols:p,rows:w,xmin:l,ymax:m,xres:c,yres:R,inSR:s,outSR:u,datumTransformation:r,preferPE:g[0]<=q,usePixelCenter:y}),S=[];let k,b=0;const P=y?-1:NaN,{xmin:E,xmax:N,ymax:D,width:U,height:En}=e,kn=T(u,J),Nn=x!=null&&E>0&&N>x/2;let an=!1;if(a){const I=$(s);an=I!=null&&I.poleLocation>0}for(let I=0;I<p;I++){const H=[];for(let j=0;j<w;j++){let G=M[I*w+j];if(h&&G[0]>N&&G[0]>x/2-kn?G[0]-=x:h&&I===0&&G[0]<0&&Nn&&!i&&(G[0]+=x),!G||isNaN(G[0])||isNaN(G[1]))S.push(P),S.push(P),H.push(null),b++;else{if(i){const ln=i.inverseTransform(new _({x:G[0],y:G[1],spatialReference:u}));G=[ln.x,ln.y]}H.push(G),I>0&&h&&k[j]&&G[0]<k[j][0]&&(G[0]+=x,an&&G[0]>N&&G[0]>x&&(G[0]-=x)),S.push((G[0]-E)/U),S.push((D-G[1])/En)}}k=H}return{offsets:S,error:null,coefficients:null,outofBoundPointCount:b,spacing:g,size:y?[p,w]:[p-1,w-1]}}function yn(n,t,e){const{cols:o,rows:r}=t,i=new Float32Array((o-1)*(r-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),u=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<o-1;a++){for(let l=0;l<r-1;l++){let f=a*r*2+2*l;const d=n[f],m=n[f+1],x=n[f+2],h=n[f+3];f+=2*r;const g=n[f],c=n[f+1],R=n[f+2],y=n[f+3];let p=0,w=12*(l*(o-1)+a);for(let M=0;M<3;M++)i[w++]=s[p++]*d+s[p++]*x+s[p++]*R;p=0;for(let M=0;M<3;M++)i[w++]=s[p++]*m+s[p++]*h+s[p++]*y;p=0;for(let M=0;M<3;M++)i[w++]=u[p++]*d+u[p++]*g+u[p++]*R;p=0;for(let M=0;M<3;M++)i[w++]=u[p++]*m+u[p++]*c+u[p++]*y}if(e)for(let l=0;l<i.length;l++)isNaN(i[l])&&(i[l]=-1)}return i}function Kn(n,t){const e=n.clone().normalize();return e.length===1?e[0]:bn(e,t)}function nt(n){const{spatialReference:t}=n,e=Cn(t);if(!e)return n;const[o,r]=e.valid,i=r-o;let s=0;if(n.xmin<o){const u=o-n.xmin;s=Math.ceil(u/i)}else if(n.xmin>r){const u=n.xmin-r;s=-Math.ceil(u/i)}return new F({spatialReference:n.spatialReference,xmin:n.xmin+s*i,ymin:n.ymin,xmax:n.xmax+s*i,ymax:n.ymax})}function tt(n,t,e){var h;const{storageInfo:o,pixelSize:r}=t;let i=0,s=!1;const{pyramidResolutions:u}=o,a=((h=o.tileInfo.format)==null?void 0:h.toLowerCase())==="mixed"?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,l=(n.x+n.y)/2/a;if(u!=null&&u.length){const g=u[u.length-1],c=(g.x+g.y)/2,R=(r.x+r.y)/2;if(l<=R)i=0;else if(l>=c)i=u.length,s=l/c>8;else{let p,w=R;for(let M=1;M<=u.length;M++){if(p=(u[M-1].x+u[M-1].y)/2,l<=p){l===p?i=M:e==="down"?(i=M-1,s=l/w>8):i=e==="up"||l-w>p-l||l/w>2?M:M-1;break}w=p}}const y=i===0?r:u[i-1];return s&&Math.min(y.x,y.y)*W(t.spatialReference)>19567&&(s=!1),{pyramidLevel:i,pyramidResolution:new _({x:y.x,y:y.y,spatialReference:t.spatialReference}),excessiveReading:s}}const f=Math.log(n.x/r.x)/Math.LN2,d=Math.log(n.y/r.y)/Math.LN2,m=t.storageInfo.maximumPyramidLevel||0;i=e==="down"?Math.floor(Math.min(f,d)):e==="up"?Math.ceil(Math.max(f,d)):Math.round((f+d)/2),i<0?i=0:i>m&&(s=i>m+3,i=m);const x=2**i;return{pyramidLevel:i,pyramidResolution:new _({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function dn(n,t){const{pixelSize:e,extent:o}=n,r=jn(o,t,!1);return Pn(Kn(o,(e.x+e.y)/16),t,r)}function et(n,t,e){var b;const o=(e==null?void 0:e.tileSize)??512,r=(e==null?void 0:e.alignGlobalDatasetWithAGOL)??!0,i=!!(e!=null&&e.limitToSrcResolution),{extent:s,spatialReference:u,pixelSize:a}=n,l=en(a,t,s);if(l==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const f=(l.x+l.y)/2,d=on(f,t),m=t.isGeographic?256/o*2958287637958547e-7:256/o*591657527591555e-6;let x=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const h=dn(n,t),g=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(m/2/d)/Math.LN2));if(!x&&r&&(t.isGeographic||t.isWebMercator)){const P=v(t);if(x=Gn(h)>0||P!=null&&h.width>P/4,!x&&P!=null){let E=-1;if(g<3)E=2**g*f*o;else if(n.storageInfo){const{maximumPyramidLevel:D=0,pyramidScalingFactor:U=2}=n.storageInfo;E=U**D*f*o}const N=Math.ceil(P/E);x=N===1||N===2&&P/2-h.xmax<E}}let c,R=d;const y=1.001,p=Math.min(2,Math.max(1.414,((b=n.storageInfo)==null?void 0:b.pyramidScalingFactor)||2));if(x){R=m;const P=t.isGeographic?1341104507446289e-21:.29858214164761665,E=on(P,t),N=t.isGeographic?4326:3857;c=en({x:P,y:P},u,dn(n,new Mn({wkid:N}))),c.x*=R/E,c.y*=R/E}else{c={x:a.x,y:a.y};let P=0;for(;R<m*(y/2)&&P<g;)P++,R*=p,c.x*=p,c.y*=p;Math.max(R,m)/Math.min(R,m)<=y&&(R=m)}const w=[R],M=[{x:c.x,y:c.y}],S=70.5310735,k=Math.min(S,d)/y;for(;R>=k;)R/=p,c.x/=p,c.y/=p,w.push(R),M.push({x:c.x,y:c.y});if(i){const P=.001*a.x;let E=M.findIndex(N=>N.x>=a.x-P&&N.x<=a.x+P);E>-1?(M.length=E+1,w.length=E+1):(E=M.findIndex(N=>N.x<=a.x+P),E>0&&(M.length=E,w.length=E))}return{projectedPixelSize:l,scales:w,srcResolutions:M,isCustomTilingScheme:!x}}export{xn as B,Dn as C,Hn as O,Pn as V,Qn as Z,jn as _,Zn as a,et as h,tt as m,Gn as o,Vn as r,v as t,nt as u,Rn as w,dn as x,Un as z};
