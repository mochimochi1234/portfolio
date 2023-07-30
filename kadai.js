//画像切り替え処理
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

/*------------------------------------------------*/
//ハンバーガーメニュー内のリンクを押したときに閉じる処理
const navInput = document.getElementById('button');
const humburger = document.querySelectorAll('.zzz li a');
const humburgerA = Array.from(humburger);

humburgerA.forEach(function(element){
    element.addEventListener('click',function(){
        navInput.checked = false;
    })
})