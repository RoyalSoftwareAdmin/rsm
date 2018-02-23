var error = "";
		
$("#submit").on("click", function(){
	$(".error").html("");
	var email = $("#email").val(),
		password = $("#password").val(),
		
		flag = true;
	if(email === "" || !ismail(email)){
		error = "Enter correct Mail Eg: mail@royalsoftwaresolution.com";
		flag = false;
	}
	else if(password === "" ){
		error = "Please enter password";
		flag = false;
	}
	
	if(!flag){
		$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "10px 0px"});
	}else{
		$.ajax({
			url : "http://royalsoftwaresolution.com/RoyalBackend/data.php",
			data : {"layout" : 1001, "username" : email , "password" : password}, // Ajax code for getting login data from backend. 
			method : "POST",
			success: function( result){
				console.log(result); // This gives JSON data on successful login
			},
			error : function(error) {
				console.log(error.responseText); // Error data for failed to reach url or error in backend. 
			}
		})
	}
})