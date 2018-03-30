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

		if($_POST["layout"] == "1003"){
			$email = $_POST["email"]; //JSON.parse(localStorage.getItem("session")).email			
		
			$query = "select * from rsm_files where email ='".$email."'";
			$res = query($query);
			if($res){		
				echo json_encode($res);
			}else{
				echo json_encode(array('Status' => mysqli_error($conn)));
			}
		}
		if($_POST["layout"] == "1004"){				
			$query = "select * from rsm_category";			
			$res = query($query);
			if($res){		
				while($r = mysqli_fetch_assoc($res)) {
			    $rows[] = $r;
			}
        	echo json_encode($rows);
			}else{
				echo json_encode(array('Status' => mysqli_error($conn)));
			}
		}
		if($_POST["layout"] == "1005"){
			$cat_id = $_POST["cat_id"];
			$query = "select * from rsm_div where cat_id='".$cat_id."'";
			$res = query($query);
			if($res){		
				while($r = mysqli_fetch_assoc($res)) {
			    $rows[] = $r;
			}
        	echo json_encode($rows);
			}else{
				echo json_encode(array('Status' => mysqli_error($conn)));
			}
		}
		if($_POST['layout'] === "1006"){ 
			$sql = "select CONCAT_WS(' ', fname, lname) as Name , email as Email, value as AddedBy from rsm_user";
			$res = query($sql);
			if($res->num_rows  >= 1) {
				$val = 0;
				$row = array( 'Sl No.' => [], 'Name' => [], 'Email' => [], 'AddedBy' => [] );
				while($r = $res -> fetch_assoc()) {
				    $row['Sl No.'][$val] = (string)($val+1);
				    $row['Name'][$val] = $r['Name'];
				    $row['Email'][$val] = $r['Email'];
				    $row['AddedBy'][$val] = $r['AddedBy'];
					$val++;
				}
	        	$result_array =  array("tableHeader" => [["heading"=>"Sl No."] ,["heading"=>"Name"], ["heading" => "Email" ], ["heading" => "AddedBy"]],"tableData" => [$row]);
				
		  	 	echo json_encode($result_array);
	        }
	        else {
	      		 echo json_encode(array('Status' => 'Failure'));
	   		} 
			exit();
		}
	}

?>