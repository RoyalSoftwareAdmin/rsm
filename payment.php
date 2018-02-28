<!DOCTYPE html>
	<html lang="en">
<head>
<title>Login form</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">


<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
	<!--<link href="css/style.css" rel='stylesheet' type='text/css' />-->
	<link href="css/font-awesome.css" rel="stylesheet"> 
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/modernizr.custom.js"></script>
	<script src="js/metisMenu.min.js"></script>
	<script src="js/custom.js"></script>
    <link href="css/modules/payment.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">

</head>
<body>
	<div class="container">
		<br><br><br>
			<center><b id="login-name">PAY TO ROYAL SOFTWARES</b></center>
				<div class="row">
						<div class="col-md-6 col-md-offset-3" id="login">
						 <h2 class="head2">PAY NOW</h2>
							<div class="form">
							 <div class="form-group">
								<label class="user">Name on Card</label>
									<div class="input-group">
				
							             <input type="text" class="form-control" id="name" placeholder="Name on Card">
							
							
							        </div>
							</div>
							<div class="form-group">
								<label class="user">Card Number </label>
									<div class="input-group">
							             
										 <input type="cardnumber" class="form-control" id="cardnum" placeholder="Card Number">
							
							
							        </div>
							</div>
   
                        <div class="col-md-6">
                           <div class="form-group">
						   <label class="user">Expiration date </label>
						    <div class="input-group">
							             
										 <input type="text" class="form-control" id="ex" name="ex" placeholder="YY/MM">
							
							
							        </div>
						   </div>
                        </div>
						
						
                         <div class="col-md-6">
                           <div class="form-group">
						   <label class="user">CVV </label>
						    <div class="input-group">
							             
										 <input type="text" class="form-control" id="cvv" name="cvv" placeholder="---">
							
							
							        </div>
						   </div>
                        </div>
						   
						   
                            <div class="form-group">
								 <div class="clearfix"> </div>
                                 <div class="error"></div>
                            <center><button type="submit" id="submit" class="btn">MAKE A PAYMENT<i class="fa fa-arrow-right" aria-hidden="true"></i></center></button>
				

						   <div class="form-group bg">
						   <div class="col-md-10 col-md-offset-0" id="paypal">
			               <h2 class="head3">PAYPAL</h2>
						   </div>
						   </div>
							
							
				
				
                            </div>
						
						
							</div>
						 
						
						</div>
						
						
				
				
				
				
				</div>
	
	
	
	
	
	
	</div>

<section id="footer">
   <div class="container">
    <div class="row">
	 
	 <div class="col-md-12">
	 
	 <div class="foot">
		 <?php include("footer.php"); ?>
	 </div>
	 
	</div>
   
   </div>	
   </div>
  </section>

<!--<script src="js/jquery-1.11.1.min.js"></script>-->
<script src="js/bootstrap.js"> </script>
<script type="text/javascript" src="js/common/common.js"></script>
<script type="text/javascript" src="js/modules/payment.js"></script>
</body>

</html> 