<?php
$q=$_GET['movid'];
require_once("includes/connect.php");
$sql="SELECT * FROM tbl_movies WHERE movie_id =".$q;
$result = mysqli_query($link, $sql);
$row = mysqli_fetch_array($result);
$text1 = "Year Released: ";
$text2 = "Rating: ";
$text3 = "Duration: ";
$text4 = "Director: ";
$text5 = "Stars: ";
$text6 = "Description: ";
$text7 = "Genre: ";

echo 
"<div class=\"posterHolder\">
<img src=\"".$row['movie_img']."\">
</div>
<div class=\"detailHolder\">
<span class=\"title\">".$row['movie_title']."</span> 
<br />
<div class=\"movieText\">
<span class=\"identify\">".$text1."</span> ".$row['movie_year']."
<br />
<span class=\"identify\">".$text2."</span> ".$row['movie_rating']."
<br />
<span class=\"identify\">".$text3."</span> ".$row['movie_time']."
<br />
<span class=\"identify\">".$text7."</span> ".$row['movie_genre']."
<br />
<span class=\"identify\">".$text4."</span> ".$row['movie_dir']."
<br />
<span class=\"identify\">".$text5."</span> ".$row['movie_stars']."
<br />
<span class=\"identify\">".$text6."</span> ".$row['movie_desc']."
</div>
</div>";
?>