$.fn.invChartPlugin = function (params) {
    var ID = this.attr('id');
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            layoutID: '',           
            multipleYaxis: '',
            timeType: '',
            Refreshtime: '600000',
            OutputType:1
        };

        var options = $.extend({}, defaults, params);
        options.apiEntity.LayoutID = options.layoutID;
        options.apiEntity.TimeType = options.timeType;
        options.apiEntity.OutputType = options.OutputType;

        $.ajax({

            type: "post",
            url: options.host + "?ts" + new Date(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(options.apiEntity),

            success: function (result) {
                console.log(new Date());
                var seriesArr = [], series = '', tablelength = result.tableHeader.length, datalength = result.tableData.length, yaxisArr = [], yaxis = '';
                if (datalength !== 0) {
                    for (var lengthofkey = 1; lengthofkey < tablelength; lengthofkey++) {

                        var chartlabel = result.tableHeader[lengthofkey].heading, label = Object.keys(result.tableData[0])[lengthofkey];
                        if (label != "image") {
                            var label1 = result.tableHeader[lengthofkey].seriesType, datavalues = result.tableData[0][label], realdata = JSON.parse('[' + datavalues + ']');
                            var minimum = Math.min.apply(Math, realdata);
                            if (options.multipleYaxis == false) {
                                series = {
                                    name: chartlabel,
                                    type: label1,
                                    yAxis: lengthofkey - 1,
                                    data: realdata
                                };
                            } else {
                                series = {
                                    name: chartlabel,
                                    type: label1,
                                    data: realdata
                                };
                            }
                            var labelforyaxis = lengthofkey - 1;
                            seriesArr.push(series);
                            if (labelforyaxis !== 0) {
                                yaxis = {
                                    min: minimum,
                                    labels: {
                                        "overflow": "justify",
                                        step: 1,
                                        style: {
                                            color: Highcharts.getOptions().colors[labelforyaxis],
                                            fontSize: '10px',
                                            fontFamily: '"Lato", sans-serif'
                                        }
                                    },
                                    title: {
                                        text: chartlabel,
                                        x: 0,
                                        y: 20,
                                        style: {
                                            color: Highcharts.getOptions().colors[labelforyaxis]
                                        }
                                    },
                                    opposite: true
                                };
                                yaxisArr.push(yaxis);
                            } else {
                                yaxis = {
                                    min: minimum,
                                    labels: {
                                        "overflow": "justify",
                                        step: 1,
                                        style: {
                                            color: Highcharts.getOptions().colors[labelforyaxis],
                                            fontSize: '10px',
                                            fontFamily: '"Lato", sans-serif'
                                        }
                                    },
                                    title: {
                                        text: chartlabel,
                                        x: 0,
                                        y: 20,
                                        style: {
                                            color: Highcharts.getOptions().colors[labelforyaxis]
                                        }
                                    },
                                };
                                yaxisArr.push(yaxis);
                            }
                        }
                    }
                    var xaxis = Object.keys(result.tableData[0])[0], xaxisvalues = (result.tableData[0][xaxis]);
                    Highcharts.chart(ID, {
                        chart: {
                            zoomType: 'x',
                            defaultSeriesType: 'areaspline',
                            events: {
                                load: function (event) {
                                    event.target.reflow();
                                }
                            }
                        },
                        title: {
                            text: ''
                        },
                        xAxis: [{
                            type: 'datetime',
                            title: {
                                text: xaxis,
                            },
                            categories: xaxisvalues,
                            labels: {
                                style: {
                                    fontSize: '10px'
                                }
                            },
                            crosshair: true
                        }],
                        yAxis: yaxisArr,
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            itemDistance: 7,
                            y: 10,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false,
                            itemStyle: {
                                fontSize: '10px',
                                fontFamily: '"Lato", sans-serif'
                            }
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0.5
                            },
                            series: {
                                pointWidth: 10,
                                marker: {
                                    enabled: false
                                }
                            }
                        },
                        tooltip: {
                            //pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>'
                            shared: true
                        },
                        series: seriesArr
                    });
                } else {
                    $("#" + ID).html('<span style="position: absolute;bottom: 0;right: 15px;">No Data</span>').css({ "text-align": "center" });
                }
            },
            error: function (error) {
                $("#" + ID).html('<span style="position: absolute;bottom: 0;right: 15px;">No Data</span>').css({ "text-align": "center" });
            },
        });
        setTimeout(startRefresh, options.Refreshtime);
    }
    startRefresh();
}