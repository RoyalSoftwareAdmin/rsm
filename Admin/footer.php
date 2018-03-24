<div class="footer">
   <p>&copy; 2018 Royal Softwares. All Rights Reserved | Design by <a href="http://www.royalsoftwaresolution.com/" target="_blank">Royal Softwares </a></p>		
</div>
<!--//footer-->
</div>
		
<script src="../js/bootstrap.js"> </script>
<script type="text/javascript">
	<?php
	if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    } ?>
    
	var ip = '<?php echo $ip; ?>';
	console.log(ip);
</script>