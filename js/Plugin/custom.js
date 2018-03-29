/*! Custom v1.0.1 | (c) Invendis Technologies */
function customJS(params) {
    var defaults = {
        host: '',
        apiEntity: '',
        layoutID: '',
        OutputType: 2,
        alarmcount: 0
    };
    var options = $.extend({}, defaults, params);
    options.apiEntity.LayoutID = options.layoutID;
    options.apiEntity.OutputType = options.OutputType;
    options.apiEntity.AlarmCount = options.alarmcount;
    $.ajax({
        type: "post",
        url: options.host + "?ts" + new Date(),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(options.apiEntity),
        success: function (data) {
            
            var datakeyslength = Object.keys(data).length;
            for (var PKey = 0; PKey < datakeyslength; PKey++) {
                var parentkeylabel = Object.keys(data)[PKey];
            }
            var length = data[parentkeylabel].length;
            for (var i = 0; i < length; i++) {
                var labellength = Object.keys(data[parentkeylabel][i]).length;
                for (var j = 0; j < labellength; j++) {
                    var sitecodelabel = Object.keys(data[parentkeylabel][i])[j], sitenamelabel = Object.keys(data[parentkeylabel][i])[j + 1],
                        lastupdatelabel = Object.keys(data[parentkeylabel][i])[j + 2], sitecodeval = data[parentkeylabel][i][sitecodelabel],
                        sitenameval = data[parentkeylabel][i][sitenamelabel], lastupdatedval = data[parentkeylabel][i][lastupdatelabel];
                    break;
                }
                $('#sitecode').html(sitecodeval);
                $('#sitename').html(sitenameval);
                $('#lastupdate').html(lastupdatedval);
            }
        },
        error: function (error) {
            console.log("something wrong!");
        }
    });
}

/*--For Chart--*/
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
    $(".chart").each(function () {
        var chart = $(this).highcharts();
        chart.reflow()
    });
});
$(document).on('shown.bs.modal', function (e) {
    $(".dialogchart").each(function () {
        var chart = $(this).highcharts();
        //chart.reflow()
    });
});