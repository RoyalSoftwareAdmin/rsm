$(document).ready(function(){
    $(".keywordsDiv").hide();
    $.ajax({
        url: '../apis/AdminData.php',
        type: 'POST',
        data : {"layout" : "1004"},
        success: function (data) {
           data = JSON.parse(data);
           var categoryoptions = '';
           data.forEach(function(k) {
                categoryoptions += '<option value='+k.cat_id+'>'+k.cat_name+'</option>';
           })
           $("#SelectCategory").html(categoryoptions);
           var cat_id = $("#SelectCategory :selected").val();
            $.ajax({
                url: '../apis/AdminData.php',
                type: 'POST',
                data : {"layout" : "1005", "cat_id" : cat_id},
                success: function (result) {
                    result = JSON.parse(result);
                   var divisionoptions = '';
                       result.forEach(function(k) {
                            divisionoptions += '<option value='+k.div_id+'>'+k.div_name+'</option>';
                       })
                       $("#SelectDivision").html(divisionoptions);
                },
                error : function(error){
                    console.log(error);
                }
            });
        },
        error : function(error){
            console.log(error);
        }
    });
    $("#SelectCategory").change(function(){
        var cat_id = $("#SelectCategory :selected").val();
        $.ajax({
            url: '../apis/AdminData.php',
            type: 'POST',
            data : {"layout" : "1005", "cat_id" : cat_id},
            success: function (result) {
                result = JSON.parse(result);
               var divisionoptions = '';
                   result.forEach(function(k) {
                        divisionoptions += '<option value='+k.div_id+'>'+k.div_name+'</option>';
                   })
                   $("#SelectDivision").html(divisionoptions);
            },
            error : function(error){
                console.log(error);
            }
        });
    })
    $('#idcheck').change(function(e){
        if(this.checked){
            $(".choiceDiv").hide();
            $(".keywordsDiv").show();
        }
        else{
            $(".keywordsDiv").hide();
            $(".choiceDiv").show();
        }
            
    });
})
