var fs=require('fs');
var xml2js=require('xml2js');
var parser =new xml2js.Parser();
const dpi=96;
// 米 -> 度（地球球面） 转换系数
 const meterToRadiusRatio = 111194.872221777;
 // 英尺 -> 米 转换系数
 const inchToMeterRatio = 0.0254000508;

 function calcResolution(scaleDenominator) {
    return scaleDenominator * inchToMeterRatio / (dpi * meterToRadiusRatio);
 }


fs.readFile(__dirname+'/wmts.xml',function(err,data){
    if(err)
    {
        console.log(err);
        return;
    }
    parser.parseString(data,function(err,result){
        if(err)
        {
            console.log(err);
            return;
        }
        // console.log(result.Capabilities.Contents);
        const contents=result.Capabilities.Contents;
        loadArray=[];
        contents.map(c=>{
            // console.log(c);
            c.Layer.map(layer=>{
                console.log(layer["ows:Title"].join(","));
            });

            c.TileMatrixSet.map(m=>{
                // console.log(m);
                m.TileMatrix.map(matrix=>{
                    // console.log(matrix);
                    console.log(matrix['ows:Identifier'][0]);
                    console.log(calcResolution(matrix['ows:Identifier'][0]));
                    console.log(matrix.ScaleDenominator[0],",");
                    var data={
                        "level": matrix['ows:Identifier'][0],
                        "resolution": calcResolution(matrix.ScaleDenominator[0]),
                        "scale": matrix.ScaleDenominator[0]
                    };
                    loadArray.push(data);
                })
            });

            wstream=fs.createWriteStream(__dirname+"/result.json");

            wstream.write(JSON.stringify(loadArray),function(err,res){
                if(err){
                    console.log(err);
                    return;
                }

                loadArray.map(lod=>{
                    console.log(lod.scale);
                })
                console.log("done");
            });

        });
        // contents.Layer.map(layer=>console.log(layer));
        
        console.log('Done');
    });
})