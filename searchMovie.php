<?php
$in=$_GET['searchstring'];
if($in!=NULL) {
require_once("includes/connect.php");
$sql="SELECT movie_thumb, movie_title, movie_year, movie_id FROM tbl_movies WHERE movie_title like '$in%'";
$result = mysqli_query($link, $sql);
$numrows = mysqli_num_rows($result);
if($numrows > 0) {
while($row = mysqli_fetch_array($result)) {
echo
"<div class=\"listHolder\" onclick=\"displayInfo(".$row['movie_id'].")\">
<img src=\"".$row['movie_thumb']."\">
<p class=\"inputs\">".$row['movie_title']." <span class=\"YEAR\">".$row['movie_year']."</span></p>
</div>";
}
}else{
echo "<p class=\"noResults\">No results match your search</p>";
}
}
?>
