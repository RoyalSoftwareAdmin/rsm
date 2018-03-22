<link rel="stylesheet" href="css/modules/uploadDocs.css">
 <div class="row-one widgettable">
    <div class="col-md-12 content-top-2 card">
        <div class="agileinfo-cdr">
            <div class="card-header">
            	<form enctype="multipart/form-data" method="post">
            		<div class="sign-u">
							<input type="file" multiple="multiple"  id="file" name="file[]" placeholder="Last Name" >
						<div class="clearfix"> </div>
					</div>				    
				    <input type="button" class="btn btn-primary" id="upload" value="Upload File" />
				</form>
				<div class="sign-u">
					<label>View Files</label>
					<input type="button" class="btn btn-primary" id="view" value="View Files" />
					<div class="clearfix"> </div>
				</div>
                
            </div>
        </div>
        </div>
    </div>      
    <div class="clearfix"> </div>
</div>
<script src="js/modules/uploadDocs.js"></script>  