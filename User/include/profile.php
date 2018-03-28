<link rel="stylesheet" href="css/modules/profile.css" type="text/css" media="all" />
 <div class="row-one widgettable">
    <div class="col-md-12 content-top-2 card">
        <div class="agileinfo-cdr">
            <div class="card-header">
				<div class="container profile">
				    <div class="status">
					  	<div class="row">
					 		<div class="col-md-12">
					  			<h1>Enter Your Details</h1>
								<h2 id="userStatus"></h2>
							</div>
						</div>
					</div>
				</div>
				<div class="container profile">
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
						     	<form class="profile">
						     		<p>Date of Birth</p>
							      	<input type="date" class="user"  id="dob"/>
						     		<p>Country</p>
							      	<select id="countryList"> </select>
							      	<p>State</p>
							      	<select id="stateList"></select>
							      	<p>Zip</p>
							      	<input type="text" class="pass zipp" id="zip" maxlength="6"class="pn" />
									<div class="error"></div>
									<a class="button outline-inward submit" id="personal">NEXT</a>
							 	</form>
							</div>
						</div>
						<div id="tab2" class="tab-grid">
							<div class="signin">
						     	<form class="profile1">
						     		<p >Organization</p>
							      	<input id="organization" type="text" class="user col" >
						     		<p>Department</p>
							      	<input id="department" type="text" class="user col" >
							      	<p>Blood Group</p>
				                      <select id="bloodList"> </select>
							      	<p>ID</p>
							      	<input type="text" class="pass usnn" id="ids"  />
									<div class="error"></div>
									<a class="button outline-inward" id="education">NEXT</a>
							 	</form>
								
							</div>
						</div>
						<div id="tab3" class="tab-grid">
							<div class="signin pp">
						     	<form class="profile">
								<textarea rows="11" class="comment technicalData"></textarea>
						     		<a id="technical" class="button outline-inward submit">NEXT</a>
							 	</form>
							</div>
						</div>
						<div id="tab4" class="tab-grid">
							<div class="signin">
						     	<form class="profile2">
						     		<p>Personal mobile</p>
							      	<input type="text" class="user mob" id="mobile" maxlength="10" />
						     		<p>Office Number</p>
							      	<input type="text" id="office" class="mail mal" />
							       	<p>Website</p>
							      	<input type="text" id="website" class="pass web"  />
									<div class="error"></div>
									<a class="button outline-inward submit" id="contact">NEXT</a>
							 	</form>
							</div>
						</div>
						<div id="tab5" class="tab-grid">
							<div class="signin">
						     	<form class="profile2">
						     		<p> Resume 	<input type="file" class="f1"/><p>
						     		<p class="p1">Cover Letter <input type="file" class="f1"/></p>
							      	
							      	<p class="tet">Other Details
							      		<textarea  rows="7" col="5" id="others" class="comment otherDetails"> </textarea>
							      	</p>					 
									<a  id="submit" class="button outline-inward in submit">SUBMIT</a>
							 	</form>
							</div>
						</div>

					</div>

					<div class="clear"> </div>

				</div>
				    <!--//footer-->
				</div>
            </div>
        </div>
        </div>
    </div>      
    <div class="clearfix"> </div>
<script type="text/javascript" src="js/common/lists.js"></script>
<script src="js/modules/profile.js">  