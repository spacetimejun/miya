$(function(){
	//加载头部尾部
	$("#indexHeader").load("header.html")
	$("#indexFooter").load("footer.html")
	
	//登陆后加入用户名
	
	$("#username").text($.cookie("user"));
	//banner效果设置
	//鼠标移到小圆点时，切换图片
	$(".dot:eq(0)").addClass("dotactive")
	$(".cell00").fadeIn(0)
	var i="";
	
	function moveR(){
		
		$(".cell0"+i%5).fadeOut(0,function(){
			$(".cell0"+(i+1)%5).stop().fadeIn(1000)
		});
		i++;
		$(".dot:eq("+i%5+")").addClass("dotactive").siblings().removeClass("dotactive")
		
	}
	$(".dot").hover(function(){
		var i=$(this).index();
	//alert(i)
		//小圆点样式切换
		$(this).addClass('dotactive').siblings().removeClass('dotactive');
		$(".cell0"+i+"").siblings("div").stop().fadeOut();
		$(".cell0"+i+"").stop().fadeIn(1000);
		return i;
	})
	//自动轮播
	var t=setInterval(function(){
		moveR()
	},4000)
	//鼠标移动到banner时，切换停止
	$(".banner").hover(function(){
		clearInterval(t)
	},function(){
		t = setInterval(function(){
			moveR()
		},4000)
	})
	
	//为你推荐部分的样式
	$(".recommend").find("a").mouseenter(function(){
		var tt=$(this).find(".title").text();
		$(this).find(".recommendImg").find("span").stop().delay(2000).show().text(tt);
		$(this).find("img").stop().fadeTo(500,0.5);
		$(this).find(".title").stop().css("color","#F9458B")
		
		
	}).mouseleave(function(){
		$(this).find("img").stop().fadeTo(500,1)
		$(this).find(".title").stop().css("color","gray")
		$(this).find(".recommendImg").find("span").stop().hide()
	})
	
	
	//左边广告
	$("#leftad").hover(function(){
		$(this).stop().animate({"right":"51%"})
	},function(){
		$(this).stop().animate({"right":"55%"})
	})
	
	//右边广告
	$("#rightad").hover(function(){
		$(this).stop().animate({"left":"52%"})
	},function(){
		$(this).stop().animate({"left":"55%"})
	})
	
	//一开始隐藏和回到顶部效果
	$(".backTop").click(function(){
		$("body").animate({"scrollTop":0})
	})
	$(window).scroll(function(){
		if($(this).scrollTop()<500){
			$("#leftad").hide();
			$("#rightad").hide();
		}else{
			$("#leftad").show();
			$("#rightad").show();
		}
	});
	
})

