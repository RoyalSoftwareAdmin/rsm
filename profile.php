 <!--
Author: Madhusudhana R K
Author URL: http://www.royalsoftwaresolution.com
License: Licence owned by Royal Softwares
License URL: http://www.royalsoftwaresolution.com/docs/licence.pdf
-->
<?php 
	session_start();
	// if(!isset($_SESSION['login_user'])){
	//	header("Location: profile.php");
	//}
	
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Royal Skills Master  | SignUp Page </title>
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

<!-- //For-Mobile-Apps -->
<!-- Style -->
<script src="js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="js/common/common.js"></script>
<script type="text/javascript" src="js/common/lists.js"></script>

 <link rel="stylesheet" href="css/modules/profile.css" type="text/css" media="all" />
 

	<script src="js/jquery-1.11.1.min.js"></script>
	<script>
		$(document).ready(function() {
			$("#tab2").hide();
			$("#tab3").hide();
			$("#tab4").hide();
			$("#tab5").hide();
			$(".tabs-menu a").click(function(event){
				event.preventDefault();
				
				var tab=$(this).attr("href");
				$(".tab-grid").not(tab).css("display","none");
			    
				$(tab).fadeIn("slow");
			});
		});
	</script>

</head>
<body>
<div class="container">
      <div class="status">
	  <div class="row">
	  <div class="col-md-6">
	  
	<h1>Enter Your Details</h1>
	<h2 id="userStatus"></h2>
</div>
</div>
</div>
</div>
<div class="container">

	<div class="tabs-menu">
	<div id="menu">
		<ul class="nav nav-tabs">
			<li class="active"><a href="#tab1">Personal</a></li>
			<li><a class="tab2" href="#tab2">Education</a></li>
			<li><a class="tab3" href="#tab3">Technical</a></li>
			<li><a class="tab4" href="#tab4">Contact</a></li>
			<li><a class="tab5" href="#tab5">Others</a></li>
		</ul>
	</div>
	</div>

	<div class="tab-grids">
		<div id="tab1" class="tab-grid">
			<div class="signin">
		     	<form>
		     		<p>Date of Birth</p>
			      	<input type="date" class="user"  />
		     		<p>Country</p>
			      	<select id="countryList"> </select>
			      	<p>State</p>
			      	<select id="stateList"></select>
			      	<p>Zip</p>
			      	<input type="text" class="pass zipp" id="zip" maxlength="6" />
					<div class="error"></div>
					<a href="#tab2" class="button outline-inward submit" id="submit">NEXT</a>
			 	</form>
			</div>
		</div>
		<div id="tab2" class="tab-grid">
			<div class="signin">
		     	<form>
		     		<p >Organization</p>
			      	<input id="my-field" type="text" class="user col" >
		     		<p>Department</p>
			      	<input id="my-field1" type="text" class="user col" >
			      	<p>Blood Group</p>
                      <select id="bloodList"> </select>
			      	<p>ID</p>
			      	<input type="text" class="pass usnn" id="ids"  />
					<div class="error"></div>
					<a href="#tab3" class="button outline-inward" id="submit0">NEXT</a>
			 	</form>
				
			</div>
		</div>
		<div id="tab3" class="tab-grid">
			<div class="signin pp">
		     	<form>
				<textarea rows="15" class="comment">
	                 </textarea>
		     		
			      
					<a href="#tab4" class="button outline-inward submit">NEXT</a>
			 	</form>
			</div>
		</div>
		<div id="tab4" class="tab-grid">
			<div class="signin">
		     	<form>

		     		<p>Personal mobile</p>
			      	<input type="text" class="user mob" id="mobile" maxlength="10" />
		     		<p>Office Number</p>
			      	<input type="text" class="mail mal" />
			      	<p>Email</p>
			      	<input type="text" class="pass" id="email"  />
			      	<p>Website</p>
			      	<input type="password" class="pass web"  />
					<div class="error"></div>
					<a href="#tab5" class="button outline-inward submit" id="submit1">NEXT</a>
			 	</form>
			</div>
		</div>
		<div id="tab5" class="tab-grid">
			<div class="signin">
		     	<form>
		     		<p>Resume
			      	<input type="file" class="f1"></input><p>
		     		<p class="p1">Cover Letter <input type="file" class="f1"></input></p>
			      	
			      	
			      	<p class="tet">Other Details
			      	<textarea  rows="10" col="5" class="comment">
	                 </textarea></p>					 
					<a href="#tab1" class="button outline-inward in submit">SUBMIT</a>
			 	</form>
			</div>
		</div>

	</div>

	<div class="clear"> </div>

</div>


    <!--//footer-->
</div>
<?php include_once("footer.php"); ?>
<script src="js/bootstrap.js"> </script>
<script type="text/javascript" src="js/modules/profile.js"></script>





		
		
</body>
</html>