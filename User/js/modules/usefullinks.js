$(document).ready(function(){
	$.ajax({
		url : "../apis/GenricData.php",
		data : {"layout" : "1005"},
		method: "POST",
		success: function(result){
		result = JSON.parse(result);
				$("#usefullinks").Plugin_Table({
	            resultData: result,
	            datatablerequired: true,
	            numberofDivs:1,
	            ClickColumns: "4"
		})
		},
		error : function(result){
			console.log(result);
		}
	})
})
function redirecttopage(jsonValue) {
    var SelectedData = jsonValue;   
}