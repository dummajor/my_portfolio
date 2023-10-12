<?php
if ($_SERVER["REQUEST_METHOD"] =="POST") {
    $name = $_POST["name"]; 
    $email = $_POST["email$email"]; 
    $message = $_POST["message"]; 

    $to = "dummajor@gmail.com"; 
    $subject= "From Dummajor Website"; 
    $headers ="From: $email"; 

    mail($to, $subject, $message, $headers);
    
}

?>