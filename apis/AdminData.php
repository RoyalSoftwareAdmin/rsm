<?php 
	include("config.php");

	if ($_SERVER['REQUEST_METHOD'] == 'POST'){		
		if($_POST["layout"] === "logout"){
			session_start(); //Start the current session
			session_destroy(); //Destroy it! So we are logged out now
			header("location: ../login.php");
		}

		if($_POST["layout"] == "1001"){
			$fname = $_POST["fname"];
			$lname = $_POST["lname"];
			$password = $_POST["password"];
			$email = $_POST["email"];
			$mobile = $_POST["mobile"];
			$password = md5($_POST["password"]);
			$status = 1;			
				
		$query = "INSERT INTO rsm_company(fname, lname, email, mobile, password, status, value)VALUES ('".$fname."' ,'".$lname."' ,'".$email."' ,'". $mobile."' ,'". $password."','". $status."' , 128 )";
			$res = query($query);
			if($res){		
				$query = "INSERT INTO rsm_user(fname, lname, email, password, status, value) VALUES ('".$fname."' ,'".$lname."' ,'".$email."' ,'". $password."' ,". $status.", 128)";
				$res = query($query);
				$query = "INSERT INTO rsm_profile(userName) VALUES ('".$email."')";
				$res = query($query);
				if($res){
					$query = "INSERT INTO rsm_login(userName, Password, value) VALUES ('".$email."' ,'".$password."', 2)";
					$res = query($query);
					if($res){
						echo json_encode(array('Status' => "1" ));
					}else{
						echo json_encode(array('Status' => mysqli_error($conn)));
					}
				}else{
					echo json_encode(array('Status' => mysqli_error($conn)));
				}
				
			}else{
				echo json_encode(array('Status' => mysqli_error($conn)));
			}
		}

	}

?>