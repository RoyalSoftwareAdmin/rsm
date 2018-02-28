var error = "";
$(document).ready(function(){
	$("#submit0").on("click", function(){
		$(".error").html("");
		 var usn = $("#usn").val(),
		     
			flag = true;
			
			if(usn === "" || !isusn(usn)){
				error= "Enter correct usn number Eg:4VZ13EC123";
				flag = false;
			}
			
			
			
			if(!flag){
				$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "px 0px"});
			}
	})
})