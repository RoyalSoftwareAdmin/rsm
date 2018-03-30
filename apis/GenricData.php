<?php 
	include("config.php");
	if ($_SERVER['REQUEST_METHOD'] == 'POST'){		
		if($_POST["layout"] === "logout"){
			session_start(); //Start the current session
			session_destroy(); //Destroy it! So we are logged out now
			header("location: ../login.php");
		}

		if($_POST["layout"] == "1001"){
			function randomString($length = 6) {
				$str = "";							
				$characters = array_merge(range('A','Z'), range('a','z'), range('0','9'));
				$max = count($characters) - 1;
				for ($i = 0; $i < $length; $i++) {
					$rand = mt_rand(0, $max);
					$str .= $characters[$rand];
				}
				return $str;
			}
			$randomVar = randomString();

			$fname = $_POST["fname"];
			$lname = $_POST["lname"];
			$email = $_POST["email"];
			$password = md5($_POST["password"]);
			$gender = $_POST["gender"];
			$status = 0;			

				// Multiple recipients
				$to = $email; // note the comma

				// Subject
				$subject = 'Account Activation';

				// Message
				$message = '<html>
								<head>
								  <title> Account Activation </title>
								</head>
								<body>
								  	<p>Dear '.$fname.',</p> 
								  	<p> Click the below link to activate your account </p>
								  	 <a href="http://www.royalsoftwaresolution.com/RoyalMaster/activate.php?mail='.$email.'&actkey='.$randomVar.'> Click ! </a> to Activate Your Account
								</body>
							</html>
				';

			// To send HTML mail, the Content-type header must be set
				$headers[] = 'MIME-Version: 1.0';
				$headers[] = 'Content-type: text/html; charset=iso-8859-1';

				// Additional headers
				$headers[] = 'To: '.$fname.' <'.$email.'>';
				$headers[] = 'From: Admin <admin@royalsoftwaresolution.com>';
				$headers[] = 'Cc: madhu@royalsoftwaresolution.com';				

				// Mail it				
		
		$query = "INSERT INTO rsm_user(fname, lname, email, password, status, gender, value, ActiveKey) VALUES ('".$fname."' ,'".$lname."' ,'".$email."' ,'". $password."' ,'". $status."' ,'". $gender."',64,'".$randomVar."')";
			$res = query($query);
			if($res){

				mail($to, $subject, $message, implode("\r\n", $headers));
				$query = "INSERT INTO rsm_profile(userName) VALUES ('".$email."')";
				$res = query($query);
				if($res){
					$query = "INSERT INTO rsm_login(userName, Password, value) VALUES ('".$email."' ,'".$password."', 3)";
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

		if($_POST["layout"] == "1002"){
			$email = $_POST["email"];
			$password = md5($_POST["password"]);
			
			$query = "select l.* , u.* from rsm_login l , rsm_user u where l.userName = '".$email."' and l.Password = '".$password."' and l.userName = u.email and u.status=1";
			$res = query($query);
			if(mysqli_num_rows($res) !== 0 ){
				$row = $res->fetch_assoc();
				$row["UserStatus"] = 1;
				$_SESSION["user"] = $row["userName"];
				echo json_encode($row);				
			}else{
				echo json_encode(array('Status' => "Invalid UserName and Password"));
			}
		}

		if($_POST["layout"] == "1003"){

			$userName = $_POST["userName"];
			$dob = $_POST["dob"];
			$country = $_POST["country"];
			$state = $_POST["state"];
			$zip = $_POST["zip"];
			$organization = $_POST["organization"];
			$department = $_POST["department"];
			$id = $_POST["id"];
			$blood = $_POST["blood"];
			$techskills = $_POST["technical"];
			$mobile = $_POST["mobile"];
			$office = $_POST["office"];
			$webbsite = $_POST["webbsite"];
			$others = $_POST['others'];
			
			$query = "update rsm_profile set dob='".$dob."', country = '".$country."', state='".$state."', zip='".$zip."', college='".$organization."', department='".$department."', blood='".$blood."', id='".$id."', techskills='".$techskills."', mobile='".$mobile."', office='".$office."', webbsite='".$webbsite."',others='".$others."' where userName='".$userName."'";
			$res = query($query);
				if($res){
					echo json_encode(array('Status' => "1" ));
				}else{
					echo json_encode(array('Status' => mysqli_error($conn)));
				}
		}

		if($_POST["layout"] == "1004"){
			$email = $_POST["email"];
			
			$query = "SELECT CONCAT_WS(' ', u.fname, u.lname) as Name , u.email as EMail , p.dob as DateofBirth, p.state as Location, CONCAT_WS(' ', p.college, p.department) as College_Department, p.techskills as TechnicalSkills, p.mobile as Mobile_Number , p.webbsite as Website, p.others as Others FROM rsm_profile p, rsm_user u WHERE p.userName='".$email."' and p.userName = u.email";
			$res = query($query);
			if(mysqli_num_rows($res) !== 0 ){
				$row = $res->fetch_assoc();
				$row["Status"] = 1;
				echo json_encode($row);				
			}else{
				echo json_encode(array('Status' => "Invalid UserName and Password"));
			}
		}
		// Useful link screen api starts here
		if($_POST['layout'] === "1005"){ 
			$sql = "select f.name as Author , c.cat_name as Category, f.filename as File_Name , f.email as Email from rsm_files f , rsm_category c where c.cat_id= f.category";
			$res = query($sql);
			if($res->num_rows  >= 1) {
				$val = 0;
				$row = array('Name' => [], 'Category' => [], 'File_Name' => [], 'Email' => [], 'Download' =>[] );
				while($r = $res -> fetch_assoc()) {
				    $row['Name'][$val] = $r['Author'];
				    $row['Category'][$val] = $r['Category'];
				    $row['File_Name'][$val] = $r['File_Name'];
				    $row['Email'][$val] = $r['Email'];
				    $row['Download'][$val] = 'Download';
				    $val++;
				}
	        	$result_array =  array("tableHeader" => [["heading"=>"Author"] ,["heading"=>"Category"], ["heading" => "File_Name" ], ["heading" => "Email"] , ["heading" => "Download"]],"tableData" => [$row]);
				
		  	 	echo json_encode($result_array);
	        }
	        else {
	      		 echo json_encode(array('Status' => 'Failure'));
	   		} 
			exit();
		}		

	}

?>