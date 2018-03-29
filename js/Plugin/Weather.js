/*! Custom Weather v1.0.1 | (c) Invendis Technologies */
$.fn.weatherFeed = function (options) {
    var id = this.attr('id');
    var ID = '#' + this.attr('id');
    var defaults = {
        relativeTimeZone: '',
        host: '',
        apiEntity: '',
        layoutID: '',
        id: '',
        timeType: '',
        OutputType: 1,
        alarmcount: 0
    };
    var options = $.extend({}, defaults, options);
    options.apiEntity.LayoutID = options.layoutID;
    options.apiEntity.TimeType = options.timeType;
    options.apiEntity.OutputType = options.OutputType;
    options.apiEntity.AlarmCount = options.alarmcount;

    $.ajax({
        type: "post",
        url: options.host + "?ts" + new Date(),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(options.apiEntity),
        success: function (data) {
            //console.log(new Date());
            var datakeyslength = Object.keys(data).length, length = '';
            if (datakeyslength !== 0) {
                for (var PKey = 0; PKey < datakeyslength; PKey++) {
                    var parentkeylabel = Object.keys(data)[PKey];
                }
                if (data[parentkeylabel] !== null) {
                    length = data[parentkeylabel].length;
                    if (length !== 0) {
                        for (var j = 0; j < length; j++) {
                            var latitudelabel = Object.keys(data[parentkeylabel][j])[2], longitudelabel = Object.keys(data[parentkeylabel][j])[3], latitudeval = data[parentkeylabel][j][latitudelabel],
                                longitudeval = data[parentkeylabel][j][longitudelabel];
                        }
                        //options = options || {};
                        var tryCount = 0, $weatherTag = $(ID);
                        $weatherTag.css("width", options.width);
                        var days = 5, location = "", time = "", image = "", description = "", day = "", high = "", low = "", wind = "", humidity = "", dayDOM = "", codeImgURL = "../images/weather/",
                        lat = latitudeval, lang = longitudeval;
                        var loadBar = '<div class="loading"><span style="position: absolute;bottom:5px;font-style: italic;color: #666666;right:14px;">Loading...</span></div>';
                        if (options.bool == true) {
                            $weatherTag.html(loadBar).css("height", "37px");
                        } else {
                            $weatherTag.html(loadBar).css("height", "175px");
                        }
                        //$weatherTag.find(".loading").progressbar({ value: false });
                        var host = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(' + lat + '%2C' + lang + ')%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
                        $.ajax({
                            url: host,
                            dataType: "json",
                            success: function (data) {
                                var weathercontent = '';
                                weathercontent += '<table width="100%">' +
                                                '<tr>' +
                                                    '<td width="1px" id="modelweatherblock"></td>' +
                                                    '<td width="120px;"><span id="WeatherStatus" class="field_content_1 WeatherStatus_' + id + '"></span></td>' +
                                                    '<td width="130px;" align="right" id="tempvalue" class="tempvalue' + id + '"></td>' +
                                                    '<td class="textalign weatherimg' + id + '" id="weatherimg' + id + '"></td>' +
                                                    '<td id="weatherforecast" class="weatherforecast_' + id + '"></td>' +
                                                '</tr>' +
                                            '</table>' +
                                           '</div></div>';
                                $(ID).html(weathercontent);
                                var farenheatval = '';
                                farenheatval = data.query.results.channel.item.condition.temp;
                                var calculatedVal1 = (5 / 9 * (farenheatval - 32)).toFixed(0), todaydateval = data.query.results.channel.item.condition.date,
                                    dateaftertrim = $.trim(((todaydateval).split(',')[1]).slice(0, -12));
                                if (options.bool == true) {
                                    var $dayhtml = '<div style="margin-top:-31px;text-align:right;">';
                                    $dayhtml += '<ul style="display:grid;">';
                                    for (var i = 0; i < 3; i++) {
                                        if (i == 0) {
                                            $dayhtml += '<li class="weather_label_link_' + id + ' active daylink" id="link-' + i + '">Today</li>';
                                        } else {
                                            $dayhtml += '<li class="weather_label_link_' + id + ' forecast-' + id + ' current daylink" id="link-' + i + '">' + data.query.results.channel.item.forecast[i].day + '</li>';
                                        }
                                    }
                                    $dayhtml += '</ul>';
                                    $dayhtml += '</div>';
                                    var todaytempcontent = "<span class='field_values_1 tempvalue' id='changevalue-0'>" + calculatedVal1 + " </span><span class='field_units'><sup class='degree'>&deg;C</sup><sub class='degree farenheatval' id='farenheatval-0'>&deg;F</sub></span>";
                                    //todaytempcontent += "<sup class='degree'> | </sup><span class='field_values_1 tempvalue' id='farenheat-0'></span><span class='field_units farenheatval' id='farenheatval-0'><sup class='degree'>&deg;F</sup></span>";
                                    var imagecontent = "<img class='img_weather_1' src='" + codeImgURL + data.query.results.channel.item.condition.code + ".png'/>";
                                    $('.weatherforecast_' + id).html($dayhtml);
                                    $('.WeatherStatus_' + id).html(data.query.results.channel.item.condition.text);
                                    $('.tempvalue' + id).html(todaytempcontent);
                                    $('.weatherimg' + id).html(imagecontent);
                                    $(document).on("click", ".daylink", function () {
                                        var idval = $(this).attr("id"), idaftertrim = idval.substring(5), nthid = idaftertrim - 1;
                                        $('.daylink').addClass("current");
                                        $('#' + idval).removeClass("current");
                                        if (idaftertrim == 0) {
                                            $('.WeatherStatus_' + id).html(data.query.results.channel.item.condition.text);
                                            $('.tempvalue' + id).html(todaytempcontent);
                                            $('.weatherimg' + id).html(imagecontent);
                                        } else {
                                            var farenheatvalnew = data.query.results.channel.item.forecast[idaftertrim].high;
                                            var calculatedValnew = (5 / 9 * (farenheatvalnew - 32)).toFixed(0),
                                                forecasttempcontent = "<span class='field_values_1 tempvalue' id='changevalue-" + idaftertrim + "'>" + calculatedValnew + " </span><span class='field_units'><sup class='degree'>&deg;C</sup><sub class='degree farenheatval' id='farenheatval-" + idaftertrim + "'>&deg;F</sub></span>";
                                            //forecasttempcontent += "<sup class='degree'> | </sup><span class='field_values_1 tempvalue' id='farenheat-" + idaftertrim + "'></span><span class='field_units farenheatval'  id='farenheatval-" + idaftertrim + "'><sup class='degree'>&deg;F</sup></span>";
                                            var imagecontent_1 = "<img class='img_weather_1' src='" + codeImgURL + data.query.results.channel.item.forecast[idaftertrim].code + ".png'/>";
                                            $('.tempvalue' + id).html(forecasttempcontent);
                                            $('.WeatherStatus_' + id).html(data.query.results.channel.item.forecast[idaftertrim].text);
                                            $('.weatherimg' + id).html(imagecontent_1);
                                            $('.farenheatval' + id).addClass("current");
                                        }
                                    });
                                    $('.farenheatval').addClass("current");
                                    $(document).on("click", ".farenheatval", function () {
                                        var idval_1 = $(this).attr("id"), idaftertrim_1 = idval_1.substring(13);
                                        $('.farenheatval').css("color", "#666666");
                                        if (idaftertrim_1 == 0) {
                                            $('#changevalue-' + idaftertrim_1).html(data.query.results.channel.item.condition.temp);
                                        } else {
                                            $('#changevalue-' + idaftertrim_1).html(data.query.results.channel.item.forecast[idaftertrim_1].high);
                                        }
                                    });
                                } else {
                                    var weatherListItem = '';
                                    weatherListItem += "<ul class='weatherSummary'>";
                                    day = "<p class='heading_1'>Today</p>";
                                    image = "<img class='img_weather' src='" + codeImgURL + data.query.results.channel.item.condition.code + ".png'/>";
                                    date = "<p class='field_content_1'>" + dateaftertrim + "</p>";
                                    high = "<p><span class='field_values_1'>" + calculatedVal1 + " &deg;C</span><span class='field_values_1'> | " + farenheatval + " &deg;F</span></p>";
                                    //(data.query.results.channel.item.condition.text == "Scattered Thunderstorms") ? data.query.results.channel.item.condition.text == "Scat. Thunderstorms" : data.query.results.channel.item.condition.text = data.query.results.channel.item.condition.text;
                                    description = "<p class='field_content_1'>" + data.query.results.channel.item.condition.text + "</p>";
                                    dayDom = "<li class='today'>" + day + image + date + description + high + "</li>";
                                    for (var i = 0; i < 3; i++) {
                                        if (i == 0) { }
                                        else {
                                            farenheatval = data.query.results.channel.item.forecast[i].high;
                                            var calculatedVal1 = (5 / 9 * (farenheatval - 32)).toFixed(0);
                                            day = "<p class='heading_1'>" + data.query.results.channel.item.forecast[i].day + "</p>";
                                            date = "<p class='field_content_1'>" + data.query.results.channel.item.forecast[i].date + "</p>";
                                            image = "<img class='img_weather' src='" + codeImgURL + data.query.results.channel.item.forecast[i].code + ".png'/>";
                                            high = "<span class='field_values_1'>" + calculatedVal1 + " &deg;C</span> <span class='field_values_1'> | " + farenheatval + " &deg;F</span>";
                                            description = "<p class='field_content_1'>" + data.query.results.channel.item.forecast[i].text + "</p>";
                                            dayDom = "<li class='fullDay forecast'>" + day + image + date + description + "<p>" + high + "</p></li>";
                                        }
                                        weatherListItem += dayDom; //update progress bar
                                    }
                                    weatherListItem += "</ul>";
                                    $weatherTag.html(weatherListItem);
                                }
                            },
                            error: function (xhr, textStatus, errorThrown) {
                                $(ID).html('<span style="position: absolute;bottom: 0;right: 15px;">No Data</span>').css({ "text-align": "center" });
                            },
                            complete: function () {
                                $weatherTag.find(".loading").hide();
                                $weatherTag.find(options.id).show();
                                options.tryCount = 0;
                            }
                        });
                    }
                } else {
                    $(ID).html('<span style="position: absolute;bottom: 0;right: 15px;">No Data</span>').css({ "text-align": "center" });
                }
            } else {
                $(ID).html('<span style="position: absolute;bottom: 0;right: 15px;">No Data</span>').css({ "text-align": "center" });
            }
        },
        error: function (error) {
            $(ID).html('<span style="position: absolute;bottom: 0;right: 15px;">No Data</span>').css({ "text-align": "center" });
        }
    });
}