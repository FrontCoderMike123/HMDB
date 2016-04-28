(function() {

	var killerRequest;
	var killerCon = document.querySelector("#killerHolder");
	var killerPics = document.querySelectorAll(".selectKiller li");

	for(i = 0; i < killerPics.length; i++) {
		killerPics[i].addEventListener("click", function() {
		showUserJSON(this.value);
		killerCon.classList.add("visible");
	}, false);
	}

	function fadeInKillers() {
    	var killerImgs = [killerCon];
    	TweenMax.staggerFromTo(killerImgs, 2, {opacity:0}, {opacity:1}, 0.2);
  	}

	function showUserJSON(str) {
		killerRequest = createRequest();
		if(killerRequest === null) {
			alert("Please take the time to update your browser, it'll be worth it!");
			return;
		}
		var url = "getKiller.php?q=" + str;
		killerRequest.onreadystatechange = stateChangedJSON;
		killerRequest.open("GET", url, true);
		killerRequest.send(null);
	}

	function stateChangedJSON() {
   		if(killerRequest.readyState===4 || killerRequest.readyState==="complete"){
			var jsondoc = JSON.parse(killerRequest.responseText);
			document.getElementById("photo").innerHTML = "<img src='"+jsondoc.photo+"'>";
			document.getElementById("name").innerHTML = jsondoc.Name;
			document.getElementById("stat1").innerHTML = jsondoc.stat1;
			document.getElementById("movie").innerHTML = jsondoc.movie;
			document.getElementById("stat2").innerHTML = jsondoc.stat2;
			document.getElementById("history").innerHTML = jsondoc.movieHistory;
			document.getElementById("stat3").innerHTML = jsondoc.stat3;
			document.getElementById("victim").innerHTML = jsondoc.victim;
			document.getElementById("stat4").innerHTML = jsondoc.stat4;
			document.getElementById("height").innerHTML = jsondoc.killerHeight;
			document.getElementById("stat5").innerHTML = jsondoc.stat5;
			document.getElementById("weight").innerHTML = jsondoc.killerWeight;
			document.getElementById("stat6").innerHTML = jsondoc.stat6;
			document.getElementById("weapon").innerHTML = jsondoc.weapon;
			document.getElementById("stat7").innerHTML = jsondoc.stat7;
			document.getElementById("kills").innerHTML = jsondoc.kills;
			document.getElementById("stat8").innerHTML = jsondoc.stat8;
			document.getElementById("movies").innerHTML = jsondoc.movies;
			document.getElementById("stat9").innerHTML = jsondoc.stat9;
			document.getElementById("desc").innerHTML = jsondoc.desc;
			fadeInKillers();
		}
	}

})();
