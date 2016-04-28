<?php
	
	function getAll($tbl1) {
		include('connect.php');
		$queryAll = "SELECT * FROM {$tbl1} ORDER BY movie_title ASC";
		$runAll = mysqli_query($link, $queryAll);
		
		if($runAll){
			return $runAll;	
		}else{
			$error =  "You can't seem to be able to connect to the database, try later.";
			return $error;
		}
		mysqli_close($link);		
	}

	function getSingle($tbl1, $col1, $id) {

		include('connect.php');

		$querySingle = "SELECT * FROM {$tbl1} WHERE {$col1}={$id}";
		
		$runSingle = mysql_query($link, $querySingle);
		
		if($runSingle){
			return $runSingle;	
		}else{
			$error =  "There was an error accessing this information.  Please contact your admin.";
			return $error;
		}
			mysqli_close($link);
	}
	
	function filterType($tbl1, $tbl2, $tbl3, $col1, $col2, $col3, $filter) {
		//$tbl1, $tbl2, $tbl3, $col1, $col2, $col3, $filter
		require_once('connect.php');
		$tbl1 = "tbl_movies";
		$tbl2 = "tbl_cat";
		$tbl3 = "tbl_moviegenres";
		$col1 = "movie_id";
        $col2 = "cat_id";
        $col3 = "cat_name";
		$queryFilter = "SELECT * FROM {$tbl1}, {$tbl2}, {$tbl3} WHERE {$tbl1}.{$col1} = {$tbl3}.{$col1} AND {$tbl2}.{$col2} = {$tbl3}.{$col2} AND {$tbl2}.{$col3} = '{$filter}' ORDER BY movie_title ASC";

		$runFilter = mysqli_query($link, $queryFilter);
		
		if($runFilter){
			return $runFilter;	
		}else{
			$error =  "There was an error accessing this information.  Please contact your admin.";
			return $error;
		}
	}

	function getAnchor($link1, $link2, $link3, $anchor1, $anchor2, $anchor3, $mainLink) {
		require_once('connect.php');
		$link1 = "tbl_movies";
        $link2 = "tbl_killers";
        $link3 = "tbl_l_movieKillers";
        $anchor1 = "movies_id";
        $anchor2 = "killer_id";
        $anchor3 = "killer_movies";
		$queryFilter = "SELECT * FROM {$link1}, {$link2}, {$link3} WHERE {$link1}.{$anchor1} = {$link3}.{$anchor1} AND {$link2}.{$anchor2} = {$link3}.{$anchor2} AND {$link2}.{$anchor3} = '{$mainLink}' ORDER BY movie_title ASC";

		$runFilter = mysqli_query($link, $queryFilter);
		
		if($runFilter){
			return $runFilter;	
		}else{
			$error =  "cant single click";
			return $error;
		}
	}
?>