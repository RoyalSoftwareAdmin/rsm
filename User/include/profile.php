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
							      	<input type="date" class="user"  />
						     		<p>Country</p>
							      	<select id="countryList"> </select>
							      	<p>State</p>
							      	<select id="stateList"></select>
							      	<p>Zip</p>
							      	<input type="text" class="pass zipp" id="zip" maxlength="6"class="pn" />
									<div class="error"></div>
									<a href="#tab2" class="button outline-inward submit" id="submit">NEXT</a>
							 	</form>
							</div>
						</div>
						<div id="tab2" class="tab-grid">
							<div class="signin">
						     	<form class="profile1">
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
						     	<form class="profile">
								<textarea rows="11" class="comment">
					                 </textarea>
						     		<a href="#tab4" class="button outline-inward submit">NEXT</a>
							 	</form>
							</div>
						</div>
						<div id="tab4" class="tab-grid">
							<div class="signin">
						     	<form class="profile2">

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
						     	<form class="profile2">
						     		<p>Resume
							      	<input type="file" class="f1"></input><p>
						     		<p class="p1">Cover Letter <input type="file" class="f1"></input></p>
							      	
							      	
							      	<p class="tet">Other Details
							      	<textarea  rows="7" col="5" class="comment">
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
            </div>
        </div>
        </div>
    </div>      
    <div class="clearfix"> </div>
</div>
<script type="text/javascript" src="js/common/lists.js"></script>
<script src="js/modules/profile.js">  