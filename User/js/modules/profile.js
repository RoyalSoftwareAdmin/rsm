var error = "",
	id = "",
	zip = "",
	number = "",
	mobile = "",
	userName = "",
	technical = "",
	dob = "",
	country = "",
	state = "",
	organization = "",
	department = "",
	blood = "",
	office = "",
	others = "",
	webbsite = "",
	others = "",
	email = JSON.parse(localStorage.getItem("session")).email;


$(document).ready(function(){
	  
	function testInput(event) {
	   var value = String.fromCharCode(event.which);
	   var pattern = new RegExp(/[a-z]/i);
	   return pattern.test(value);
	}
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").hide();
	$("#tab5").hide();

	$('#my-field').bind('keypress', testInput);
	$('#my-field1').bind('keypress', testInput);

// Creating dropdowns for the list items
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

	$(".tabs-menu a").click(function(event){
		event.preventDefault();
		var tab=$(this).attr("href");
		$(".tab-grid").not(tab).css("display","none");
	    $(tab).fadeIn("slow");
	});


	$("#personal").on("click", function(){
		$(".error").html("");
			zip = $("#zip").val();
			dob = $("#dob").val();
			country = $("#countryList :selected").val();
			state = $("#stateList :selected").val();
		    userstatus = 1;
			flag = true;
			if(zip === "" || !regex(zip)){
				error= "Enter correct 6 digit number Eg:500001";
				flag = false;
			}
			
			if(!flag){
				$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
			}	
	})
	$("#education").on("click", function(){
		error = "";
		organization = $("#organization").val();
		department = $("#department").val();
		blood = $("#bloodList :selected").val();
		$(".error").html("");
			id = $("#ids").val();
			flag = true;
			 if(id === "" || !uid(id)){
				error= "Id should be alphanumeric ";
				flag = false;
			}
			
		if(!flag){
			$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
		}
	})    
/* MOBILE N EMAIL VALIDATION */

	$("#contact").on("click", function(){
		error = "";
		$(".error").html("");
	  	mobile = $("#mobile").val();
	  	office = $("#office").val();
	  	webbsite = $("#website").val();
		flag = true;
	    if(mobile === "" || !isnum(mobile)){
			error= "Enter correct 10 digit number Eg:9123456789";
			flag = false;
		}
		if(!flag){
			$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
		}
	})

	$("#technical").on("click", function(){
		technical = $(".technicalData").val();
	})

	 

    $("#submit").on("click", function(){
    	others = $(".otherDetails").val();
    	$.ajax({
    		url	: "../apis/GenricData.php",
    		type: "JSON",
    		method:"POST",
    		data : { "layout" : "1003" , "userName":email , "dob":dob , "country":country , "state": state , "zip":zip , "organization":organization , "department":department ,"id": id, "blood":blood ,"technical":technical , "mobile":mobile , "office":office , "webbsite":webbsite , "others" :others},
    		success: function(result){
				console.log(resullt);	
    		},
    		error: function(error){

    		}
    	})
    })

})