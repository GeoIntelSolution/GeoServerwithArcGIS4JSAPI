define(function() {
    var urlTemplatesObject = {
      GEO: "http://192.168.1.254:8084/geoserver/gwc/service/wmts?layer=xiaoshan%3Axiaoshan&style=&tilematrixset=EPSG%3A4326&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A4326%3A{level}&TileCol={col}&TileRow={row}",
      TEST:"http://192.168.1.254:8084/geoserver/gwc/service/wmts?layer=xiaoshan%3Atest&style=&tilematrixset=EPSG%3A4326&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A4326%3A{level}&TileCol={col}&TileRow={row}",
      POINT:"http://192.168.1.254:8084/geoserver/gwc/service/wmts?layer=xiaoshan%3Apoints&style=&tilematrixset=EPSG%3A4326&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A4326%3A{level}&TileCol={col}&TileRow={row}"
    };
    return urlTemplatesObject;
  });

  