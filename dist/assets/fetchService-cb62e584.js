import{Y as s,_ as a}from"./index-fc6a9042.js";async function n(t,e){const{data:r}=await s(t,{responseType:"json",query:{f:"json",...e==null?void 0:e.customParameters,token:e==null?void 0:e.apiKey}});return r}const O={BingMapsLayer:async()=>(await a(()=>import("./BingMapsLayer-80022bfb.js"),["assets/BingMapsLayer-80022bfb.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/imageBitmapUtils-60fd2348.js"])).default,BuildingSceneLayer:async()=>(await a(()=>import("./BuildingSceneLayer-380461a3.js"),["assets/BuildingSceneLayer-380461a3.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/capabilities-c607cf72.js","assets/SceneService-a52dd5ca.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceUtils-f34989d6.js","assets/resourceUtils-4ffffc30.js","assets/saveAPIKeyUtils-70c983f5.js","assets/saveUtils-6eff8f3b.js","assets/I3SLayerDefinitions-472bc0c3.js","assets/I3SUtil-640cae1a.js","assets/mat4f64-9a8384aa.js","assets/spatialReferenceEllipsoidUtils-4fcbd8c9.js","assets/sphere-7ba024e9.js","assets/plane-5d495849.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/I3SBinaryReader-565c6035.js","assets/VertexAttribute-c2df436e.js","assets/floatRGBA-68679eff.js","assets/NormalAttribute.glsl-aa76791a.js","assets/interfaces-8918b36f.js","assets/BindType-d21d71dd.js","assets/orientedBoundingBox-ef5310e3.js","assets/quat-faabbeed.js","assets/computeTranslationToOriginAndRotation-162a992d.js","assets/popupUtils-8768d2fc.js","assets/associatedFeatureServiceUtils-97084c9a.js","assets/elevationInfoUtils-b875ab24.js"])).default,CSVLayer:async()=>(await a(()=>import("./CSVLayer-b15f8494.js"),["assets/CSVLayer-b15f8494.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/clientSideDefaults-933c3114.js","assets/QueryEngineCapabilities-85c4f1d0.js"])).default,CatalogLayer:async()=>(await a(()=>import("./CatalogLayer-380aa329.js"),["assets/CatalogLayer-380aa329.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/utils-34794efb.js","assets/ClassBreaksDefinition-cb6a468d.js","assets/FeatureLayerSource-e443e2fe.js","assets/MeshLocalVertexSpace-e2419621.js","assets/meshVertexSpaceUtils-26f4982b.js","assets/MeshTransform-23982108.js","assets/infoFor3D-24efd44a.js","assets/mat4f64-9a8384aa.js","assets/quat-faabbeed.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/editingSupport-969228c4.js","assets/clientSideDefaults-933c3114.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/QueryTask-49a6d507.js","assets/executeForIds-738b14e7.js","assets/executeQueryPBF-bfcfd520.js","assets/featureConversionUtils-eabf19f1.js"])).default,DimensionLayer:async()=>(await a(()=>import("./DimensionLayer-46b744d2.js"),["assets/DimensionLayer-46b744d2.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/Analysis-12f1e025.js"])).default,ElevationLayer:async()=>(await a(()=>import("./ElevationLayer-9fe0c6a8.js"),["assets/ElevationLayer-9fe0c6a8.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/ArcGISCachedService-279a5330.js","assets/TileInfoTilemapCache-e6c7aff1.js","assets/TilemapCache-768600f9.js"])).default,FeatureLayer:async()=>(await a(()=>import("./index-fc6a9042.js").then(t=>t.nf),["assets/index-fc6a9042.js","assets/index-d85835aa.css"])).default,GeoJSONLayer:async()=>(await a(()=>import("./GeoJSONLayer-524baedf.js"),["assets/GeoJSONLayer-524baedf.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/clientSideDefaults-933c3114.js","assets/QueryEngineCapabilities-85c4f1d0.js"])).default,GeoRSSLayer:async()=>(await a(()=>import("./GeoRSSLayer-1b61bca2.js"),["assets/GeoRSSLayer-1b61bca2.js","assets/index-fc6a9042.js","assets/index-d85835aa.css"])).default,GroupLayer:async()=>(await a(()=>import("./GroupLayer-23937750.js"),["assets/GroupLayer-23937750.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/saveUtils-6eff8f3b.js"])).default,ImageryLayer:async()=>(await a(()=>import("./ImageryLayer-9abac633.js"),["assets/ImageryLayer-9abac633.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/fetchRasterInfo-f5f645dc.js","assets/multidimensionalUtils-ba18fc7b.js","assets/dataUtils-50acef13.js","assets/RasterSymbolizer-5c23404b.js","assets/ClassBreaksDefinition-cb6a468d.js","assets/imageBitmapUtils-60fd2348.js","assets/executeForIds-738b14e7.js"])).default,ImageryTileLayer:async()=>(await a(()=>import("./ImageryTileLayer-c5633300.js"),["assets/ImageryTileLayer-c5633300.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/fetchRasterInfo-f5f645dc.js","assets/multidimensionalUtils-ba18fc7b.js","assets/dataUtils-50acef13.js","assets/RasterSymbolizer-5c23404b.js","assets/ClassBreaksDefinition-cb6a468d.js","assets/RawBlockCache-72cd7e7e.js","assets/rasterProjectionHelper-0fc914a1.js","assets/PolynomialTransform-c7206d09.js","assets/TilemapCache-768600f9.js"])).default,IntegratedMesh3DTilesLayer:async()=>(await a(()=>import("./IntegratedMesh3DTilesLayer-3d804c78.js"),["assets/IntegratedMesh3DTilesLayer-3d804c78.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/elevationInfoUtils-b875ab24.js"])).default,IntegratedMeshLayer:async()=>(await a(()=>import("./IntegratedMeshLayer-d21a0576.js"),["assets/IntegratedMeshLayer-d21a0576.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/persistable-e2bc4dac.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceExtension-ec1ec344.js","assets/SceneService-a52dd5ca.js","assets/originUtils-cfe4feaf.js","assets/resourceUtils-f34989d6.js","assets/resourceUtils-4ffffc30.js","assets/saveAPIKeyUtils-70c983f5.js","assets/saveUtils-6eff8f3b.js","assets/I3SLayerDefinitions-472bc0c3.js","assets/elevationInfoUtils-b875ab24.js"])).default,KMLLayer:async()=>(await a(()=>import("./KMLLayer-439c86c5.js"),["assets/KMLLayer-439c86c5.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/kmlUtils-708d9572.js"])).default,KnowledgeGraphLayer:async()=>(await a(()=>import("./KnowledgeGraphLayer-fc7a4085.js"),["assets/KnowledgeGraphLayer-fc7a4085.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/KnowledgeGraphSublayer-fa577f54.js","assets/FeatureStore-a434be7a.js","assets/featureConversionUtils-eabf19f1.js","assets/BoundsStore-b1d82ce1.js","assets/PooledRBush-d31e8954.js","assets/timeSupport-a1a26a23.js","assets/json-48e3ea08.js","assets/QueryEngine-a5e1fa54.js","assets/WhereClause-cfff2a3e.js","assets/TimeOnly-b4fd9a3f.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/utils-8a483a34.js","assets/utils-34794efb.js","assets/ClassBreaksDefinition-cb6a468d.js","assets/clientSideDefaults-933c3114.js","assets/knowledgeGraphService-7050044d.js","assets/GraphQueryStreaming-55ce2d60.js"])).default,LineOfSightLayer:async()=>(await a(()=>import("./LineOfSightLayer-2a061291.js"),["assets/LineOfSightLayer-2a061291.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/Analysis-12f1e025.js","assets/persistable-e2bc4dac.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceExtension-ec1ec344.js","assets/elevationInfoUtils-b875ab24.js"])).default,LinkChartLayer:async()=>(await a(()=>import("./LinkChartLayer-8e6b5c48.js"),["assets/LinkChartLayer-8e6b5c48.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/featureConversionUtils-eabf19f1.js","assets/KnowledgeGraphSublayer-fa577f54.js","assets/FeatureStore-a434be7a.js","assets/BoundsStore-b1d82ce1.js","assets/PooledRBush-d31e8954.js","assets/timeSupport-a1a26a23.js","assets/json-48e3ea08.js","assets/QueryEngine-a5e1fa54.js","assets/WhereClause-cfff2a3e.js","assets/TimeOnly-b4fd9a3f.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/utils-8a483a34.js","assets/utils-34794efb.js","assets/ClassBreaksDefinition-cb6a468d.js","assets/clientSideDefaults-933c3114.js","assets/knowledgeGraphService-7050044d.js","assets/GraphQueryStreaming-55ce2d60.js"])).default,MapImageLayer:async()=>(await a(()=>import("./MapImageLayer-6e85d5b8.js"),["assets/MapImageLayer-6e85d5b8.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/scaleUtils-5cdc2d47.js","assets/SublayersOwner-8bddbada.js","assets/QueryTask-49a6d507.js","assets/infoFor3D-24efd44a.js","assets/executeForIds-738b14e7.js","assets/executeQueryPBF-bfcfd520.js","assets/featureConversionUtils-eabf19f1.js","assets/sublayerUtils-de209024.js","assets/ExportImageParameters-c396310a.js","assets/floorFilterUtils-080a7cd2.js","assets/imageBitmapUtils-60fd2348.js"])).default,MapNotesLayer:async()=>(await a(()=>import("./MapNotesLayer-87971968.js"),["assets/MapNotesLayer-87971968.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/GraphicsLayer-47f4f504.js","assets/objectIdUtils-789e911a.js"])).default,MediaLayer:async()=>(await a(()=>import("./MediaLayer-22860503.js"),["assets/MediaLayer-22860503.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/perspectiveUtils-529e7244.js","assets/normalizeUtilsSync-372688c1.js","assets/mat3f64-e19cdcb8.js","assets/imageUtils-276e1aef.js","assets/resourceExtension-ec1ec344.js","assets/BoundsStore-b1d82ce1.js","assets/PooledRBush-d31e8954.js"])).default,OGCFeatureLayer:async()=>(await a(()=>import("./OGCFeatureLayer-a25a156a.js"),["assets/OGCFeatureLayer-a25a156a.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/ogcFeatureUtils-2fb5718f.js","assets/featureConversionUtils-eabf19f1.js","assets/geojson-9bfadb8d.js","assets/date-294ce3fb.js","assets/clientSideDefaults-933c3114.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/sourceUtils-1807299c.js"])).default,OpenStreetMapLayer:async()=>(await a(()=>import("./OpenStreetMapLayer-68082c23.js"),["assets/OpenStreetMapLayer-68082c23.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/WebTileLayer-72d3ab52.js","assets/imageBitmapUtils-60fd2348.js"])).default,OrientedImageryLayer:async()=>(await a(()=>import("./OrientedImageryLayer-a8de8127.js"),["assets/OrientedImageryLayer-a8de8127.js","assets/index-fc6a9042.js","assets/index-d85835aa.css"])).default,PointCloudLayer:async()=>(await a(()=>import("./PointCloudLayer-ee2c4fde.js"),["assets/PointCloudLayer-ee2c4fde.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/SceneService-a52dd5ca.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceUtils-f34989d6.js","assets/resourceUtils-4ffffc30.js","assets/saveAPIKeyUtils-70c983f5.js","assets/saveUtils-6eff8f3b.js","assets/PointCloudUniqueValueRenderer-41da003d.js","assets/elevationInfoUtils-b875ab24.js"])).default,RouteLayer:async()=>(await a(()=>import("./RouteLayer-158990d3.js"),["assets/RouteLayer-158990d3.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/Stop-aac689df.js"])).default,SceneLayer:async()=>(await a(()=>import("./SceneLayer-a353cf28.js"),["assets/SceneLayer-a353cf28.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/Mesh-9f9bf55e.js","assets/MeshTransform-23982108.js","assets/infoFor3D-24efd44a.js","assets/mat4f64-9a8384aa.js","assets/quat-faabbeed.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/imageUtils-276e1aef.js","assets/MeshVertexAttributes-ac5252ee.js","assets/MeshLocalVertexSpace-e2419621.js","assets/meshVertexSpaceUtils-26f4982b.js","assets/earcut-8b67ab42.js","assets/DoubleArray-8eb7fbf1.js","assets/Indices-e1ab6c0f.js","assets/plane-5d495849.js","assets/deduplicate-6d98db4f.js","assets/projection-f42a2f5e.js","assets/spatialReferenceEllipsoidUtils-4fcbd8c9.js","assets/computeTranslationToOriginAndRotation-162a992d.js","assets/BufferView-48cbf6dd.js","assets/vec3-db8a92fb.js","assets/vec4-106deac4.js","assets/vertexSpaceConversion-24d85eaa.js","assets/uploadAssetErrors-b108e084.js","assets/SceneService-a52dd5ca.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceUtils-f34989d6.js","assets/resourceUtils-4ffffc30.js","assets/saveAPIKeyUtils-70c983f5.js","assets/saveUtils-6eff8f3b.js","assets/associatedFeatureServiceUtils-97084c9a.js","assets/capabilities-c607cf72.js","assets/I3SLayerDefinitions-472bc0c3.js","assets/persistable-e2bc4dac.js","assets/resourceExtension-ec1ec344.js","assets/elevationInfoUtils-b875ab24.js","assets/I3SUtil-640cae1a.js","assets/sphere-7ba024e9.js","assets/I3SBinaryReader-565c6035.js","assets/VertexAttribute-c2df436e.js","assets/floatRGBA-68679eff.js","assets/NormalAttribute.glsl-aa76791a.js","assets/interfaces-8918b36f.js","assets/BindType-d21d71dd.js","assets/orientedBoundingBox-ef5310e3.js","assets/popupUtils-8768d2fc.js"])).default,StreamLayer:async()=>(await a(()=>import("./StreamLayer-78845d9f.js"),["assets/StreamLayer-78845d9f.js","assets/index-fc6a9042.js","assets/index-d85835aa.css"])).default,SubtypeGroupLayer:async()=>(await a(()=>import("./SubtypeGroupLayer-88cef6a4.js"),["assets/SubtypeGroupLayer-88cef6a4.js","assets/index-fc6a9042.js","assets/index-d85835aa.css"])).default,TileLayer:async()=>(await a(()=>import("./TileLayer-c2b56ac5.js"),["assets/TileLayer-c2b56ac5.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/ArcGISCachedService-279a5330.js","assets/TileInfoTilemapCache-e6c7aff1.js","assets/TilemapCache-768600f9.js","assets/SublayersOwner-8bddbada.js","assets/QueryTask-49a6d507.js","assets/infoFor3D-24efd44a.js","assets/executeForIds-738b14e7.js","assets/executeQueryPBF-bfcfd520.js","assets/featureConversionUtils-eabf19f1.js","assets/sublayerUtils-de209024.js","assets/imageBitmapUtils-60fd2348.js"])).default,UnknownLayer:async()=>(await a(()=>import("./UnknownLayer-3a370e78.js"),["assets/UnknownLayer-3a370e78.js","assets/index-fc6a9042.js","assets/index-d85835aa.css"])).default,UnsupportedLayer:async()=>(await a(()=>import("./UnsupportedLayer-37f4bd01.js"),["assets/UnsupportedLayer-37f4bd01.js","assets/index-fc6a9042.js","assets/index-d85835aa.css"])).default,VectorTileLayer:async()=>(await a(()=>import("./VectorTileLayer-ee7c5746.js"),["assets/VectorTileLayer-ee7c5746.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/ArcGISCachedService-279a5330.js","assets/TileInfoTilemapCache-e6c7aff1.js","assets/TilemapCache-768600f9.js","assets/StyleRepository-fb504653.js","assets/StyleDefinition-df636448.js","assets/enums-fb32c1bb.js","assets/enums-fb086c25.js","assets/GeometryUtils-7c36778f.js","assets/enums-2e633670.js","assets/VertexElementDescriptor-2925c6af.js","assets/definitions-f33e80b3.js"])).default,VideoLayer:async()=>(await a(()=>import("./VideoLayer-8ac3124b.js"),["assets/VideoLayer-8ac3124b.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/TelemetryDisplay-6538c97f.js","assets/mat3f64-e19cdcb8.js","assets/spatialReferenceEllipsoidUtils-4fcbd8c9.js"])).default,VoxelLayer:async()=>(await a(()=>import("./VoxelLayer-6f092395.js"),["assets/VoxelLayer-6f092395.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/SceneService-a52dd5ca.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceUtils-f34989d6.js","assets/resourceUtils-4ffffc30.js","assets/saveAPIKeyUtils-70c983f5.js","assets/saveUtils-6eff8f3b.js","assets/persistable-e2bc4dac.js","assets/resourceExtension-ec1ec344.js","assets/quat-faabbeed.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js"])).default,WFSLayer:async()=>(await a(()=>import("./WFSLayer-64a0ebdf.js"),["assets/WFSLayer-64a0ebdf.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/clientSideDefaults-933c3114.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/wfsUtils-c2290ba2.js","assets/geojson-9bfadb8d.js","assets/date-294ce3fb.js","assets/xmlUtils-444cb4c0.js"])).default,WMSLayer:async()=>(await a(()=>import("./WMSLayer-6275396e.js"),["assets/WMSLayer-6275396e.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/scaleUtils-5cdc2d47.js","assets/crsUtils-3bab3d8c.js","assets/ExportWMSImageParameters-3affbd0d.js","assets/imageBitmapUtils-60fd2348.js"])).default,WMTSLayer:async()=>(await a(()=>import("./WMTSLayer-e8e08693.js"),["assets/WMTSLayer-e8e08693.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/WebTileLayer-72d3ab52.js","assets/imageBitmapUtils-60fd2348.js","assets/TileInfoTilemapCache-e6c7aff1.js","assets/crsUtils-3bab3d8c.js","assets/xmlUtils-444cb4c0.js"])).default,WebTileLayer:async()=>(await a(()=>import("./WebTileLayer-72d3ab52.js").then(t=>t.W),["assets/WebTileLayer-72d3ab52.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/imageBitmapUtils-60fd2348.js"])).default},E=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function T(t,e){const{loadContext:r,..._}=e||{},i=r?await r.fetchServiceMetadata(t,_):await n(t,_);L(i),d(i);const u={serviceJSON:i};if((i.currentVersion??0)<10.5)return u;const y=`${t}/layers`,o=r?await r.fetchServiceMetadata(y,_):await n(y,_);return L(o),d(o),u.layersJSON={layers:o.layers,tables:o.tables},u}function c(t){const{type:e}=t;return!!e&&E.has(e)}function l(t){return t.type==="Table"}function d(t){var e,r;t.layers=(e=t.layers)==null?void 0:e.filter(c),t.tables=(r=t.tables)==null?void 0:r.filter(l)}function f(t){t.type||(t.type="Feature Layer")}function p(t){t.type||(t.type="Table")}function L(t){var e,r;(e=t.layers)==null||e.forEach(f),(r=t.tables)==null||r.forEach(p)}function w(t){switch(t){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{O as a,n as b,w as i,T as t};
