import{U as o,W as p,X as f}from"./index-ee4f50bd.js";function F(t){return t.type==="date"||t.type==="esriFieldTypeDate"||t.type==="date-only"||t.type==="esriFieldTypeDateOnly"||t.type==="timestamp-offset"||t.type==="esriFieldTypeTimestampOffset"}function n(t){return t.type==="oid"||t.type==="esriFieldTypeOID"}function a(t){return t.type==="global-id"||t.type==="esriFieldTypeGlobalID"}class m{constructor(e=[]){if(this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!e)return;this.fields=e;const s=[];for(const i of e){const l=i==null?void 0:i.name,d=h(i==null?void 0:i.name);if(l&&d){const r=u(l);this._fieldsMap.set(l,i),this._fieldsMap.set(r,i),this._normalizedFieldsMap.set(d,i),s.push(r),F(i)?(this.dateFields.push(i),this._dateFieldsSet.add(i)):o(i)&&(this._numericFieldsSet.add(i),this.numericFields.push(i)),n(i)||a(i)||(i.editable=i.editable==null||!!i.editable,i.nullable=i.nullable==null||!!i.nullable)}}s.sort(),this.uid=s.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)n(e)||a(e)||e.nullable||p(e)!==void 0||this._requiredFields.push(e)}return this._requiredFields}has(e){return this.get(e)!=null}get(e){if(!e)return;let s=this._fieldsMap.get(e);return s||(s=this._fieldsMap.get(u(e))??this._normalizedFieldsMap.get(h(e)),s&&this._fieldsMap.set(e,s),s)}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const s=this.get(e);if(s)return s.name??void 0}}function u(t){return t.trim().toLowerCase()}function h(t){var e;return((e=f(t))==null?void 0:e.toLowerCase())??""}export{m as r};
