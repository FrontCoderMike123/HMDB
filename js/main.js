(function(){

	var killers = angular.module('killers',['ui.router']);

	killers.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('Movies',{
			url:'/movies',
			templateUrl:'movie.html',
			controller:'movieCTRL'
		});
		$stateProvider.state('Movie',{
			url:'/movies/:ID',
			templateUrl:'movieDetails.html',
			controller:'movieDetailCTRL'
		});
		$stateProvider.state('Killers',{
			url:'/killers',
			templateUrl:'killers.html',
			controller:'killerCTRL'
		});
		$stateProvider.state('Killer',{
			url:'/killers/:ID',
			templateUrl:'killerDetails.html',
			controller:'killerDetailCTRL'
		});
		$urlRouterProvider.otherwise('/movies');
	}]);

	killers.controller('movieCTRL',['$scope','$http',function($scope,$http){
		Object.defineProperty($scope,"queryFilter",{
			get: function(){
				var movies = {};
				movies[$scope.queryBy || "movie_title"] = $scope.query;
				return movies;
			}
		});

		$http.get('json/movies.json').success(function(data){
			$scope.movies = data.Movies;
		});

		var button = document.querySelector('#searchButton');
		var clicked = false;
		button.addEventListener('click', function() {
			clicked = !clicked;
			if(!clicked){
				button.classList.toggle('activeButton');
			}else{
				button.classList.toggle('activeButton');
			}
		},false);
	}]);

	killers.controller('movieDetailCTRL',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
		$http.get('json/movies.json').success(function(details){
			$scope.movie_title = details.Movies[$stateParams.ID].movie_title;
			$scope.movie_img = details.Movies[$stateParams.ID].movie_img;
			$scope.movie_year = details.Movies[$stateParams.ID].movie_year;
			$scope.movie_rating = details.Movies[$stateParams.ID].movie_rating;
			$scope.movie_time = details.Movies[$stateParams.ID].movie_time;
			$scope.movie_genre = details.Movies[$stateParams.ID].movie_genre;
			$scope.movie_dir = details.Movies[$stateParams.ID].movie_dir;
			$scope.movie_stars = details.Movies[$stateParams.ID].movie_stars;
			$scope.movie_desc = details.Movies[$stateParams.ID].movie_desc;
		});
	}]);

	killers.controller('killerCTRL',['$scope','$http',function($scope,$http){
		$http.get('json/killers.json').success(function(data){
			$scope.killers = data.Killers;
		});
	}]);

	killers.controller('killerDetailCTRL',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
		$http.get('json/killers.json').success(function(details){
			$scope.Name = details.Killers[$stateParams.ID].Name;
			$scope.Photo = details.Killers[$stateParams.ID].Photo;
			$scope.Famous = details.Killers[$stateParams.ID].Famous;
			$scope.Passed = details.Killers[$stateParams.ID].Passed;
			$scope.Victim = details.Killers[$stateParams.ID].Victim;
			$scope.Height = details.Killers[$stateParams.ID].Height;
			$scope.Weight = details.Killers[$stateParams.ID].Weight;
			$scope.Weapon = details.Killers[$stateParams.ID].Weapon;
			$scope.Kills = details.Killers[$stateParams.ID].Kills;
			$scope.Desc = details.Killers[$stateParams.ID].Desc;
			$scope.Films = details.Killers[$stateParams.ID].Films;
			$scope._id = details.Killers[$stateParams.ID]._id;
			//console.log($scope.Films);
		});
	}]);

})();