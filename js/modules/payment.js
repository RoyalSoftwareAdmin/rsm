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
   if(name === "" || !isname(name)){
    error = "Enter name (Only Alphabets) Eg: Royal Software";
   flag = false;
}
   else if(number === "" || !iscard(number)){
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
$("#submit").on("click", function(){
    validate();
  })

var isname = function (val){
  if(val != "" || val != undefined){
    var pattern = /^[a-zA-Z ]{2,30}$/;
    var res = (val.match(pattern)) ?  true : false;
    return res;
  }
}

var iscard = function (val){
  if(val != "" || val != undefined){
    var pattern = /^[0-9]{14,100}$/;
    var res = (val.match(pattern)) ?  true : false;
    return res;
  }
}

var isexpiry = function (val){
   if(val!= "" || val != undefined){
     var pattern = /^([0-9]{2}[/]?){2}$/;
     var res = (val.match(pattern)) ? true : false;
     return res;
   }
}

var iscvv = function (val){
   if(val!= "" || val != undefined){
     var pattern = /^[0-9]{3}$/;
     var res = (val.match(pattern)) ? true : false;
     return res;
   }
}