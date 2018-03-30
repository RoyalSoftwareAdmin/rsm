/*$(document).ready(function(){
    $.ajax({
        url: '../apis/AdminData.php',
        type: 'POST',
        data : {"layout" : "1006"},
        success: function (data) {
            data = JSON.parse(data);

            $("#users").Plugin_Table({
                resultData: data,
                datatablerequired: true,
                ClickColumns: "4"
            })
            $(".btn.btn-success.btn-xs.pull-right").html(result.tableData["0"].Category.length)
        },
           /*console.log(data);*/
        
       /*error : function(error){
            console.log(error);
        }
    });   
})  
*/

$(document).ready(function(){
    $.ajax({
        url : "../apis/AdminData.php",
        data : {"layout" : "1006"},
        method: "POST",
        success: function(result){
        result = JSON.parse(result);
            $("#users").Plugin_Table({
                resultData: result,
                datatablerequired: true,
                ClickColumns: "4"
            })
           /* $(".btn.btn-success.btn-xs.pull-right").html(result.tableData["0"].user.length)*/
        },
        error : function(result){
            console.log(result);
        }
    })
})
function redirecttopage(jsonValue) {
    var SelectedData = jsonValue;   
}