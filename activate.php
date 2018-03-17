<?php	
	
	include("apis/config.php");

	$mail = $_GET['mail'];
	$actkey = $_GET['actkey'];
	$query = "update rsm_user set status = 1 where email='".$mail."' and ActiveKey='".$actkey."'";
	$res = query($query);
	// Multiple recipients
	$to = $mail; // note the comma
	// Subject
	$subject = 'Account Activation';
	// Message
	$message = '<html>
					<head>
					  <title> Account Activation </title>
					</head>
					<body>
					  	<p>Dear User,</p> 
					  	<p> Your Account is activated now , Start finding your skills</p>
					  	 <a href="http://www.royalsoftwaresolution.com/RoyalMaster/"> Royal Skills Master</a>
					</body>
				</html>';
	// To send HTML mail, the Content-type header must be set
	$headers[] = 'MIME-Version: 1.0';
	$headers[] = 'Content-type: text/html; charset=iso-8859-1';
	// Additional headers
	$headers[] = 'To: '.$mail.' <'.$mail.'>';
	$headers[] = 'From: Admin <admin@royalsoftwaresolution.com>';
	$headers[] = 'Cc: madhu@royalsoftwaresolution.com';				
	// Mail it				
	if($res == 1){	
			mail($to, $subject, $message, implode("\r\n", $headers));	
			exit(header("Location: login.php"));
		}else{
			echo json_encode(array('Status' => mysqli_error($conn)));
		}	
?>