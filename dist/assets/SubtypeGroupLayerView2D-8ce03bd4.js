import{A as a,F as n,by as d,bz as u,aG as l}from"./index-bb199e66.js";import{r as g}from"./FeatureLayerView2D-edbffd51.js";import"./Container-d40c6af7.js";import"./highlightReasons-dc931d16.js";import"./definitions-f33e80b3.js";import"./enums-2e633670.js";import"./Texture-dd9dca6f.js";import"./featureConversionUtils-6ab9114f.js";import"./timeSupport-a5ad69d4.js";import"./LayerView-03fdc5c6.js";import"./TechniqueInstance-006a6902.js";import"./UpdateTracking2D-f2323638.js";import"./BidiEngine-26aff129.js";import"./GeometryUtils-b6ea0e94.js";import"./enums-fb32c1bb.js";import"./Rect-ea14f53a.js";import"./LabelMetric-64456ecb.js";import"./Program-c1654195.js";import"./VertexElementDescriptor-2925c6af.js";import"./BindType-d21d71dd.js";import"./Util-10f67e4b.js";import"./TileContainer-e2364c65.js";import"./WGLContainer-4b9e078b.js";import"./ProgramTemplate-dc0d663d.js";import"./vec3f32-ad1dc57f.js";import"./StyleDefinition-df636448.js";import"./config-1337d16e.js";import"./earcut-936e97cf.js";import"./CircularArray-50add9d1.js";import"./tileUtils-c2f19f52.js";import"./SDFHelper-9bce365c.js";import"./floatRGBA-74085967.js";import"./FeatureCommandQueue-51181563.js";import"./constants-991354c8.js";import"./HighlightCounter-2d2411f4.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-90fc8599.js";import"./RefreshableLayerView-56859b8c.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};
