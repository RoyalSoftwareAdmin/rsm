/*! Grid v1.0.1 | (c) Invendis Technologies */
$.fn.Plugin_List = function (params, alarmCount) {
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
            InnerBorder: false,
            borderRequired: true,
            KeyValue: false,
            SourceID: "",
            CategoryID : "",
            LabelRequired: true,
            InvertorID:""
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
        console.log(JSON.stringify(options.apiEntity));
        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                console.log(result);
                var border = '';
                if (!options.borderRequired) {
                    border = 'noborder';
                }
                var rowValue = {};
                rowValue["Div"] = ID;
                rowValue["SiteID"] = params.apiEntity.SiteID;
                var imagebool = true;
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
                var nullvalidation1 = result[parentkeylabel].length;
                if (lengthofheader !== 0 && nullvalidation1 !== 0) {
                    var innerkeylabel = Object.keys(result[parentkeylabel][0]).length;
                    var numberofrows = Math.ceil(innerkeylabel / options.numberofDivs);
                    var startRowNumber = 0;
                    var endROwNumber = numberofrows;
                    for (var ndivid = 0; ndivid < options.numberofDivs; ndivid++) {
                        if (options.bstrapclass != '') {
                            bstrapclassarray = options.bstrapclass.split(',');
                            options.divClass = 'col-lg-' + bstrapclassarray[ndivid] + ' col-md-' + bstrapclassarray[ndivid] + ' col-sm-' + bstrapclassarray[ndivid] + ' col-xs-' + bstrapclassarray[ndivid];
                        }
                        var border = '';
                        if (options.InnerBorder == true) {
                            border = ' inner_border ';
                        }
                        if (ndivid == 0)
                            $dynamictable += '<div class="' + options.divClass + ' ' + border + ' nopadding padding_left padding_right" style="height:100%">';
                        else
                            $dynamictable += '<div class="' + options.divClass + ' ' + border + ' nopadding padding_right padding_left" style="height:100%">';

                        $dynamictable += '<ul class="nopadding listdiv">';

                        var index2 = Object.keys(result[parentkeylabel][0])[0], keylength = (result[parentkeylabel][0][index2]).length,
                         count = 1, counttr = 1, imageid = 1, _newRowflag = 0;
                        //for (var k = 0; k < keylength; k++)
                        {
                            for (var j = startRowNumber; j < endROwNumber; j++) {
                                var index1 = Object.keys(result[parentkeylabel][0])[j]; //units = result[parentkeyheader][j].units;
                                labelvalue = String(Object.values(result[parentkeylabel][0])[j]);
                                var actualValUnits = labelvalue.split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                rowValue[index1.replace(/\s|>+/g, '_')] = labelvalue.replace(/\s+/g, '_');
                                var HidecolumnArray = options.Hidecolumn.split(',');
                                var Hidecolumnposition = -1;
                                if (options.Hidecolumn != '') {
                                    $.each(HidecolumnArray, function (indexid, val) {
                                        if (val == String(j))
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
                                    if (ClickColumnposition != -1 && (actualValUnits[0] > 0 && actualValUnits[0] != '' && actualValUnits[0] != '0')) {
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
                                            $dynamictable += '<li id=id_' + count + ' class="field_values_1 "><a onClick=PageRedirect(' + j + ',ResponseValue) class="linktodashboard">';
                                            $dynamictable += '<span class="spanvalunits"><img id="Img_Alarm" align="center" src="../images/' + varImages + '" width="20" height="20">';
                                            $dynamictable += '<span class="spanval">' + actualValUnits[0] + '</span>&nbsp;';
                                            $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                                            $dynamictable += '</a></li>';
                                        }
                                        else {
                                            $dynamictable += '<li id=id_' + count + ' class="field_values_1 "><a onClick=PageRedirect(' + j + ',ResponseValue) class="linktodashboard">';
                                            $dynamictable += '<span class="spanvalunits"><span class="spanval">' + actualValUnits[0] + '</span>&nbsp;';
                                            $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                                            $dynamictable += '</a></li>';
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

                                            $dynamictable += '<li id=id_' + count + ' class="field_content_1 ">';
                                            $dynamictable += '<span class="spanvalunits"><img id="Img_Alarm" align="center" src="../images/' + varImages + '" width="20" height="20">';
                                            $dynamictable += '<span class="spanval">' + actualValUnits[0] + '</span>&nbsp;';
                                            $dynamictable += '<span class=field_units  >' + actualValUnits[1] + '</span></span></li>';
                                        }
                                        else {
                                            (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                            if (!options.KeyValue) {
                                                $dynamictable += '<li id=id_' + count + ' class="field_content_1 ">';
                                               if(options.LabelRequired==true)
                                                $dynamictable += '<span class="spanlabel">' + index1 + '  </span>&nbsp;';
                                                $dynamictable += '<span class="spanvalunits"><span class="spanval"><b>' + actualValUnits[0] + '</b></span>&nbsp;';
                                                $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span></span></li>';
                                            }
                                            else {
                                                $dynamictable += '<li id=id_' + count + ' class="field_content_1 ">';
                                                $dynamictable += '<span class="spanvalunits" >';
                                                if(options.LabelRequired==true)
                                                    $dynamictable += '<span class="spanlabel">' + index1 + ': </span>&nbsp;';
                                                $dynamictable += '<span class="spanval"><b>' + actualValUnits[0] + '</b></span>&nbsp;';
                                                $dynamictable += '<span class=field_units>' + actualValUnits[1] + '</span>';
                                                $dynamictable += '</span></li>';
                                            }
                                        }
                                    }
                                    count++;
                                }
                            }
                            $dynamictable = $dynamictable.replace(new RegExp('ResponseValue', 'g'), JSON.stringify(rowValue));
                        }
                        $dynamictable += '</ul>';
                        $dynamictable += '</div>';
                        var startRowNumber = endROwNumber;
                        var endROwNumber = endROwNumber + numberofrows;
                        if (endROwNumber > lengthofheader) {
                            endROwNumber = lengthofheader;
                        }
                    }
                } else {
                    for (var empty = 0; empty < result[parentkeyheader].length; empty++) {
                        if (result[parentkeyheader][empty].heading != 'ID') {
                            if (ndivid == 0)
                                $dynamictable += '<div class="' + options.divClass + ' ' + border + ' nopadding padding_left padding_right" style="height:100%">';
                            else
                                $dynamictable += '<div class="' + options.divClass + ' ' + border + ' nopadding padding_right padding_left" style="height:100%">';
                            $dynamictable += '<ul class="nopadding listdiv">';

                            $dynamictable += '<li id=id_' + (empty + 1) + ' class="field_content_1">';
                            if (options.LabelRequired == true)
                                $dynamictable += '<span><span class="spanval">' + result[parentkeyheader][empty].heading + '</span>&nbsp;';
                            $dynamictable += '<span class="spanvalunits"><span class="spanval"><b>' + 0 + '</b></span>&nbsp;';
                            $dynamictable += '<span class=field_units>' + result[parentkeyheader][empty].units + '</span></span></li>';


                            $dynamictable += '</ul>';
                            $dynamictable += '</div>';
                        }
                    }
                }
                $(ID).html($dynamictable);
                var imagecount = 0;
                $('.spanval').filter(function () {
                    return this.innerHTML.match(/^[0-9\s\.,]+$/);
                }).parent().css('float', 'right');

            },
            error: function (error) {
                console.log(error);
                $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}
