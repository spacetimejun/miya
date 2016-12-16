$(function(){
//验证用户名
    $("#phonenum").blur(function(){
//  	 /^[0-9]{11}$/   ：以数字开头和结尾的11位数字；
    	if(this.value!="" && !/^[0-9]{11}$/.test(this.value) ){ 
    	
            $(this).siblings("p").show().children("span:eq(0)").text("请输入正确的手机号码，且为11位纯数字格式")
            
        }else if(this.value==""){
        	$(this).siblings("p").show().children("span:eq(0)").text("手机号不能为空")
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
	
	//登陆按钮事件
	$("#loginbtn").click(function(){
		$.cookie("user",$("#phonenum").val(),{expires:30});
		
		//跳转到登陆界面
		open('index.html','_self');

	});
})
