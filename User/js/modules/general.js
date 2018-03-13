var email = JSON.parse(localStorage.getItem("session")).email;
$(document).ready(function(){
   		$.ajax({
		 	url : "../apis/GenricData.php",
		 	data : {"layout" : "1004" , "email":email},
		 	method: "POST",
		 	success: function(result){
				result = JSON.parse(result);
				$("#name").html(result.Name);
				$("#email").html(result.EMail);
				$("#dob").html(result.DateofBirth);
				$("#loc").html(result.Location);
				$("#col").html(result.College_Department);
				$("#tech").html(result.TechnicalSkills);
				$("#mobnum").html(result.Mobile_Number);
				$("#Web").html(result.Website);
				$("#other").html(result.Others);
		 		console.log(result);
		 	},
		 	error : function(result){
		 		console.log(result);
		 	}
		 })
   	})