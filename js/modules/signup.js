var error = "";
		
$("#submit").on("click", function(){
	$(".error").html("");
	var name = $("#name").val(),
		lname = $("#lname").val(),
		email = $("#email").val(),
		password = $("#password").val(),
		gender = $('input[name=Gender]:checked').val();
		repassword = $("#repassword").val(),
		flag = true;
		if((name === "" || name === undefined) || (!isalpha(name)) || !isalpha(lname)){
			error = "Name Should have only Alphabets";
			flag = false;
		}
		else if(email === "" || !ismail(email)){
			error = "Enter correct Mail Eg: mail@royalsoftwaresolution.com";
			flag = false;
		}
		else if(password === "" ||  !ispass(password)){
			error = "password should be atleast 8 letters with alpha numeric";
			flag = false;
		}
		else if(repassword === "" ){
			error = 'Password cannot be blank';
			flag = false;
		}
		else if(repassword !== "" ){
			(password !== repassword) ? error = "Password mismatch" : error = "";					
		}else{
			error = "Enter Re-Password";
			flag = false;
		}

		if(!flag){
			$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "10px 0px"});
		}else{
			$.ajax({
				url : "http://royalsoftwaresolution.com/RoyalBackend/data.php",
				data : {"layout" : 1000, "fname" :name ,"lname":lname, "email": email, "password" : password , "gender" : gender},
				method : "POST",
				success: function( result){
					console.log(result);
				},
				error : function(error) {
					console.log(error.responseText);
				}
			})
		}
})