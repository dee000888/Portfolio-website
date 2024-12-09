<?php

    // Start session
    session_start();

    include("../database/database.php");

    $conn = new mysqli($host, $username, $password, $dbname);

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    

    $stmt = $conn -> prepare(
        "INSERT INTO `messages`
        (`name`, `email`, `subject`, `message`)
        VALUES (?, ?, ?, ?)"
    );

    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    $stmt->execute();

    // close request
    $stmt->close();
    $conn->close();

    header("Location: ../html/message.html");
    exit;

?>
