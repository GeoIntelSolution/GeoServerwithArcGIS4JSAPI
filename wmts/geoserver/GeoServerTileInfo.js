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
        "lods":[{"level":0,"resolution":"0.703125","scale":279541132.0143589},{"level":1,"resolution":"0.3515625","scale":139770566.00717944},{"level":2,"resolution":"0.17578125","scale":69885283.00358972},{"level":3,"resolution":"0.087890625","scale":34942641.50179486},{"level":4,"resolution":"0.0439453125","scale":17471320.75089743},{"level":5,"resolution":"0.02197265625","scale":8735660.375448715},{"level":6,"resolution":"0.010986328125","scale":4367830.1877243575},{"level":7,"resolution":"0.0054931640625","scale":2183915.0938621787},{"level":8,"resolution":"0.00274658203125","scale":1091957.5469310894},{"level":9,"resolution":"0.001373291015625","scale":545978.7734655447},{"level":10,"resolution":"6.866455078125E-4","scale":272989.38673277234},{"level":11,"resolution":"3.4332275390625E-4","scale":136494.69336638617},{"level":12,"resolution":"1.71661376953125E-4","scale":68247.34668319309},{"level":13,"resolution":"8.58306884765625E-5","scale":34123.67334159654},{"level":14,"resolution":"4.291534423828125E-5","scale":17061.83667079827},{"level":15,"resolution":"2.1457672119140625E-5","scale":8530.918335399136},{"level":16,"resolution":"1.0728836059570312E-5","scale":4265.459167699568},{"level":17,"resolution":"5.364418029785156E-6","scale":2132.729583849784},{"level":18,"resolution":"2.682209014892578E-6","scale":1066.364791924892},{"level":19,"resolution":"1.341104507446289E-6","scale":533.182395962446},{"level":20,"resolution":"6.705522537231445E-7","scale":266.591197981223},{"level":21,"resolution":"3.3527612686157227E-7","scale":133.2955989906115}]
    });
    
    return tileInfo;
    
});