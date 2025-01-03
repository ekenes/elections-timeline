import{m as i}from"./index-02eff6e6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.88
*/const n=new WeakMap,a=new WeakMap;function s(e){a.set(e,new Promise(t=>n.set(e,t)))}function u(e){n.get(e)()}function r(e){return a.get(e)}async function m(e){if(await r(e),!!i())return e.requestUpdate(),new Promise(t=>requestAnimationFrame(()=>t()))}export{s as i,u as p,m as u};
