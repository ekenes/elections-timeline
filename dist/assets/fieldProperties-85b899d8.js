import{s as r,aX as s}from"./index-ee4f50bd.js";import{y as n}from"./Field-e1e55903.js";import{r as l}from"./FieldsIndex-247aa784.js";function a(){return{fields:{type:[n],value:null},fieldsIndex:{readOnly:!0,get(){return new l(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var t;const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const i of e)((t=this.fieldsIndex)==null?void 0:t.has(i))||r.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e});return s(this.fieldsIndex,e)}}}}export{a as s};
