import{eZ as h,e_ as A}from"./index-7df220b7.js";let g=class{constructor(r){this.message=r}toString(){return`AssertException: ${this.message}`}};function x(e,r){if(!e){r=r||"Assertion";const n=new Error(r).stack;throw new g(`${r} at ${n}`)}}function M(e,r,n,a){let i,f=(n[0]-e[0])/r[0],t=(a[0]-e[0])/r[0];f>t&&(i=f,f=t,t=i);let u=(n[1]-e[1])/r[1],o=(a[1]-e[1])/r[1];if(u>o&&(i=u,u=o,o=i),f>o||u>t)return!1;u>f&&(f=u),o<t&&(t=o);let y=(n[2]-e[2])/r[2],l=(a[2]-e[2])/r[2];return y>l&&(i=y,y=l,l=i),!(f>l||y>t)&&(l<t&&(t=l),!(t<0))}function T(e){if(h(e)){if(e.length<A)return e}else if(e.length<A)return Array.from(e);let r=!0,n=!0;return e.some((a,i)=>(r=r&&a===0,n=n&&a===i,!r&&!n)),r?$(e.length):n?m(e.length):h(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?E(e):e}function E(e){let r=!0;for(const n of e){if(n>=65536)return h(e)?new Uint32Array(e):e;n>=256&&(r=!1)}return r?new Uint8Array(e):new Uint16Array(e)}function p(e){return e<=A?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let s=(()=>{const e=new Uint32Array(131072);for(let r=0;r<e.length;++r)e[r]=r;return e})();const U=[0],w=(()=>{const e=new Uint16Array(65536);for(let r=0;r<e.length;++r)e[r]=r;return e})();function m(e){if(e===1)return U;if(e<A)return Array.from(new Uint16Array(w.buffer,0,e));if(e<w.length)return new Uint16Array(w.buffer,0,e);if(e>s.length){const r=Math.max(2*s.length,e);s=new Uint32Array(r);for(let n=0;n<s.length;n++)s[n]=n}return new Uint32Array(s.buffer,0,e)}let c=new Uint8Array(65536);function $(e){if(e===1)return U;if(e<A)return new Array(e).fill(0);if(e>c.length){const r=Math.max(2*c.length,e);c=new Uint8Array(r)}return new Uint8Array(c.buffer,0,e)}export{M as a,p as i,m as l,x as s,T as t};
