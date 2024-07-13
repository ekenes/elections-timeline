import{U as s,_ as a}from"./index-5bdaa4d1.js";async function n(t,e){const{data:r}=await s(t,{responseType:"json",query:{f:"json",...e==null?void 0:e.customParameters,token:e==null?void 0:e.apiKey}});return r}const O={BingMapsLayer:async()=>(await a(()=>import("./BingMapsLayer-7758898f.js"),["assets/BingMapsLayer-7758898f.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/imageBitmapUtils-f9f7f428.js"])).default,BuildingSceneLayer:async()=>(await a(()=>import("./BuildingSceneLayer-684f9914.js"),["assets/BuildingSceneLayer-684f9914.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/capabilities-c607cf72.js","assets/SceneService-476f6b28.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/jsonContext-55c14690.js","assets/resourceUtils-baac7912.js","assets/resourceUtils-9fa66497.js","assets/saveAPIKeyUtils-47b30d09.js","assets/saveUtils-9d84e8e3.js","assets/I3SLayerDefinitions-6c75abce.js","assets/I3SUtil-5761fcaf.js","assets/mat4f64-9a8384aa.js","assets/spatialReferenceEllipsoidUtils-60cb8a01.js","assets/sphere-1e22178e.js","assets/plane-badd8063.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/I3SBinaryReader-f09f872c.js","assets/VertexAttribute-c2df436e.js","assets/floatRGBA-4620942c.js","assets/NormalAttribute.glsl-585040d2.js","assets/interfaces-8918b36f.js","assets/BindType-d21d71dd.js","assets/orientedBoundingBox-ea6b33d3.js","assets/quat-e7437b61.js","assets/computeTranslationToOriginAndRotation-4eca75e2.js","assets/popupUtils-bbaa83ee.js","assets/associatedFeatureServiceUtils-ddaa41c0.js","assets/elevationInfoUtils-43456605.js"])).default,CSVLayer:async()=>(await a(()=>import("./CSVLayer-3ea99d7d.js"),["assets/CSVLayer-3ea99d7d.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/clientSideDefaults-fa791c65.js","assets/QueryEngineCapabilities-85c4f1d0.js"])).default,CatalogLayer:async()=>(await a(()=>import("./CatalogLayer-b0ea4449.js"),["assets/CatalogLayer-b0ea4449.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/utils-7ea9b8da.js","assets/ClassBreaksDefinition-c0643fb5.js","assets/FeatureLayerSource-5e6330ce.js","assets/MeshLocalVertexSpace-647e17cb.js","assets/meshVertexSpaceUtils-5bae5391.js","assets/MeshTransform-6dc8c28a.js","assets/infoFor3D-24efd44a.js","assets/mat4f64-9a8384aa.js","assets/quat-e7437b61.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/editingSupport-dab577c3.js","assets/clientSideDefaults-fa791c65.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/QueryTask-8c4fa9e2.js","assets/executeForIds-2b79418a.js","assets/executeQueryPBF-5b539e22.js","assets/featureConversionUtils-8131e980.js"])).default,DimensionLayer:async()=>(await a(()=>import("./DimensionLayer-3687b472.js"),["assets/DimensionLayer-3687b472.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/Analysis-289c626b.js"])).default,ElevationLayer:async()=>(await a(()=>import("./ElevationLayer-807b8a41.js"),["assets/ElevationLayer-807b8a41.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/ArcGISCachedService-a6b42523.js","assets/TileInfoTilemapCache-f4430cad.js","assets/TilemapCache-cae831fd.js"])).default,FeatureLayer:async()=>(await a(()=>import("./index-5bdaa4d1.js").then(t=>t.n4),["assets/index-5bdaa4d1.js","assets/index-d4471cb7.css"])).default,GeoJSONLayer:async()=>(await a(()=>import("./GeoJSONLayer-d42457db.js"),["assets/GeoJSONLayer-d42457db.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/clientSideDefaults-fa791c65.js","assets/QueryEngineCapabilities-85c4f1d0.js"])).default,GeoRSSLayer:async()=>(await a(()=>import("./GeoRSSLayer-64c47968.js"),["assets/GeoRSSLayer-64c47968.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css"])).default,GroupLayer:async()=>(await a(()=>import("./GroupLayer-60435eee.js"),["assets/GroupLayer-60435eee.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/saveUtils-9d84e8e3.js"])).default,ImageryLayer:async()=>(await a(()=>import("./ImageryLayer-2359314f.js"),["assets/ImageryLayer-2359314f.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/fetchRasterInfo-0ffa8a5e.js","assets/multidimensionalUtils-0322817b.js","assets/dataUtils-a24c5096.js","assets/RasterSymbolizer-7e0e5f56.js","assets/ClassBreaksDefinition-c0643fb5.js","assets/imageBitmapUtils-f9f7f428.js","assets/executeForIds-2b79418a.js"])).default,ImageryTileLayer:async()=>(await a(()=>import("./ImageryTileLayer-3c237eb9.js"),["assets/ImageryTileLayer-3c237eb9.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/fetchRasterInfo-0ffa8a5e.js","assets/multidimensionalUtils-0322817b.js","assets/dataUtils-a24c5096.js","assets/RasterSymbolizer-7e0e5f56.js","assets/ClassBreaksDefinition-c0643fb5.js","assets/RawBlockCache-616deb2a.js","assets/rasterProjectionHelper-4cf246b1.js","assets/PolynomialTransform-abf5424d.js","assets/TilemapCache-cae831fd.js"])).default,IntegratedMesh3DTilesLayer:async()=>(await a(()=>import("./IntegratedMesh3DTilesLayer-2d9ac128.js"),["assets/IntegratedMesh3DTilesLayer-2d9ac128.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/elevationInfoUtils-43456605.js"])).default,IntegratedMeshLayer:async()=>(await a(()=>import("./IntegratedMeshLayer-22a7f2bd.js"),["assets/IntegratedMeshLayer-22a7f2bd.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/persistable-4b322b2b.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceExtension-7bd16a30.js","assets/SceneService-476f6b28.js","assets/originUtils-cfe4feaf.js","assets/jsonContext-55c14690.js","assets/resourceUtils-baac7912.js","assets/resourceUtils-9fa66497.js","assets/saveAPIKeyUtils-47b30d09.js","assets/saveUtils-9d84e8e3.js","assets/I3SLayerDefinitions-6c75abce.js","assets/elevationInfoUtils-43456605.js"])).default,KMLLayer:async()=>(await a(()=>import("./KMLLayer-d71553df.js"),["assets/KMLLayer-d71553df.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/kmlUtils-fe3bab24.js"])).default,KnowledgeGraphLayer:async()=>(await a(()=>import("./KnowledgeGraphLayer-48d0231d.js"),["assets/KnowledgeGraphLayer-48d0231d.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/KnowledgeGraphSublayer-3fc2f336.js","assets/FeatureStore-a16e8906.js","assets/featureConversionUtils-8131e980.js","assets/BoundsStore-cd130bc9.js","assets/PooledRBush-8092f723.js","assets/timeSupport-e43eb43a.js","assets/json-48e3ea08.js","assets/QueryEngine-2fadfc8e.js","assets/WhereClause-a621a94b.js","assets/TimeOnly-1ac4a567.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/utils-90997cfe.js","assets/utils-7ea9b8da.js","assets/ClassBreaksDefinition-c0643fb5.js","assets/clientSideDefaults-fa791c65.js","assets/knowledgeGraphService-ee8d95c2.js","assets/GraphQueryStreaming-a8ef7587.js"])).default,LineOfSightLayer:async()=>(await a(()=>import("./LineOfSightLayer-580c3cbf.js"),["assets/LineOfSightLayer-580c3cbf.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/Analysis-289c626b.js","assets/persistable-4b322b2b.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceExtension-7bd16a30.js","assets/elevationInfoUtils-43456605.js"])).default,LinkChartLayer:async()=>(await a(()=>import("./LinkChartLayer-ae97d46f.js"),["assets/LinkChartLayer-ae97d46f.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/featureConversionUtils-8131e980.js","assets/KnowledgeGraphSublayer-3fc2f336.js","assets/FeatureStore-a16e8906.js","assets/BoundsStore-cd130bc9.js","assets/PooledRBush-8092f723.js","assets/timeSupport-e43eb43a.js","assets/json-48e3ea08.js","assets/QueryEngine-2fadfc8e.js","assets/WhereClause-a621a94b.js","assets/TimeOnly-1ac4a567.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/utils-90997cfe.js","assets/utils-7ea9b8da.js","assets/ClassBreaksDefinition-c0643fb5.js","assets/clientSideDefaults-fa791c65.js","assets/knowledgeGraphService-ee8d95c2.js","assets/GraphQueryStreaming-a8ef7587.js"])).default,MapImageLayer:async()=>(await a(()=>import("./MapImageLayer-9077cb4a.js"),["assets/MapImageLayer-9077cb4a.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/scaleUtils-ad58c971.js","assets/SublayersOwner-ba8a9ece.js","assets/QueryTask-8c4fa9e2.js","assets/infoFor3D-24efd44a.js","assets/executeForIds-2b79418a.js","assets/executeQueryPBF-5b539e22.js","assets/featureConversionUtils-8131e980.js","assets/sublayerUtils-3a715c10.js","assets/ExportImageParameters-9361f57f.js","assets/floorFilterUtils-080a7cd2.js","assets/imageBitmapUtils-f9f7f428.js"])).default,MapNotesLayer:async()=>(await a(()=>import("./MapNotesLayer-0a3c41e4.js"),["assets/MapNotesLayer-0a3c41e4.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/GraphicsLayer-4f12fd67.js","assets/objectIdUtils-789e911a.js"])).default,MediaLayer:async()=>(await a(()=>import("./MediaLayer-10e21483.js"),["assets/MediaLayer-10e21483.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/perspectiveUtils-b006decb.js","assets/normalizeUtilsSync-5e639f1d.js","assets/mat3f64-e19cdcb8.js","assets/imageUtils-9d9a1c68.js","assets/resourceExtension-7bd16a30.js","assets/BoundsStore-cd130bc9.js","assets/PooledRBush-8092f723.js"])).default,OGCFeatureLayer:async()=>(await a(()=>import("./OGCFeatureLayer-d122470f.js"),["assets/OGCFeatureLayer-d122470f.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/ogcFeatureUtils-511acd29.js","assets/featureConversionUtils-8131e980.js","assets/geojson-287d8d7e.js","assets/date-294ce3fb.js","assets/clientSideDefaults-fa791c65.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/sourceUtils-b2a75de2.js"])).default,OpenStreetMapLayer:async()=>(await a(()=>import("./OpenStreetMapLayer-f8da179a.js"),["assets/OpenStreetMapLayer-f8da179a.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/WebTileLayer-a91bc34e.js","assets/imageBitmapUtils-f9f7f428.js"])).default,OrientedImageryLayer:async()=>(await a(()=>import("./OrientedImageryLayer-faeb74c5.js"),["assets/OrientedImageryLayer-faeb74c5.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css"])).default,PointCloudLayer:async()=>(await a(()=>import("./PointCloudLayer-1e62a9b8.js"),["assets/PointCloudLayer-1e62a9b8.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/SceneService-476f6b28.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/jsonContext-55c14690.js","assets/resourceUtils-baac7912.js","assets/resourceUtils-9fa66497.js","assets/saveAPIKeyUtils-47b30d09.js","assets/saveUtils-9d84e8e3.js","assets/PointCloudUniqueValueRenderer-4f64fbec.js","assets/elevationInfoUtils-43456605.js"])).default,RouteLayer:async()=>(await a(()=>import("./RouteLayer-08d4f0e3.js"),["assets/RouteLayer-08d4f0e3.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/Stop-5e378cce.js"])).default,SceneLayer:async()=>(await a(()=>import("./SceneLayer-75ed8586.js"),["assets/SceneLayer-75ed8586.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/Mesh-1bff1808.js","assets/MeshTransform-6dc8c28a.js","assets/infoFor3D-24efd44a.js","assets/mat4f64-9a8384aa.js","assets/quat-e7437b61.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/imageUtils-9d9a1c68.js","assets/MeshVertexAttributes-0466a598.js","assets/MeshLocalVertexSpace-647e17cb.js","assets/meshVertexSpaceUtils-5bae5391.js","assets/earcut-ab02106a.js","assets/DoubleArray-bf43bbb1.js","assets/Indices-59b8cd4b.js","assets/plane-badd8063.js","assets/deduplicate-6ede85a9.js","assets/projection-1c08f2e4.js","assets/spatialReferenceEllipsoidUtils-60cb8a01.js","assets/computeTranslationToOriginAndRotation-4eca75e2.js","assets/BufferView-8a76b2a2.js","assets/vec3-ed78143c.js","assets/vec4-2b6545d2.js","assets/vertexSpaceConversion-d6e8bffa.js","assets/uploadAssetErrors-efb7a08e.js","assets/SceneService-476f6b28.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/jsonContext-55c14690.js","assets/resourceUtils-baac7912.js","assets/resourceUtils-9fa66497.js","assets/saveAPIKeyUtils-47b30d09.js","assets/saveUtils-9d84e8e3.js","assets/associatedFeatureServiceUtils-ddaa41c0.js","assets/capabilities-c607cf72.js","assets/I3SLayerDefinitions-6c75abce.js","assets/persistable-4b322b2b.js","assets/resourceExtension-7bd16a30.js","assets/elevationInfoUtils-43456605.js","assets/I3SUtil-5761fcaf.js","assets/sphere-1e22178e.js","assets/I3SBinaryReader-f09f872c.js","assets/VertexAttribute-c2df436e.js","assets/floatRGBA-4620942c.js","assets/NormalAttribute.glsl-585040d2.js","assets/interfaces-8918b36f.js","assets/BindType-d21d71dd.js","assets/orientedBoundingBox-ea6b33d3.js","assets/popupUtils-bbaa83ee.js"])).default,StreamLayer:async()=>(await a(()=>import("./StreamLayer-cb841d5f.js"),["assets/StreamLayer-cb841d5f.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css"])).default,SubtypeGroupLayer:async()=>(await a(()=>import("./SubtypeGroupLayer-631a2efc.js"),["assets/SubtypeGroupLayer-631a2efc.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css"])).default,TileLayer:async()=>(await a(()=>import("./TileLayer-c93c4371.js"),["assets/TileLayer-c93c4371.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/ArcGISCachedService-a6b42523.js","assets/TileInfoTilemapCache-f4430cad.js","assets/TilemapCache-cae831fd.js","assets/SublayersOwner-ba8a9ece.js","assets/QueryTask-8c4fa9e2.js","assets/infoFor3D-24efd44a.js","assets/executeForIds-2b79418a.js","assets/executeQueryPBF-5b539e22.js","assets/featureConversionUtils-8131e980.js","assets/sublayerUtils-3a715c10.js","assets/imageBitmapUtils-f9f7f428.js"])).default,UnknownLayer:async()=>(await a(()=>import("./UnknownLayer-5368921d.js"),["assets/UnknownLayer-5368921d.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css"])).default,UnsupportedLayer:async()=>(await a(()=>import("./UnsupportedLayer-d62e10ce.js"),["assets/UnsupportedLayer-d62e10ce.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css"])).default,VectorTileLayer:async()=>(await a(()=>import("./VectorTileLayer-87c6c5b7.js"),["assets/VectorTileLayer-87c6c5b7.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/ArcGISCachedService-a6b42523.js","assets/TileInfoTilemapCache-f4430cad.js","assets/TilemapCache-cae831fd.js","assets/jsonContext-55c14690.js","assets/StyleRepository-72202a77.js","assets/StyleDefinition-df636448.js","assets/enums-fb32c1bb.js","assets/enums-fb086c25.js","assets/GeometryUtils-ec854d53.js","assets/enums-2e633670.js","assets/VertexElementDescriptor-2925c6af.js","assets/definitions-f33e80b3.js"])).default,VideoLayer:async()=>(await a(()=>import("./VideoLayer-405d7f55.js"),["assets/VideoLayer-405d7f55.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/TelemetryDisplay-a35235f3.js","assets/mat3f64-e19cdcb8.js","assets/spatialReferenceEllipsoidUtils-60cb8a01.js"])).default,VoxelLayer:async()=>(await a(()=>import("./VoxelLayer-b6a0a9c0.js"),["assets/VoxelLayer-b6a0a9c0.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/SceneService-476f6b28.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/jsonContext-55c14690.js","assets/resourceUtils-baac7912.js","assets/resourceUtils-9fa66497.js","assets/saveAPIKeyUtils-47b30d09.js","assets/saveUtils-9d84e8e3.js","assets/persistable-4b322b2b.js","assets/resourceExtension-7bd16a30.js","assets/quat-e7437b61.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js"])).default,WFSLayer:async()=>(await a(()=>import("./WFSLayer-8148e45e.js"),["assets/WFSLayer-8148e45e.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/clientSideDefaults-fa791c65.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/wfsUtils-1edd3e9e.js","assets/geojson-287d8d7e.js","assets/date-294ce3fb.js","assets/xmlUtils-444cb4c0.js"])).default,WMSLayer:async()=>(await a(()=>import("./WMSLayer-de93c7a5.js"),["assets/WMSLayer-de93c7a5.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/scaleUtils-ad58c971.js","assets/crsUtils-3bab3d8c.js","assets/ExportWMSImageParameters-c9064c7d.js","assets/imageBitmapUtils-f9f7f428.js"])).default,WMTSLayer:async()=>(await a(()=>import("./WMTSLayer-293f2184.js"),["assets/WMTSLayer-293f2184.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/WebTileLayer-a91bc34e.js","assets/imageBitmapUtils-f9f7f428.js","assets/TileInfoTilemapCache-f4430cad.js","assets/crsUtils-3bab3d8c.js","assets/xmlUtils-444cb4c0.js"])).default,WebTileLayer:async()=>(await a(()=>import("./WebTileLayer-a91bc34e.js").then(t=>t.W),["assets/WebTileLayer-a91bc34e.js","assets/index-5bdaa4d1.js","assets/index-d4471cb7.css","assets/imageBitmapUtils-f9f7f428.js"])).default},E=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function T(t,e){const{loadContext:r,..._}=e||{},i=r?await r.fetchServiceMetadata(t,_):await n(t,_);L(i),d(i);const u={serviceJSON:i};if((i.currentVersion??0)<10.5)return u;const y=`${t}/layers`,o=r?await r.fetchServiceMetadata(y,_):await n(y,_);return L(o),d(o),u.layersJSON={layers:o.layers,tables:o.tables},u}function c(t){const{type:e}=t;return!!e&&E.has(e)}function l(t){return t.type==="Table"}function d(t){var e,r;t.layers=(e=t.layers)==null?void 0:e.filter(c),t.tables=(r=t.tables)==null?void 0:r.filter(l)}function p(t){t.type||(t.type="Feature Layer")}function f(t){t.type||(t.type="Table")}function L(t){var e,r;(e=t.layers)==null||e.forEach(p),(r=t.tables)==null||r.forEach(f)}function w(t){switch(t){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{O as a,n as b,w as i,T as t};
