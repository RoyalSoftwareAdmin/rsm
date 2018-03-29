$.fn.invMapPlugin = function (params) {
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',
            id: '',
            timeType: '',
            Refreshtime: 200000,
            OutputType: 1
        };
        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.TimeType = options.timeType;
        options.apiEntity.OutputType = options.OutputType;

        var map, icon = '../images/map_icon.png';
        $.ajax({
            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),
            success: function (result) {
                console.log(new Date());
                var contentString = '';
                var datakeyslength = Object.keys(result).length;
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(result)[PKey];
                }
                var infowindow = new google.maps.InfoWindow();
                function initialize() {
                    var mapProp = {
                        center: new google.maps.LatLng(26.7347, 83.3362), //LLANDRINDOD WELLS
                        zoom: 5,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    map = new google.maps.Map(document.getElementById(options.id), mapProp);
                    var maplength = result[parentkeylabel].length;
                    for (var j = 0; j < maplength; j++) {
                        var latitudelabel = Object.keys(result[parentkeylabel][j])[2], longitudelabel = Object.keys(result[parentkeylabel][j])[3],
                            latitudeval = result[parentkeylabel][j][latitudelabel], longitudeval = result[parentkeylabel][j][longitudelabel],
                            sitecodelabel = Object.keys(result[parentkeylabel][j])[0], sitenamelabel = Object.keys(result[parentkeylabel][j])[1],
                            energylabel = Object.keys(result[parentkeylabel][j])[4], sitecodeval = result[parentkeylabel][j][sitecodelabel],
                            sitenameval = result[parentkeylabel][j][sitenamelabel], energyval = result[parentkeylabel][j][energylabel];
                        latLng = new google.maps.LatLng(latitudeval, longitudeval),
                            marker = new google.maps.Marker({
                                position: latLng,
                                map: map,
                                icon: icon
                            });
                        contentString = '<div id="content' + j + '"><p class="field_content_1">' + sitecodelabel + ':<span class="field_values_1"> ' + sitecodeval + '</span></p><p class="field_content_1">' + sitenamelabel + ':<span class="field_values_1"> ' + sitenameval + '</span></p><p class="field_content_1">' + energylabel + ': <span class="field_values_1">' + energyval + '&nbsp;<span class="field_units">kWh</span></span></p></div>';
                        bindInfoWindow(marker, map, infowindow, contentString);
                    }
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
                google.maps.event.addDomListener(window, 'load', initialize);
            },
            error: function (error) {
                $(options.id).html('<img src= "../images/default.gif" width="50" height="50" style="position: absolute;bottom: 0;right: 0;"  />').css({ "text-align": "center" });
            }
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}