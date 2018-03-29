/*! Grid v1.0.1 | (c) Invendis Technologies */
$.fn.Plugin_block = function (params, alarmCount) {
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
            LabelRequired: true
        };
        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.TimeType = options.timeType;
        options.apiEntity.AlarmCount = options.alarmcount;
        options.apiEntity.MeterID = options.MeterID;
        options.apiEntity.SourceID = options.SourceID;
        options.apiEntity.CategoryID = options.CategoryID;
        console.log(JSON.stringify(options.apiEntity));
        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                console.log(result);
                //var result = {
                //    "tableHeader": [
                //        {
                //            "heading": "Ambient Temperature",
                //            "units": "°C",
                //            "color": "",
                //            "seriesType": "0"
                //        },
                //        {
                //            "heading": "Humidity",
                //            "units": "",
                //            "color": "",
                //            "seriesType": "0"
                //        },
                //        {
                //            "heading": "Wind Speed",
                //            "units": "",
                //            "color": "",
                //            "seriesType": "0"
                //        },
                //        {
                //            "heading": "Wind Direction",
                //            "units": "",
                //            "color": "",
                //            "seriesType": "0"
                //        },
                //        {
                //            "heading": "Rain",
                //            "units": "",
                //            "color": "",
                //            "seriesType": "0"
                //        }
                //    ],
                //    "tableData": [
                //        {
                //            "Ambient Temperature": "0~Mwh",
                //            "Humidity": "0~kwh",
                //            "Wind Speed": "0~Mwh",
                //            "Wind Direction": "0~kwh",
                //            "Rain": "0~kwh"
                //        }
                //    ]
                //}
                var border = '';
                if (!options.borderRequired) {
                    border = 'noborder';
                }
                var rowValue = {},
                    imagebool = true,
                    datakeyslength = Object.keys(result).length,
                    $dynamictable = '',
                    labelvalue = '',
                    Hidecolums = '',
                    labeltext = '',
                    parentkeylabel = Object.keys(result)[1],
                    parentkeyheader = Object.keys(result)[0],
                    lengthofjson = '',
                    ColumnImages = '',
                    lengthofheader = result[parentkeyheader].length,
                    lbllength = Object.keys(result[parentkeyheader][0]).length,
                    nullvalidation1 = result[parentkeylabel].length;

                rowValue["Div"] = ID;
                rowValue["SiteID"] = params.apiEntity.SiteID;

                if (lengthofheader !== 0 && nullvalidation1 !== 0) {
                    var innerkeylabel = Object.keys(result[parentkeylabel][0]).length;
                    lengthofjson = Object.keys(result[parentkeylabel][0]).length;
                    $dynamictable += '<div class="col-md-12 nopadding">';
                    labeltext = Object.keys(result[parentkeylabel][0]);
                    for (var i = 0; i < lengthofjson; i++) {
                        var Hidecolumnposition = -1;
                        labelvalue = result[parentkeylabel][0][labeltext[i]].split('~');
                        if (options.Hidecolumn != '') {
                            var HidecolumnArray = options.Hidecolumn.split(',');
                            $.each(HidecolumnArray, function (indexid, val) {
                                if (val === String(i))
                                    Hidecolumnposition = indexid;
                            });
                        }
                        if (labelvalue[0] != 0) {
                            ColumnImages = params.activeImages.split(",");
                        } else {
                            ColumnImages = params.inactiveImages.split(",");
                        }

                        if (Hidecolumnposition == -1) {
                            $dynamictable += '<div class="' + params.divClass + ' nopadding blockdiv">';
                            $dynamictable += '<p class="field_content_3">' + labeltext[i] + '</p>';
                            $dynamictable += '<p class="field_content_1"><span class="spanval"><b>' + labelvalue[0] + '</b></span>&nbsp;<span class="field_units">' + labelvalue[1] + '</span>';
                            $dynamictable += '<span class="f_right"><img src="../../images/' + ColumnImages[i] + '.png" class="blockimg" /></span>';
                            $dynamictable += '</p>';
                            $dynamictable += '</div>';
                        }
                    }
                    $dynamictable += '</div>';
                } else {
                    $dynamictable += '<div class="col-md-12 nopadding">';
                    for (var empty = 0; empty < result[parentkeyheader].length; empty++) {
                        var Hidecolumnposition = -1;
                        labeltext = result[parentkeyheader][empty].heading;
                        labelvalue = 0;
                        if (options.Hidecolumn != '') {
                            var HidecolumnArray = options.Hidecolumn.split(',');
                            $.each(HidecolumnArray, function (indexid, val) {
                                if (val === String(i))
                                    Hidecolumnposition = indexid;
                            });
                        }

                        ColumnImages = params.inactiveImages.split(",");

                        if (Hidecolumnposition == -1) {
                            $dynamictable += '<div class="' + params.divClass + ' nopadding blockdiv">';
                            $dynamictable += '<p class="field_content_3">' + labeltext + '</p>';
                            $dynamictable += '<p class="field_content_1"><span class="spanval"><b>' + labelvalue + '</b></span>&nbsp;<span class="field_units"></span>';
                            $dynamictable += '<span class="f_right"><img src="../../images/' + ColumnImages[empty] + '.png" class="blockimg" /></span>';
                            $dynamictable += '</p>';
                            $dynamictable += '</div>';
                        }
                    }
                    $dynamictable += '</div>';
                }
                $(ID).html($dynamictable);
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
