$(function(){
//验证用户名
    $("#phonenum").blur(function(){
    //获取cookie，判断用户名是否被注册
    	var phonenum = $.cookie("phonenum");
//  	 /^[0-9]{11}$/   ：以数字开头和结尾的11位数字；
    	if(this.value!="" && !/^[0-9]{11}$/.test(this.value) ){ 
    	
            $(this).siblings("p").show().children("span:eq(0)").text("请输入正确的手机号码，且为11位纯数字格式")
            
        }else if(this.value==""){
        	$(this).siblings("p").show().children("span:eq(0)").text("手机号不能为空")
        }else if(this.value==phonenum){
        	$(this).siblings("p").show().children("span:eq(0)").text("手机号已被注册")
        }else{
        	$(this).siblings("p").hide()
        }
        
    })
	
//验证密码	
	$("#password").blur(function(){
//  	 /^[0-9]{11}$/   ：长度为6-14个字符；
    	if(this.value!="" && !/^.{6,14}$/.test(this.value) ){ 
    	
            $(this).siblings("p").show().children("span:eq(0)").text("密码长度为6-14个字符")
            
        }else if(this.value==""){
        	$(this).siblings("p").show().children("span:eq(0)").text("密码不能为空")
        }else{
        	$(this).siblings("p").hide()
        }
    })
    //验证密码确认	
	$("#password2").blur(function(){
//  	 需与上次密码一致；
    	if(this.value != $("#password").val()){
            $(this).siblings("p").show().children("span:eq(0)").text("两次密码不一致，请重新确认")
          }else{
        	$(this).siblings("p").hide();
        }
    });
	
	
//	if($("#phonenum").val()==""){
//		$("#registerbtn").attr('disabled',"true");
//	}else{
//		$("#registerbtn").removeAttr("disabled");
//	}
	
	//提交按钮事件
	$("#registerbtn").click(function(){
		$.cookie("phonenum",$("#phonenum").val(),{expires:30});
		
		//跳转到登陆界面
		open('login.html','_self');

	});
	
})