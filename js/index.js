var banner=document.getElementById('banner');
var btns_box=document.getElementById('btns_box').children;
var banner_inner=document.getElementById('banner_inner');
var left=document.getElementById('left');
var right=document.getElementById('right');
var index=1;
var timer;
var isMoving=false;
// 轮播下一张函数
function next(){
    if(isMoving){
        return;
    }
    isMoving = true;
    index++;
    navChange();
    animate(banner_inner,{left:-1920*index},function(){
        if (index === 4){
            banner_inner.style.left = "-1920px";
            index = 1;
        }
        isMoving=false;
    });
}
// 轮播前一张函数
function prev(){
    if(isMoving){
        return;
    }
    isMoving = true;
    index--;
    navChange();
    animate(banner_inner,{left:-1920*index},function(){
        if (index === 0){
            banner_inner.style.left = "-5760px";
            index = 3;
        }
        isMoving=false;
    });
}
var timer = setInterval(next,3000);
// 鼠标移上去停止轮播出现箭头
banner.onmouseover = function(){
    animate(left,{opacity:50});
    animate(right,{opacity:50});
    clearInterval(timer);
}
// 鼠标移出后继续轮播剪头消失
 banner.onmouseout = function(){
    animate(left,{opacity:0});
    animate(right,{opacity:0});
    timer=setInterval(next,3000);
 }
//  右箭头点击
right.onclick = next;
// 左箭头点击
left.onclick = prev;
// 轮播圆点点击
for(var i = 0;i<btns_box.length;i++){
    btns_box[i].idx = i;
    btns_box[i].onclick = function(){
        index = this.idx + 1;
        navChange();
        animate(banner_inner,{left:-1920*index});
    }
}
// 小圆点背景色切换
function navChange(){
    for(var i = 0;i<btns_box.length;i++){
        btns_box[i].className = '';
    }
    if(index===4){
        btns_box[0].className = 'active';
    }else if(index===0){
        btns_box[4].className = 'active';
    }else{
        btns_box[index-1].className = 'active';
    }
}