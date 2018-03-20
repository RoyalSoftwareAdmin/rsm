
$(document).ready(function(){
	  
function testInput(event) {
   var value = String.fromCharCode(event.which);
   var pattern = new RegExp(/[a-z]/i);
   return pattern.test(value);
}
$('#my-field').bind('keypress', testInput);
$('#my-field1').bind('keypress', testInput);

  })
  
 
  

var error = "";
  var zip = $("#zip").val(),
		  userName = $("#userName").val(),
		  dob = $("#dob").val(),
		  country = $("#country").val(),
		  state = $("#state").val(),
		  college = $("#college").val(),
		  department = $("department").val(),
		  blood = $("#blood").val(),
		  num = $("#mobile").val(),
		  office = $("#office").val(),
		 webbsite = $("webbsite").val(),
		  others = $("#others").val(),
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
})

$("#tab2").hide();
$("#tab3").hide();
$("#tab4").hide();
$("#tab5").hide();
$(".tabs-menu a").click(function(event){
	event.preventDefault();
	
	var tab=$(this).attr("href");
	$(".tab-grid").not(tab).css("display","none");
    
	$(tab).fadeIn("slow");
});

var CountryOption = "" , StateOption = "" , bloodOption = "";
	countryList.forEach(function(k,r){
		CountryOption += "<option value='"+k.value+"'>"+k.name+"</option>";
	})
	$("#countryList").html(CountryOption);

  	stateList.forEach(function(k,r){
		StateOption += "<option value='"+k.value+"'>"+k.name+"</option>";
	})
	$("#stateList").html(StateOption);


	bloodList.forEach(function(k,r){
		bloodOption += "<option value='"+k.value+"'>"+k.name+"</option>";
	})
	$("#bloodList").html(bloodOption);
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

  



var error = "";
$(document).ready(function(){
	$("#submit0").on("click", function(){
		$(".error").html("");
		var num = $("#ids").val(),
			flag = true;
			 if(num === "" || !uid(num)){
				error= "Id should be alphanumeric ";
				flag = false;
			}
			
		if(!flag){
	$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
			}
	})
})
     var email = JSON.parse(localStorage.getItem("session")).email;

    $("#save").on("click", function(){
    	$.ajax({
    		url	: "../../apis/GenricData.php",
    		type: "JSON",
    		method:"POST",
    		data : { "layout" : "1003" , "userName":userName , "dob":dob , "country":country , 
    		"state": state , "zip":zip , "college":college , "department":department , "blood":blood ,
    	     "mobile":mobile , "office":office , "webbsite":webbsite , "others" :others},
    		success: function(result){

    		},
    		error: function(error){

    		}
    	})
    })

    