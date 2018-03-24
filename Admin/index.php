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
    <script src="../js/jquery.nicescroll.js"></script>
    <script src="../js/scripts.js"></script>
    <script src='../js/SidebarNav.min.js' type='text/javascript'></script>
    <script>
      //$('.sidebar-menu').SidebarNav()
    </script>
    <script src="../js/SimpleChart.js"></script>
    <script type="text/javascript">       
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
</body>
</html>