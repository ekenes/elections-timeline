import{n as c}from"./ref-221d3061.js";import{i as f}from"./keyed-46da301f.js";import{x as g,n as s,E as a,b2 as h}from"./index-c2b82012.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.88
*/const n={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},k={width:12,height:6,strokeWidth:1},v=({floatingLayout:l,key:w,ref:d})=>{const{width:t,height:o,strokeWidth:r}=k,i=t/2,e=l==="vertical",$=`M0,0 H${t} L${t-i},${o} Q${i},${o} ${i},${o} Z`;return f(w,g`<svg aria-hidden=true class=${s(n.arrow)} height=${t??a} viewBox=${`0 0 ${t} ${t+(e?0:r)}`} width=${t+(e?r:0)} ${c(d)}>${h`${r>0&&h`<path class=${s(n.arrowStroke)} d=${$??a} fill=none stroke-width=${r+1} />`||""}<path d=${$??a} stroke=none />`}</svg>`)};export{v as S};
