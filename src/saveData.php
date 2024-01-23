<?php
header("Access-Control-Allow-Origin: *");


header("Content-Type: application/json; charset=UTF-8");

require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $db = new DB();
    $result = $db->insertData($name, $email, $message);

    echo $result;

    $db->closeConnection();
} else {
    echo "Invalid request method";
}

?>