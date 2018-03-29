/*! Progress Bar v1.0.1 | (c) Invendis Technologies */
$.fn.invbarChart = function (params) {
    var ID = '#' + this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            id: '',
            classname: '',
            clickrequired: false,
            OutputType: 1,
            timeType: '',
            validation: '',
            Refreshtime: '',
            alarmcount: 0
        };

        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.TimeType = options.timeType;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.AlarmCount = options.alarmcount,
        options.apiEntity.CategoryID = options.CategoryID;
        options.apiEntity.SourceID = options.SourceID;
        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (data) {
                //console.log(data);
                var datakeyslength = Object.keys(data).length, actualval = '', expectedvalue = '', units = '', units_1 = '', expunits = '', percentageval = '', margin = '', marginround = '', $listhtml = '', months = [], d = new Date(), n = (d.getMonth() == 0) ? 12 : d.getMonth();
                var labelnames = '', colors = '';
                months.push("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
                //for (var PKey = 0; PKey < datakeyslength; PKey++) {
                var parentkeylabel = Object.keys(data)[1], parentkeyheader = Object.keys(data)[0];
                //break;
                //}
                var lengthofjson = data[parentkeylabel].length, lengthofheader = data[parentkeyheader].length;
                if (lengthofheader != 0 && lengthofjson != 0) {
                    for (var nv = 0; nv < lengthofjson; nv++) {
                        var nullvalidation1 = Object.keys(data[parentkeylabel][nv]).length, nullvalidation2 = Object.keys(data[parentkeylabel]).length
                    }
                    for (var i = 0; i < lengthofjson; i++) {
                        var labellength = Object.keys(data[parentkeylabel][i]).length, heading = Object.keys(data[parentkeylabel][i])[i], headingname = data[parentkeylabel][i][heading];
                        for (var lbl = 0; lbl < data[parentkeyheader].length; lbl++) {
                            if (lbl < 1) {
                                labelnames = data[parentkeyheader][lbl].heading; //units = data[parentkeyheader][lbl].units;
                                colors = data[parentkeyheader][lbl].color;
                            } else {
                                units_1 = data[parentkeyheader][lbl].units;
                            }
                        }
                        //console.log(labelnames);
                        if (labellength != 0) {
                            for (var j = 0; j < labellength; j++) {
                                var parentlabel = Object.keys(data[parentkeylabel][i])[0], expectedlabel = Object.keys(data[parentkeylabel][i])[1], parentlabelval = data[parentkeylabel][i][parentlabel],
                                    expectedlabelval = data[parentkeylabel][i][expectedlabel];
                                (parentlabelval == null || parentlabelval == "") ? actualval = 0 : actualval = parentlabelval;
                                (expectedlabelval == null || expectedlabelval == "") ? expectedvalue = 0 : expectedvalue = expectedlabelval;
                                var actualValUnits = actualval.split('~');
                                actualval = actualValUnits[0]; units = (actualValUnits[1] == undefined) ? units_1 : actualValUnits[1];
                                if (expectedlabelval != null) {
                                    var expectedValUnits = expectedvalue.split('~');
                                    expectedvalue = expectedValUnits[0];
                                    expunits = (expectedValUnits[1] == undefined) ? units_1 : expectedValUnits[1];
                                }
                            }
                        } else {
                            actualval = 0, expectedvalue = 0;
                        }
                        if (options.bool == 0 && options.validation == 0) {
                            percentageval = Math.ceil((actualval / expectedvalue) * 100), margin = (percentageval / 2);
                            (percentageval > 55) ? marginround = (Math.ceil(margin) + 20) : marginround = Math.ceil(margin);
                            var $progress = '<div class="barChart__row" data-value="' + actualval + '">';
                            $progress += '<table><tr>';
                            $progress += '<td class="barChart__label field_content_1">' + labelnames + '</td>';
                            $progress += '<td width="180px">';
                            if (options.clickrequired == true) {
                                $progress += '<span class="barChart__bar" data-toggle="modal" data-target="#myModal" style="cursor:pointer;"><span class="barChart__barFill ' + options.classname + '" style="width:' + percentageval + '%;"></span></span>';
                            } else {
                                $progress += '<span class="barChart__bar"><span class="barChart__barFill ' + options.classname + '" style="width:' + percentageval + '%;background-color:' + colors + ';"></span></span>';
                            }
                            $progress += '<span class="field_values_1" style="width:100%;margin-left:0%">' + actualval + "&nbsp;<span class=field_units>" + units + '</span></span>';
                            $progress += '</td>';
                            $progress += '<td class="barChart__value field_values_2">' + expectedvalue + "&nbsp;<span>" + expunits + '</span></td>';
                            $progress += '</tr></table>';
                            $progress += '</div>';
                            $(ID).html($progress);
                        } else {
                            (options.validation == 0) ? labelnames = labelnames : labelnames = months[n - 1];

                            $listhtml += '<p class="custom_label field_content_1">' + labelnames + '</p><p class="nomargin field_values_1" style="line-height:14px;">' + actualval + '&nbsp;<span class="field_units">' + units + '</span></p><p class="nomargin">' + expectedvalue + '&nbsp;<span class="field_units">' + expunits + '</span></p>';
                            $(ID).html($listhtml);
                        }
                    }
                }
                else {
                    if (options.bool == 0 && options.validation == 0) {
                    } else {
                        for (var lbl = 0; lbl < data[parentkeyheader].length; lbl++) {
                            if (lbl < 1) {
                                labelnames = data[parentkeyheader][lbl].heading; //units = data[parentkeyheader][lbl].units;
                                colors = data[parentkeyheader][lbl].color;
                            } else {
                                units_1 = data[parentkeyheader][lbl].units;
                            }
                        }
                        (options.validation == 0) ? labelnames = labelnames : labelnames = months[n - 1];
                        $listhtml += '<p class="custom_label field_content_1">' + labelnames + '</p><p class="nomargin field_values_1" style="line-height:14px;">0 &nbsp;<span class="field_units"></span></p><p class="nomargin">0 &nbsp;<span class="field_units">' + units_1 + '</span></p>';
                        $(ID).html($listhtml);
                    }

                    $('#SETday span').css("position", "relative");
                    $('#GPITday span').css("position", "relative");
                    $('#GPETday span').css("position", "relative");
                    $('#ECTday span').css("position", "relative");

                    $('#SEMTD span').css("position", "relative");
                    $('#GPIMTD span').css("position", "relative");
                    $('#GPEMTD span').css("position", "relative");
                    $('#ECMTD span').css("position", "relative");
                }
            },
            error: function (error) {
                $(ID).html('<span style="position: absolute;bottom:5px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}