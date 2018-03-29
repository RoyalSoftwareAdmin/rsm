$(function () {
    var i = 0;
    var getMenuItem = function (itemData) {
        var link;
        if (itemData.defaultlink) {
            link = itemData.defaultlink.replace('<sitevalue>', siteID);
            link = link.replace('<SiteCategory>', SiteCredentials.st);
        }
        var siteslist = itemData.sitesnotrequired;
        if (!siteslist.includes(siteID)) {
            if (itemData.sitespecificlink) {
                var childData = itemData.sitespecificlink;
                if (childData[0].siteids.includes(siteID)) {
                    link = childData[0].specificlink.replace('<sitevalue>', siteID);
                    link = link.replace('<SiteCategory>', SiteCredentials.st);
                }
            }
            var item = "<li id='dropdown_" + i + "'><a class='nava' href='#' " + ((!itemData.sub) ? "onclick=gotoopenPage('" + link + "');>" : ";>") + itemData.name;
            item += (itemData.sub) ? "<i class='fa fa-angle-down fa-lg' aria-hidden='true'></i>" : "";
            item += "</a>";
            if (itemData.sub) {
                var subList = "<ul style='top: 0px !important; left: 0px !important;'>";
                $.each(itemData.sub, function () {
                    i++;
                    subList += getMenuItem(this);
                });
                item += subList;
            }
            i++;
            return item;
        }
    };

    var $menu = $("#leftNavigation");
    $.each(jsonObject.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
    //$menu.menu();
});

function gotoopenPage(link, hidebreadcumb) {
    location.href = link;
    (hidebreadcumb == true) ? $('#liBreadCrumbPreviousPage').hide() : $('#liBreadCrumbPreviousPage').show();
}