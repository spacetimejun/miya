$(function(){
	
	//登陆后加入用户名
	
	$("#username").text($.cookie("user"));
	$("#username").addClass("color")
	//购物车样式
	$(".spantwo").hide();
	$(".shoppingcard").hover(function(){
		$(this).css({"height":"41px","border":"1px solid #f9458b","borderBottom":"1px solid white","zIndex":"100"})
		$(".cardbox").show();
		$(".cardbg").css("background","white")
		$(".shoppingcard .cardbg img").attr({"src":"img/header_img/header_shoppingcart.png"})
		$(".shoppingcard b").css("border-left","1px solid gray")
	},function(){
		$(this).css({"height":"34px","border":"1px solid lightgray"})
		$(".cardbox").hide()
		$(".cardbg").css("background","#f9458b")
		$(".shoppingcard .cardbg img").attr({"src":"img/header_img/header_shoppingcart1.png"})
		$(".shoppingcard b").css("border-left","none")
	})
	//搜索栏样式
	$(".searchtext").focus(function(){
		var placeholderText= $(this).attr("placeholder")
		if($(this).val()==""){
			$(this).val(placeholderText)
		}
	}).blur(function(){
		if(!$(this).val()){
			$(this).val("")
			$(this).attr("placeholder","碧然德 ")
		}
	})
	
	//正品保证2级菜单样式
	$(".nav_ul li:nth-child(4)").hover(function(){
		$(".list2").show()
		$(this).find("img").attr("src","img/header_img/header_upicon.png")
		$(".list2 a").hover(function(){
			$(".list2").show()
			$(this).css({"background":"#ff3893","color":"white"})
		},function(){
			$(this).css({"background":"white","color":"black"})
			$(".list2").hide()
		})
	},function(){
		$(".list2").hide();
		$(this).find("img").attr("src","img/header_img/header_downicon.png")
	})
	
	
	
	//全部商品导航栏样式
	$(".header_navbox").find("dl").hover(function(){
		$(this).find("div").show()
		$(this).css({"background":"rgba(255,255,255,1)","borderLeft":"5px solid #ec0971"})
		$(this).find("dt").css("paddingLeft","5px")
	},function(){
		$(this).find("div").hide();
		$(this).css({"background":"rgba(255,255,255,.5)","borderLeft":"none"})
		$(this).find("dt").css("paddingLeft","15px")
	})
	
	

})
