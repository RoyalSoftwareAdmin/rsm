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
			data : {"layout" : 1001, "username" : email , "password" : password},
			method : "POST",
			success: function( result){
				console.log(result);
				if(result.Status != 0){
					_session = result;
					localStorage.setItem("session", JSON.stringify(_session));
					window.location = "index.html";
				}
				else{
					$("#errModal").show();
					window.clear();
				}
			},
			error : function(error) {
				console.log(error.responseText);
			}
		})
	}
})

$(document).ready(function(){
	$(".closeModal").on("click", function(){
		$("#errModal").hide(); 
	})
})