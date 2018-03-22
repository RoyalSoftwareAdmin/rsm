$('#upload').on('click', function(e){
    var formData = new FormData($(this).parents('form')[0]);
    data: formData,
    $.ajax({
        url: 'include/upload.php',
        type: 'POST',
        success: function (data) {
            alert("Data Uploaded: "+data);
        },        
    });
    return false;
});
var email = JSON.parse(localStorage.getItem("session")).email;
$('#view').on('click', function(e){
    $.ajax({
        url: '../apis/AdminData.php',
        type: 'POST',
        data : {"layout" : "1003" , "email":email},
        success: function (data) {
           console.log(data);
        },
        error : function(error){
            console.log(error);
        }
              
    });
    return false;
});