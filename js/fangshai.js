/*放大镜*/
//1,获取元素
var box3 = document.getElementById("box3");
var img1 = document.getElementById("img1");
var slider = document.getElementById("slider");
var img2 = document.getElementById("img2");
var Bimg = document.getElementById("Bimg");
//2,给左侧的小图绑定移入,移出,移动效果
img1.onmouseover=function(){
	slider.style.display="block";
	img2.style.display="block";
}
img1.onmouseout=function(){
	slider.style.display="none";
	img2.style.display="none";
}
img1.onmousemove=function(){
	var ev=ev||window.event;
	//(1)根据鼠标位置，计算放大镜位置
	//left是放大镜左边的边到box的左边的距离,left是相对于他的父元素定位
	var left = ev.clientX-box3.offsetLeft-slider.offsetWidth/2;
	var top = ev.clientY-box3.offsetTop-slider.offsetHeight/2;
	var maxLeft = img1.offsetWidth-slider.offsetWidth;
	var maxTop = img1.offsetHeight-slider.offsetHeight;

	left = left>maxLeft?maxLeft:left<0?0:left;
	top = top>maxTop?maxTop:top<0?0:top;

	//(2)设置放大镜的位置
	slider.style.left=left+"px";
	slider.style.top=top+"px";
	//(3)根据左侧放大镜位置，计算右侧大图移动比例
	var w = left/maxLeft;
	var h = top/maxTop;
	//(4)计算大图最大的移动范围
	var BimgLeft=img2.offsetWidth-Bimg.offsetWidth;
	var BimgTop=img2.offsetHeight-Bimg.offsetHeight;
	//(5)计算大图移动的距离
	Bimg.style.left=w*BimgLeft+"px";
	Bimg.style.top=h*BimgTop+"px";
}


/*点击"加入购物车"弹出窗口*/

var tr16 = document.getElementsByClassName("tr16")[0];
var main = document.getElementsByClassName("main")[0];
var jump = document.getElementById("jump");
main.style.width = window.outerWidth + "px";

tr16.onclick = function(){
  jump.style.width =  document.documentElement.clientWidth + "px";
  jump.style.height = document.body.offsetHeight + "px";
  jump.style.display = "block";
  var tr17 = document.getElementById("tr17");
  tr17.style.top = (document.documentElement.scrollTop + (document.documentElement.clientHeight - tr17.offsetHeight) / 2) + "px";
  tr17.style.left = (document.documentElement.scrollLeft + (document.documentElement.clientWidth - tr17.offsetWidth) / 2) + "px";
}
var X = document.getElementById("X");
var go = document.getElementById("go");
X.onmouseover = function(){
  X.style.cursor = "pointer"
}
X.onclick = function(){
  jump.style.display = "none";
}
go.onclick = function(){
  jump.style.display = "none";
}


/*增减购买数目*/
var tr11=document.getElementsByClassName("tr11")[0];
var le = document.getElementById("le");
var ri = document.getElementById("ri");
tr11.value = 1;
le.onmouseover = function(){
  if(tr11.value <= 1){
    le.style.cursor = "not-allowed";
  }
  else{
    le.style.cursor = "default";
  }
}
ri.onmouseover = function(){
  if(tr11.value >= 5){
    ri.style.cursor = "not-allowed";
  }
  else{
    ri.style.cursor = "default";
  }
}
le.onclick = function(){
  if(tr11.value <= 1){
    le.style.cursor = "not-allowed";
  }
  else{
    le.style.cursor = "default";
    tr11.value = tr11.value - 1;
  }
}
ri.onclick = function(){
  if(tr11.value >= 5){
    ri.style.cursor = "not-allowed";
  }
  else{
    ri.style.cursor = "default";
    tr11.value = parseInt(tr11.value)+1;
  }
}


/*选择化妆品含量*/
var ml1=document.getElementById("ml1");
var ml2=document.getElementById("ml2");
var rongliang=document.getElementById("rongliang");
/*function on(ml){
  ml.style.border="1px solid #ff0000";
}
function out(ml){
  ml.style.border="none";
}
ml1.onmouseover=on(ml1);
ml1.onmouseout=out(ml1);
ml2.onmouseover=on(ml2);
ml2.onmouseout=out(ml2);
*/
/*100ml容量*/
ml1.onmouseover=function(){
  ml1.style.border="1px solid #ff0000";
}
ml1.onmouseout=function(){
  ml1.style.border="none";
}
ml1.onclick=function(){
  ml1.style.border="1px solid #ff0000";
  rongliang.innerHTML='"'+this.innerHTML+'"';
}
/*200ml容量*/
ml2.onmouseover=function(){
  ml2.style.border="1px solid #ff0000";
}
ml2.onmouseout=function(){
  ml2.style.border="none";
}
ml2.onclick=function(){
  ml2.style.border="1px solid #ff0000";
  rongliang.innerHTML='"'+this.innerHTML+'"';
}


/*选择防晒图片*/
var xiaol=document.getElementById("xiaol");
var xiaor=document.getElementById("xiaor");
/*var imgl=img1.childNodes[0];*/
var imgq=document.getElementById("imgq");
/*var imgx=document.createElement("img");*/
// var imgu=document.getElementById("imgu");
/*imgx.src="img1/pp1.jpeg";*/




xiaol.onmouseover=function(){
  xiaol.style.border="1px solid #ff9003";
  imgq.innerHTML='<img src="img1/pp0.jpeg" width="410" height="410"/>';
  // Bimg.innerHTML='<img src="img1/pp0.jpeg"  id="Bimg" width="1025" height="1025"/>';
   Bimg.src="img1/pp0.jpeg";
}
xiaol.onmouseout=function(){
  xiaol.style.border="none";
}


xiaor.onmouseover=function(){
  xiaor.style.border="1px solid #ff9003";
  /*img1.src="../img1/sp1.jpeg"*/
  /*imgl.replaceChild(imgx,imgl);*/
  imgq.innerHTML='<img src="img1/pp1.jpeg" width="410" height="410"/>';
  // Bimg.innerHTML='<img src="img1/pp1.jpeg"  id="Bimg" width="1025" height="1025"/>';
  Bimg.src="img1/pp1.jpeg";
}
xiaor.onmouseout=function(){
  xiaor.style.border="none";
}



/*划算标签变颜色*/
var pink=document.getElementById("pink");
var list=pink.children;
for(var i=0;i<list.length;i++){
 ( function(i){
  list[i].onmouseover=function(){
    list[i].className="m1";
  }
})(i);
}

for(var i=0;i<list.length;i++){
 ( function(i){
  list[i].onmouseout=function(){
    list[i].className="";
  }
})(i);
}

// for( var i=0; i<oNavlist.length; i++ ){
//   (function(i){
//     oNavlist[i].onclick = function(){
//       index = i+1;
//       navmove();
//       animate(slider,{left:-810*index});
//     }
//   })(i);
// }

// /*顶部悬浮*/
var cover=document.getElementsByClassName("cover")[0];
window.onload=function(){
  var st=document.documentElement.scrollTop||document.body.scrollTop;
  if(st>10){
    cover.style.position="fixed";
    cover.style.zIndex="40000";
  }else{
    cover.style.position="static";
  }
  // cover.style.position="static";
}