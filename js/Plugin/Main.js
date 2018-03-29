
$.fn.invTablePlugin = function (params) {
    var ID = '#' + this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            bool: '',
            timeType: '',
            Refreshtime: '600000',
            OutputType: 1
        };

        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.TimeType = options.timeType;

        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                console.log(new Date());
                var datakeyslength = Object.keys(result).length;
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0], $dynamictable = '', labelvalue = '';
                    break;
                }
                var lengthofjson = result[parentkeylabel].length, lengthofheader = result[parentkeyheader].length, lbllength = Object.keys(result[parentkeyheader][0]).length;
                $dynamictable += '<table id="tab" class="table table-bordered">';
                $dynamictable += '<thead>';
                $dynamictable += '<tr class="divtitle heading_2">';
                for (var i = 0; i < lengthofheader; i++) {
                    innerkeylength = Object.keys(result[parentkeyheader][i]).length, headerlabels = result[parentkeyheader][i].heading;
                    $dynamictable += '<th class="field_content_2">' + headerlabels + '</th>'
                }
                $dynamictable += '</tr>';
                $dynamictable += '</thead>';
                var nullvalidation1 = result[parentkeylabel].length;
                if (lengthofheader !== 0 && nullvalidation1 !== 0) {
                    var innerkeylabel = Object.keys(result[parentkeylabel][0]).length, index2 = Object.keys(result[parentkeylabel][0])[0], keylength = (result[parentkeylabel][0][index2]).length,
                    count = 1, counttr = 1, imageid = 1;
                    for (var k = 0; k < keylength; k++) {
                        $dynamictable += '<tr class="trclass" style="background-color:#ffffff;" data-toggle="collapse" data-target="#accordion' + [k + 1] + '">';
                        for (var j = 0; j < innerkeylabel; j++) {
                            var index1 = Object.keys(result[parentkeylabel][0])[j], units = result[parentkeyheader][j].units;
                            if (index1 == "diolTimeStamp") {
                                labelvalue = result[parentkeylabel][0][index1][k];
                                $dynamictable += '<td id=ids_' + counttr + ' class="rowToClick tdclass" width="200px"><img src="../images/details_open.png" />' + labelvalue + '</td>';
                                counttr++;
                            } else if (index1 == "image") {
                                $dynamictable += '<td class="clickDisable field_values_1 tdclass"><img class="alarmimage" id=imageid_' + imageid + ' src="../images/critical.jpg" height="20" /><span class="statuscoumn">Alarm ' + imageid + '</span></td>';
                                imageid++;
                            } else if (count == 1 && options.bool == true) {
                                labelvalue = result[parentkeylabel][0][index1][k];
                                $dynamictable += '<td id=id_' + count + ' class="clickDisable field_values_1 tdclass"><a href="InverterDashboard.aspx?SiteID=' + [k + 1] + '" class="linktoinverterdb">' + labelvalue + '</a></td>';
                                count++;
                            } else {
                                labelvalue = result[parentkeylabel][0][index1][k];                                
                                $dynamictable += '<td id=id_' + count + ' class="clickDisable field_values_1 tdclass">' + labelvalue + '</td>';
                                count++;
                            }
                        }                        
                        $dynamictable += '</tr>';
                        $dynamictable += '<tr id=hidetr' + [k + 1] + ' class="Tr3" style="background-color:#ffffff;">';
                        $dynamictable += '<td colspan=' + innerkeylabel + ' id=hidetd' + [k + 1] + '> <div id="accordion' + [k + 1] + '" class="collapse">Hidden by default' + [k + 1] + '</div></td>';
                        $dynamictable += '</tr>';
                    }
                } else {
                    var actual = '0';
                    $dynamictable += '<tr>';
                    for (var nodata = 0; nodata < lengthofheader; nodata++) {
                        $dynamictable += '<td class="clickDisable field_values_1 tdclass">' + actual + '</td>';
                    }
                    $dynamictable += '</tr>';
                }
                $dynamictable += '</table>';                                
                $(ID).html($dynamictable);
                $(".Tr3").hide();
                $("td.rowToClick").click(function () {
                    $(this).parent().next("tr").slideToggle();
                    ($(this).find("img").attr("src") == "../images/details_close.png") ? $(this).find("img").attr("src", "../images/details_open.png") : $(this).find("img").attr("src", "../images/details_close.png");
                });
                var imagecount = 0;
                $('.alarmimage').each(function () {
                    (result.tableData[0].image[imagecount].status == 0) ? $(this).attr("src", "../images/normal.jpg") : (result.tableData[0].image[imagecount].status == 1) ? $(this).attr("src", "../images/critical.jpg") : (result.tableData[0].image[imagecount].status == 2) ? $(this).attr("src", "../images/major.jpg") : (result.tableData[0].image[imagecount].status == 3) ? $(this).attr("src", "../images/minor.jpg") : $(this).attr("src", "../images/NotConnected.jpg");
                    imagecount++;
                });
                $('.tdclass').filter(function () {
                    return this.innerHTML.match(/^[0-9\s\.,]+$/);
                }).css('text-align', 'right');               
            },
            error: function (error) {
                console.log(error);
                $(ID).html('<img src= "../images/default.gif" width="50" height="50" style="position: absolute;bottom: 0;right: 0;"  />').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}