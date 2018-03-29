/*! Grid v1.0.1 | (c) Invendis Technologies */
$.fn.invTablePlugin = function (params, alarmCount) {
    var ID = '#' + this.attr('id'), tableid = this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            bool: '',
            timeType: '',
            Refreshtime: 10000,
            OutputType: 1,
            alarmcount: 0,
            Hidecolumn: true,
            fromDate: '',
            toDate: '',
            MeterID: 0
        };
        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.TimeType = options.timeType;
        options.apiEntity.AlarmCount = options.alarmcount;
        options.apiEntity.MeterID = options.MeterID;
        //console.log(JSON.stringify(options.apiEntity));
        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                var imagebool = true;
                var datakeyslength = Object.keys(result).length, $dynamictable = '', labelvalue = '', unitsval = '', alarmtext = '';
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0];
                    break;
                }
                var lengthofjson = result[parentkeylabel].length, lengthofheader = result[parentkeyheader].length, lbllength = Object.keys(result[parentkeyheader][0]).length;
                $dynamictable += '<table id=table_' + tableid + ' class="search-table table table-bordered">';
                $dynamictable += '<thead>';
                $dynamictable += '<tr class="divtitle heading_2">';
                for (var i = 0; i < lengthofheader; i++) {
                    if ((i == 0) && (options.Hidecolumn == true)) {
                    } else {
                        innerkeylength = Object.keys(result[parentkeyheader][i]).length, headerlabels = result[parentkeyheader][i].heading;// units = result[parentkeyheader][i].units;
                        //(units == "") ? unitsval = "" : unitsval = '(' + result[parentkeyheader][i].units + ')';
                        //$dynamictable += '<th class="field_content_2">' + headerlabels + '&nbsp;' + unitsval + '</th>'
                        $dynamictable += '<th class="field_content_2">' + headerlabels + '</th>'
                    }
                }
                $dynamictable += '</tr>';
                $dynamictable += '</thead>';
                //$dynamictable += '</table>';
                //$dynamictable += '<table id=tablebody_' + tableid + ' class="table table-bordered">';
                var nullvalidation1 = result[parentkeylabel].length;
                if (lengthofheader !== 0 && nullvalidation1 !== 0) {
                    var innerkeylabel = Object.keys(result[parentkeylabel][0]).length, index2 = Object.keys(result[parentkeylabel][0])[0], keylength = (result[parentkeylabel][0][index2]).length,
                    count = 1, counttr = 1, imageid = 1, _newRowflag = 0;
                    for (var k = 0; k < keylength; k++) {
                        $dynamictable += '<tr class="trclass" style="background-color:#ffffff;" data-toggle="collapse" data-target="#accordion' + [k + 1] + '">';
                        for (var j = 0; j < innerkeylabel; j++) {
                            if ((j == 0) && (options.Hidecolumn == true)) {
                                var primaryID = Object.keys(result[parentkeylabel][0])[0], primaryIDval = result[parentkeylabel][j][primaryID][k];
                                localStorage.setItem("InverterIDvalue", primaryIDval);
                            } else {
                                var index1 = Object.keys(result[parentkeylabel][0])[j]; //units = result[parentkeyheader][j].units;
                                labelvalue = result[parentkeylabel][0][index1][k];
                                if (index1 == "diolTimeStamp") {
                                    $dynamictable += '<td id=ids_' + counttr + ' class="rowToClick tdclass" width="200px"><img src="../images/details_open.png" />' + labelvalue + '</td>';
                                    counttr++;
                                } else if (index1 == "Weather Code") {
                                    var labelforimage = Object.keys(result[parentkeylabel][0])[6], weathercodesimage = result[parentkeylabel][0][labelforimage][k];
                                    (weathercodesimage == 0) ? weathercodesimage = -1 : weathercodesimage = weathercodesimage;
                                    //$dynamictable += '<td class="clickDisable field_values_1 tdclass"><img class="alarmimage" id=imageid_' + weathercodes + ' src="../images/weathercodes/' + weathercodes + '.png" height="20" /><span class="statuscoumn">Alarm ' + imageid + '</span></td>';
                                    $dynamictable += '<td class="clickDisable field_values_1 tdclass" align="center"><img class="alarmimage" id=imageid_' + imageid + ' src="../images/weathercodes/' + weathercodesimage + '.png" height="20" /></td>';
                                    imageid++;
                                } else if (index1 == "Status") {
                                    var labelforimage = Object.keys(result[parentkeylabel][0])[7], alarmStatus = result[parentkeylabel][0][labelforimage][k];
                                    (alarmStatus == null) ? alarmStatus = 0 : alarmStatus = alarmStatus;
                                    (alarmStatus == 1) ? alarmtext = "Alarm" : alarmtext = "Normal";
                                    //$dynamictable += '<td class="clickDisable field_values_1 tdclass"><img class="alarmimage" id=imageid_' + weathercodes + ' src="../images/weathercodes/' + weathercodes + '.png" height="20" /><span class="statuscoumn">Alarm ' + imageid + '</span></td>';
                                    $dynamictable += '<td class="clickDisable field_values_1 tdclass" align="center"><img class="alarmimage" id=imageid_' + imageid + ' src="../images/alarms/' + alarmStatus + '.png" height="20" />&nbsp; <span class="txt-alarm">' + alarmtext + '</span></td>';
                                    imageid++;
                                } else if (count == 1 && options.bool == true) {
                                    if (index1 == "SMB")
                                        $dynamictable += '<td id=id_SJBID' + primaryIDval + ' class="clickDisable field_values_1 tdclass clicktrue"><a onClick="InverterPageRedirect(' + params.apiEntity.SiteID + ',' + primaryIDval + ')" class="linktoinverterdb">' + labelvalue + '</a></td>';
                                    else
                                        $dynamictable += '<td id=id_click' + primaryIDval + ' class="clickDisable field_values_1 tdclass clicktrue"><a onClick="InverterPageRedirect(' + params.apiEntity.SiteID + ',' + primaryIDval + ')" class="linktoinverterdb">' + labelvalue + '</a></td>';
                                    count++;
                                } else if (_newRowflag == 1 && options.bool == true) {
                                    _newRowflag = 0;
                                    if (index1 == "SMB")
                                        $dynamictable += '<td id=id_SJBID' + primaryIDval + ' class="clickDisable field_values_1 tdclass clicktrue"><a onClick="InverterPageRedirect(' + params.apiEntity.SiteID + ',' + primaryIDval + ')" class="linktoinverterdb">' + labelvalue + '</a></td>';
                                    else
                                        $dynamictable += '<td id=id_click' + primaryIDval + ' class="clickDisable field_values_1 tdclass clicktrue"><a onClick="InverterPageRedirect(' + params.apiEntity.SiteID + ',' + primaryIDval + ')" class="linktoinverterdb">' + labelvalue + '</a></td>';
                                    count++;
                                } else {
                                    var actualValUnits = labelvalue.split('~');
                                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                    if (index1 == "Power" && (tableid == 'inverters' || tableid == 'inverter_alarms' || tableid == 'tblPlantDashboardInverters')) {
                                        $dynamictable += '<td id=id_' + index1 + ' class="clickDisable field_values_1 tdclass"><button id="showPowerchart" type="button" class="btn btn-lg power_icon" style="float:left;" title="Power chart" data-toggle="modal" data-target="#PowerModal" onclick="showEnergyPowerChart(' + primaryIDval + ',1);"></button><span class="spanvalunits gridlabels" style="font-weight:normal;"><span class="spanval">' + actualValUnits[0] + '</span>&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                                    }
                                    else if (index1 == "Today&#39;s Energy" && (tableid == 'inverters' || tableid == 'inverter_alarms' || tableid == 'tblPlantDashboardInverters')) {
                                        $dynamictable += '<td id=id_' + index1 + ' class="clickDisable field_values_1 tdclass"><button id="showEnergychart" type="button" class="btn btn-lg energy_icon" style="float:left;" title="Energy chart" data-toggle="modal" data-target="#EnergyModal" onclick="showEnergyPowerChart(' + primaryIDval + ',2);"></button><span class="spanvalunits gridlabels" style="font-weight:normal;"><span class="spanval">' + actualValUnits[0] + '</span>&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                                    }
                                    else if (actualValUnits[0] != "0" && options.clickrequired == true && index1 == "Alarms Count") {
                                        $dynamictable += '<td id=id_click' + primaryIDval + ' class="clickDisable field_values_1 tdclass clicktrue"><a style="cursor:pointer;" onclick="redirecttoalarmlog(' + params.apiEntity.SiteID + ')" href="AlarmLog.aspx?SiteID=' + params.apiEntity.SiteID + '&InverterID=' + primaryIDval + '" class="linktoinverterdb">' + labelvalue + '&nbsp;</a></td>';
                                    }
                                    else {
                                        $dynamictable += '<td id=id_' + count + ' class="clickDisable field_values_1 tdclass" style="font-weight:normal;"><span class="spanvalunits gridlabels"><span class="spanval">' + actualValUnits[0] + '</span>&nbsp;<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                                    }
                                    count++;
                                }
                            }
                        }
                        $dynamictable += '</tr>';
                        _newRowflag = 1;
                        $dynamictable += '<tr id=hidetr' + [k + 1] + ' class="Tr3" style="background-color:#ffffff;">';
                        $dynamictable += '<td colspan=' + innerkeylabel + ' id=hidetd' + [k + 1] + '> <div id="accordion' + [k + 1] + '" class="collapse">Hidden by default' + [k + 1] + '</div></td>';
                        $dynamictable += '</tr>';
                        $(document).on("click", "td.clicktrue", function () {
                            var idval = $(this).attr("id"), idaftertrim = idval.slice(8);
                            if (idval.includes("id_SJBID")) {
                                // loadInvertorData(params.apiEntity, params.apiEntity);
                            }
                            else {
                                localStorage.setItem("InverterIDvalue", idaftertrim);
                                loadInvertorData(params.apiEntity, params.apiEntity);
                                // loadInvertorDashboard(params.apiEntity.SiteID, idaftertrim);
                            }
                        });
                    }
                } else {
                    var actual = 'N/A';
                    $('#search').attr("disabled", true);
                    $('#search').css("cursor", "not-allowed");
                    $dynamictable += '<tr>';
                    for (var nodata = 0; nodata < lengthofheader; nodata++) {
                        if ((nodata == 0) && (options.Hidecolumn == true)) {
                        } else {
                            //$dynamictable += '<td class="clickDisable field_values_1 tdclass">' + actual + '</td>';
                        }
                    }
                    $dynamictable += '</tr>';
                }
                $dynamictable += '</table>';
                $(ID).html($dynamictable);
                $('#loader').hide();
                $(".Tr3").hide();
                $("td.rowToClick").click(function () {
                    $(this).parent().next("tr").slideToggle();
                    ($(this).find("img").attr("src") == "../images/details_close.png") ? $(this).find("img").attr("src", "../images/details_open.png") : $(this).find("img").attr("src", "../images/details_close.png");
                });
                var imagecount = 0;

                $('.spanval').filter(function () {
                    return this.innerHTML.match(/^[0-9\s\.,]+$/);
                }).parent().css('float', 'right');


            },
            error: function (error) {
                console.log(error);
                $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
                $('#loader').hide();
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}
