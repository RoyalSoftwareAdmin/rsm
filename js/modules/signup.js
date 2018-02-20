var error = "";
		
$("#submit").on("click", function(){
	$(".error").html("");
	var name = $("#name").val(),
		email = $("#email").val(),
		password = $("#password").val(),
		repassword = $("#repassword").val(),
		flag = true;
		if((name === "" || name === undefined) || (!isalpha(name))){
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
		else if(repassword !== "" ){
			(password !== repassword) ? error = "Password mismatch" : error = "";
			flag = false;
		}else{
			error = "Enter Re-Password";
			flag = false;
		}

		if(!flag){
			$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "10px 0px"});
		}
})