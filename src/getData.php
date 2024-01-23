<?php
header("Access-Control-Allow-Origin: *");  // Allow requests from any origin
header("Content-Type: application/json");
require_once('db.php');



class UserDataRetriever
{
    private $db;

    public function __construct()
    {
        $this->db = new DB();
    }

    public function getAllUserData()
    {
        $result = $this->db->conn->query("SELECT * FROM lietotaji");

        if ($result->num_rows > 0) {
            $data = array();

            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }

            return $data;
        } else {
            return array('message' => 'Nav ierakstu');
        }
    }

    public function closeConnection()
    {
        $this->db->closeConnection();
    }
}


$userDataRetriever = new UserDataRetriever();

$data = $userDataRetriever->getAllUserData();


header('Content-Type: application/json');
echo json_encode($data);


$userDataRetriever->closeConnection();

?>