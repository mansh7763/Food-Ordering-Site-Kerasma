<?php
$servername = "localhost";
$username = "root";
$password = "";

$con = new mysqli($servername, $username, $password);
if ($con->error) {
   die("connection failed" . $con->error); } 



 $sql = "CREATE DATABASE IF NOT EXISTS project"; 
if ($con->query($sql) == TRUE) 
{ echo " Database created
successfully"; echo "<br />"; }
 else { echo "failed" . $con->error; } 
 
 $con->select_db('project');
 $table = "CREATE TABLE IF NOT EXISTS client(
  id INT PRIMARY KEY AUTO_INCREMENT,
  UserName VARCHAR(40) NOT NULL,
  Email VARCHAR(40) NOT NULL,
  phoneNumber VARCHAR(40) NOT NULL,
  UserPassword VARCHAR(40) NOT NULL
)";

 if($con->query($table)!=true){
  echo "Error:.$con->error";
 }
?>