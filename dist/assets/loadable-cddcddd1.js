import{c as t}from"./index-dca2343a.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const o=new WeakMap,a=new WeakMap;function c(e){a.set(e,new Promise(n=>o.set(e,n)))}function i(e){o.get(e)()}function s(e){return a.get(e)}async function p(e){return await s(e),t(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{i as a,p as c,c as s};
