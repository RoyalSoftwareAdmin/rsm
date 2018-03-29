/*! List v1.0.1 | (c) Invendis Technologies */
$.fn.listplugin = function (params) {
    var ID = '#' + this.attr('id');
    var defaults = {
        host: '',
        apiEntity: '',
        layoutID: '',        
        timeType: 9,        
        OutputType: 1,
        Hidecolumn: true
    };

    var options = $.extend({}, defaults, params);
    options.apiEntity.LayoutID = options.layoutID;
    options.apiEntity.OutputType = options.OutputType;
    options.apiEntity.TimeType = options.timeType;

    $.ajax({
        type: "post",
        url: options.host + "?ts" + new Date(),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(options.apiEntity),
        success: function (result) {           
            console.log(result);
            var datakeyslength = Object.keys(result).length; var arrayof1 = [], seriesArr = '', series = '', label = '', chartlabel1 = '', chartlabel2 = '', chartlabel3 = '', units = '', label = '', insidelebellength = '';
            for (var PKey = 0; PKey < datakeyslength; PKey++) {
                var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0];
                break;
            }
            var lengthofjson = result[parentkeylabel].length, lengthofheader = result[parentkeyheader].length, lbllength = Object.keys(result[parentkeyheader][0]).length;
            if (lengthofjson != 0) {
                for (var lengthofkey = 0; lengthofkey < lengthofheader; lengthofkey++) {                    
                    label_1 = Object.keys(result[parentkeylabel][0])[0], label_2 = Object.keys(result[parentkeylabel][0])[1], units = result[parentkeyheader][1].units;
                }
                var $lihtml = '<ul>';
                insidelebellength = Object.keys(result[parentkeylabel][0]).length;
                
                for (var j = 0; j < result[parentkeylabel].length;j++){
                    $lihtml += '<li class="chartvalues">';
                    var monthlabels = result[parentkeylabel][j][label_1], monthlabels_1 = monthlabels.split('-');
                        var values = result[parentkeylabel][j][label_2], valuesaftersplit = values.split('~');
                        $lihtml += '<p class="field_content_1" id="chartlabel' + j + '">' + monthlabels_1[0] +'&nbsp;'  +monthlabels_1[1]+'</p>';
                        $lihtml += '<p><span class="field_values_1"> ' + valuesaftersplit[0] + '</span> <span class="field_units_1"> ' + valuesaftersplit[1] + '</span></p>';
                    $lihtml += '</li>';
                }
                $lihtml += '</ul>';
                $(ID).html($lihtml);
                $("ul li.chartvalues:nth-child(" + result[parentkeylabel].length + ")").css("border-bottom",0);
            } else {
                $(ID).html('<span style="position: absolute;top: 0;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
            }
        }, error: function (error) {
            console.log(error);
            $(ID).html('<span style="position: absolute;top: 0;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
        },
    });
}
