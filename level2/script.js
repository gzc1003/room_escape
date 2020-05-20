var assetsCallback;
var onLoadAssets = function(callback){
	assetsCallback = callback;
	if(assetsLeft==0) assetsCallback();
};
var assetsLeft = 0;
var onAssetLoaded = function(){
	assetsLeft--;
	if(assetsLeft==0) assetsCallback();
};
var images = {};
function addAsset(name,src){
	assetsLeft++;
	images[name] = new Image();
	images[name].onload = onAssetLoaded;
	images[name].src = src;
}
window.onload = function(){
	addAsset("back1","assets/back1.jpg");
	addAsset("back2","assets/back2.jpg");
	addAsset("back3","assets/back3.jpg");
	addAsset("back4","assets/back4.jpg");
	addAsset("back5","assets/back5.jpg");
	addAsset("back6","assets/back6.jpg");
	addAsset("back7","assets/back7.jpg");
	addAsset("back8","assets/back8.jpg");
	addAsset("back9","assets/back9.jpg");
	addAsset("back1","assets/back1.jpg");
	addAsset("1","assets/1.png");
	addAsset("2","assets/2.png");
	addAsset("3","assets/3.png");
	addAsset("4","assets/4.png");
	addAsset("5","assets/5.png");
	addAsset("6","assets/6.png");
	addAsset("7","assets/7.png");
	addAsset("8","assets/8.png");
	addAsset("9","assets/9.png");
	addAsset("iphone6","assets/iphone6.png");

	onLoadAssets(function(){
		window.setTimeout(function(){
			document.getElementById("loading").style.display = "none";
		},300);
	});
};


$('.flip').each(function(){
	var $this = $(this);
	var $card = $this.find('.card');
	var $parent = $this.parent();
	$parent.on('mouseenter', function(){
		$card.addClass('flipped');
		$parent.css({ 'z-index' : '10' });
		$parent.siblings().addClass('hide-bg');
		$parent.parent().siblings().find('.flip').addClass('hide-bg');
		var thisImage = $this.data('image');

		$('.service-background-wrapper').css({ 'background-image' : 'url("' + thisImage + '")'

		});

		return false;
	});
	$parent.on('mouseleave', function(){
		$card.removeClass('flipped');
		$parent.css({ 'z-index' : '8' });
		$parent.siblings().removeClass('hide-bg');
		$parent.parent().siblings().find('.flip').removeClass('hide-bg');

		return false;
	});
});

$("#gesturepwd").GesturePasswd({
	backgroundColor:"#FFFFFF",  //背景色
	color:"#000000",   //主要的控件颜色
	roundRadii:25,    //大圆点的半径
	pointRadii:6, //大圆点被选中时显示的圆心的半径
	space:30,  //大圆点之间的间隙
	width:240,   //整个组件的宽度
	height:240,  //整个组件的高度
	lineColor:"#00aec7",   //用户划出线条的颜色
	zindex :100  //整个组件的css z-index属性
});

$("#gesturepwd").on("hasPasswd",function(e,passwd){
	var result;

	if(passwd == "741258963"){

		result=true;
	}
	else {
		result=false;
	}

	if(result == true){
		$("#gesturepwd").trigger("passwdRight");
		setTimeout(function(){
			//密码验证正确后的其他操作，打开新的页面等。。。
			window.location.href = '../level3/'
		},500);  //延迟半秒以照顾视觉效果
	}
	else{
		$("#gesturepwd").trigger("passwdWrong");
		//密码验证错误后的其他操作。。。
	}
});
