import{x as t}from"./index-f5007bd6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const o=new WeakMap,a=new WeakMap;function i(e){a.set(e,new Promise(n=>o.set(e,n)))}function p(e){o.get(e)()}function s(e){return a.get(e)}async function c(e){return await s(e),t(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{p as a,c,i as s};
