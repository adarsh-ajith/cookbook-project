<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $connection = mysqli_connect('localhost', 'root', '', 'test');
    if(!$conn-> connect_error)
    {
        die('connection failed'. '.$conn -> connect_error');
    }
?>
