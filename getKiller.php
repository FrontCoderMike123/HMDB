<?php
error_reporting(0);
header('Content-Type: application/json');
require_once("includes/connect.php");
$array = array();
$q=$_GET['q'];
$sql="SELECT * FROM tbl_killers WHERE killer_id =".$q;
$result = mysqli_query($link, $sql);

while ($row = mysqli_fetch_array($result)){
$killers = array(
	'photo' => $row['killer_img'],
	'thumb' => $row['killer_thumb'],
	'Name' => $row['killer_name'],
	'stat1' => $row['killer_stat1'],
	'movie' => $row['killer_famous'],
	'stat2' => $row['killer_stat2'],
	'movieHistory' => $row['killer_history'],
	'stat3' => $row['killer_stat3'],
	'victim' => $row['killer_victim'],
	'stat4' => $row['killer_stat4'],
    'killerHeight' => $row['killer_height'],
    'stat5' => $row['killer_stat5'],
    'killerWeight' => $row['killer_weight'],
    'stat6' => $row['killer_stat6'],
    'weapon' => $row['killer_weapon'],
    'stat7' => $row['killer_stat7'],
    'kills' => $row['killer_kills'],
    'stat8' => $row['killer_stat8'],
    'movies' => $row['killer_movies'],
    'stat9' => $row['killer_stat9'],
    'desc' => $row['killer_desc']
	);
	array_push($array,$killers);
}

echo json_encode($killers, true);
?>



