import{q as t,t as p,v as e}from"./index-7df220b7.js";import a from"./FeatureLayerView2D-941c1db6.js";import"./Container-25b37322.js";import"./definitions-0ff99485.js";import"./enums-bdecffa2.js";import"./Texture-a748c37c.js";import"./LayerView-b8aceff2.js";import"./scaleUtils-32de8df1.js";import"./AttributeStoreView-86485239.js";import"./TiledDisplayObject-611e0500.js";import"./color-f3f79b89.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-042f00e6.js";import"./FramebufferObject-6975534b.js";import"./ProgramTemplate-1931a919.js";import"./GeometryUtils-3cc9f56c.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-4171d0de.js";import"./featureConversionUtils-7b0c7dc1.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-99572efb.js";import"./ExpandedCIM-85e23481.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-fa2983ac.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-6260a1a7.js";import"./floatRGBA-1f39df92.js";import"./util-0b4c9e8a.js";import"./BitmapTileContainer-c8f4a83e.js";import"./Bitmap-4b1ffdfa.js";import"./TileContainer-0ecfcdaa.js";import"./CircularArray-ef508845.js";import"./BufferPool-8e31e463.js";import"./FeatureContainer-a3f63e4f.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-137e2249.js";import"./RefreshableLayerView-bd2b6b26.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const Y=o;export{Y as default};
