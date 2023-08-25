import{eq as M,er as L,bm as q}from"./index-1f15e2a2.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.6.1
 */(function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(n){n?(t(n,this),n.click()):(n=document.createElement("input"),n.type="submit",n.hidden=!0,this.appendChild(n),n.click(),this.removeChild(n))};function t(n,r){n instanceof HTMLElement||s(TypeError,"parameter 1 is not of type 'HTMLElement'"),n.type=="submit"||s(TypeError,"The specified element is not a submit button"),n.form==r||s(DOMException,"The specified element is not owned by this form element","NotFoundError")}function s(n,r,i){throw new n("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+r+".",i)}})(HTMLFormElement.prototype);const E="hidden-form-input";function k(e){return"checked"in e}const v=new WeakMap,F=new WeakSet;function x(e,t){if(L(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let r=!1;return e.addEventListener(n,i=>{r=i.composedPath().some(a=>F.has(a)),i.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),r}function j(e){const{formEl:t}=e;return t?(t.requestSubmit(),!0):!1}function z(e){var t;(t=e.formEl)==null||t.reset()}function G(e){const{el:t,value:s}=e,n=O(e);if(!n||x(n,t))return;e.formEl=n,e.defaultValue=s,k(e)&&(e.defaultChecked=e.checked);const r=(e.onFormReset||P).bind(e);n.addEventListener("reset",r),v.set(e.el,r),F.add(t)}function O(e){const{el:t,form:s}=e;return s?M(t,{id:s}):L(t,"form")}function P(){if(k(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function J(e){const{el:t,formEl:s}=e;if(!s)return;const n=v.get(t);s.removeEventListener("reset",n),v.delete(t),e.formEl=null,F.delete(t)}const H=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},y=e=>e.removeEventListener("change",H);function A(e){const{el:t,formEl:s,name:n,value:r}=e,{ownerDocument:i}=t,a=t.querySelectorAll(`input[slot="${E}"]`);if(!s||!n){a.forEach(l=>{y(l),l.remove()});return}const o=Array.isArray(r)?r:[r],c=[],I=new Set;a.forEach(l=>{const d=o.find(R=>R==l.value);d!=null?(I.add(d),S(e,l,d)):c.push(l)});let f;o.forEach(l=>{if(I.has(l))return;let d=c.pop();d||(d=i.createElement("input"),d.slot=E),f||(f=i.createDocumentFragment()),f.append(d),d.addEventListener("change",H),S(e,d,l)}),f&&t.append(f),c.forEach(l=>{y(l),l.remove()})}function S(e,t,s){var c;const{defaultValue:n,disabled:r,form:i,name:a,required:o}=e;t.defaultValue=n,t.disabled=r,t.name=a,t.required=o,t.tabIndex=-1,i?t.setAttribute("form",i):t.removeAttribute("form"),k(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?s||"on":""):t.value=s||"",(c=e.syncHiddenFormInput)==null||c.call(e,t)}const K=({component:e})=>(A(e),q("slot",{name:E}));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.6.1
 */const T="calciteInternalLabelClick",g="calciteInternalLabelConnected",C="calciteInternalLabelDisconnected",w="calcite-label",m=new WeakMap,h=new WeakMap,b=new WeakMap,u=new Set,D=e=>{const{id:t}=e,s=t&&M(e,{selector:`${w}[for="${t}"]`});if(s)return s;const n=L(e,w);return!n||W(n,e)?null:n};function W(e,t){let s;const n="custom-element-ancestor-check",r=a=>{a.stopImmediatePropagation();const o=a.composedPath();s=o.slice(o.indexOf(t),o.indexOf(e))};return e.addEventListener(n,r,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,r),s.filter(a=>a!==t&&a!==e).filter(a=>{var o;return(o=a.tagName)==null?void 0:o.includes("-")}).length>0}function p(e){const t=D(e.el);if(m.has(t)||!t&&u.has(e))return;const s=$.bind(e);if(t){e.labelEl=t;const n=N.bind(e);m.set(e.labelEl,n),e.labelEl.addEventListener(T,n),u.delete(e),document.removeEventListener(g,h.get(e)),b.set(e,s),document.addEventListener(C,s)}else u.has(e)||(s(),document.removeEventListener(C,b.get(e)))}function Q(e){if(u.delete(e),document.removeEventListener(g,h.get(e)),document.removeEventListener(C,b.get(e)),h.delete(e),b.delete(e),!e.labelEl)return;const t=m.get(e.labelEl);e.labelEl.removeEventListener(T,t),m.delete(e.labelEl)}function U(e){var t,s;return e.label||((s=(t=e.labelEl)==null?void 0:t.textContent)==null?void 0:s.trim())||""}function N(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function V(){u.has(this)&&p(this)}function $(){u.add(this);const e=h.get(this)||V.bind(this);h.set(this,e),document.addEventListener(g,e)}export{K as H,G as a,J as b,p as c,Q as d,O as f,U as g,z as r,j as s};
