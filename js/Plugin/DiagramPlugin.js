/*! Grid v1.0.1 | (c) Invendis Technologies */
$.fn.DiagramChart = function (params) {
    var ID = this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            Refreshtime: 10000
        };
        var options = $.extend({}, defaults, params);

        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                console.log(result);
                $("#loader").hide();
                if (ID == "divDesignDiagram") {
                    var JsonText = '';
                    if (result.tableData.length > 0 && result.tableData != null) {
                        var parentkeylabel = result.tableData[0];
                        JsonText = parentkeylabel["Diagram Json"];
                    }
                    RenderDiagram(JsonText);
                }
                else if (ID == "divDiagram")
                    DiagramPlugin(result);
            },
            error: function (error) {
                console.log(error);
                $(ID).html('<span style="position: absolute;bottom: 5px;right: 15px;font-style: italic;color: #666666;">No Data</span>').css({ "text-align": "center" });
            }
        });
    }
    startRefresh();
}


function DiagramPlugin(result) {
    var datakeyslength = Object.keys(result).length, labelvalue = '', DiagramJsonValue = '', InverterID = '', SolarInverterID = '', SjbID = "", PtrID = "";
    for (var PKey = 0; PKey < datakeyslength; PKey++) {
        var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0];
        break;
    }
    var lengthofjson = result[parentkeylabel].length, lengthofheader = result[parentkeyheader].length, nullvalidation1 = result[parentkeylabel].length;

    if (lengthofheader !== 0 && nullvalidation1 !== 0) {
        var innerkeylabel = Object.keys(result[parentkeylabel][0]).length, index2 = Object.keys(result[parentkeylabel][0])[0], keylength = (result[parentkeylabel][0][index2]).length,
        count = 1, counttr = 1, imageid = 1, _newRowflag = 0;
        for (var k = 0; k < keylength; k++) {
            for (var j = 0; j < innerkeylabel; j++) {
                var index1 = Object.keys(result[parentkeylabel][0])[j];
                labelvalue = result[parentkeylabel][0][index1][k];
                if (index1 == "Diagram Json")
                    DiagramJsonValue = labelvalue;
                else if (index1 == "Inverter ID")
                    InverterID = InverterID + "," + labelvalue;
                else if (index1 == "Solar Inverter ID")
                    SolarInverterID = SolarInverterID + "," + labelvalue;
                else if (index1 == "SJB ID")
                    SjbID = SjbID + "," + labelvalue;
                else if (index1 == "PTR ID")
                    PtrID = PtrID + "," + labelvalue;
            }
        }
        InverterID = InverterID.replace(/^,|,$/g, '');
        SolarInverterID = SolarInverterID.replace(/^,|,$/g, '');
    }
    drawDia(DiagramJsonValue, InverterID, SolarInverterID);
}


function RenderDiagram(JsonText) {
    joint.setTheme('modern');
    app = new App.MainView({ el: '#divDesignDiagram' });
    themePicker = new App.ThemePicker({ mainView: app });
    themePicker.render().$el.appendTo(document.body);
    app.graph.fromJSON(JSON.parse(JsonText[0]));
}

function drawDia(JSontext, InverterID, SolarInverterID) {
    var DiagramJson = '', Default = '',
        graph = new joint.dia.Graph,
        InverterIDarray = InverterID.split(','),
        SolarInverterIDarray = SolarInverterID.split(','),

        result = [],
        Sjbresult = [],
        PTRresult = [],
        pyranometerresult = [],
        Gridresult = [],
        paper = new joint.dia.Paper({
            el: $('#divDiagram'),
            gridSize: 10,
            interactive: false,
            model: graph
        });

    joint.setTheme('modern');

    //Diagram Render from JSON common
    if (JSontext != "") {
        DiagramJson = JSON.parse(JSontext);
    } else {
        Default = '{"cells":[{"type":"basic.Rect","position":{"x":285,"y":120},"size":{"width":260,"height":80},"angle":0,"id":"7ecc1173-887d-455d-aa69-ad25fe63c7c8","z":1,"attrs":{"rect":{"fill":"transparent","stroke":"#31d0c6","width":50,"height":30,"rx":2,"ry":2,"stroke-width":2,"stroke-dasharray":"0"},"text":{"fill":"#222138","text":"No Layout Available","font-size":21,"font-family":"Alegreya Sans","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}}]}';
        DiagramJson = JSON.parse(Default);
        $('#divDiagram').addClass("heightdiagram");
        $('.fullscreen').hide();
    }
    graph.fromJSON(DiagramJson);


    //Push data to array
    _.each(graph.getElements(), function (el) {
        if (el.get('type') === 'app.InverterModel') {
            result.push(el);
        }
        if (el.get('type') == 'app.PyranometerModel') {
            pyranometerresult.push(el);
        }
        if (el.get('type') === 'app.SjbModel') {
            Sjbresult.push(el);
        }
        if (el.get('type') === 'app.PtrModel') {
            PTRresult.push(el);
        }
        if (el.get('type') === 'app.GridModel') {
            Gridresult.push(el);
        }
    });

    //Function for Inverter
    entity.LayoutID = 201;
    entity.OutputType = 3;
    var resultjson = getresult({ apiEntity: entity });
    if (resultjson.tableData != null && resultjson.tableData.length > 0) {
        for (var index in result) {
            var theCell = result[index],
                id = theCell.attributes.type,
                ID = resultjson.tableData[0]['Inverter ID'][index],
                arrayvalues = resultjson.tableData[0].Power,
                inverterStatus = resultjson.tableData[0]['Inverter Status'][index],
                getvalues = arrayvalues[index].replace("~", " ");
            theCell.attr('.ID/text', ID);
            // if INVERTER OUTPUT is 0 --> show its STATUS instead of INV OUTPUT
            if (parseInt(getvalues[0]) > 0) {
                theCell.attr('.value/text', getvalues);
            } else {
                theCell.attr('.value/text', inverterStatus);
            }
            // change images according to INVERTER STATUS
            if (inverterStatus == "Online") {
                theCell.attr('image/xlink:href', "../js/Rappid_Design/assets/inverter-online.svg");

            } else {
                theCell.attr('image/xlink:href', "../js/Rappid_Design/assets/inverter-idle.svg");
            }
        }
    }

    //Function for SJB

    var sjbInputData = {
        "LayoutID": 311,
        "OutputType": 3,
        "host": genericAPI
    };

    var solarInverterIDarray = '';
    SJBresultjson = getSJBdata(sjbInputData);

    if (SJBresultjson.tableData != null && SJBresultjson.tableData.length > 0) {
        for (var index in Sjbresult) {
            var theCell = Sjbresult[index],
                id = theCell.attributes.type,
                label = SJBresultjson.tableData[0]['SMB'][index],
                internalID = SJBresultjson.tableData[0].SolarMPPTID[index],
                current = SJBresultjson.tableData[0]['Current'][index].replace("~", " ");
            theCell.attr('.ID/text', label);
            theCell.attr('.internalID/text', internalID);
            theCell.attr('.value/text', current);
        }
    }

    //Function for Pyranomater.
    entity.LayoutID = 205;
    entity.OutputType = 3;
    resultjson = getresult({ apiEntity: entity });
    for (var index in pyranometerresult) {

        var theCell = pyranometerresult[index],
            getvalues = resultjson.tableData[0].Radiation[index].replace("~", " ");
        theCell.attr('.value/text', getvalues);
    }   


    //Diagram Click Events
    paper.on('cell:pointerdown',
         function (cellView, evt, x, y) {
             if (cellView.model.attributes.type == "app.InverterModel") {
                 var CurrentInverter = cellView.model.attributes.attrs[".ID"].text;
                 getInvDetails(CurrentInverter);
             } else if (cellView.model.attributes.type == "app.PyranometerModel") {
                 DisplayModel("", "", "Radiation")
             }
             else if (cellView.model.attributes.type == "app.SjbModel") {
                 var CurrentSjb = cellView.model.attributes.attrs[".internalID"].text,
                 currentLabel = cellView.model.attributes.attrs[".ID"].text;
                 getSJBdetails(currentLabel, CurrentSjb);
             }
         }
     );
    var heightofsvg = $('g#v-3').height(),
        heightofsvg_1 = $('svg#v-2').height(),
        setheight = '',
        heightroundup = parseInt(Math.round(heightofsvg));

    if (heightroundup > heightofsvg_1) {
        setheight = (heightroundup + 45) + "px";
        $('svg#v-2').attr("style", "position:absolute;height:" + setheight);
    } else {
        $('svg#v-2').css("position", "absolute");
    }
};