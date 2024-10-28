import{A as a,B as y,F as m,J as d,T as f,X as g,V as v,Y as w,eY as $,a7 as j,E as J}from"./index-560772b3.js";import{d as S}from"./Association-eaa9b2f8.js";let n=class extends d{constructor(t){super(t),this.associations=[]}};a([y({type:[S],json:{write:!0}})],n.prototype,"associations",void 0),n=a([m("esri.rest.networks.support.QueryAssociationsResult")],n);const A=n;function I(s){const{returnDeletes:t,elements:r,gdbVersion:o,moment:i}=s.toJSON();return{returnDeletes:t,elements:JSON.stringify(r.map(e=>({globalId:e.globalId,networkSourceId:e.networkSourceId,terminalId:e.terminalId}))),types:JSON.stringify(s.types.map(e=>J.toJSON(e))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:o,moment:i}}async function N(s,t,r){const o=f(s),i={...I(t),f:"json"},e=g({...o.query,...i}),c=v(e,{...r,method:"post"}),p=`${o.path}/associations/query`,{data:u}=await w(p,c),l=A.fromJSON(u);return t.types.includes("connectivity")&&$(j.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),l}export{N as queryAssociations};
