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
    let res= longitudewidth/getMatrixCol(zoom);
    return res;
}
function dlat(zoom){
    //纬微分
    let res= latitudewidth/getMatrixRow(zoom);
    return res;
}

// for(let i=1;i<20;i++)
// {
//     // console.log(dlong(i),dlat(i));
//     // console.log(getMatrixRow(i),getMatrixCol(i))
// }

//计算某一个经纬度在某个zoom下所在的切片的ROW和COL
function calRowAndCol(longitude,latitude,zoom)
{
    //获取微分元
    const dLong=dlong(zoom);
    const dLat =dlat(zoom);
    // console.log(dlong,dlat);
    //attention经纬度有正负
    //一级下 -45，14 应该在  0，0
    //45，14在 0，1
    //编号从左上角开始
    // 这样思考  90--90      180/width-(90+latitude)/width=(90-latitude)/width
    let row=Math.floor((90-latitude)/dLat);//shift and mod
    let col=Math.floor((180+longitude)/dLong);//shift and mod;
    console.log(row,col);
    return {row,col}
}


//计算某个zoom下的经纬度
function calLatandLong(row,col,zoom){
    const dLong=dlong(zoom);
    const dLat =dlat(zoom);

    const long= col*dLong-180;
    const lat =90-row*dLat;

    return {long,lat}
}


console.log(calRowAndCol(120,30,2))
console.log(calLatandLong(5780,28898,15))