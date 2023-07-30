'use strict';
const img = ["img/sakuhin4.jpg","img/sakuhin5.jpg","img/sakuhin6.jpg","img/sakuhin7.jpg","img/sakuhin8.jpg","img/sakuhin9.jpg"];
let count = -1;
const back = document.getElementById("sc-to-left");
const go = document.getElementById("sc-to-right");
picChange();
function picChange(){
    count++;
    if(count==img.length){
        count=0;
    }
    document.getElementById("dessan").style.backgroundImage = "url("+img[count]+")";
    setTimeout("picChange()",5000);
}

back.addEventListener('click',function(e) {
    count--;
    if(count<0){
        count=img.length-1;
    }
    document.getElementById("dessan").style.backgroundImage = "url("+img[count]+")";
})

go.addEventListener('click',function(e) {
    count++;
    if(count==img.length){
        count=0;
    }
    document.getElementById("dessan").style.backgroundImage = "url("+img[count]+")";
})