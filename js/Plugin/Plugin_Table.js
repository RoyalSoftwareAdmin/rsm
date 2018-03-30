/*! Grid v1.0.1 | (c) Invendis Technologies */
$.fn.Plugin_Table = function (params) {
    var ID = '#' + this.attr('id'), tableid = this.attr('id');
    if (ID == "#undefined") {
        ID = '.' + this.attr('class').split(" ").pop();
        tableid = this.attr('class').split(" ").pop();
    }

    var defaults = {
        bool: '',
        timeType: '',
        alarmcount: 0,
        Hidecolumn: true,
        ClickColumns: '',
        clickrequired: false,
        MergeColumns: ''
    };

    var options = $.extend({}, defaults, params);
    var result = options.resultData;
    gettableresult = result;
    imagebool = true,
        datakeyslength = Object.keys(result).length,
        $dynamictable = '',
        labelvalue = '',
        unitsval = '',
        alarmtext = '',
        headerlabels = '';
    var rowValue = {};
    rowValue["Div"] = tableid;
    rowValue["LevelID"] = options.LevelID;

    for (var PKey = 0; PKey < datakeyslength; PKey++) {
        var parentkeylabel = Object.keys(result)[1],        // Table Data
            parentkeyheader = Object.keys(result)[0];       // Table Header
        getParentKeyLabel_1 = parentkeylabel;
        break;
    }
    if (result[parentkeylabel] != null) {
        var lengthofjson = result[parentkeylabel].length,
            lengthofheader = result[parentkeyheader].length,
            lbllength = Object.keys(result[parentkeyheader][0]).length;
        $dynamictable += '<table id=table_' + tableid + ' class="search-table table noborder">';
        $dynamictable += '<thead>';
        $dynamictable += '<tr class="divtitle heading_2">';
        if (options.checkbox == true) {
            $dynamictable += '<th class="field_content_2"></th>';
        }
        for (var i = 0; i < lengthofheader; i++) {
            innerkeylength = Object.keys(result[parentkeyheader][i]).length,
            headerlabels = result[parentkeyheader][i].heading;
            if (headerlabels == "AlarmPin" || headerlabels == "id" || headerlabels == "ID" || headerlabels == "TenantID") {  //|| headerlabels == "id"
            } else {
                $dynamictable += '<th class="field_content_2">' + headerlabels + '</th>';
            }
        }
        $dynamictable += '</tr>';
        $dynamictable += '</thead>';
        var nullvalidation1 = result[parentkeylabel].length;
        if (lengthofheader !== 0 && nullvalidation1 !== 0) {
            var innerkeylabel = Object.keys(result[parentkeylabel][0]).length,
               index2 = Object.keys(result[parentkeylabel][0])[0],
               keylength = (result[parentkeylabel][0][index2]).length,
               count = 1,
               siteText = "";

            for (var k = 0; k < keylength; k++) {
                $dynamictable += '<tr class=tr-' + k + "_" + tableid + ' id=trid_' + tableid + '' + k + ' style="background-color:#ffffff;">';
                var columnVal = options.ClickColumns;
                if(options.checkbox == true){
                    $dynamictable += '<td id=ID_' + tableid + '_' + count + ' class="td_checkbox"><input type="checkbox" name="gridcheckbox" class="gridcheckbox" onchange=checkboxFunc(CompleteData)></td>';
                }
                for (var j = 0; j < innerkeylabel; j++) {
                    var index1 = Object.keys(result[parentkeylabel][0])[j],
                        labelvalue = result[parentkeylabel][0][index1][k],
                        actualValUnits = labelvalue.split('~');
                        rowValue[index1.replace(/\s|>+/g, '_')] = labelvalue.replace(/\s+/g, '_');

                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                    if (index1 == "AlarmPin" || index1 == "id" || index1 == "ID" || index1 == "TenantID") { }
                    else {                        
                        if (actualValUnits[0] === "Site outage (Derived) (c) " || actualValUnits[0] === "Site outage (Derived) (o) ") {
                            $dynamictable += '<td id=ID_' + tableid + '_' + count + ' class="clickDisable field_values_1 tdclass" style="color:#E53935;">' +
                          '<span class="spanvalunits"><span class="spanval">' + actualValUnits[0] + '</span>&nbsp;' +
                          '<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                        }
                        else if (columnVal.includes(j.toString())) {
                            $dynamictable += '<td id=ID_' + tableid + '_' + count + ' class="clickDisable field_values_1 tdclass" style="font-weight:normal;">' +
                                '<span class="spanvalunits"><span class="spanval ' + options.getclass + '"><a class="alarmclick" onclick=redirecttopage(CompleteData)>' + actualValUnits[0] + '</a></span>&nbsp;' +
                                '<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                        }
                        else {
                            getclickedsite = actualValUnits[0];
                            $dynamictable += '<td id=ID_' + tableid + '_' + count + ' class="clickDisable field_values_1 tdclass" style="font-weight:normal;">' +
                            '<span class="spanvalunits"><span class="spanval ' + options.getclass + '">' + actualValUnits[0] + '</span>&nbsp;' +
                            '<span class=field_units>' + actualValUnits[1] + '</span></span></td>';
                        }
                        count++;
                    }
                }
                $dynamictable = $dynamictable.replace(new RegExp('CompleteData', 'g'), JSON.stringify(rowValue));
            }
        }
        $dynamictable += '</table>';
        $(ID).html("");
        $(ID).html($dynamictable);
      
        if (keylength >= 5 && options.datatablerequired == true) {
            $("#table_" + tableid).DataTable({
                lengthMenu: [5, 10, 50, 100]
            });
        }

        // $('.spanval').filter(function () {
        //     return this.innerHTML.match(/^[0-9\s\.,]+$/);
        // }).parent().css('float', 'right');

        if (options.withvalue == true && options.getclass == "Alarmlog") {
            $('.' + options.getclass).filter(function () {
                if (this.innerHTML == "") {
                    var trid = $(this).parent().parent().parent().find('tr').prevObject["0"].id;
                    $('#' + trid).remove();
                }
            });
        } else {
        }
        if (options.MergeColumns != '') {
            $(ID).each(function () {
                MergeColumns = options.MergeColumns.split(",");
                for (let k = 0 ; k < MergeColumns.length ; k++) {
                    var Column_number_to_Merge = k;
                    var Previous_TD = prev_td = null;
                    var i = 1;
                    $("tbody", this).find('tr').each(function () {
                        var Current_td = $(this).find('td:nth-child(' + Column_number_to_Merge + ')'),
                            last_td = $(this).find('td:nth-child(' + result.tableHeader.length + ')');

                        if (Previous_TD == null || last_td == null) {
                            Previous_TD = Current_td;
                            prev_td = last_td;
                            i = 1;
                        }
                        else if (Current_td.text() == Previous_TD.text() && last_td.text() == prev_td.text()) {
                            Current_td.remove();
                            last_td.remove();
                            Previous_TD.attr('rowspan', i + 1);
                            prev_td.attr('rowspan', i + 1);
                            i = i + 1;
                        }
                        else {
                            Previous_TD = Current_td;
                            prev_td = last_td;
                            i = 1;
                        }
                    });
                }
            });

        }
    }

    else {
        $(ID).html('<h5 class="Notetext">No Data Available</h5>');
    }

}