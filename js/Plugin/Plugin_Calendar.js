$.fn.DiagramChart = function (params) {
    var ID = this.attr('id');
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var year = dateObj.getUTCFullYear();
    var initialMonthYear = month + '/' + year;
    function startRefresh() {
        var defaults = {
            host: '',
            apiEntity: '',
            MonthYear: initialMonthYear,
            Refreshtime: 100000
        };
        var options = $.extend({}, defaults, params);
        var monthyear = strig(options.MonthYear).split('/');
        if (monthyear[0] < 9)
            monthyear[0] = string('0' + monthyear[0]);
        else
            monthyear[0] = string(monthyear[0]);

        var mydate = stringToDate('01/'+monthyear[0]+'/'+monthyear[1]+', "dd/MM/yyyy', '/');

    }
    startRefresh();
}

function stringToDate(_date, _format, _delimiter) {
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var dateItems = _date.split(_delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    return formatedDate;
}