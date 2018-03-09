<?php 
	include("config.php");
	
	if ($_SERVER['REQUEST_METHOD'] == 'POST'){		
	
		if($_POST["layout"] === "logout"){
			session_start(); //Start the current session
			session_destroy(); //Destroy it! So we are logged out now
			header("location: ../login.php");
		}
	

		if($_POST["layout"] === "1001"){
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
								  	Here is the activation code for your Account </br>
								  	User Name : '.$email.' </br>
								  	Password : Your Password </br>
								  	Activation Key : '.$randomVar.'
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
		}

		if($_POST["layout"] === "1002"){
			$email = $_POST["email"];
			$password = md5($_POST["password"]);
			
			$query = "select l.* , u.* from rsm_login l , rsm_user u where l.userName = '".$email."' and l.Password = '".$password."' and l.userName = u.email";
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

	}

?>