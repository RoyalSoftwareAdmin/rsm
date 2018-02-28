var error = "";
$(document).ready(function(){
	$("#submit1").on("click", function(){
		$(".error").html("");
		
		     
		  var num = $("#mobile").val(),
			email = $("#email").val(),
			flag = true;
			
	
			    if(num === "" || !isnum(num)){
				error= "Enter correct 10 digit number Eg:1234567890";
				flag = false;
			}
			else if(email === "" || !ismail(email)){
				error = "Enter correct Mail Eg: mail@royalsoftwaresolution.com";
				flag = false;
			}
			
			
			if(!flag){
				$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
			}
	})
})