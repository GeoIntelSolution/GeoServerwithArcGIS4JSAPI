//计算matrix的col,row
//zoom下的行数 天地图zoom 1只有 0:0 0:1
function getMatrixRow(zoom)
{
    return  1<<(zoom-1);
}
//zoom下的列数
function getMatrixCol(zoom)
{
    return  1<<(zoom);
}

const longitudewidth = 360;
const latitudewidth = 180;

function dlong(zoom){
    //经微分
    return longitudewidth/getMatrixCol(zoom);
}
function dlat(zoom){
    //纬微分
    return latitudewidth/getMatrixRow(zoom);
}

for(let i=1;i<20;i++)
{
    console.log(dlong(i),dlat(i));
}