import{i as r,w as a}from"./WGLContainer-cd1e8fbd.js";import{T as t}from"./color-a4e48bf2.js";class h extends r{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const s=e.registerRenderPass({name:"bitmap",brushes:[a.bitmap],target:()=>this.children,drawPhase:t.MAP});return[...super.prepareRenderPasses(e),s]}_manageFade(){this.children.reduce((e,s)=>e+(s.inFadeTransition?1:0),0)>=2?(this.children.forEach(e=>e.blendFunction="additive"),this._hasCrossfade=!0):(this.children.forEach(e=>e.blendFunction="standard"),this._hasCrossfade=!1)}}export{h as a};
