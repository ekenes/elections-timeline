let g=class l{constructor(t=null,s={},e,h){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const t=new l(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}};function a(n){var t,s;return!!((s=(t=n.geometry)==null?void 0:t.coords)!=null&&s.length)}class d extends g{}class r{constructor(t=[],s=[],e=!1){this.lengths=t??[],this.coords=s??[],this.hasIndeterminateRingOrder=e}static fromRect(t){const[s,e,h,i]=t,o=h-s,c=i-e;return new r([5],[s,e,o,0,0,c,-o,0,0,-c])}get isPoint(){return this.lengths.length===0}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,s)=>t+s)}forEachVertex(t){let s=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let e=0;e<this.lengths.length;e++){const h=this.lengths[e];for(let i=0;i<h;i++)t(this.coords[2*(i+s)],this.coords[2*(i+s)+1]);s+=h}}clone(t){return t?(t.set(this.coords),new r(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}export{g as a,d as e,a as s,r as t};
