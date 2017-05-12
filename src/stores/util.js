/**
 * Created by Think on 2017/5/12.
 */

export  function isEqual(value){
    if(value!="" && value!="null" && value!=null && value!="undefined" && value !=undefined){
        return true;
    }else{
        return false;
    }
}
export  function timestringToDate(expireDateString){
    ////expireDateString = "2017-10-01 00:00:00";//默认没有过期

    if(!isEqual(expireDateString)) return false;
    expireDateString = expireDateString.replace(/-/g,'/');
    var expiredate = new Date(expireDateString);
    var expiretime = expiredate.getTime();
    var nowDate = new Date();
    var nowtime = nowDate.getTime();
    if(nowtime>expiretime){
        return true;
    }
    else{
        return false;
    }
}