import"./index-02eff6e6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.88
*//*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var k=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],S=k.join(","),R=typeof Element>"u",h=R?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,y=!R&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t==null?void 0:t.ownerDocument},E=function t(n,e){var o;e===void 0&&(e=!0);var r=n==null||(o=n.getAttribute)===null||o===void 0?void 0:o.call(n,"inert"),a=r===""||r==="true",i=a||e&&n&&t(n.parentNode);return i},q=function(t){var n,e=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return e===""||e==="true"},M=function(t,n,e){if(E(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(S));return n&&h.call(t,S)&&o.unshift(t),o=o.filter(e),o},B=function t(n,e,o){for(var r=[],a=Array.from(n);a.length;){var i=a.shift();if(!E(i,!1))if(i.tagName==="SLOT"){var u=i.assignedElements(),s=u.length?u:i.children,l=t(s,!0,o);o.flatten?r.push.apply(r,l):r.push({scopeParent:i,candidates:l})}else{var c=h.call(i,S);c&&o.filter(i)&&(e||!n.includes(i))&&r.push(i);var d=i.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(i),m=!E(d,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(i));if(d&&m){var f=t(d===!0?i.children:d.children,!0,o);o.flatten?r.push.apply(r,f):r.push({scopeParent:i,candidates:f})}else a.unshift.apply(a,i.children)}}return r},L=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},D=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||q(t))&&!L(t)?0:t.tabIndex},U=function(t,n){var e=D(t);return e<0&&n&&!L(t)?0:e},X=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},I=function(t){return t.tagName==="INPUT"},_=function(t){return I(t)&&t.type==="hidden"},$=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(e){return e.tagName==="SUMMARY"});return n},j=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]},z=function(t){if(!t.name)return!0;var n=t.form||y(t),e=function(a){return n.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=e(window.CSS.escape(t.name));else try{o=e(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var r=j(o,t.form);return!r||r===t},G=function(t){return I(t)&&t.type==="radio"},V=function(t){return G(t)&&!z(t)},W=function(t){var n,e=t&&y(t),o=(n=e)===null||n===void 0?void 0:n.host,r=!1;if(e&&e!==t){var a,i,u;for(r=!!((a=o)!==null&&a!==void 0&&(i=a.ownerDocument)!==null&&i!==void 0&&i.contains(o)||t!=null&&(u=t.ownerDocument)!==null&&u!==void 0&&u.contains(t));!r&&o;){var s,l,c;e=y(o),o=(s=e)===null||s===void 0?void 0:s.host,r=!!((l=o)!==null&&l!==void 0&&(c=l.ownerDocument)!==null&&c!==void 0&&c.contains(o))}}return r},T=function(t){var n=t.getBoundingClientRect(),e=n.width,o=n.height;return e===0&&o===0},Y=function(t,n){var e=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var r=h.call(t,"details>summary:first-of-type"),a=r?t.parentElement:t;if(h.call(a,"details:not([open]) *"))return!0;if(!e||e==="full"||e==="legacy-full"){if(typeof o=="function"){for(var i=t;t;){var u=t.parentElement,s=y(t);if(u&&!u.shadowRoot&&o(u)===!0)return T(t);t.assignedSlot?t=t.assignedSlot:!u&&s!==t.ownerDocument?t=s.host:t=u}t=i}if(W(t))return!t.getClientRects().length;if(e!=="legacy-full")return!0}else if(e==="non-zero-area")return T(t);return!1},H=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var e=0;e<n.children.length;e++){var o=n.children.item(e);if(o.tagName==="LEGEND")return h.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},J=function(t,n){return!(n.disabled||E(n)||_(n)||Y(n,t)||$(n)||H(n))},x=function(t,n){return!(V(n)||D(n)<0||!J(t,n))},K=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Q=function t(n){var e=[],o=[];return n.forEach(function(r,a){var i=!!r.scopeParent,u=i?r.scopeParent:r,s=U(u,i),l=i?t(r.candidates):u;s===0?i?e.push.apply(e,l):e.push(u):o.push({documentOrder:a,tabIndex:s,item:r,isScope:i,content:l})}),o.sort(X).reduce(function(r,a){return a.isScope?r.push.apply(r,a.content):r.push(a.content),r},[]).concat(e)},Z=function(t,n){n=n||{};var e;return n.getShadowRoot?e=B([t],n.includeContainer,{filter:x.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:K}):e=M(t,n.includeContainer,x.bind(null,n)),Q(e)};const tt={getShadowRoot:!0};function mt(t){const n="dir",e=`[${n}]`,o=O(t,e);return o?o.getAttribute(n):"ltr"}function b(t){return t.getRootNode()}function vt(t){const n=b(t);return"host"in n?n:null}function C(t){return t.host||null}function nt(t,{selector:n,id:e}){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const o=b(t);return(e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null)||nt(C(o),{selector:n,id:e})}function O(t,n){return t?t.closest(n)||O(C(b(t)),n):null}function et(t){return typeof(t==null?void 0:t.setFocus)=="function"}async function ot(t){if(t)return et(t)?t.setFocus():t.focus()}function rt(t){if(t)return Z(t,tt)[0]??t}function ht(t){var n;(n=rt(t))==null||n.focus()}function it(t,n){return t.filter(e=>e.matches(n))}function gt(t,n,e){if(typeof n=="string"&&n!=="")return n;if(n===""||n===!0)return t[e]}function yt(t){return(!!t).toString()}function Et(t){return lt(t)||ut(t)}function at(t){return st(t).filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent).join("").trim()}function wt(t){var n;for(const e of t.childNodes)if(e.nodeType===Node.TEXT_NODE&&((n=e.textContent)==null?void 0:n.trim())!==""||e.nodeType===Node.ELEMENT_NODE)return!0;return!1}function ut(t){return!!at(t)}function st(t){return t.currentTarget.assignedNodes({flatten:!0})}function lt(t){return!!ct(t).length}function ct(t,n){return dt(t.target,n)}function dt(t,n){const e=t.assignedElements({flatten:!0});return n?it(e,n):e}function Nt(t){return!!(t.isPrimary&&t.button===0)}function St(t){return t.detail===0}const bt=(t,n,e,o=!0)=>{const r=t.indexOf(n),a=r===0,i=r===t.length-1;o&&(e=e==="previous"&&a?"last":e==="next"&&i?"first":e);let u;return e==="previous"?u=t[r-1]||t[o?t.length-1:r]:e==="next"?u=t[r+1]||t[o?0:r]:e==="last"?u=t[t.length-1]:u=t[0],ot(u),u};function Tt(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}async function xt(t,n,e,o){return F(t,n,"animation",e,o)}async function At(t,n,e,o){return F(t,n,"transition",e,o)}async function F(t,n,e,o,r){const a=window.getComputedStyle(t),i=e==="transition"?a.transitionDuration:a.animationDuration,u=e==="transition"?a.transitionProperty:a.animationName,s=i.split(","),l=u.split(",").map(g=>g.trim()).indexOf(n),c=s[l]??s[0];function d(){requestAnimationFrame(()=>{o==null||o(),requestAnimationFrame(()=>r==null?void 0:r())})}if(c==="0s"){d();return}const m=e==="transition"?"transitionstart":"animationstart",f=e==="transition"?"transitionend":"animationend",w=e==="transition"?"transitioncancel":"animationcancel";return new Promise(g=>{const P=window.setTimeout(()=>{t.removeEventListener(m,N),t.removeEventListener(f,p),t.removeEventListener(w,p),d(),g()},parseFloat(c)*1e3);t.addEventListener(m,N),t.addEventListener(f,p),t.addEventListener(w,p);function N(v){v.target===t&&A(v)===n&&(window.clearTimeout(P),t.removeEventListener(m,N),o==null||o())}function p(v){v.target===t&&A(v)===n&&(t.removeEventListener(f,p),t.removeEventListener(w,p),r==null||r(),g())}})}function ft(t){return"propertyName"in t}function A(t){return ft(t)?t.propertyName:t.animationName}function Rt(t){return t.endsWith("px")}export{gt as A,xt as B,ht as C,Et as D,Nt as F,O as I,St as L,Tt as M,wt as O,At as P,yt as R,mt as T,b as a,lt as d,nt as i,bt as k,tt as n,ot as o,Rt as q,rt as s,ct as v,vt as w};