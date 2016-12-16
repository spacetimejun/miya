$(function(){
	$("#shopcard_footer").load("footer.html");
	
	//获取加入到购物车的产品数量
	//并根据cookie的数量初始化所有金额
	$("#goodsnum2").text($.cookie("goodsnum"))
	var num1=$("#goodsnum2").text();
	var onecost1=parseFloat($(".goodsp").text());
	$(".it_total span").text(num1*onecost1);
	$(".goodcost").text(num1*onecost1+".00");
	$("#goodscost").text(num1*onecost1+".00");
	$(".goodnum").text(num1);
	$("#goodsnum").text(num1);
	$(".allcost").text(num1*onecost1+10+".00");
	
	//点击复选框，出现打钩按钮,再次点击，取消打钩
	$(".dlk").click(function(){
		if($(this).parent().css("background-position-y")=="0px"){
			$(this).parent().css("background-position-y","-177px");
			
		}else{
			$(this).parent().css("background-position-y","0px");
			
		}
	})

	//全选
	$("label").siblings(":checkbox").click(function(){
		if($(this).parent().css("background-position-y")=="0px"){
			$(".cartcheck").css("background-position-y","-177px");
			//alert("111")
		}else{
			$(".cartcheck").css("background-position-y","0px");
			//alert("222")
			
		}
		
	})
	
	var number1=parseInt($.cookie("goodsnum"));
	if(number1 > 1){
		$(".numbox span:eq(0) img").show();
	};
	if(number1 == 1){
		$(".numbox span:eq(0) img").hide();
	};
	//商品数量加减
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
	})
	$(".numbox span:eq(1)").children("img").click(function(){
		var number=parseInt($(".numbox").children("em").text());
			number++;
			$(".numbox").children("em").text(number);
			if(number>1){
				$(".numbox span:eq(0)").children("img").show()
			}
	});
	
//当点击数量加减时，小计栏随数量变化而变化
	//数量增加时
	$(".numbox span:eq(1)").click(function(){
		
		var num=parseFloat($(this).siblings("em").text());
		var onecost=parseFloat($(".goodsp").text());
		$(".it_total span").text(num*onecost);
		$(".goodcost").text(num*onecost+".00");
		$("#goodscost").text(num*onecost+".00");
		$(".goodnum").text(num);
		$("#goodsnum").text(num);
		
		$(".allcost").text(num*onecost+10+".00");
		
	})
	//数量减少时
	$(".numbox span:eq(0)").click(function(){
		
		var num=parseFloat($(this).siblings("em").text());
		var onecost=parseFloat($(".goodsp").text());
		$(".it_total span").text(num*onecost);
		$(".goodcost").text(num*onecost+".00");
		$("#goodscost").text(num*onecost+".00");
		$(".goodnum").text(num);
		$("#goodsnum").text(num);
		
		$(".allcost").text(num*onecost+10+".00");
		
	})
	
	//删除商品
	$(".it_operate").children("button").click(function(){
		$(this).parent().parent().empty();
	})
	
	//点击结算，跳转到第二步
	$(".gotocash").click(function(){
		$("#box").hide().siblings("#checkout").show();
		$(".cardstep").find("ul").css("background-position-y","-42px");
	})
	//点击回到购物车，从第二步回到第一步
	$("#backtostep1").click(function(){
		$("#box").show().siblings("#checkout").hide();
		$(".cardstep").find("ul").css("background-position-y","0px");
		$("body").scrollTop("0");
	})
	
	//再次点击结算，跳转到第三步
	$("#gotopay").click(function(){
		$("#checkout").hide().siblings("#paysuccess").show();
		$(".cardstep").find("ul").css("background-position-y","-84px");
		$("body").scrollTop("0");
	})
	
	
	//猜你喜欢部分
	$.get("js/jsontext.json",function(data){
		$.each(data,function(index,v){
			var obj =$(".productlove:eq(0)").clone();
			$("#youmaylove").append(obj);
			$.each(v, function(key,value) {
				switch(key){
					case "img":
						$(".productlove:eq("+index+") img").attr("src",v[key])
						break;
					case "name":
						$(".productlove:eq("+index+") span").text(v[key]);
						break;
					case "price":
						$(".productlove:eq("+index+") b").text(v[key]);
						break;
				};		
			});
		})
		$(".productlove:eq(0)").hide();
	})
	
	
	//保存地址
	$("#savead").click(function(){
		$(".addressall").show();
		var adname = $("#ad_name").val()
		var provice=$("#ship_province option:selected").text();
		var city=$("#ship_city option:selected").text();
		
		var adad = $("#ad_ad").val();
		var ad_phone01=$("#ad_phone01").val();
		var ad_phone02=$("#ad_phone02").val();
		
		$("#adul").append("<li> <p>"+"收件人："+adname+"</p><p>"+"收件地址："+provice+city+adad+"</p><p>"+"联系方式："+ad_phone01+"  "+ad_phone02+"</p></li>")
		
		//隐藏地址填写栏
		$(this).parent().parent().parent().parent().hide();
		$(".newtlt").hide();
		$(".ad_table input").val("")
		
	})
	//新增地址
	$("#addnewaddress").click(function(){
		$(this).siblings(".newaddress").find("table").show();
		$(".newtlt").show()
	})
	
	//地址栏下拉框选项json设置
//		
	$.get("js/address.json",function(data){
		//console.log(data)
		
		$.each(data, function(index,ele) {
			
			$("#ship_province").append($('<option value="'+index+'">'+ele.name+'</option>'))
			$("#ship_province").change(function(){
				$("#ship_city").html("<option>请选择</option>");
				var x = $("#ship_province option:selected").attr("value")
				$.each(data[x].city,function(ind,val){
		    		$("#ship_city").append($('<option value="'+ind+'">'+val.name+'</option>'));
		    		
		    		
		    	});
			})
			
			
			
			
//		    $.each(data[0].city,function(ind,val){
//		    	
//		    	$("#ship_city").append($('<option value="'+ind+'">'+val.name+'</option>'))
//		    });
//			$.each(data[1].city,function(ind,val){
//		    	
//		    	$("#ship_city").append($('<option value="'+ind+'">'+val.name+'</option>'))
//		    });
//		    $.each(data[2].city,function(ind,val){
//		    	
//		    	$("#ship_city").append($('<option value="'+ind+'">'+val.name+'</option>'))
//		    });
		});
		
	})
	
})
