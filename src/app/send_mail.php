<?php

########### CONFIG ###############

$recipient = 'd.blem93@gmail.com'; # Bitte hier deine E-Mail angeben

########### CONFIG END ###########

########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [email] Email of the sender
#     [message] Message that should be sent to you
#
##################################

// Setze CORS-Header
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: content-type");

if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        exit;
    case ("POST"): // Send the email;

        $subject = "Contact From " . $_POST['name'];
        $headers = "From: " . $_POST['email'];

        if (mail($recipient, $subject, $_POST['message'], $headers)) {
            // Erfolgreiche E-Mail-Versand-Antwort
            echo json_encode(["success" => true]);
        } else {
            // Fehler beim E-Mail-Versand
            echo json_encode(["success" => false, "error" => "Error sending email"]);
        }
        break;
    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        echo json_encode(["success" => false, "error" => "Invalid request method"]);
        exit;
}
?>
