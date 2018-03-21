var error = "";	
$("#submit").on("click", function(){
	$(".error").html("");
	var name = $("#name").val(),
		lname = $("#lname").val(),
		email = $("#email").val(),
		mobile = $("#mobile").val(),
		password = $("#password").val(),
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
	else if(mobile === "" || !isnum(mobile)){
		error = "Enter Your Mobile Number Eg: 9845123456";
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
		if(password !== repassword) {
			error = "Password mismatch" ;
			flag = false;
		}else{
			error = "";					
		}
	}else{
		error = "Enter Re-Password";
		flag = false;
	}

	if(!flag){
		$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "10px 0px"});
       }
   else{
		$.ajax({
			url : "../apis/AdminData.php",
			data : {"layout" : 1001, "fname" :name ,"lname":lname, "email": email, "password" : password , "mobile" : mobile},
			method : "POST",
			success: function(resultData){
		     result = JSON.parse(resultData);
			 if(result.Status == 1){
				$("#errModal").show();
			 }	 
			 /*else{
			 	$(".modal-body").html(result.Status);
				$("#errModal").show();
				 }*/
			},
			error : function(error) {
				console.log(error);
				/*$(".modal-body").html(error.responseText);
				$("#errModal").show();*/
			}
			
			
		})
	}
})
			

/*$(document).ready(function(){
	$(".closeModal").on("click", function(){
		$("#errModal").hide(); 
	})
})*/

var isalpha = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[a-zA-Z ]{2,30}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}

var isnum = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[789]\d{9}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}
var ismail = function (val){
	if(val != "" || val != undefined){
		var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}

var ispass = function(val){
	if(val != "" || val != undefined){
		var pattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,100}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}
