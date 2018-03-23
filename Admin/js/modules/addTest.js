$(document).ready(function(){
    $.ajax({
        url: '../apis/AdminData.php',
        type: 'POST',
        data : {"layout" : "1004"},
        success: function (data) {
           console.log(data);
        },
        error : function(error){
            console.log(error);
        }
    });
    $("#selectCategory").on("change", function(){
        var cat_id = $("#selectCategory :selected").val();
        $.ajax({
            url: '../apis/AdminData.php',
            type: 'POST',
            data : {"layout" : "1005", "cat_id" : cat_id},
            success: function (data) {
               console.log(data);
            },
            error : function(error){
                console.log(error);
            }
        });
    })
})

