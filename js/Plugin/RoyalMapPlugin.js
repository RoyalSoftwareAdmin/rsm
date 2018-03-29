/*! Map Plugin v1.0.1 | (c) Invendis Technologies */
$.fn.invMapPlugin = function (params) {
    var ID = this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            id: '',
            timeType: '',
            Refreshtime: 200000,
            OutputType: 1,
            alarmcount: 0
        };
        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.TimeType = options.timeType;
        options.apiEntity.OutputType = options.OutputType;
        options.apiEntity.AlarmCount = options.alarmcount;

        var map, icon = '',
        icon = {
            //url: "../images/location.png", // url
            //scaledSize: new google.maps.Size(15, 20), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                $('#loader').show();
                var contentString = '';
                var datakeyslength = Object.keys(result).length;
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[1], parentkeyheader = Object.keys(result)[0];
                }
                var infowindow = new google.maps.InfoWindow();
                //var Lat = (result.tableData.Lat != "") ? parseFloat(result.tableData[0].Lat) : 20.5937;
                //var Long = (result.tableData.Long != "") ? parseFloat(result.tableData[0].Long) : 78.9629;
                var Lat = 20.5937;
                var Long = 78.9629;
                var mapProp = {
                    center: new google.maps.LatLng(Lat , Long),
                    zoom: 5,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById(ID), mapProp);
                var maplength = result[parentkeylabel].length, lengthofheader = result[parentkeyheader].length;
                for (var j = 0; j < maplength; j++) {
                    var latitudelabel = Object.keys(result[parentkeylabel][j])[3], latitudeval = result[parentkeylabel][j][latitudelabel],
                        longitudelabel = Object.keys(result[parentkeylabel][j])[4], longitudeval = result[parentkeylabel][j][longitudelabel],
                        sitecodelabel = Object.keys(result[parentkeylabel][j])[0], sitenamelabel = Object.keys(result[parentkeylabel][j])[2],
                        energylabel = Object.keys(result[parentkeylabel][j])[5], sitecodeval = result[parentkeylabel][j][sitecodelabel],
                        sitenameval = result[parentkeylabel][j][sitenamelabel], energyval = result[parentkeylabel][j][energylabel],
                        PlantIDLabel = Object.keys(result[parentkeylabel][j])[5], PlantIDval = result[parentkeylabel][j][PlantIDLabel],
                        SiteCatLabel = Object.keys(result[parentkeylabel][j])[6], SiteCatval = result[parentkeylabel][j][SiteCatLabel],
                        Noofinverters = result[parentkeylabel][j]["No Of Invertors"], statuslbal = Object.keys(result[parentkeylabel][j])[1], ststusval = result[parentkeylabel][j][statuslbal];
                    ststusval = parseInt(ststusval);
                    if (ststusval === 1) {
                        icon.url = "../images/map_icon.png";
                        icon.scaledSize = new google.maps.Size(20, 20);
                    } else {
                        icon.url = "../images/location.png";
                        icon.scaledSize = new google.maps.Size(15, 20);

                    }
                    //mapProp.center = new google.maps.LatLng(latitudeval, longitudeval);
                    //mapProp.zoom = 12
                    
                    localStorage.setItem("InvertersCountforGrid", Noofinverters);
                    latLng = new google.maps.LatLng(latitudeval, longitudeval),
                        marker = new google.maps.Marker({
                            position: latLng,
                            map: map,
                            icon: icon
                        });
                    var actualValUnits = energyval.split('~'),
                        Inverterlink = "InverterDashboard.aspx?SiteID=" + PlantIDval,
                        EnergyDashboardlink = "EnergyDashboard.aspx?SiteID=" + PlantIDval,
                        EnergyCalendarlink = "EnergyCalendar.aspx?SiteID=" + PlantIDval,
                        Diagramlink = "PlantOperationalDashboardDiagram.aspx?SiteID=" + PlantIDval,
                        Alarmloglink = "AlarmLog.aspx?SiteID=" + PlantIDval;

                    (actualValUnits[1] == null || actualValUnits[1] == "") ? actualValUnits[1] = "" : actualValUnits[1] = actualValUnits[1];
                    contentString = "<div id=content" + j + ">" +
                                        "<p class=field_content_1>" + sitecodelabel + ":<span class=field_values_1> " + sitecodeval + "</span></p>" +
                                        "<p class=field_content_1>" + sitenamelabel + ":<span class=field_values_1> " + sitenameval + "</span></p>" +
                                        "<p class=field_content_1>" + energylabel + ": <span class=field_values_1>" + actualValUnits[0] + "&nbsp;" +
                                        "<span class=field_units>" + actualValUnits[1] + "</span></span></p>" +
                                        //"<span class='linktodashboard redirectlinks'><a id='dashboardredirect' onclick='redirecttoPAGE(" + PlantIDval + "," + SiteCatval + ");'><img src='../images/PODB.png' title='Plant Dashboard' width='30' height='30'/></a></span>" +
                                        //"<span class='linktodashboard redirectlinks'><a id='Inverterredirect' onclick=gotoopenPage('" + Inverterlink + "',true)><img src='../images/IDB.png' title='Inverter Dashboard' width='30' height='30'/></a></span>" +
                                        //"<span class='linktodashboard redirectlinks'><a id='EnergyDashboardredirect' onclick=gotoopenPage('" + EnergyDashboardlink + "',true)><img src='../images/EDB.png' title='Energy Dashboard' width='30' height='30'/></a></span>" +
                                        //"<span class='linktodashboard redirectlinks'><a id='EnergyCalendarredirect' onclick=gotoopenPage('" + EnergyCalendarlink + "',true)><img src='../images/ECDB.png' title='Energy Calendar' width='30' height='30'/></a></span>" +
                                        //"<span class='linktodashboard redirectlinks'><a id='Diagramredirect' onclick=gotoopenPage('" + Diagramlink + "',true)><img src='../images/DDB.png' title='Site Layout' width='30' height='30'/></a></span>" +
                                        //"<span class='linktodashboard redirectlinks'><a id='Alarmlogredirect' onclick=gotoopenPage('" + Alarmloglink + "',true)><img src='../images/ALDB.png' title='Alarm Log' width='30' height='30'/></a></span>" +
                                    "</div>";
                    bindInfoWindow(marker, map, infowindow, contentString);
                }
                function bindInfoWindow(marker, map, infowindow, contentString) {
                    var maplength = result[parentkeylabel].length;
                    for (var i = 0; i < maplength; i++) {
                        var label1 = Object.keys(result[parentkeylabel][i]).length;
                        google.maps.event.addListener(marker, 'click', function () {
                            infowindow.setContent(contentString);
                            infowindow.open(map, marker);
                        });
                    }
                }
                google.maps.event.addDomListener(window, 'load');
                $('#loader').hide();
            },
            error: function (error) {
                $('#' + ID).html('<img src= "../images/default.gif" width="50" height="50" style="position: absolute;bottom: 0;right: 0;"  />').css({ "text-align": "center" });
                $('#loader').hide();
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}