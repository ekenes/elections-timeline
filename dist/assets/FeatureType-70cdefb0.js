import{aW as p,a as s,b as a,aH as m,aF as l,c as d,ao as c}from"./index-ee4f50bd.js";import{i as y}from"./Field-e1e55903.js";import{p as u}from"./FeatureTemplate-13dafaed.js";let o=class extends p(c){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const r={};for(const e of Object.keys(t))r[e]=y(t[e]);return r}writeDomains(t,r){var n;const e={};for(const i of Object.keys(t))t[i]&&(e[i]=(n=t[i])==null?void 0:n.toJSON());r.domains=e}};s([a({json:{write:!0}})],o.prototype,"id",void 0),s([a({json:{write:!0}})],o.prototype,"name",void 0),s([a({json:{write:!0}})],o.prototype,"domains",void 0),s([m("domains")],o.prototype,"readDomains",null),s([l("domains")],o.prototype,"writeDomains",null),s([a({type:[u],json:{write:!0}})],o.prototype,"templates",void 0),o=s([d("esri.layers.support.FeatureType")],o);const h=o;export{h as n};
