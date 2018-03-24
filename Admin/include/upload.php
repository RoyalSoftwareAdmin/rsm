<?php 
include("../../apis/config.php");
echo var_dump($_POST);
$email = $_POST["email"];
$name = $_POST["name"];
$category = $_POST["category"];
$uploaddate = date("Y-m-d");

if (!is_dir($email)) {
    mkdir($email);         
}

for($i=0; $i<count($_FILES['file']['name']); $i++){
	$ext = explode('.', basename( $_FILES['file']['name'][$i]));

	$target_path = $email."/".$ext[0]."_".date("h_m_s").".".$ext[1]; 
	if(move_uploaded_file($_FILES['file']['tmp_name'][$i], $target_path)) {
	    $query = "INSERT INTO `rsm_files` (`name`, `category`, `filename`, `path`, `email`, `uploaddate`) VALUES ('".$name."' ,'".$category."' ,'".$ext[0]."' ,'". $target_path."' ,'". $email."','". $uploaddate."')";
	    $res = query($query);
		if($res){		
			echo json_encode(array('Status' => "1" ));
			}else{
				echo json_encode(array('Status' => mysqli_error($conn)));
			}
		}
	 else{
	    echo json_encode(array("status"=>0));
		}
}
?>
