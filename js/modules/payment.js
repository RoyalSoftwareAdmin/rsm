var error = "";
$(document).ready(function(){

$("#submit").on("click", function(){
$(".error").html("");
   var name= $("#name").val(),
    number = $("#cardnum").val(),
	expiry = $("#ex").val(),
	cvc = $("#cvv").val(),
    ee
	flag = true;
   if(name === "" || !isalpha(name)){
    error = "Enter name Eg: subodh NM";
   flag = false;
}
   else if(number === "" || !isnum(number)){
   error = "Please enter correct number";
   flag = false;
}
  else if(expiry === "" || !isexpiry(expiry)){
   error = "select correct YY/MM";
   flag = false;
}  
  else if(cvc === "" || !iscvv(cvc)){
   error = "enter correct cvv/cvc. Eg: 123";
   flag = false;
}  
 
    if(!flag){
			$(".error").html(error).css({"color":"#FF0000" , "font-weight":"bold" , "text-align": "center" , "margin": "10px 0px"});
		}
})
})

