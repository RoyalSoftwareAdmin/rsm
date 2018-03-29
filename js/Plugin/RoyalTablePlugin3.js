/*! Grid_3 v1.0.1 | (c) Invendis Technologies */
$.fn.invTablePlugin3 = function (params) {
    var ID = '#' + this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            id: '',
            Refreshtime: 200000,
            OutputType: 1,
            alarmcount: 0
        };
        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.AlarmCount = options.alarmcount;

        $.ajax({
            type: "POST",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                var datakeyslength = Object.keys(result).length;
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[PKey];
                }
                var length = result[parentkeylabel].length;
                if (length !== 0) {
                    for (var i = 0; i < length; i++) {
                        var insidelebellength = Object.keys(result[parentkeylabel][i]).length, $table = '';
                        $table += '<table class="table maintable">';
                        $table += '<tr>';
                        $table += '<td width="50%">';
                        if (Math.abs(insidelebellength % 2) == 1) { //odd
                            var leftcolumncount = Math.floor(insidelebellength / 2), y = 0;
                            for (y = 0; y < leftcolumncount + 1; y++) {
                                var lbl2 = Object.keys(result[parentkeylabel][i])[y], labelOdd1 = result.tableHeader[y].heading;// labelOddunit = result.tableHeader[y].units;
                                //$table += '<p><span class="field_content_1">' + labelOdd1 + ': </span><span class="field_values_1">' + result[parentkeylabel][i][lbl2] + '&nbsp;<span class=field_units>' + labelOddunit + '</span></span></p>';
                                var actualValUnits = result[parentkeylabel][i][lbl2].split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                $table += '<p><span class="field_content_1">' + labelOdd1 + ': </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';
                            }
                            $table += '</td>';
                            $table += '<td>';
                            for (var n = y; n < insidelebellength; n++) {
                                var lbl4 = Object.keys(result[parentkeylabel][i])[n], labelOdd2 = result.tableHeader[n].heading;//, labelOddunit2 = result.tableHeader[n].units;
                                //$table += '<p><span class="field_content_1">' + labelOdd2 + ': </span><span class="field_values_1">' + result[parentkeylabel][i][lbl4] + '&nbsp;<span class=field_units>' + labelOddunit2 + '</span></span></p>';
                                var actualValUnits = result[parentkeylabel][i][lbl4].split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                $table += '<p><span class="field_content_1">' + labelOdd2 + ': </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';
                            }
                        } else {  //even
                            var leftcolumncount = Math.floor((insidelebellength - 2) / 2), x = 0;
                            for (x = 0; x < leftcolumncount + 1; x++) {
                                var lbl2 = Object.keys(result[parentkeylabel][i])[x], labeleven1 = result.tableHeader[x].heading;//, labeleven1unit = result.tableHeader[x].units;
                                //$table += '<p><span class="field_content_1">' + labeleven1 + ': </span><span class="field_values_1">' + result[parentkeylabel][i][lbl2] + '&nbsp;<span class=field_units>' + labeleven1unit + '</span></span></p>';
                                var actualValUnits = result[parentkeylabel][i][lbl2].split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                $table += '<p><span class="field_content_1">' + labeleven1 + ': </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';
                            }
                            $table += '</td>';
                            $table += '<td>';
                            for (var z = x; z < insidelebellength; z++) {
                                var lbl4 = Object.keys(result[parentkeylabel][i])[z], labeleven2 = result.tableHeader[z].heading;//, labeleven2unit = result.tableHeader[z].units;
                                //$table += '<p><span class="field_content_1">' + labeleven2 + ': </span><span class="field_values_1">' + result[parentkeylabel][i][lbl4] + '&nbsp;<span class=field_units>' + labeleven2unit + '</span></span></p>';
                                var actualValUnits = result[parentkeylabel][i][lbl4].split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                $table += '<p><span class="field_content_1">' + labeleven2 + ': </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';
                            }
                        }
                        $table += '</td>';
                        $table += ' </tr>';
                        $table += '</table>';                       
                        $(options.id + i).html($table);
                        $('#loader').hide();
                    }
                } else {
                    $(options.id).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
                    $('#loader').hide();
                }
            },
            error: function (error) {
                $(options.id).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
                $('#loader').hide();
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}