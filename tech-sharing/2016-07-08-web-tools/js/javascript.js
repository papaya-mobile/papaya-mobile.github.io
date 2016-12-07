/**
 * Created by 20151204 on 2016/7/6.
 */
var canvas=document.getElementById("canvas");
var cxt=canvas.getContext('2d');
var linwidth=[0,40,20,60,70]
var color=["#FFE957","#F29F3F","#F2753F","#ff510d","white"]
var r=[80,110,140,175,220]
for(var i=0;i<linwidth.length;i++){
    cxt.beginPath();
    cxt.lineWidth=linwidth[i];
    cxt.strokeStyle=color[i];
    console.log(color[i])
    i==0?cxt.fillStyle=color[i]:'';
    cxt.arc(0,250,r[i],0,180,false);
    cxt.stroke();
    i==0?cxt.fill():'';
    cxt.closePath();
}
/**/
window.onhashchange=function(){
    var hashArr = location.hash.split('/');
    switch  (hashArr[1]){
        case 'step-2':
        var olists=document.getElementsByClassName('animated-li');
        var index=0;
        var timer=window.setInterval(function(){
            index++;
            if(index==5){
                window.clearInterval(timer)
                timer=null
            }
            olists[index].setAttribute('class','animated-li animated lightSpeedIn')

        },200);
        break;
    }

}




