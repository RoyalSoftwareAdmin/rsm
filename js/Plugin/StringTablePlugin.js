/*! Grid_4 v1.0.1 | (c) Invendis Technologies */
$.fn.stringTablePlugin = function (params) {
    var ID = '#' + this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            bool: true,
            id: '',
            OutputType: 1,
            timeType: '',
            clickrequired: false,
            alarmcount: 0,
            MeterID: 0,
            startpoint: 0,
            endpoint: 0,
        };

        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.Timetype = options.timeType;
        options.apiEntity.TimeType = "";
        options.apiEntity.AlarmCount = options.alarmcount;
        options.apiEntity.MeterID = options.SolarMPPTID;
        options.apiEntity.SolarMPPTID = options.SolarMPPTID;
        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (data) {
                var datakeyslength = Object.keys(data).length, actualval = '', label = '', labelnames = '', lengthofparent_1 = '', lengthofparent_2 = '', parent_1keys = '', parent_2keys = '', $rowtable = '', $listhtml = '', count = 0, $rowtable1 = '', $rowtable2 = '', $rowtable3 = '';
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(data)[1], parentkeyheader = Object.keys(data)[0];
                    break;
                }
                lengthofparent_1 = data[parentkeylabel].length, lengthofparent_2 = data[parentkeyheader].length;
                if (lengthofparent_1 !== 0) {
                    for (var i = 0; i < lengthofparent_1; i++) {
                        parent_2keys = Object.keys(data[parentkeylabel][i]).length;
                        for (var j = 0; j < parent_2keys; j++) {
                            label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label]
                            var val = labelvalue.split('~');
                           // if (val[0] > 0)
                                count++;

                        }
                    }
                }
                var TotalData = count;
                var division = Math.ceil( count / 4);
                if (options.list == true) {
                    var $ul = '';
                    if (lengthofparent_1 !== 0) {
                        $ul += '<ul class="ulmain">';
                        console.log(data);
                        for (var list = 0; list < data[parentkeylabel]["0"].String.length; list++) {
                            var getkeys = Object.keys(data[parentkeylabel][0]);
                            var getheaderkeys = Object.keys(data[parentkeyheader][0]);
                            var unts = data[parentkeyheader]["2"]["units"];
                            $ul += '<li><span class="sjb-field field_content_1" id=SJB_' + data[parentkeylabel]["0"][getkeys[0]][list] + ' onclick="redirecttomodal(' + data[parentkeylabel]["0"][getkeys[0]][list] + ')">' + data[parentkeylabel]["0"][getkeys[1]][list] + '</span><span class="field_values_1 align-right sjb-value">' + data[parentkeylabel]["0"][getkeys[2]][list] + ' ' + unts + '</span></li>';
                        }
                        $ul += '</ul>';
                        $(ID).html($ul);
                    }
                } else {
                    for (var i = 0; i < lengthofparent_1; i++) {
                        $rowtable += '<div class="col-xs-3 c_h_1 br default_margin-bottom">'
                        $rowtable += '<table width="100%">';
                        parent_2keys = Object.keys(data[parentkeylabel][i]).length;
                        if (options.bool == true) {
                            $rowtable += '<tr>';
                            if (parent_2keys !== 0) {
                                for (var j = 0; j < parent_2keys; j++) {
                                    label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label], labelnames = data[parentkeyheader][j].heading;//, units = data[parentkeyheader][j].units;
                                    (labelvalue == null || labelvalue == "") ? actualval = "0" : actualval = labelvalue;
                                    var actualValUnits = actualval.split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    if (actualValUnits[1] != 0)
                                        $rowtable += '<td><span class="field_content_1">' + labelnames + '</span>: <span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td>';
                                }
                            } else {
                                actualval = '0';
                                for (var lbl = 0; lbl < data[parentkeyheader].length; lbl++) {
                                    labelnames = data[parentkeyheader][lbl].heading, units = data[parentkeyheader][lbl].units;
                                    $rowtable += '<td><span class="field_content_1">' + labelnames + '</span>: <span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + units + '</span></span></td>';
                                }
                            }
                            $rowtable += '</tr>';
                        } else {
                            if (parent_2keys !== 0) {
                                var iLoops = 0;
                                var iLoope = parent_2keys;
                                iLoops = 0;
                                iLoope = division;
                                count = 0;
                                for (var j = iLoops; j < iLoope; j++) {
                                    labelnames = data[parentkeyheader][j].heading, label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label];//units = data[parentkeyheader][j].units, 
                                    (labelvalue == null || labelvalue == "") ? actualval = "0" : actualval = labelvalue;
                                    var actualValUnits = actualval.split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    if (options.clickrequired == true && actualValUnits[0] > 0) {
                                        $rowtable += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + '&nbsp;<a style="cursor:pointer;" data-toggle="modal" data-target="#myDialogAlarm">' + actualValUnits[0] + '</a></span></td></tr>';
                                    }
                                    else if (actualValUnits[0] > 0) {
                                        $rowtable += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    else {
                                         $rowtable += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    $('#invertercount').html(actualval);
                                    if (options.getvalue == true) {
                                        getinverterFunc(actualval);
                                    }
                                    count++;
                                }
                                //div 2
                                iLoope = iLoope + division;
                                iLoops = count;
                                $rowtable1 += '<div class="col-xs-3 c_h_1 br default_margin-bottom">'
                                $rowtable1 += '<table width="100%">';
                                for (var j = iLoops; j < iLoope; j++) {
                                    labelnames = data[parentkeyheader][j].heading, label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label];//units = data[parentkeyheader][j].units, 
                                    (labelvalue == null || labelvalue == "") ? actualval = "0" : actualval = labelvalue;
                                    var actualValUnits = actualval.split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    if (options.clickrequired == true && actualValUnits[0] > 0) {
                                        $rowtable1 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + '&nbsp;<a style="cursor:pointer;" data-toggle="modal" data-target="#myDialogAlarm">' + actualValUnits[0] + '</a></span></td></tr>';
                                    }
                                    else if (actualValUnits[0] > 0) {
                                        $rowtable1 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    else {
                                        $rowtable1 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    $('#invertercount').html(actualval);
                                    if (options.getvalue == true) {
                                        getinverterFunc(actualval);
                                    }
                                    count++;
                                }
                                $rowtable1 += '</table>';
                                $rowtable1 += '</div>';
                                //div 3
                                iLoope = iLoope + division;
                                iLoops = count;
                                $rowtable2 += '<div class="col-xs-3 c_h_1 br default_margin-bottom">'
                                $rowtable2 += '<table width="100%">';
                                for (var j = iLoops; j < iLoope; j++) {
                                    labelnames = data[parentkeyheader][j].heading, label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label];//units = data[parentkeyheader][j].units, 
                                    (labelvalue == null || labelvalue == "") ? actualval = "0" : actualval = labelvalue;
                                    var actualValUnits = actualval.split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    if (options.clickrequired == true && actualValUnits[0] > 0) {
                                        $rowtable2 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + '&nbsp;<a style="cursor:pointer;" data-toggle="modal" data-target="#myDialogAlarm">' + actualValUnits[0] + '</a></span></td></tr>';
                                    }
                                    else if (actualValUnits[0] > 0) {
                                        $rowtable2 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    else {
                                        $rowtable2 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    $('#invertercount').html(actualval);
                                    if (options.getvalue == true) {
                                        getinverterFunc(actualval);
                                    }
                                    count++;
                                }
                                $rowtable2 += '</table>';
                                $rowtable2 += '</div>';
                                //div 4
                                iLoope = TotalData;
                                iLoops = count;
                                $rowtable3 += '<div class="col-xs-3 c_h_1 br default_margin-bottom">'
                                $rowtable3 += '<table width="100%">';
                                for (var j = iLoops; j < iLoope; j++) {
                                    labelnames = data[parentkeyheader][j].heading, label = Object.keys(data[parentkeylabel][i])[j], labelvalue = data[parentkeylabel][i][label];//units = data[parentkeyheader][j].units, 
                                    (labelvalue == null || labelvalue == "") ? actualval = "0" : actualval = labelvalue;
                                    var actualValUnits = actualval.split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    if (options.clickrequired == true && actualValUnits[0] > 0) {
                                        $rowtable3 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + '&nbsp;<a style="cursor:pointer;" data-toggle="modal" data-target="#myDialogAlarm">' + actualValUnits[0] + '</a></span></td></tr>';
                                    }
                                    else if (actualValUnits[0] > 0) {
                                        $rowtable3 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    else {
                                        $rowtable3 += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + actualValUnits[1] + '</span></span></td></tr>';
                                    }
                                    $('#invertercount').html(actualval);
                                    if (options.getvalue == true) {
                                        getinverterFunc(actualval);
                                    }
                                    count++;
                                }
                                $rowtable3 += '</table>';
                                $rowtable3 += '</div>';
                            } else {
                                actualval = '0';
                                for (var lbl = 0; lbl < data[parentkeyheader].length; lbl++) {
                                    labelnames = data[parentkeyheader][lbl].heading, units = data[parentkeyheader][lbl].units;

                                    $rowtable += '<tr><td><span class="field_content_1">' + labelnames + '</span><span class="field_values_1 align-right">' + actualValUnits[0] + '&nbsp;<span class="field_units">' + units + '</span></span></td></tr>';
                                }
                            }
                        }
                        $rowtable += '</table>';
                        $rowtable += '</div>';
                        $rowtable += $rowtable1 + $rowtable2 + $rowtable3;
                        $(ID).html($rowtable);
                    }
                }
            },
            error: function (error) {
                $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}