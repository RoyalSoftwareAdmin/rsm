$(document).ready(function(){
    $.ajax({
        url: '../apis/AdminData.php',
        type: 'POST',
        data : {"layout" : "1006"},
        success: function (data) {
            data = JSON.parse(data);
           console.log(data);
        },
        error : function(error){
            console.log(error);
        }
    });   
})
