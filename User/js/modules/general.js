var email = JSON.parse(localStorage.getItem("session")).email;
$(document).ready(function(){
   		$.ajax({
		 	url : "../apis/GenricData.php",
		 	data : {"layout" : "1004" , "email":email},
		 	method: "POST",
		 	success: function(result){
		 		console.log(result);
		 	},
		 	error : function(result){
		 		console.log(result);
		 	}
		 })
   	})