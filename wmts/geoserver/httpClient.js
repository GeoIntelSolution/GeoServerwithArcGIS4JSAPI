// curl  -u admin:geoserver   http://192.168.1.254:8084/geoserver/gwc/rest/gridsets
// curl  -u admin:geoserver   http://192.168.1.254:8084/geoserver/gwc/rest/gridsets/EPSG:4326
//使用request 和xml2js来解析gridset
const request= require('request');
const xml2js =require('xml2js');
const fs =require('fs');
const parser=new xml2js.Parser();

// scaleDenominator=resolution*(1/0.000028);

const scale=279541132.0143589;
const metaArr=[]


  // 通过Scale Denominator计算分辨率
  function calcResolution(scaleDenominator) {
    return scaleDenominator * inchToMeterRatio / (dpi * meterToRadiusRatio);
  }


request.get(' http://192.168.1.254:8084/geoserver/gwc/rest/gridsets/EPSG:4326',function(err,response,body){
    if(err){
        console.log(err);
        return;
    }
    // console.log(body);
    parser.parseString(body,function(err,data){
        if(err){
            console.log(err);
            return;
        }
        // console.log(data);
        const pixelsize=parseFloat(data['gridSet'].pixelSize[0],10);
        // console.log(pixelsize);
        data['gridSet'].resolutions.map(resolution=>{
            // console.log(resolution['double']);
            const resolutionArr=resolution['double']
            resolutionArr.map((item,i)=>{
                // console.log(item);
            //    console.log("scaleDenominator",item*(1/pixelsize));
                const meta={
                    "level":i,
                    "resolution":item,
                    "scale":scale/(1<<i)
                }
                metaArr.push(meta)
                // console.log(meta);

            });
            // console.log(resolutionArr.length)
        });


        const wstream =fs.createWriteStream(__dirname+"/lods.json")
        wstream.write(JSON.stringify(metaArr),function(err,result){
            if(err){
                console.log(err);
                return ;
            }
            console.log("done");
        })


    });
}).auth('admin','geoserver')