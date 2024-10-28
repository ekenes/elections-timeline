import"./index-b8632133.js";import{t as l}from"./NestedMap-b667f687.js";import{r as p}from"./Program-774c202b.js";class m{constructor(e){this._rctx=e,this._store=new l}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,s){const n=this._store.get(e,t);if(n!=null)return n.ref(),n;const i=new p(this._rctx,e,t,o,s);return i.ref(),this._store.set(e,t,i),i}get test(){}}function u(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function _(r){let e="";for(const t in r){const o=r[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(u(o)){const{value:s,options:n,namespace:i}=o,f=i?`${i}_`:"";for(const c in n)e+=`#define ${f}${c} ${n[c].toFixed()}
`;e+=`#define ${t} ${f}${s}
`}else{const s=o.options;let n=0;for(const i in s)e+=`#define ${s[i]} ${(n++).toFixed()}
`;e+=`#define ${t} ${s[o.value]}
`}}return e}export{_ as n,m as s};
