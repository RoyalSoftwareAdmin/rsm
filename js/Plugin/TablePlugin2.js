$.fn.invTablePlugin2 = function (params) {
    var ID = '#' + this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            id: '',
            Refreshtime: 200000,
            OutputType: 1
        };

        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;

        $.ajax({
            type: "POST",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                console.log(new Date());
                var datakeyslength = Object.keys(result).length, unit = '';
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0];
                    break;
                }
                var length = result[parentkeylabel].length, $table = '', primaryID = '', primaryIDval = '';
                for (var i = 0; i < length; i++) {
                    $table += '<div class="tabledata">';
                    var insidelebellength = Object.keys(result[parentkeylabel][i]).length, totalenergylabel = Object.keys(result[parentkeylabel][i])[3], totalenergyval = result[parentkeylabel][i][totalenergylabel];
                    $('#totalenergyval').html(totalenergyval + "&nbsp;<span class=field_units>kWh</span>");
                    for (var j = 0; j < insidelebellength; j++) {
                        if (j == 0) {
                            primaryID = Object.keys(result[parentkeylabel][i])[j], primaryIDval = result[parentkeylabel][i][primaryID];
                        } else {
                            var labelhead1 = result[parentkeyheader][j].heading, label0 = Object.keys(result[parentkeylabel][i])[j], label1 = Object.keys(result[parentkeylabel][i])[j + 1];
                            $table += '<h5 class="table-heading heading_3 rowToClick" data-toggle="collapse" data-target="#accordion' + i + '"><span>' + result[parentkeylabel][i][label0] + '</span> | <span>' + result[parentkeylabel][i][label1] + '</span><span class="linktodashboard"><a href="PlantOperationalDashboard.aspx?SiteID=' + primaryIDval + '">Plant Dashboard</a></span></h5>';
                            $table += '<table class="table maintable">';
                            $table += '<tr>';
                            break;
                        }
                    }
                    $table += '<td class="td_left" width="50%">';
                    if (Math.abs(insidelebellength % 2) == 1) { //odd
                        var leftcolumncount = Math.floor(insidelebellength / 2), y = 0;
                        for (y = 2; y < leftcolumncount + 2; y++) {
                            if (y !== 2) {
                                var lbl2 = Object.keys(result[parentkeylabel][i])[y], labelOdd1 = result[parentkeyheader][y].heading, labelOddunit = result[parentkeyheader][y].units;
                                $table += '<p><span class="field_content_1">' + labelOdd1 + ' : </span><span class="field_values_1">' + result[parentkeylabel][i][lbl2] + '&nbsp;<span class=field_units>' + labelOddunit + '</span></span></p>';
                            }
                        }
                        $table += '</td>';
                        $table += '<td>';
                        for (var n = y; n < insidelebellength; n++) {
                            var lbl4 = Object.keys(result[parentkeylabel][i])[n],
                                labelOdd2 = result[parentkeyheader][n].heading,
                                labelOddunit2 = result[parentkeyheader][n].units;
                            $table += '<p><span class="field_content_1">' + labelOdd2 + ' : </span><span class="field_values_1">' + result[parentkeylabel][i][lbl4] + '&nbsp;<span class=field_units>' + labelOddunit2 + '</span></span></p>';
                        }
                    } else {  //even
                        var leftcolumncount = Math.floor((insidelebellength - 2) / 2), x = 0;
                        for (x = 2; x < leftcolumncount + 2; x++) {
                            if (x !== 2) {
                                var lbl2 = Object.keys(result[parentkeylabel][i])[x], labeleven1 = result[parentkeyheader][x].heading, labeleven1unit = result[parentkeyheader][x].units;
                                $table += '<p><span class="field_content_1">' + labeleven1 + ' : </span><span class="field_values_1">' + result[parentkeylabel][i][lbl2] + '&nbsp;<span class=field_units>' + labeleven1unit + '</span></span></p>';
                            }
                        }
                        $table += '</td>';
                        $table += '<td>';
                        for (var z = x; z < insidelebellength; z++) {
                            var labeleven2 = result[parentkeyheader][z].heading, labeleven2unit = result[parentkeyheader][z].units, lbl4 = Object.keys(result[parentkeylabel][i])[z];
                            $table += '<p><span class="field_content_1">' + labeleven2 + ' : </span><span class="field_values_1">' + result[parentkeylabel][i][lbl4] + '&nbsp;<span class=field_units>' + labeleven2unit + '</span></span></p>';
                        }
                    }
                    $table += '</td>';
                    $table += ' </tr>';
                    $table += '</table>';
                    $table += '</div>';
                    $table += '<table width="100%">';
                    $table += '<tr class="Tr3" style="background-color:#ffffff;">';
                    $table += '<td colspan="5"><div id="accordion' + i + '" class="collapse"><h5 class="table-heading-1 heading_1">Plant Details</h5><div class="tabledata" id="table_' + i + '"></div></td>';
                    $table += ' </tr>';
                    $table += '</table>';
                    $(".rowToClick").click(function () {
                        $('.Tr3').slideToggle();
                    });
                }
                $(ID).html($table);
            },
            error: function (error) {
                $(ID).html('<img src= "../images/default.gif" width="50" height="50" style="position: absolute;bottom: 0;right: 0;"  />').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}