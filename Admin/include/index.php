
 <div class="row-one widgettable">
    <div class="col-md-12 content-top-2 card">
        <div class="agileinfo-cdr">
            <div class="card-header">
<div id="body">
	<form action="include/upload.php" method="post" enctype="multipart/form-data">
	<input type="file" name="file" />
	<button type="submit" name="btn-upload">upload</button>
	</form>
    <br /><br />
    <?php
	if(isset($_GET['success']))
	{
		?>
        <label>File Uploaded Successfully...  <a href="view.php">click here to view file.</a></label>
        <?php
	}
	else if(isset($_GET['fail']))
	{
		?>
        <label>Problem While File Uploading !</label>
        <?php
	}
	else
	{
		?>
        <label>Try to upload any files(PDF, DOC, EXE, VIDEO, MP3, ZIP,etc...)</label>
        <?php
	}
	?>
</div>
 </div>
				
			
        </div>
        </div>
    </div>      
    <div class="clearfix"> </div>
<script src="js/modules/general.js"> 
</body>
</html>