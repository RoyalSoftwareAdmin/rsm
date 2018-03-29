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
		$("ul li").each(function(k){ $(this).removeClass("active") })
		$(".tab2").click();
		$(".tab2").parent().addClass("active");
	})
	$("#education").on("click", function(){
		$("ul li").each(function(k){ $(this).removeClass("active") })
		$(".tab3").click();
		$(".tab3").parent().addClass("active");
	})    

	$("#technical").on("click", function(){
		$("ul li").each(function(k){ $(this).removeClass("active") })
		$(".tab4").click();
		$(".tab4").parent().addClass("active");
	})

	$("#contact").on("click", function(){
		$("ul li").each(function(k){ $(this).removeClass("active") })
		$(".tab5").click();
		$(".tab5").parent().addClass("active");
	})
 

	 

    $("#submit").on("click", function(){
    	zip = $("#zip").val();
		dob = $("#dob").val();
		country = $("#countryList :selected").val();
		state = $("#stateList :selected").val();
		organization = $("#organization").val();
		id = $("#ids").val();
		department = $("#department").val();
		blood = $("#bloodList :selected").val();
		mobile = $("#mobile").val();
	  	office = $("#office").val();
	  	webbsite = $("#website").val();
	  	technical = $(".technicalData").val();
    	others = $(".otherDetails").val();
    	$.ajax({
    		url	: "../apis/GenricData.php",
    		type: "JSON",
    		method:"POST",
    		data : { "layout" : "1003" , "userName":email , "dob":dob , "country":country , "state": state , "zip":zip , "organization":organization , "department":department ,"id": id, "blood":blood ,"technical":technical , "mobile":mobile , "office":office , "webbsite":webbsite , "others" :others},
    		success: function(result){
				console.log(result);	
    		},
    		error: function(error){

    		}
    	})
    })

})