<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['mail']))
$email = $_POST['mail'];
if(isset( $_POST['review']))
$review = $_POST['review'];


$content="From: $name From: $review";
$recipient = "example@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>