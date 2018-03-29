/*! Custom Modal v1.0.1 | (c) Invendis Technologies */
$.fn.invModalPlugin = function (params) {
    var id = params.id,
        ModalClass = params.modalclass,
        ModalTitle = params.title,
        DialogID = params.dialogid,
        DialogClass = params.dialogclass;
    Enablesearch = params.enablesearch;
    SearchID = params.searchid;
    MultipleTabs = params.multipletabs;
    titledisplay = params.titledisplay;
    var tabNames = params.tabNames  ;

    var ID = '#' + this.attr('id');

    var defaults = {
        id: 'DialogID',
        modalclass: '',
        title: 'Modal Title',
        dialogid: 'dialogid',
        dialogclass: 'dialogclass',
        titledisplay: true
    };
    var options = $.extend({}, defaults, params);
    var $modal = '<div class="modal fade" id=' + id + ' role="dialog">';
    $modal += '<div class="modal-dialog ' + ModalClass + '">';
    $modal += '<div class="modal-content">';
    $modal += '<div class="modal-header">';
    $modal += '<button type="button" class="close" data-dismiss="modal">';
    $modal += '<img src="../images/close.png" alt="close" /></button>';
    $modal += '<h4 class="modal-title">' + ModalTitle + '</h4>';
    $modal += '</div>';
    $modal += '<div class="modal-body">';
    $modal += '<div class="todaysenergy modalbody">';
    if (Enablesearch == true) {
        $modal += '<div class="col-md-12 nopadding input-search"><input type="text" class="input-searchbox" id="search_' + SearchID + '" placeholder="Search.." title="Search" /></div>';
    }
    if (MultipleTabs == 2) {
        if (tabNames.length !== 0) {
            $modal += '<div id=' + DialogID + ' class="style-4 ' + DialogClass + '">';
            $modal += ' <ul class="nav nav-tabs">';

            tabNames.forEach(function (k, r) {
                //var rvalue = parseInt(r);
                //rvalue = rvalue + 100;
                $modal += ' <li ' + ((r == 0) ? 'class="active"' : 'class=""') + '><a class="field_content_1" href="#' + k + '_' + r + '" data-toggle="tab">' + k + '</a></li>';
            })
            $modal += ' </ul><div class="tab-content ">';
            tabNames.forEach(function (k, r) {
                //var rvalue = parseInt(r);
                //rvalue = rvalue + 100;
                $modal += ' <div class="tab-pane' + ((r == 0) ? ' active' : '') + '" id="' + k + '_' + r + '">' +
                           '<div id="Equipment_'+k+'" class="chart chart_height mainDiv"></div>'+
                            '</div>';   
            })
            $modal += '</div></div>';
        } else {
            $modal += '<div id=' + DialogID + ' class="style-4 ' + DialogClass + '">';
            $modal += '<ul class="nav nav-tabs"><li class="active"><a class="field_content_1" href="#1" data-toggle="tab">Energy</a></li>';
            $modal += '<li><a class="field_content_1" href="#2" data-toggle="tab">Power</a></li></ul><div class="tab-content"><div class="tab-pane active" id="1">';
            $modal += '<div id="chartdiagram_Energy" class="chart chart_height"></div></div><div class="tab-pane" id="2"><div id="chartdiagram_Power" class="chart chart_height"></div></div></div></div>';
        }
    }
    else {
        $modal += '<div id=' + DialogID + ' class="style-4 ' + DialogClass + '"></div>';
    }
    $modal += '</div>';
    $modal += '</div>';
    $modal += '</div>';
    $modal += '</div>';
    $modal += '</div>';
    $(ID).html($modal);
}


           
          
       
           
           