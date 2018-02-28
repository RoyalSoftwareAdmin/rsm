var error = "";
$(document).ready(function(){
	$("#submit").on("click", function(){
		$(".error").html("");
		 var number = $("#zip").val(),
		      userstatus = 1;
			  
			flag = true;
			
			if(number === "" || !regex(number)){
				error= "Enter correct 6 digit number Eg:123456";
				flag = false;
			}
			
			
			
			if(!flag){
				$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
			}
			else{
				$.ajax({
		url : "http://royalsoftwaresolution.com/RoyalBackend/data.php",
		data : {"layout" : 1002},
		method : "POST",
		success: function( result){
		 console.log(result);
		 if(result.Status == 1){
			$("#userStatus").html("User is Active").css("color","#4fd84f");
		 }	 
			 else{
				$("#userStatus").html("User is Inactive").css("color","#FF0000");

			 }
		},
			
				
	
	})
	$.ajax({
		url : "http://royalsoftwaresolution.com/RoyalBackend/data.php",
		data : {"layout" : 1002},
		method : "POST",
		success: function( result){
		 console.log(result);
		 if(result.Status == 1){
			$("#userStatus").html("User is Active").css("color","#4fd84f");
		 }	 
			 else{
				$("#userStatus").html("User is Inactive").css("color","#FF0000");

			 }
		},
		
	})
			}
})
$.ajax({
		url : "http://royalsoftwaresolution.com/RoyalBackend/data.php",
		data : {"layout" : 1002},
		method : "POST",
		success: function( result){
		 console.log(result);
		 if(result.Status == 1){
			$("#userStatus").html("User is Active").css("color","#4fd84f");
		 }	 
			 else{
				$("#userStatus").html("User is Inactive").css("color","#FF0000");

			 }
		},
		error : function(error) {
					console.log(error.responseText);
					$(".error").show();
				}
				
		
		
	})
})
