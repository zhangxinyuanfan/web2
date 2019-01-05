/*onchange事件*/
var k3=document.getElementById("k3");
// var k3b=k3.nextSibling;
var k3b=document.getElementById("k3b");
k3.onchange=function(){
	k3b.innerHTML="￥"+k3.value;		//为啥啊？
}

/*顶部悬浮*/
var cover=document.getElementsByClassName("cover")[0];
window.onload=function(){
  var st=document.documentElement.scrollTop||document.body.scrollTop;
  if(st>10){
    cover.style.position="fixed";
    cover.style.zIndex="90000";
  }else{
    cover.style.position="static";
  }
  // cover.style.position="static";
}

/*为啥不行？*/
/* 轮播图*/
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:90})
	animate(right,{opacity:90})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-810*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-810*index},function(){
		if(index==7){
			slider.style.left = '-810px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-1200*index},function(){
		if(index==0){
			slider.style.left = '-4860px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);


/*右边浮动*/
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");


var littlewei = document.getElementById("littlewei");
var bigwei = document.getElementById("bigwei");


window.onload=function(){
	littlewei.style.display="block";
	bigwei.style.display="none";
}
b1.onmouseover = function(){
	b1.style.marginRight = "0";
}
b1.onmouseout = function(){
	b1.style.marginRight = "-80px";
}

b2.onmouseover = function(){
	b2.style.marginRight = "0";
}
b2.onmouseout = function(){
	b2.style.marginRight = "-80px";
}

b3.onmouseover = function(){
	b3.style.marginRight = "0";
	littlewei.style.display = "none";
	bigwei.style.display = "block";
}
b3.onmouseout = function(){
	b3.style.marginRight = "-80px";
	littlewei.style.display = "block";
	bigwei.style.display = "none";
}
b4.onmouseover = function(){
	b4.style.marginRight = "0";
}
b4.onmouseout = function(){
	b4.style.marginRight = "-80px";
}

/*向上轮播*/
var t31=document.getElementsByClassName("t31")[0];

var index2 = 1;
var timer2;
var isMoving2= false;
 /*轮播下一张的函数*/
// function next2(){
//  	if(isMoving2){
//  		return;
// 	}
//  	isMoving2 = true;
// 	index2++;
// 	animate(box2,{top:-32.5*index2},function(){
// 		if(index2===12){
// 			box2.style.top="-32.5px";
// 			index2=1;
// 		}
// 		isMoving2 = false;
// 	});
// }
// timer2=setInterval(next2, 2000);
/*鼠标划入清定时器*/
// t31.onmouseover=function(){
// 	clearInterval(timer2);
// }
/*鼠标划出开定时器*/
// t31.onmouseout=function(){
//  	timer2 = setInterval(next2, 2000);
//  }
 window.onload = roll(50);

        function roll(t) {
            var ul1 = document.getElementById("ul1");
            var ul2 = document.getElementById("ul2");
            var box2 = document.getElementById("box2");
            ul2.innerHTML = ul1.innerHTML;
            box2.scrollTop = 0;
            var timer = setInterval(rollStart, t);
            box2.onmouseover = function () {
                clearInterval(timer)
            }
            box2.onmouseout = function () {
                timer = setInterval(rollStart, t);
            }
        }

        function rollStart() {
            if (box2.scrollTop >= ul1.scrollHeight) {
                box2.scrollTop = 0;
            } else {
                box2.scrollTop++;
            }
        }



