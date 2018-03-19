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
		$(".error").html(error);
	}else{
		$.ajax({
			url : "apis/GenricData.php",
			data : {"layout" : 1002, "email" : email , "password" : password},
			method : "POST",
			success: function( resultData){
				var result = JSON.parse(resultData);
				if(result.UserStatus == 1){
					_session = result;
					localStorage.setItem("session", JSON.stringify(_session));
					if(result.value == 256){
						window.location = "Admin/index.php";
					}
					else if(result.value == 126){
						window.location = "Agent/index.php";
					}
					else if(result.value == 64){
						window.location = "User/index.php";
					}
					
				}
				else{
					sessionStorage.clear();
					$(".error").html(result.Status);
				}
			},
			error : function(error) {
				console.log(error.responseText);
			}
		})
	}
})