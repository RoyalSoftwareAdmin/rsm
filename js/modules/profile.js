
$(document).ready(function(){
	  
function testInput(event) {
   var value = String.fromCharCode(event.which);
   var pattern = new RegExp(/[a-z]/i);
   return pattern.test(value);
}
$('#my-field').bind('keypress', testInput);

  })
  $(document).ready(function(){
	  
function testInput(event) {
   var value = String.fromCharCode(event.which);
   var pattern = new RegExp(/[a-z]/i);
   return pattern.test(value);
}
$('#my-field1').bind('keypress', testInput);

  })
  
 
  

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
var CountryOption = "" , StateOption = "" , departmentOption ="";
	countryList.forEach(function(k,r){
		CountryOption += "<option value='"+k.value+"'>"+k.name+"</option>";
	})
	$("#countryList").html(CountryOption);

  	stateList.forEach(function(k,r){
		StateOption += "<option value='"+k.value+"'>"+k.name+"</option>";
	})
	$("#stateList").html(StateOption);

	departmentList.forEach(function(k,r){
		departmentOption += "<option value='"+k.value+"'>"+k.name+"</option>";
	})
	$("#departmentList").html(departmentOption);

})


/* USN validation*/

var error = "";
var flagUsn = 1;
$("#departmentList").on("change" , function(){
	($(this).val() == "MCA") ? flagUsn = 1 : flagUsn =2 ;
})

$(document).ready(function(){
	$("#submit0").on("click", function(){ 
		$(".error").html("");
		 var usn = $("#usn").val(),
		 			flag = true;

		     var pattern =  /^[1-4][A-Z]{2}[0-9]{2}[A-Z]{3}[0-9]{2}$/;
		     var pattern2 =  /^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/;
		     var pat = (flagUsn == 1) ? pattern : pattern2;
			
			if(usn === "" || !isusn(usn, pat)){
				error= "Enter correct usn number Eg:4VZ13MCA70";
				flag = false;
			}
			
			
			
			if(!flag){
				$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
			}else{
				var token = parseInt($("#submit0").attr("href").split("tab")[1]) + 1;
				 $(".tab"+token).click();
			}
	})
})


/* MOBILE N EMAIL VALIDATION */

var error = "";
$(document).ready(function(){
	$("#submit1").on("click", function(){
		$(".error").html("");
		
		     
		  var num = $("#mobile").val(),
			email = $("#email").val(),
			flag = true;
			
	
			    if(num === "" || !isnum(num)){
				error= "Enter correct 10 digit number Eg:9123456789";
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

  

    