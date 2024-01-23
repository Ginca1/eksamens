<?php

class DB
{
    private $servername;
    private $username;
    private $password;
    private $dbname;
    public $conn;

    public function __construct()
    {
        $this->servername = "localhost";
        $this->username = "root";
        $this->password = "";
        $this->dbname = "eksamens";

        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function closeConnection()
    {
        $this->conn->close();
    }

    public function insertData($name, $email, $message)
    {
        $sql = "INSERT INTO lietotaji (vards, `e-pasts`, zinojums, laiks) VALUES ('$name', '$email', '$message', CURRENT_TIMESTAMP)";
    
        if ($this->conn->query($sql) === TRUE) {
            return "Data saved successfully";
        } else {
            return "Error: " . $sql . "<br>" . $this->conn->error;
        }
    }
}

?>