/*! Grid v1.0.1 | (c) Invendis Technologies */
$.fn.Plugin_Table = function (params, alarmCount) {
    var ID = '#' + this.attr('id'), tableid = this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            timeType: '',
            Refreshtime: 10000,
            OutputType: 1,
            alarmcount: 0,
            Hidecolumn: '',
            ClickColumns: '',
            ImageColumns: '',
            ImagesFile: '',
            MeterID: 0,
            numberofDivs: 1,
            divClass: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            bstrapclass: '',
            borderRequired: true,
            headerRequired: true,
            InvertorID : "",
            SourceID: "",
            CategoryID: "",
            SubCategoryID : ""
        };
        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.TimeType = options.timeType;
        options.apiEntity.AlarmCount = options.alarmcount;
        options.apiEntity.MeterID = options.MeterID;        
        options.apiEntity.SourceID = options.SourceID;
        options.apiEntity.CategoryID = options.CategoryID;
        options.apiEntity.InvertorID = options.InvertorID;
        options.apiEntity.SubCategoryID = options.SubCategoryID;
        //console.log(JSON.stringify(options.apiEntity));
        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                //console.log(result);
                var border = '';
                if (!options.borderRequired) {
                    border = 'noborder';
                }
                var rowValue = {};
                rowValue["Div"] = ID;
                rowValue["SiteID"] = params.apiEntity.SiteID;
                var datakeyslength = Object.keys(result).length, $dynamictable = '', labelvalue = '', unitsval = '', alarmtext = '';
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0];
                    break;
                }
                var lengthofjson = result[parentkeylabel].length, lengthofheader = result[parentkeyheader].length, lbllength = Object.keys(result[parentkeyheader][0]).length;
                if (options.numberofDivs == 1)
                    options.divClass = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
                else if (options.numberofDivs == 2)
                    options.divClass = 'col-lg-6 col-md-6 col-sm-6 col-xs-6';
                else if (options.numberofDivs == 3)
                    options.divClass = 'col-lg-4 col-md-4 col-sm-4 col-xs-4';
                else if (options.numberofDivs == 4)
                    options.divClass = 'col-lg-3 col-md-3 col-sm-3 col-xs-3';
                var innerkeylabel = 1
                if (lengthofjson > 0)
                    innerkeylabel = Object.keys(result[parentkeylabel][0]).length;
                var numberofrows = Math.ceil(innerkeylabel / options.numberofDivs);
                var startRowNumber = 0;
                var endROwNumber = numberofrows;

                for (var ndivid = 0; ndivid < options.numberofDivs; ndivid++) {
                    if (options.bstrapclass != '') {
                        bstrapclassarray = options.bstrapclass.split(',');
                        options.divClass = 'col-lg-' + bstrapclassarray[ndivid] + ' col-md-' + bstrapclassarray[ndivid] + ' col-sm-' + bstrapclassarray[ndivid] + ' col-xs-' + bstrapclassarray[ndivid];
                    }
                    $dynamictable += '<div class="' + options.divClass + ' nopadding">'
                    if (options.borderRequired) {
                        $dynamictable += '<table id=table_' + tableid + ' class="search-table table table-bordered">';
                    }
                    else {
                        $dynamictable += '<table id=table_' + tableid + ' class="search-table table ">';
                    }
                    if (!options.headerRequired) {
                        $dynamictable += '<thead style="display:none">';
                    }
                    else {
                        $dynamictable += '<thead>';
                    }
                    $dynamictable += '<tr class="divtitle heading_2">';
                    for (var i = 0; i < lengthofheader; i++) {
                        var Hidecolumnposition = -1;
                        if (options.Hidecolumn != '') {
                            var HidecolumnArray = options.Hidecolumn.split(',');
                            $.each(HidecolumnArray, function (indexid, val) {
                                if (val === String(i))
                                    Hidecolumnposition = indexid;
                            });
                        }
                        if (Hidecolumnposition == -1) {
                            innerkeylength = Object.keys(result[parentkeyheader][i]).length, headerlabels = result[parentkeyheader][i].heading;// units = result[parentkeyheader][i].units;
                            $dynamictable += '<th class="field_content_2">' + headerlabels + '</th>'
                        }
                    }
                    $dynamictable += '</tr>';
                    $dynamictable += '</thead>';

                    var nullvalidation1 = result[parentkeylabel].length;
                    if (lengthofheader !== 0 && nullvalidation1 !== 0) {
                        var innerkeylabel = Object.keys(result[parentkeylabel][0]).length, index2 = Object.keys(result[parentkeylabel][0])[0], keylength = (result[parentkeylabel][0][index2]).length,
                        count = 1, counttr = 1, imageid = 1, _newRowflag = 0;
                        for (var k = 0; k < keylength; k++) {
                            $dynamictable += '<tr class="trclass" style="background-color:#ffffff;" data-toggle="collapse" data-target="#accordion' + [k + 1] + '">';
                            for (var j = 0; j < innerkeylabel; j++) {
                                //for (var j = startRowNumber; j < endROwNumber; j++) {
                                var index1 = Object.keys(result[parentkeylabel][0])[j], actualValUnits = ''; //units = result[parentkeyheader][j].units; Object.keys(result[parentkeylabel][0])[j];
                                labelvalue = result[parentkeylabel][0][index1][k];

                                var actualValUnits = labelvalue.split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                rowValue[index1.replace(/\s|>+/g, '_')] = labelvalue.replace(/\s+/g, '_');
                                if (options.Hidecolumn != '') {
                                    var HidecolumnArray = options.Hidecolumn.split(',');
                                    var Hidecolumnposition = -1;
                                    $.each(HidecolumnArray, function (indexid, val) {
                                        if (val === String(j))
                                            Hidecolumnposition = indexid;
                                    });
                                }
                                if (Hidecolumnposition == -1) {
                                    var ClickColumnsArray = options.ClickColumns.split(',');
                                    var ClickColumnposition = -1;
                                    if (options.ClickColumns != '') {
                                        $.each(ClickColumnsArray, function (indexid, val) {
                                            if (val === String(j))
                                                ClickColumnposition = indexid;
                                        });
                                    }
                                    if (ClickColumnposition != -1) {
                                        var imageIndex = options.ImageColumns.split(',');
                                        var imageIndexposition = -1;
                                        if (options.ImageColumns != '') {
                                            $.each(imageIndex, function (indexid, val) {
                                                if (val === String(j))
                                                    imageIndexposition = indexid;
                                            });
                                        }
                                        if (imageIndexposition != -1) {
                                            var varImages = options.ImagesFile.split(',')[imageIndexposition];
                                            $dynamictable += '<td id=id_' + index1.replace('&#39;', '').replace(' ', '') + ' class="field_values_1">';
                                            if (actualValUnits[0] != 0 && index1.replace('&#39;', '').replace(' ', '') == "AlarmsCount" || actualValUnits[0] != 0 && index1.replace(' ', '').replace(' ', '').replace(' ', '') == "NumberofAlarms") {
                                                $dynamictable += '<button id="btn_' + index1.replace('&#39;', '').replace(' ', '') + '" class="btn btnalarm btn-lg ' + varImages + '" type="button" style="float:left;"';
                                                $dynamictable += 'onclick=PageRedirect(' + j + ',ResponseValue)></button>';
                                                $dynamictable += '<span class="spanvalunits gridlabels lblcount" style="font-weight:normal;">';
                                                $dynamictable += '<span class="spanval">' + actualValUnits[0] + '</span>&nbsp;';
                                                $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span></span>';
                                            } else if (index1.replace('&#39;', '').replace(' ', '') != "AlarmsCount" || index1.replace('&#39;', '').replace(' ', '').replace(' ', '') != "NumberofAlarms") {
                                                $dynamictable += '<button id="btn_' + index1.replace('&#39;', '').replace(' ', '') + '" class="btn btnalarm btn-lg ' + varImages + '" type="button" style="float:left;"';
                                                $dynamictable += 'onclick=PageRedirect(' + j + ',ResponseValue)></button>';
                                                $dynamictable += '<span class="spanvalunits gridlabels lblcount" style="font-weight:normal;">';
                                                $dynamictable += '<span class="spanval">' + actualValUnits[0] + '</span>&nbsp;';
                                                $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span></span>';
                                            } else {
                                                if (index1.replace('&#39;', '').replace(' ', '') == "AlarmsCount" || index1.replace(' ', '').replace(' ', '').replace(' ', '') == "NumberofAlarms") {
                                                    $dynamictable += '<button id="btn_' + index1.replace('&#39;', '').replace(' ', '') + '" class="btn btnalarm btn-lg ' + varImages + '" type="button" style="float:left;background-image:url(../images/alarm_icon1.png);cursor:auto;"></button>';
                                                } else {
                                                    $dynamictable += '<button id="btn_' + index1.replace('&#39;', '').replace(' ', '') + '" class="btn btnalarm btn-lg ' + varImages + '" type="button" style="float:left;"></button>';
                                                }

                                            }
                                            $dynamictable += '</td>';
                                        }
                                        else {
                                            $dynamictable += '<td id=id_click' + index1.replace('&#39;', '').replace(' ', '') + ' class="field_values_1">';
                                            $dynamictable += '<a style="cursor:pointer;" onclick=PageRedirect(' + j + ',ResponseValue)>' + labelvalue + '&nbsp;</a>';
                                            $dynamictable += '</td>';
                                        }
                                    }
                                    else {
                                        var imageIndex = options.ImageColumns.split(',');
                                        var imageIndexposition = -1;
                                        if (options.ImageColumns != '') {
                                            $.each(imageIndex, function (indexid, val) {
                                                if (val === String(j))
                                                    imageIndexposition = indexid;
                                            });
                                        }
                                        if (imageIndexposition != -1) {
                                            var varImages = options.ImagesFile.split(',')[imageIndexposition];
                                            $dynamictable += '<td id=id_' + index1.replace('&#39;', '').replace(' ', '') + ' class="field_values_1">'
                                            $dynamictable += '<button id="btn_' + index1.replace('&#39;', '').replace(' ', '') + '" type="button" class="btn btn-lg" style="float:left;" disabled></button>';
                                            $dynamictable += '<span class="spanvalunits gridlabels" style="font-weight:normal;">';
                                            $dynamictable += '<span class="spanval">' + actualValUnits[0] + '</span>&nbsp;';
                                            $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span></span>';
                                            $dynamictable += '</td>';
                                        }
                                        else {
                                            $dynamictable += '<td id=id_' + index1.replace('&#39;', '').replace(' ', '') + ' class="field_values_1">'
                                            $dynamictable += '<span class="spanvalunits gridlabels" style="font-weight:normal;">';
                                            $dynamictable += '<span class="spanval">' + actualValUnits[0] + '</span>&nbsp;';
                                            $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span></span>';
                                            $dynamictable += '</td>';
                                        }
                                    }
                                    count++;
                                }
                                $dynamictable = $dynamictable.replace(new RegExp('ResponseValue', 'g'), JSON.stringify(rowValue));
                            }
                            $dynamictable += '</tr>';
                        }
                    }
                    $dynamictable += ' </table>';
                    $dynamictable += '</div>';
                    var startRowNumber = endROwNumber;
                    var endROwNumber = endROwNumber + numberofrows;
                    if (endROwNumber > lengthofheader) {
                        endROwNumber = lengthofheader;
                    }
                }
                $(ID).html($dynamictable);
                $('#loader').hide();
                $('.spanval').filter(function () {
                    return this.innerHTML.match(/^[0-9\s\.,]+$/);
                }).parent().css('float', 'right');

            },
            error: function (error) {
                console.log(error);
                $('#loader').hide();
                $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}
