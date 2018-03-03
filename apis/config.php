<?php 
	session_start();
	$conn = mysqli_connect("localhost" , "root" , "" ,"Masters");
	if(!$conn){
		echo "Database Error ==>" . mysqli_error($conn);
	}
	define("ERROR", "");	
	function query($sql){
		global $conn;
		$result = mysqli_query($conn , $sql);
		return $result;
	}
?>