var email = JSON.parse(localStorage.getItem("session")).email;
$(document).ready(function(){
   		$.ajax({
		 	url : "../apis/GenricData.php",
		 	data : {"layout" : "1004" , "email":email},
		 	method: "POST",
		 	success: function(result){
				result = JSON.parse(result);
				$("#name").html(result.Name == "" ? "N/A" : result.Name);
				$("#email").html(result.EMail == "" ? "N/A" : result.EMail);
				$("#dob").html(result.DateofBirth == "" ? "N/A" : result.DateofBirth);
				$("#loc").html(result.Location == "" ? "N/A" : result.Location);
				$("#col").html(result.College_Department == " " ? "N/A" : result.College_Department);
				$("#tech").html(result.TechnicalSkills == "" ? "N/A" : result.TechnicalSkills);
				$("#mobnum").html(result.Mobile_Number == "" ? "N/A" : result.Mobile_Number);
				$("#Web").html(result.Website == "" ? "N/A" : result.Website);
				$("#others").html(result.Others == "" ? "N/A" : result.Others);
		 		console.log(result);
		 	},
		 	error : function(result){
		 		console.log(result);
		 	}
		 })
   	})