<link rel="stylesheet" href="css/modules/addtest.css">
 <div class="row-one widgettable">
    <div class="col-md-12 content-top-2 card">
        <div class="agileinfo-cdr">
            <div class="card-header">            
	            <div class="container">
					<div class="row">
						<div class="col-md-6">
						 	<label>Select Category</label>
							<select id="SelectCategory"></select>		   
						</div>
						<div class="col-md-6">
							 <label>Select Division</label>
							 <select id="SelectDivision"></select>		   
			            </div>
						<div class="col-md-4 "> 
							<div class="questions">
			                  <label>Enter Question</label>
			                   <textarea  rows="7" id="questionss" class="enterques"> </textarea>
							</div>
							<div class="written">
							    <label>Required Written Answer</label>
								 <input type="checkbox" id="idcheck" name="checkbox" >
							  </div>
					    </div>
					    <div class="col-md-8 choiceDiv"> 
					      <div class="sign-u col-md-6">
								<label>Choice 1</label>
								<input type="text" name="choice1" id="Choice1" placeholder="Choice 1" >
								<div class="clearfix"> </div>
							</div>
							<div class="sign-u col-md-6">
								<label>Choice 2</label>
								<input type="text" name="choice2" id="Choice2" placeholder="Choice 2" >
								<div class="clearfix"> </div>
							</div>
							<div class="sign-u col-md-6">
								<label>Choice 3</label>
								<input type="text" name="choic3" id="Choice3" placeholder="Choice 3" >
								<div class="clearfix"> </div>
							</div>
							<div class="sign-u col-md-6">
								<label>Choice 4</label>
								<input type="text" name="choice4" id="Choice4" placeholder="Choice 4" >
								<div class="clearfix"> </div>
							</div>
							<div class="sign-u col-md-6">
								<label>Correct Choice</label>
								<select>
								  <option value="choice1">Choice1</option>
								  <option value="choice2">Choice2</option>
								  <option value="choice3">Choice3</option>
								  <option value="choice4">Choice4</option>
								</select>
							</div>
							
						</div>
						<div class="sign-u col-md-8 keywordsDiv">
							<label>Answer Keywords</label>
							  <textarea  rows="5" id="answerss" class="answerkey"> </textarea>
							<div class="clearfix"> </div>
						</div>
					</div>
						
					<div class="row">
						 <div class="col-md-6">
							  <button class="btnn">Save</button>
						 </div>
						 <div class="col-md-6">
						  	<button class="btnn1">Clear</button>
						 </div>
						  <div class="error"></div>
					</div>
			    </div>
			</div>
		</div>	
	</div>
</div>
<div class="clearfix"> </div>
<script src="js/modules/addTest.js"></script>  