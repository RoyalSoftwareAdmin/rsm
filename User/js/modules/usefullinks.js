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
	            ClickColumns: "4"
			})
			$(".btn.btn-success.btn-xs.pull-right").html(result.tableData["0"].Category.length)
		},
		error : function(result){
			console.log(result);
		}
	})
})
function redirecttopage(jsonValue) {
    var SelectedData = jsonValue;   
}