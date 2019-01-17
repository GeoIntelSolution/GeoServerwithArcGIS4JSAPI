define(function() {
    var urlTemplatesObject = {
      TDT: "http://{subDomain}.tianditu.gov.cn/img_c/wmts?tk=2560ea8814acb7d81b991e62b72667ed&SERVICE=WMTS&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles",
      CIA: "http://{subDomain}.tianditu.gov.cn/cia_c/wmts?tk=2560ea8814acb7d81b991e62b72667ed&SERVICE=WMTS&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles"
    };
    return urlTemplatesObject;
  });

  