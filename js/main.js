(function() {

  var searchRequest;
  var searchField = document.querySelector("#searchBox");
  var theList = document.querySelector("#movieList");
  var infoContainer = document.querySelector("#contentContainer");
  var killerCon = document.querySelector("#killerHolder");

  //ALL FADING FUNCTION//

  function fadeInEverything() {
    var everything = [allMovies];
    TweenMax.staggerFromTo(everything, 1, {opacity:0}, {opacity:1}, 0.2);
  }

  //ALL FADING FUNCTION//

  function showResults(str) {
    searchRequest = createRequest();
    if(searchRequest === null) {
      alert("Please upgrade to a modern browser!");
      return;
    }
    var url="searchMovie.php?searchstring="+str;
    searchRequest.onreadystatechange = searchStatus;
    searchRequest.open("GET", url, true);
    searchRequest.send(null);
  }

  function searchStatus() {
    if(searchRequest.readyState === 4 || searchRequest.readyState === "complete") {
      document.querySelector("#searchResults").innerHTML = searchRequest.responseText;
      document.querySelector("#searchResults").classList.add("resultsBlock");
    }
  }
})();
  
  var killerCon = document.querySelector("#killerHolder");
  var infoContainer = document.querySelector("#contentContainer");
  var theList = document.querySelector("#movieList");

  function fadeInResults() {
    var results = [infoContainer];
    TweenMax.staggerFromTo(results, 1, {opacity:0}, {opacity:1}, 0.2);
  }

  function displayInfo(id) {
    var displayRequest;
    function displayMovie(id) {
      displayRequest = createRequest();
      if(displayRequest === null) {
        alert("Please update your browser dammit!");
        return;
      }
      var url = "displayMovie.php?movid=" + id;
      displayRequest.onreadystatechange = displayStatus;
      displayRequest.open("GET", url, true);
      displayRequest.send(null);
    }

    function displayStatus() {
      if(displayRequest.readyState === 4 || displayRequest.readyState === "complete") {
        document.querySelector("#contentContainer").innerHTML = displayRequest.responseText;
        document.querySelector("#contentContainer").style="height:auto";
        theList.classList.add("listGone");
        infoContainer.classList.remove("contentGone");
        killerCon.classList.remove("visible");
      }
    }
    displayMovie(id);
    fadeInResults();
  }