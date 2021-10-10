function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];          //兼容IE6-8 获取非行间样式
    }
    else
    {
        return getComputedStyle(obj,null)[name];    //兼容chrome，FF
    }
}


function startMove(obj,attr,iTarget)      //obj用来存储变量：oDiv等等； attr用来存储类型：width，height等等； iTarget用来存储值：10px，100等等；
{
    clearInterval(obj.timer);             //关闭定时器
    obj.timer=setInterval(function(){
        var cur=0;                        //新建一个变量

        if(attr=='opacity')               //opacity 的单独处理
        {
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);     //Math.round 四舍五入 
        }
        else
        {
            cur=parseInt(getStyle(obj,attr));                       //转换成整数
        }

        var speed=(iTarget-cur)/6;                                  //计算速度        
        speed=speed>0?Math.ceil(speed):Math.floor(speed);           //取整

        if(cur==iTarget)
        {
            clearInterval(obj.timer);                               //关闭定时器 
        }
        else
        {
            if(attr=='opacity')                                     //opacity 的单独处理
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';  //IE
                obj.style.opacity=(cur+speed)/100;                  //谷歌，FF
            }
            else
            {
                obj.style[attr]=cur+speed+'px';                     
            }
        }
    },30);
}