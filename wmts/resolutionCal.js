const dpi=96;
// 米 -> 度（地球球面） 转换系数
 const meterToRadiusRatio = 111194.872221777;
 // 英尺 -> 米 转换系数
 const inchToMeterRatio = 0.0254000508;

 function calcResolution(scaleDenominator) {
    res=scaleDenominator * inchToMeterRatio / (dpi * meterToRadiusRatio);
    return res
 }

   //天地图底图缩放等级，从WMTS服务中获取
   var zoomLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
   //天地图底图Scale Denominator，从WMTS服务中获取
   var scaleDenominators = [
     295829355.454566,
     147914677.727283,
     73957338.863641,
     36978669.431821,
     18489334.71591,
     9244667.357955,
     4622333.678978,
     2311166.839489,
     1155583.419744,
     577791.709872,
     288895.854936,
     144447.927468,
     72223.963734,
     36111.981867,
     18055.990934,
     9027.995467,
     4513.997733,
     2256.998867,
     1128.499433
   ];


   const zooms=[7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   const scaleDens=[
    4362931.898541665,
    2181465.949270837,
    1090732.9746354138,
    545366.4873177079,
    272683.2436588544,
    136341.62182942673,
    68170.81091471355,
    34085.405457356734,
    17042.702728678414,
    8521.351364339187,
    4260.675682169598,
    2130.3378410847945,
    1065.168920542402,
    532.5844602711991
   ]



   lodsArray=[]

  //  zoomLevels.map(function(zoomLevel, idx) {
  //   lodsArray.push({
  //     level: zoomLevel,
  //     resolution: calcResolution(scaleDenominators[idx]),
  //     scale: scaleDenominators[idx]
  //   });
  // });


  zooms.map(function(zoomLevel, idx) {
    lodsArray.push({
      level: zoomLevel,
      resolution: calcResolution(scaleDens[idx]),
      scale: scaleDens[idx]
    });
  });

  lodsArray.map(item=>console.log(item));