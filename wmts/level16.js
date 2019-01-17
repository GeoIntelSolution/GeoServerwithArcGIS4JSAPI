const fs= require('fs');
const resolution= 0.010381426323673004;
const scale=4362931.898541665;

const dataArr=[];
function levelCal(){
    console.log('hello');
    for(let i =6;i>0;i--)
    {
        var data={
            "level":i,
            "resolution":resolution*(2<<(6-i)),
            "scale":scale*(2<<(6-i))
        };
        // console.log(data);
        dataArr.push(data);
    }
}

levelCal();
const ok=fs.createWriteStream(__dirname+"/resolution.json");
ok.write(JSON.stringify(dataArr.reverse()),function(err,res){
    if(err){
        console.log(err);
        return  err;
    }
    console.log("done");
});
// console.log(dataArr.join(","))