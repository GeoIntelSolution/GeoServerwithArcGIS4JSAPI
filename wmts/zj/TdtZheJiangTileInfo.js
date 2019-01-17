define([
    "esri/layers/support/TileInfo"    
], function(TileInfo) {
    'use strict';
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
        "lods": [{ level: 7,
            resolution: 0.010381426323673004,
            scale: 4362931.898541665 },
          { level: 8,
            resolution: 0.005190713161836513,
            scale: 2181465.949270837 },
          { level: 9,
            resolution: 0.0025953565809182454,
            scale: 1090732.9746354138 },
          { level: 10,
            resolution: 0.0012976782904591249,
            scale: 545366.4873177079 },
          { level: 11,
            resolution: 0.0006488391452295635,
            scale: 272683.2436588544 },
          { level: 12,
            resolution: 0.0003244195726147807,
            scale: 136341.62182942673 },
          { level: 13,
            resolution: 0.00016220978630739077,
            scale: 68170.81091471355 },
          { level: 14,
            resolution: 0.00008110489315369529,
            scale: 34085.405457356734 },
          { level: 15,
            resolution: 0.00004055244657684776,
            scale: 17042.702728678414 },
          { level: 16,
            resolution: 0.00002027622328842383,
            scale: 8521.351364339187 },
          { level: 17,
            resolution: 0.000010138111644211927,
            scale: 4260.675682169598 },
          { level: 18,
            resolution: 0.000005069055822105952,
            scale: 2130.3378410847945 },
          { level: 19,
            resolution: 0.0000025345279110529876,
            scale: 1065.168920542402 },
          { level: 20,
            resolution: 0.0000012672639555264891,
            scale: 532.5844602711991 }]
    });
    
    return tileInfo;
    
});