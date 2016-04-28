<?php

//live
//$link = @mysqli_connect('localhost', 'miche647_michel', 'Juggalo69', 'miche647_horror');
//mysqli_select_db($link, "miche647_horror");

$link = @mysqli_connect('localhost', 'root', '');
mysqli_select_db($link, "horrordb");

/*$dbhost_name = "localhost";
$database = "miche647_horror ";
$username = "miche647_michel";
$password = "Juggalo69";

try {
$dbo = new PDO('mysql:host=localhost;dbname='.$database, $username, $password);
} catch (PDOException $e) {
print "Error!: " . $e->getMessage() . "<br/>";
die();
}*/
?>