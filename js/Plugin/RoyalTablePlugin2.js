/*! Grid_2 v1.0.1 | (c) Invendis Technologies */
$.fn.invTablePlugin2 = function (params) {
    var ID = '#' + this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            id: '',
            Refreshtime: 200000,
            OutputType: 1,
            CategoryID: '',
            SourceID:'',
            alarmcount: 0
        };

        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.AlarmCount = options.alarmcount;
        options.apiEntity.SourceID = options.SourceID;
        options.apiEntity.CategoryID = options.CategoryID;
        //console.log(JSON.stringify(options.apiEntity));
        $.ajax({
            type: "POST",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                console.log(result);
                var datakeyslength = Object.keys(result).length; //unit = '';
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0];
                    break;
                }
                var length = result[parentkeylabel].length, primaryID = '', primaryIDval = '', insidekeyslength = '', $table = '', totalenergyval = '', totalenergycount = '', someArray = [], SiteCategory = '', SiteCategoryval = '', AlarmCOunt = '';
                var sum = 0;
                insidekeyslength = Object.keys(result[parentkeylabel][0]).length;
                if (insidekeyslength != 0) {
                    for (var i = 0; i < length; i++) {
                        $table += '<div class="tabledata" id="id_' + (i + 1) + '">';
                        var insidelebellength = Object.keys(result[parentkeylabel][i]).length, totalenergylabel = Object.keys(result[parentkeylabel][i])[4];
                        $.each(result[parentkeylabel][i], function (key, val) {
                            totalenergycount = result[parentkeylabel][i][totalenergylabel];
                        });
                        var actualValUnits = totalenergycount.split('~');
                        someArray.push(actualValUnits[0]);
                        for (var j = 0; j < insidelebellength; j++) {
                            if (j == 0) {
                                primaryID = Object.keys(result[parentkeylabel][i])[j], primaryIDval = result[parentkeylabel][i][primaryID];
                            }
                            else if (j == 1) {
                                SiteCategory = Object.keys(result[parentkeylabel][i])[j], SiteCategoryval = result[parentkeylabel][i][SiteCategory];
                            } else {
                                var labelhead1 = result[parentkeyheader][j].heading, label0 = Object.keys(result[parentkeylabel][i])[j], label1 = Object.keys(result[parentkeylabel][i])[j + 1], label2 = Object.keys(result[parentkeylabel][i])[j + 2];
                                $table += '<table class="table maintable">';
                                $table += '<tr>';
                                $table += '<td colspan="2" style="padding:0;">';
                                $table += '<h5 class="table-heading heading_3 rowToClick"><span class="table-heading" data-toggle="collapse" data-target="#accordion' + i + '" style="cursor:pointer;"><span class="siteheading">' + result[parentkeylabel][i][label0] + ' | ' + result[parentkeylabel][i][label1] + '</span></span>';
                                AlarmCOunt = result[parentkeylabel][i][label2];
                                if (AlarmCOunt != "0" && AlarmCOunt != "") {
                                    $table += '<a class="linkalarm" id="spn_Alarm" style="cursor:pointer;" align="center" onclick="redirecttoAlarmPage(' + primaryIDval + ',' + 0 + ');"><span class="linktoalarm"><img id="Img_Alarm" align="center" src="../images/alarm_icon.png" /><span class="notificationnumber">' + AlarmCOunt + '</span></a>';
                                }
                                $table += '<span class="linktodashboard" style="cursor:pointer;"><a id="dashboardredirect" onclick="redirecttoPAGE(' + primaryIDval + ',' + SiteCategoryval + ');">Plant Dashboard</a></span></span></h5>';
                                $table += '</td>';
                                $table += '</tr>';
                                $table += '<tr>';
                                break;
                            }
                        }
                        $table += '<td class="td_left" width="50%">';
                        if (Math.abs(insidelebellength % 2) == 1) { //odd
                            var leftcolumncount = Math.floor(insidelebellength / 2), y = 0;
                            for (y = 4; y < leftcolumncount + 3; y++) {
                                if (y != 4) {
                                    var lbl2 = Object.keys(result[parentkeylabel][i])[y], labelOdd1 = result[parentkeyheader][y].heading;
                                    var actualValUnits = result[parentkeylabel][i][lbl2].split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    $table += '<p><span class="field_content_1">' + labelOdd1 + ' : </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';

                                }
                            }
                            $table += '</td>';
                            $table += '<td>';
                            for (var n = y; n < insidelebellength; n++) {
                                var lbl4 = Object.keys(result[parentkeylabel][i])[n],
                                    labelOdd2 = result[parentkeyheader][n].heading;//labelOddunit2 = result[parentkeyheader][n].units;
                                var actualValUnits = result[parentkeylabel][i][lbl4].split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                $table += '<p><span class="field_content_1">' + labelOdd2 + ' : </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';
                            }
                        } else {  //even
                            var leftcolumncount = Math.floor((insidelebellength - 2) / 2), x = 0;
                            for (x = 4; x < leftcolumncount + 3; x++) {
                                if (x != 4) {
                                    var lbl2 = Object.keys(result[parentkeylabel][i])[x], labeleven1 = result[parentkeyheader][x].heading;// labeleven1unit = result[parentkeyheader][x].units;
                                    var actualValUnits = result[parentkeylabel][i][lbl2].split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    $table += '<p><span class="field_content_1">' + labeleven1 + ' : </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';
                                }
                            }
                            $table += '</td>';
                            $table += '<td>';
                            for (var z = x; z < insidelebellength; z++) {
                                var labeleven2 = result[parentkeyheader][z].heading, lbl4 = Object.keys(result[parentkeylabel][i])[z]; //labeleven2unit = result[parentkeyheader][z].units,
                                var actualValUnits = result[parentkeylabel][i][lbl4].split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                $table += '<p><span class="field_content_1">' + labeleven2 + ' : </span><span class="field_values_1">' + actualValUnits[0] + '&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></p>';
                            }
                        }
                        $table += '</td>';
                        $table += ' </tr>';
                        $table += '</table>';
                        $table += '</div>';
                        $table += '<table width="100%">';
                        $table += '<tr class="Tr3" style="background-color:#ffffff;">';
                        $table += '<td colspan="5"><div id="accordion' + i + '" class="collapse tdacc"><h5 class="table-heading-1 heading_1">Plant Details <span style="float:right;"><button class="custom-close" type="button" data-dismiss="modal" aria-hidden="true" style="display:none;">×</button></span></h5><div class="tabledata" id="table_' + i + '"></div></td>';
                        $table += ' </tr>';
                        $table += '</table>';
                    }
                    $(ID).html($table);
                    $('#loader').hide();
                    var total = 0;
                    for (var i = 0; i < someArray.length; i++) {
                        total += someArray[i] << 0;
                    }
                    $('#totalenergyval').html(total + "&nbsp;<span class=field_units>kWh</span>");
                    $(document).on("click", "span.rowToClick", function () {
                        var idval = $(this).attr("data-target");
                        var idafterslice = idval.slice(10);
                    });
                } else {
                    $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
                    $('#loader').hide();
                }
            },
            error: function (error) {
                $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
                $('#loader').hide();
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}