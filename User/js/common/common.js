var isalpha = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[a-zA-Z ]{2,30}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}

var isnum = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[789]\d{9}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}


var regex = function (val){
	if(val != "" || val != undefined){
		var pattern =  /^[1-9]\d{5}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}
var isusn = function (val , pattern){
	if(val != "" || val != undefined){
		//var pattern =  /^[1-4][A-Z]{2}[0-9]{2}[A-Z]{3}[0-9]{2}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}
var ismail = function (val){
	if(val != "" || val != undefined){
		var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}

var ispass = function(val){
	if(val != "" || val != undefined){
		var pattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,100}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}


var uid = function(val){
	if(val != "" || val != undefined){
		var pattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,100}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}
var isaadhar = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[0-9 ]{12}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}





$(document).ready(function() {

	var height = window.outerHeight;

	var reheight = window.innerHeight;

	$(document)[0].oncontextmenu = function() { return false; }



    $(document).mousedown(function(e) {

        if( e.button == 2 ) {

            return false;

        } else {

            return true;

        }

    });

    $(document).keydown(function(e){

	    if(e.which === 123){

	       return false;

	    }

	});

	$( window ).resize(function() {

		var reheight = window.innerHeight;

		// if((height - reheight) > 100 ){
	 //  		$("body").html("<div class='thief'><div class='thiefMsg'> Your IP ("+ip+") is watching, Don't try to hack </div></div>");
		// 	setTimeout(function(){
		// 		window.location = "http://www.royalsoftwaresolution.com"
		// 	},1000);
	 //  	}

	});

	// if((height - reheight) > 100 ){
 //  		$("body").html("<div class='thief'><div class='thiefMsg'> Your IP ("+ip+") is watching, Don't try to hack </div></div>");
	// 	setTimeout(function(){
	// 		window.location = "http://www.royalsoftwaresolution.com"
	// 	},1000);

 //  	}
   	$(".logout").on("click", function(){
   		$.ajax({
		 	url : "../apis/GenricData.php",
		 	data : {"layout" : "logout"},
		 	method: "POST"
		 })
   	})
}); 

$(document).ready( function(){
	$(".loggeduser").html(JSON.parse(localStorage.getItem("session")).fname);
})