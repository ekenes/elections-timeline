import{bZ as T,b_ as b,b$ as A,c0 as _,c1 as h,c as O,c2 as r,c3 as C,c4 as E}from"./index-76dad814.js";function U(e,n,a="nearest",i=!1){const t=!(i&&n.pixelType==="u8"),o=t?A.FLOAT:A.UNSIGNED_BYTE,u=n.pixels==null||n.pixels.length===0?null:t?n.getAsRGBAFloat():n.getAsRGBA(),c=e.capabilities.textureFloatLinear,s=new T;return s.width=n.width,s.height=n.height,s.internalFormat=t?b.RGBA32F:C.RGBA,s.samplingMode=!c||a!=="bilinear"&&a!=="cubic"?_.NEAREST:_.LINEAR,s.dataType=o,s.wrapMode=h.CLAMP_TO_EDGE,new O(e,s,u)}function w(e,n){const{spacing:a,offsets:i,coefficients:t,size:[o,u]}=n,c=a[0]>1,s=new T;s.width=c?4*o:o,s.height=u,s.internalFormat=b.RGBA32F,s.dataType=A.FLOAT,s.samplingMode=_.NEAREST,s.wrapMode=h.CLAMP_TO_EDGE;const m=new Float32Array(c?o*u*16:2*i.length);if(c&&t!=null)for(let f=0,l=0;f<t.length;f++)m[l++]=t[f],f%3==2&&(m[l++]=1);else for(let f=0;f<u;f++)for(let l=0;l<o;l++){const g=4*(f*o+l),p=2*(l*u+f);m[g]=i[p],m[g+1]=i[p+1],m[g+3]=i[p]===-1?0:1}return new O(e,s,m)}function M(e,n){const a=new T;return a.internalFormat=C.RGBA,a.width=n.length/4,a.height=1,a.samplingMode=_.NEAREST,a.wrapMode=h.CLAMP_TO_EDGE,new O(e,a,n)}function F(e,n,a,i=1,t=!0){return{u_flipY:t,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:E,u_transformGridSize:e?e.size:E,u_targetImageSize:n,u_srcImageSize:a}}function x(e,n){return{u_colormapOffset:n||0,u_colormapMaxIndex:e?e.length/4-1:0}}function G(e,n){return{u_scale:e,u_offset:n}}function V(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function k(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function N(e,n){const a=e.gl,i=n.glName,t=new Map;if(i==null)return t;const o=a.getProgramParameter(i,a.ACTIVE_UNIFORMS);let u;for(let c=0;c<o;c++)u=a.getActiveUniform(i,c),u&&t.set(u.name,{location:a.getUniformLocation(i,u.name),info:u});return t}function v(e,n,a){Object.keys(a).forEach(i=>{const t=n.get(i)||n.get(i+"[0]");t&&d(e,i,a[i],t)})}function B(e,n,a,i){a.length===i.length&&(i.some(t=>t==null)||a.some(t=>t==null)||a.forEach((t,o)=>{n.setUniform1i(t,o),e.bindTexture(i[o],o)}))}function d(e,n,a,i){if(i===null||a==null)return!1;const{info:t}=i;switch(t.type){case r.FLOAT:t.size>1?e.setUniform1fv(n,a):e.setUniform1f(n,a);break;case r.FLOAT_VEC2:e.setUniform2fv(n,a);break;case r.FLOAT_VEC3:e.setUniform3fv(n,a);break;case r.FLOAT_VEC4:e.setUniform4fv(n,a);break;case r.FLOAT_MAT3:e.setUniformMatrix3fv(n,a);break;case r.FLOAT_MAT4:e.setUniformMatrix4fv(n,a);break;case r.INT:t.size>1?e.setUniform1iv(n,a):e.setUniform1i(n,a);break;case r.BOOL:e.setUniform1i(n,a?1:0);break;case r.INT_VEC2:case r.BOOL_VEC2:e.setUniform2iv(n,a);break;case r.INT_VEC3:case r.BOOL_VEC3:e.setUniform3iv(n,a);break;case r.INT_VEC4:case r.BOOL_VEC4:e.setUniform4iv(n,a);break;default:return!1}return!0}export{k as A,B as O,N as T,x as _,w as c,U as f,G as g,v as h,F as l,M as m,V as p};
