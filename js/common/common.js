var isalpha = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[a-zA-Z ]{2,30}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}

var isnum = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[0-9 ]{10}$/;
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
var isaadhar = function (val){
	if(val != "" || val != undefined){
		var pattern = /^[0-9 ]{12}$/;
		var res = (val.match(pattern)) ?  true : false;
		return res;
	}
}

