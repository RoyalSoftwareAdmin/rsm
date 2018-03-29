/*! Grid v1.0.1 | (c) Invendis Technologies */
$.fn.PluginReport = function (params, alarmCount) {
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
            Hidecolumn: true
        };
        var options = $.extend({}, defaults, params);
        //options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        //options.apiEntity.TimeType = options.timeType;
        options.apiEntity.AlarmCount = options.alarmcount;

        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                $('#Loading').css("display", "none");
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
                            if ((j == 0) && (options.Hidecolumn == true)) {
                                var primaryID = Object.keys(result[parentkeylabel][0])[0], primaryIDval = result[parentkeylabel][j][primaryID][k];
                            } else {
                                var index1 = Object.keys(result[parentkeylabel][0])[j]; //units = result[parentkeyheader][j].units;
                                labelvalue = result[parentkeylabel][0][index1][k];
                                var actualValUnits = labelvalue.split('~');
                                (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                                $dynamictable += '<td id=id_' + count + ' class="clickDisable field_values_1 tdclass" style="font-weight:normal;">' + actualValUnits[0] + ' ' + actualValUnits[1] + '</td>';
                                count++;
                            }
                        }
                        $dynamictable += '</tr>';
                        _newRowflag = 1;
                        $(document).on("click", "td.clicktrue", function () {
                            var idval = $(this).attr("id"), idaftertrim = idval.slice(8);
                            localStorage.setItem("InverterIDvalue", idaftertrim);
                            loadInvertorDashboard(params.apiEntity.SiteID, idaftertrim);
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


                $('#table_' + tableid).DataTable({
                    dom: 'Blfrtip',                    
                    fixedColumns:   {
                        leftColumns: 1,
                        rightColumns: 1
                    },
                    buttons: [{
                        text: 'Export To Excel',
                        extend: 'excelHtml5',                        
                        exportOptions: {
                            modifier: {
                                selected: true
                            },
                            //columns: [0, 1, 2, 3],
                            format: {
                                header: function (data, columnIdx) {
                                    return data;
                                },
                                body: function (data, column, row) {
                                    // Strip $ from salary column to make it numeric
                                    return data;
                                }
                            }
                        },
                        footer: false,
                        customize: function (xlsx) {
                            var sheet = xlsx.xl.worksheets['sheet1.xml'];                            
                        }
                    }]
                });

                $(".Tr3").hide();
                $("td.rowToClick").click(function () {
                    $(this).parent().next("tr").slideToggle();
                    ($(this).find("img").attr("src") == "../images/details_close.png") ? $(this).find("img").attr("src", "../images/details_open.png") : $(this).find("img").attr("src", "../images/details_close.png");
                });
                var imagecount = 0;

                $('.spanval').filter(function () {
                    return this.innerHTML.match(/^[0-9\s\.,]+$/);
                }).parent().css('float', 'right');
                $('#loader').hide();
            },
            error: function (error) {
                $('#Loading').css("display", "none");
                console.log(error);
                $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
            }
        });
        //setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}