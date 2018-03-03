<!--
Author: Madhusudhana R K
Author URL: http://www.royalsoftwaresolution.com
License: Licence owned by Royal Softwares
License URL: http://www.royalsoftwaresolution.com/docs/licence.pdf
-->
<!DOCTYPE HTML>
<html>
	<head>
	<title>Royal Skills Master  | Login Page </title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="Royal Skills Master Responsive web application, Know your skills, More skills test, know where you deserve in IT industry, Best experienced remarks" />
	<meta name="description" content="Royal Skills master  is the first and best platform to analyze your technical, analytical, logical, verbal, CA, GK , and so on skills. This is AI platform which read data from your input and present your skills output in data visusalization form. This helps Job aspirantas in IT industry , Govt sector , Non-Technical jobs and improve your skills set." />  
	<meta property="og:url"           content="https://www.royalsoftwaresolution.com" />
	  <meta property="og:type"          content="website" />
	  <meta property="og:title"         content="Royal Softwares" />
	  <meta property="og:description"   content="Royal Softwares is the  best software company in mysore." />
	  <meta property="og:image"         content="http://www.royalsoftwaresolution.com/wp-content/uploads/2018/01/mysexpo-12.png" />
	<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>

	<!-- Bootstrap Core CSS -->
	<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
	<link href="css/style.css" rel='stylesheet' type='text/css' />
	<link href="css/font-awesome.css" rel="stylesheet"> 
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/modernizr.custom.js"></script>
	<script src="js/metisMenu.min.js"></script>
	<script src="js/custom.js"></script>
	
	<link href="css/custom.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/modules/signup.css">

	</head> 
	<body class="cbp-spmenu-push">
		<div class="main-content">
			<!-- main content start-->
			<div id="page-wrapper">
				<div class="main-page login-page ">
					<h2 class="title1">Login</h2>
					<div class="widget-shadow">
						<div class="login-body">
							<input type="email" class="user" id="email" name="email" placeholder="Enter Your Email" >
							<input type="password" name="password" id="password" class="lock" placeholder="Password" >
							<div class="forgot-grid">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Remember me</label>
								<div class="forgot">
									<a class="forgotpass">forgot password?</a>
								</div>								
								<div class="clearfix"> </div>
							</div>
							<div class="sign-u error"></div>
							<input type="button" id="submit" name="Sign In" value="Sign In">
							<div class="registration">
								Don't have an account ?
								<a class="" href="signup.php">
									Create an account
								</a>
							</div>
						</div>

					</div>
					
			
				</div>
			</div>
           
		  
		  <!-- Modal -->
	    <div class="modal fade in" id="errModal"  aria-hidden="true">
            <div class="modal-dialog" role="document">
				<div class="modal-content">
                  
				  <div class="modal-header">
                  <h2 class="modal-title" style="color: black" id="ModalTitle">Add Details</h2>
                  <button type="button" class="close" data-dismiss="modal" >
                 	 <span aria-hidden="true">&times;</span>
                  </button>
                  </div>             
			      
				  <div class="modal-body">
                      <div> Display Nothing</div>
                  </div>
	              
				  <div class="modal-footer">
                      	<button type="button" class="btn btn-default closeModal" data-dismiss="modal" >Close</button>
                  </div>
           
		        </div>
                
			</div>
                 
		</div>  

		<!--Modal 2 forgot-password-content-->
		<div class="modal fade in" id="frgtPass"  aria-hidden="true">
            <div class="modal-dialog" role="document">
				<div class="modal-content">
                  
				  <div class="modal-header">
                  <h2 class="modal-title" style="color: black" id="ModalTit">Recover Password</h2>
                  <!--<button type="button" class="close" data-dismiss="modal" >
                 	 <span aria-hidden="true">&times;</span>
                  </button>-->
                  </div>             
			      
				  <div class="modal-body">
                      <div class="form2">
                      <label for="exampleInputEmail1a">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1a" aria-describedby="emailHelp" placeholder="Enter email">
                     </div>
                  </div>
	              
				  <div class="modal-footer">
				        <button type="button" class="btn btn-default">Submit</button>
                      	<button type="button" class="btn btn-default closeMod" data-dismiss="modal" >Close</button>
                  </div>
           
		        </div>
                
			</div>
                 
		</div>  

		<!--Modal 2 ends -->
		
		
		
		
		<!--footer-->
		
		<!--//footer-->
	   
	 </div>  
	 	<?php include_once("footer.php"); ?>
	    <script src="js/bootstrap.js"> </script>	    
	    <script type="text/javascript" src="js/common/common.js"></script>
	  	 <script type="text/javascript" src="js/modules/login.js"></script>
	  	 <script>	
	     $("#submit").on("click", function(){
				validate();
			})
	   </script>
	</body>
</html>