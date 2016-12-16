$(function(){
	//引用头部
	$("#pageHeader").load("header.html");
	//引用尾部
	$("#pageFooter").load("footer.html");
	
	//导航栏显示
	$(".menus").click(function(){
		$(".dls").show();
	});
	
	
	
	//产品栏第一栏左边大图片跟换
	$(".smallImg .smallimg01").mouseenter(function(){
		$(this).addClass("smallpic").siblings().removeClass("smallpic");
		$(".bigimg01").show().siblings().hide();
		
	})
	$(".smallimg02").mouseenter(function(){
		$(".smallImg .smallimg02").addClass("smallpic").siblings().removeClass("smallpic");
		$(".bigimg02").show().siblings().hide();
		
	})
	
	//产品第二栏
	//商品数量加减效果
	//点击按钮时效果
	$(".numbox span:eq(0)").children("img").click(function(){
		var number=parseInt($(".numbox").children("em").text())
		if(number > 1){
			number--;
			$(this).show();
		};
		if(number == 1){
			$(this).hide();
		};
		$(".numbox").children("em").text(number);
		$("#cookienum").text(number);
	})
	$(".numbox span:eq(1)").children("img").click(function(){
		var number=parseInt($(".numbox").children("em").text());
			number++;
			$(".numbox").children("em").text(number);
			if(number>1){
				$(".numbox span:eq(0)").children("img").show()
			}
			$("#cookienum").text(number);
	});
	
	//产品颜色选择
	//初始化选择第二个
	$(".colorimgbox:eq(1)").siblings("div").css({"border":"none"}).children("span").hide();
	//点击事件改变样品颜色事件
	$(".colorimgbox").click(function(){
		$(this).css({"border":"2px solid #F43499"}).siblings("div").css({"border":"none"}).children("span").hide();
		$(this).children("span").show();
	});
	
	
	//第三层内容
	//第三层内容右边的ul效果
	$(".right_ul li").click(function(){
		$(this).css("background","#ec0871").siblings().css("background"," #ff3b93")
		var i=$(this).attr("class");
		
		$("#massage"+i).show().siblings(".hidemassage").hide();
		$(window).scrollTop(1080)
	})
	
	
	//第三层右边内容massage1的展开和收起效果
	$("#massage1").children("ul").css("height","90px")
	$("#massage1").children("button:eq(1)").css("display","none")
	$("#massage1 button:eq(0)").click(function(){
		$(this).hide().siblings("button").show();
		$(this).siblings("ul").animate({height:210})
	});
	$("#massage1 button:eq(1)").click(function(){
		$(this).hide().siblings("button").show();
		$(this).siblings("ul").animate({height:90})
	});
	
	
	//点击加入购物车后的动作
	$(".joincard button").click(function(){
		//将数量储存入cookie；
		$.cookie("goodsnum",$("#cookienum").text(),30)
		
		
		$(".cardbox .spanone").hide();
		$(".cardbox .spantwo").show();
		$("#sport").show().animate({"top":"80px","right":"100px","width":"100px","height":"20px"},function(){
			$(this).hide().css({"top":"566px","right":"447px","width":"250px","height":"54px"});
		})
	})
	
	
	
	//放大镜效果
	$(".bigimg01").hover(function(){
		$("#magnifier").show();
		$(".magnifierImg01").show();
	},function(){
		$("#magnifier").hide();
		$(".magnifierImg01").hide();
	});
	$(".bigimg02").hover(function(){
		$("#magnifier").show();
		$(".magnifierImg02").show();
	},function(){
		$("#magnifier").hide();
		$(".magnifierImg02").hide();
	})
	$(".bigImg").mousemove(function(event){
		
		xleft=-((event.pageX-101))+"px";
		ytop=-(event.pageY-274)+"px"
		
		$("#magnifier").children("img").css({"left":xleft,"top":ytop})
		
	})
	
	
	//吸顶菜单
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		console.log(top)
		if( top >= 1100){
			$(".right_ul").addClass("active")
		}else if(top<1100){
			$(".right_ul").removeClass("active")
		}
	})
	
})