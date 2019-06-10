<?php
  $fname = $_POST['fname'];
  $lname = $_POST['lname']
  $email = $_POST['email'];
  $message = $_POST['message'];
  $formcontent="From: $fname $lname \n Message: $message";
  $recipient = "hc.hannahchou@gmail.com";
  $subject = "Contact Form";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
  echo "Thank You!";
?>
