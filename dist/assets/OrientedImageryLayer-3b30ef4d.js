import{a as r,b as t,c as s,T as y}from"./index-ee4f50bd.js";import n from"./FeatureLayer-76b8fc4b.js";import"./UniqueValueRenderer-a5623276.js";import"./LegendOptions-417f0204.js";import"./diffUtils-de02d0fa.js";import"./SizeVariable-2679a0ff.js";import"./colorRamps-5f43d00d.js";import"./lengthUtils-e9b31b12.js";import"./ColorStop-d3e9f05c.js";import"./featureFlags-c091f4ff.js";import"./styleUtils-c573bb28.js";import"./jsonUtils-74f8db4e.js";import"./DictionaryLoader-f3ff6942.js";import"./LRUCache-bb6160eb.js";import"./Version-eb4ced9c.js";import"./FieldsIndex-247aa784.js";import"./heatmapUtils-117ed7c9.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-7d035058.js";import"./LabelClass-3df682d7.js";import"./labelUtils-62b85608.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-3402e48f.js";import"./Field-e1e55903.js";import"./fieldType-45f5bea8.js";import"./commonProperties-f008cd4d.js";import"./ElevationInfo-4f399334.js";import"./featureLayerUtils-0183fd4d.js";import"./AttachmentQuery-4f431733.js";import"./Query-639ad700.js";import"./RelationshipQuery-b1d55e74.js";import"./serviceCapabilitiesUtils-4896b13c.js";import"./editsZScale-dc9b87a9.js";import"./queryZScale-57cbab0b.js";import"./FeatureSet-0efa5877.js";import"./APIKeyMixin-4e030daa.js";import"./ArcGISService-e3999268.js";import"./BlendLayer-c63c53b1.js";import"./jsonUtils-834e06ff.js";import"./parser-c18899b3.js";import"./CustomParametersMixin-ac3676a5.js";import"./EditBusLayer-4984298f.js";import"./FeatureEffectLayer-148aafe1.js";import"./FeatureEffect-1a7d78be.js";import"./FeatureReductionLayer-30ff8687.js";import"./clusterUtils-fd02cec7.js";import"./OperationalLayer-eb23b987.js";import"./OrderedLayer-3dcf2017.js";import"./PortalLayer-4453485d.js";import"./portalItemUtils-b4896fdb.js";import"./RefreshableLayer-51509618.js";import"./ScaleRangeLayer-16ea0421.js";import"./TemporalLayer-f920140a.js";import"./FeatureTemplate-13dafaed.js";import"./FeatureType-70cdefb0.js";import"./fieldProperties-85b899d8.js";import"./labelingInfo-ba648f1b.js";import"./versionUtils-7883b395.js";import"./styleUtils-09d36e9f.js";import"./TopFeaturesQuery-7c70b616.js";import"./popupUtils-e1f876bb.js";function o(i){return(a,m,d)=>{if(!a)return null;const p=a[0].orientedImageryProperties;return(p==null?void 0:p[i])??null}}let e=class extends n{constructor(){super(...arguments),this.geometryType="point",this.operationalLayerType="OrientedImageryLayer",this.type="oriented-imagery"}get effectiveElevationSource(){var p;const{elevationSource:i,demPathPrefix:a,demPathSuffix:m}=this;if(!((p=i==null?void 0:i.url)!=null&&p.trim()))return i;let d=i.url.trim();return a!=null&&a.trim()&&(d=`${a.trim()}/${d}`),m!=null&&m.trim()&&(d+=`/${m.trim()}`),{...i,url:d}}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new y("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraHeading")}}})],e.prototype,"cameraHeading",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraHeight")}}})],e.prototype,"cameraHeight",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraPitch")}}})],e.prototype,"cameraPitch",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraRoll")}}})],e.prototype,"cameraRoll",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("coveragePercent")}}})],e.prototype,"coveragePercent",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("demPathPrefix")}}})],e.prototype,"demPathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("demPathSuffix")}}})],e.prototype,"demPathSuffix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("depthImagePathPrefix")}}})],e.prototype,"depthImagePathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("depthImagePathSuffix")}}})],e.prototype,"depthImagePathSuffix",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("farDistance")}}})],e.prototype,"farDistance",void 0),r([t({json:{write:!0}})],e.prototype,"geometryType",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("horizontalFieldOfView")}}})],e.prototype,"horizontalFieldOfView",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("horizontalMeasurementUnit")}}})],e.prototype,"horizontalMeasurementUnit",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("imagePathPrefix")}}})],e.prototype,"imagePathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("imagePathSuffix")}}})],e.prototype,"imagePathSuffix",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("imageRotation")}}})],e.prototype,"imageRotation",void 0),r([t({type:Number,json:{write:!0,read:{source:"layers",reader:o("maximumDistance")}}})],e.prototype,"maximumDistance",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("nearDistance")}}})],e.prototype,"nearDistance",void 0),r([t({type:["OrientedImageryLayer"]})],e.prototype,"operationalLayerType",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("orientedImageryType")}}})],e.prototype,"orientedImageryType",void 0),r([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],e.prototype,"type",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("verticalFieldOfView")}}})],e.prototype,"verticalFieldOfView",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("verticalMeasurementUnit")}}})],e.prototype,"verticalMeasurementUnit",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("videoPathPrefix")}}})],e.prototype,"videoPathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("videoPathSuffix")}}})],e.prototype,"videoPathSuffix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("elevationSource")}}})],e.prototype,"elevationSource",void 0),r([t()],e.prototype,"effectiveElevationSource",null),e=r([s("esri.layers.OrientedImageryLayer")],e);const Pe=e;export{Pe as default};
