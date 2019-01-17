define([
    "esri/layers/support/TileInfo"
],function(
    TileInfo
){
    //dpi
    var dpi=96;
    // 米 -> 度（地球球面） 转换系数
    var meterToRadiusRatio = 111194.872221777;
    // 英尺 -> 米 转换系数
    var inchToMeterRatio = 0.0254000508;
      //天地图底图缩放等级，从WMTS服务中获取
  var zoomLevels = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20];
  //天地图底图Scale Denominator，从WMTS服务中获取
  var scaleDenominators = [
    4362931.898541665 ,
    2181465.949270837 ,
    1090732.9746354138 ,
    545366.4873177079 ,
    272683.2436588544 ,
    136341.62182942673 ,
    68170.81091471355 ,
    34085.405457356734 ,
    17042.702728678414 ,
    8521.351364339187 ,
    4260.675682169598 ,
    2130.3378410847945 ,
    1065.168920542402 ,
    532.5844602711991 
  ];

   // 通过Scale Denominator计算分辨率
   function calcResolution(scaleDenominator) {
    return scaleDenominator * inchToMeterRatio / (dpi * meterToRadiusRatio);
  }

  // 用于存储不同缩放等级下的切片信息的LOD数组对象
  var lodsArray = [];

  
  // 用于存储不同缩放等级下的切片信息的LOD数组对象
  var lodsArray = [];

  zoomLevels.map(function(zoomLevel, idx) {
    var scaleDenominator = scaleDenominators[idx];
    lodsArray.push({
      level: zoomLevel,
      resolution: calcResolution(scaleDenominators[idx]),
      scale: scaleDenominators[idx]
    });
  });

  var tileInfo = new TileInfo({
    "rows": 256,
    "cols": 256,
    "compressionQuality": 0,
    "origin": {
        "x": -180,
        "y": 90
    },
    "spatialReference": {
        "wkid": 4326
    },
    "lods":lodsArray
  });

  return tileInfo;

})