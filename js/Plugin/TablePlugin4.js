$.fn.invTablePlugin4 = function (params) {
    var ID = '#' + this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            bool: true,
            id: '',
            OutputType: 1
        };

        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;

        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),

            success: function (data) {
                console.log(new Date());
                var datakeyslength = Object.keys(data).length, actualval = '', label = '', labelnames = '', lengthofparent_1 = '', lengthofparent_2 = '', parent_1keys = '', parent_2keys = '', $rowtable = '';
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(data)[1], parentkeyheader = Object.keys(data)[0];
                    break;
                }
                lengthofparent_1 = data[parentkeylabel].length, lengthofparent_2 = data[parentkeyheader].length;
                for (var i = 0; i < lengthofparent_1; i++) {
                    $rowtable += '<table width="100%">';
                    parent_2keys = Object.keys(data[parentkeylabel][i]).length;
                    if (options.bool == true) {
                        $rowtable += '<tr>';
                        if (parent_2keys !== 0) {
                            for (var j = 0; j < parent_2keys; j++) {
                                label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label], labelnames = data[parentkeyheader][j].heading, units = data[parentkeyheader][j].units;
                                (labelvalue == null || labelvalue == "") ? actualval = "0" : actualval = labelvalue;
                                $rowtable += '<td><span class="field_content_1">' + labelnames + '</span>: <span class="field_values_1">' + actualval + '&nbsp;<span class="field_units">' + units + '</span></span></td>';
                            }
                        } else {
                            actualval = '0';
                            for (var lbl = 0; lbl < data[parentkeyheader].length; lbl++) {
                                labelnames = data[parentkeyheader][lbl].heading, units = data[parentkeyheader][lbl].units;
                                $rowtable += '<td><span class="field_content_1">' + labelnames + '</span>: <span class="field_values_1">' + actualval + '&nbsp;<span class="field_units">' + units + '</span></span></td>';
                            }
                        }
                        $rowtable += '</tr>';
                    } else {
                        if (parent_2keys !== 0) {
                            for (var j = 0; j < parent_2keys; j++) {
                                labelnames = data[parentkeyheader][j].heading, units = data[parentkeyheader][j].units, label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label];
                                (labelvalue == null || labelvalue == "") ? actualval = "0" : actualval = labelvalue;
                                $rowtable += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualval + '&nbsp;<span class="field_units">' + units + '</span></span></td></tr>';
                            }
                        } else {
                            actualval = '0';
                            for (var lbl = 0; lbl < data[parentkeyheader].length; lbl++) {
                                labelnames = data[parentkeyheader][lbl].heading, units = data[parentkeyheader][lbl].units;
                                $rowtable += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualval + '&nbsp;<span class="field_units">' + units + '</span></span></td></tr>';
                            }
                        }
                    }
                    $rowtable += '</table>';
                    $(ID).html($rowtable);
                }
            },
            error: function (error) {
                $(ID).html('<span style="position: absolute;bottom: 0;right: 15px;">No Data</span>').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}