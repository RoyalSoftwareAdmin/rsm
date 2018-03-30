<link rel="stylesheet" href="css/modules/addtest.css">
 <div class="row-one widgettable">
    <div class="col-md-12 content-top-2 card">
        <div class="agileinfo-cdr">
            <div class="card-header">            
                <!--<h3>Add Test Code Goes Here</h3>-->
            </div>
			
			<div class="container">
			 
			 <div class="row">
			  
			  <div class="col-md-6">
				<div class="dropdown">
				 <label>Select Category</label>
				 <select id="myselect">
                       <option value="tech">Technical</option>
                       <option value="ana">Analytical</option>
                       <option value="logical">logical</option>					
                       <option value="aptitude">Aptitude</option>
					   <option value="ca">Current Affairs</option>
			    </select>		   
                </div>
			  </div>
			  
			 <div class="col-md-6">
				<div class="dropdown1">
				 <label>Select Division</label>
				 <select id="myselect1">
                       <option value="tech">Technical</option>
                       <option value="ana">Analytical</option>
                       <option value="logical">logical</option>					
                       <option value="aptitude">Aptitude</option>
					   <option value="ca">Current Affairs</option>
			    </select>		   
                </div>
			  </div>
			 
			 </div>
			 
			<div class="row">
			 
			<div class="col-md-2"> 
				<div class="questions">
                  <label>Enter Question</label>
				</div>
		    </div>
			
			<div class="col-md-2"> 
				<div class="questions">
                 <textarea  rows="7" id="questionss" class="enterques"> </textarea>
				</div>
		    </div>
			
		   
			<div class="col-md-2"> 
				<div class="choice1">
                 <label>Choice1</label>
				 
				</div>
		    </div>
			
			<div class="col-md-2"> 
				<div class="choice1">
				<input type="text" id="choice1" class="choice1 form-control">
                 
				</div>
		    </div>
			
			<div class="col-md-2"> 
				<div class="choice2">
                 <label>Choice2</label>
				</div>
		    </div>
			
			<div class="col-md-2"> 
				<div class="choice2">
                 <input type="text" id="choice2" class="choice2 form-control">
				</div>
		    </div>
			
			<div class="row">
			   
			   <div class="col-md-2"> 
				<div class="choice3">
                 <label>Choice3</label>
				 
				</div>
		    </div>
			
			<div class="col-md-2"> 
				<div class="choice3">
				<input type="text" id="choice3" class="choice3 form-control">
                 
				</div>
		    </div>
			
			<div class="col-md-2"> 
				<div class="choice4">
                 <label>Choice4</label>
				</div>
		    </div>
			
			<div class="col-md-2"> 
				<div class="choice4">
                 <input type="text" id="choice4" class="choice4 form-control">
				</div>
		    </div>
			
			
			<div class="col-md-3">
			  <div class="correct">
			    <label>Correct Choice</label>
			  </div>
			</div>
			
			<div class="col-md-3">
			  <div class="correct1">
				<select>
				  <option value="choice1">Choice1</option>
				  <option value="choice2">Choice2</option>
				  <option value="choice3">Choice3</option>
				  <option value="choice4">Choice4</option>
				</select>
			  </div>
			</div>
			
			
			<div class="col-md-3">
			  <div class="written">
			    <label>Required Written Answer</label>
				 <input type="checkbox" id="idcheck" name="checkbox" checked="">
			  </div>
			</div>
			
			<div class="col-md-2">
			  <div class="written">
			    <label>Answer keyword</label>
			  </div>
			</div>
			
			<div class="col-md-3"> 
				<div class="answers">
                 <textarea  rows="5" id="answerss" class="answerkey"> </textarea>
				</div>
		    </div>
			
			</div>
			
			<div class="row">
			 
			 <div class="col-md-6">
			  <button class="btnn">Save</button>
			 </div>
			 
			 <div class="col-md-6">
			  <button class="btnn1">Clear</button>
			 </div>
			 
			 <div class="col-md-12">
			  <div class="error">
			   <label><a href="#">< error message displayed ></a></label>
			  </div>
			 </div>
			 
			</div>
             
			</div>
			 
			</div>
			 
			 
			 
			 
			</div>	
			
        </div>
        </div>
    </div>      
    <div class="clearfix"> </div>
<script src="js/modules/addTest.js"></script>  