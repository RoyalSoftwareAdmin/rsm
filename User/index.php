<?php 
	include_once("header.php");
?>
<!--//Metis Menu -->
<style>
#chartdiv {
  width: 100%;
  height: 295px;
}
</style>
   
    <?php
        if(isset($_GET['file'])){                           
            include('include/'.$_GET['file'].'.php');
        }else{ ?>
             <div class="row-one widgettable">
                <div class="col-md-12 content-top-2 card">
                    <div class="agileinfo-cdr">
                        <div class="card-header">
                            <h3>Over All Result</h3>
                        </div>
                            <div id="Linegraph" style="width: 98%; height: 350px">                       
                            </div>
                    </div>
                </div>      
                <div class="clearfix"> </div>
            </div>  
      <?php  } ?>    
               
    
    <script  src="../js/index1.js"></script>   
        <div class="charts">        
            <div class="mid-content-top charts-grids">
                <div class="middle-content">
                        <h4 class="title">Know Skills</h4>
                    <!-- start content_slider -->
                    <div id="owl-demo" class="owl-carousel text-center">
                        <div class="item">
                            <img class="lazyOwl img-responsive image" data-src="../images/slider1.jpg" alt="name">
                            <div class="middle">
                                <div class="text"><p>Technical Skills</p>
                                <p class="text1"><a href="#">Take Test</a></p></div>
                            </div>
                        </div>
                        <div class="item">
                            <img class="lazyOwl img-responsive image" data-src="../images/slider2.jpg" alt="name">
                            <div class="middle">
                                <div class="text"><p>Analytical Skills</p>
                                <p class="text1"><a href="#">Take Test</a></p></div>
                            </div>
                        </div>
                        <div class="item">
                            <img class="lazyOwl img-responsive image" data-src="../images/slider3.jpg" alt="name">
                            <div class="middle">
                                <div class="text"><p>Logical Skills</p>
                                <p class="text1"><a href="#">Take Test</a></p></div>
                            </div>
                        </div>
                        <div class="item">
                            <img class="lazyOwl img-responsive image" data-src="../images/slider4.jpg" alt="name">
                            <div class="middle">
                                <div class="text"><p>Aptitude</p>
                                <p class="text1"><a href="#">Take Test</a></p></div>
                            </div>
                        </div>
                        <div class="item">
                            <img class="lazyOwl img-responsive image" data-src="../images/slider5.jpg" alt="name">
                            <div class="middle">
                                <div class="text"><p>Current Affairs</p>
                                <p class="text1"><a href="#">Take Test</a></p></div>
                            </div>
                        </div>
                        <div class="item">
                            <img class="lazyOwl img-responsive image" data-src="../images/slider6.jpg" alt="name">
                            <div class="middle">
                                <div class="text"><p>All in One</p>
                                <p class="text1"><a href="#">Take Test</a></p></div>
                            </div>
                        </div>
                        <div class="item">
                            <img class="lazyOwl img-responsive image" data-src="../images/slider7.jpg" alt="name">
                            <div class="middle">
                                <div class="text"><p>Interview Special</p>
                                <p class="text1"><a href="#">Take Test</a></p></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <!--//sreen-gallery-cursual-->
            </div>
        </div>
            </div>
        </div>
   
 <?php include_once("footer.php"); ?>
   <!--//footer-->
   </div>
       
   <!-- new added graphs chart js-->
   
   <script src="../js/Chart.bundle.js"></script>
    <script src="../js/utils.js"></script>
        <script src="../js/classie.js"></script>
        <script>
            var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
                showLeftPush = document.getElementById( 'showLeftPush' ),
                body = document.body;
                
            showLeftPush.onclick = function() {
                classie.toggle( this, 'active' );
                classie.toggle( body, 'cbp-spmenu-push-toright' );
                classie.toggle( menuLeft, 'cbp-spmenu-open' );
                disableOther( 'showLeftPush' );
            };
            

            function disableOther( button ) {
                if( button !== 'showLeftPush' ) {
                    classie.toggle( showLeftPush, 'disabled' );
                }
            }
        </script>
    <!-- //Classie --><!-- //for toggle left push menu script -->
        
    <!--scrolling js-->
    <script src="../js/jquery.nicescroll.js"></script>
    <script src="../js/scripts.js"></script>
    <!--//scrolling js-->
    
    <!-- side nav js -->
    <script src='../js/SidebarNav.min.js' type='text/javascript'></script>
    <script>
      $('.sidebar-menu').SidebarNav()
    </script>
    <!-- //side nav js -->
    
    <!-- for index page weekly sales java script -->
    <script src="../js/SimpleChart.js"></script>
    <script>
        var graphdata1 = {
            linecolor: "#CCA300",
            title: "Monday",
            values: [
            { X: "6:00", Y: 10.00 },
            { X: "7:00", Y: 20.00 },
            { X: "8:00", Y: 40.00 },
            { X: "9:00", Y: 34.00 },
            { X: "10:00", Y: 40.25 },
            { X: "11:00", Y: 28.56 },
            { X: "12:00", Y: 18.57 },
            { X: "13:00", Y: 34.00 },
            { X: "14:00", Y: 40.89 },
            { X: "15:00", Y: 12.57 },
            { X: "16:00", Y: 28.24 },
            { X: "17:00", Y: 18.00 },
            { X: "18:00", Y: 34.24 },
            { X: "19:00", Y: 40.58 },
            { X: "20:00", Y: 12.54 },
            { X: "21:00", Y: 28.00 },
            { X: "22:00", Y: 18.00 },
            { X: "23:00", Y: 34.89 },
            { X: "0:00", Y: 40.26 },
            { X: "1:00", Y: 28.89 },
            { X: "2:00", Y: 18.87 },
            { X: "3:00", Y: 34.00 },
            { X: "4:00", Y: 40.00 }
            ]
        };
        var graphdata2 = {
            linecolor: "#00CC66",
            title: "Tuesday",
            values: [
              { X: "6:00", Y: 100.00 },
            { X: "7:00", Y: 120.00 },
            { X: "8:00", Y: 140.00 },
            { X: "9:00", Y: 134.00 },
            { X: "10:00", Y: 140.25 },
            { X: "11:00", Y: 128.56 },
            { X: "12:00", Y: 118.57 },
            { X: "13:00", Y: 134.00 },
            { X: "14:00", Y: 140.89 },
            { X: "15:00", Y: 112.57 },
            { X: "16:00", Y: 128.24 },
            { X: "17:00", Y: 118.00 },
            { X: "18:00", Y: 134.24 },
            { X: "19:00", Y: 140.58 },
            { X: "20:00", Y: 112.54 },
            { X: "21:00", Y: 128.00 },
            { X: "22:00", Y: 118.00 },
            { X: "23:00", Y: 134.89 },
            { X: "0:00", Y: 140.26 },
            { X: "1:00", Y: 128.89 },
            { X: "2:00", Y: 118.87 },
            { X: "3:00", Y: 134.00 },
            { X: "4:00", Y: 180.00 }
            ]
        };
        var graphdata3 = {
            linecolor: "#FF99CC",
            title: "Wednesday",
            values: [
              { X: "6:00", Y: 230.00 },
            { X: "7:00", Y: 210.00 },
            { X: "8:00", Y: 214.00 },
            { X: "9:00", Y: 234.00 },
            { X: "10:00", Y: 247.25 },
            { X: "11:00", Y: 218.56 },
            { X: "12:00", Y: 268.57 },
            { X: "13:00", Y: 274.00 },
            { X: "14:00", Y: 280.89 },
            { X: "15:00", Y: 242.57 },
            { X: "16:00", Y: 298.24 },
            { X: "17:00", Y: 208.00 },
            { X: "18:00", Y: 214.24 },
            { X: "19:00", Y: 214.58 },
            { X: "20:00", Y: 211.54 },
            { X: "21:00", Y: 248.00 },
            { X: "22:00", Y: 258.00 },
            { X: "23:00", Y: 234.89 },
            { X: "0:00", Y: 210.26 },
            { X: "1:00", Y: 248.89 },
            { X: "2:00", Y: 238.87 },
            { X: "3:00", Y: 264.00 },
            { X: "4:00", Y: 270.00 }
            ]
        };
        var graphdata4 = {
            linecolor: "Random",
            title: "Thursday",
            values: [
              { X: "6:00", Y: 300.00 },
            { X: "7:00", Y: 410.98 },
            { X: "8:00", Y: 310.00 },
            { X: "9:00", Y: 314.00 },
            { X: "10:00", Y: 310.25 },
            { X: "11:00", Y: 318.56 },
            { X: "12:00", Y: 318.57 },
            { X: "13:00", Y: 314.00 },
            { X: "14:00", Y: 310.89 },
            { X: "15:00", Y: 512.57 },
            { X: "16:00", Y: 318.24 },
            { X: "17:00", Y: 318.00 },
            { X: "18:00", Y: 314.24 },
            { X: "19:00", Y: 310.58 },
            { X: "20:00", Y: 312.54 },
            { X: "21:00", Y: 318.00 },
            { X: "22:00", Y: 318.00 },
            { X: "23:00", Y: 314.89 },
            { X: "0:00", Y: 310.26 },
            { X: "1:00", Y: 318.89 },
            { X: "2:00", Y: 518.87 },
            { X: "3:00", Y: 314.00 },
            { X: "4:00", Y: 310.00 }
            ]
        };
        
        $(function () {
            $("#Linegraph").SimpleChart({
                ChartType: "Line",
                toolwidth: "50",
                toolheight: "25",
                axiscolor: "#E6E6E6",
                textcolor: "#6E6E6E",
                showlegends: false,
                data: [graphdata4, graphdata3, graphdata2, graphdata1],
                legendsize: "140",
                legendposition: 'bottom',
                xaxislabel: 'Hours',
                title: 'Over All Result',
                yaxislabel: '% of Skills'
            });
        });
$(document).ready(function() {

            $("#owl-demo").owlCarousel({

                items : 3,

                lazyLoad : true,

                autoPlay : true,

                pagination : true,

                nav:true,

            });

        });

    </script>
    <!-- //for index page weekly sales java script -->
    
    
    <!-- Bootstrap Core JavaScript -->
   
    <!-- //Bootstrap Core JavaScript -->
    
</body>
</html>