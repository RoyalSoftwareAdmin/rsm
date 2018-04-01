$(document).ready(function(){
    $.ajax({
        url: '../apis/AdminData.php',
        type: 'POST',
        data : {"layout" : "1006"},
        success: function (data) {
            data = JSON.parse(data);
            console.log(data);
            data.tableData[0].AddedBy.forEach(function(k, r) { data.tableData[0].AddedBy[r] = (k == 64) ? "Self" : "Admin"; })
            $("#users").Plugin_Table({
                resultData: data,
                datatablerequired: true,
                ClickColumns: "4"
            })
            $(".btn.btn-success.btn-xs.pull-right").html(data.tableData["0"].Name.length)
        },
           
        
       error : function(error){
            console.log(error);
        }
    });   
})  

function redirecttopage(jsonValue) {
    var SelectedData = jsonValue;   
}