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
				var out = {};
				out[$scope.queryBy || "movie_title"] = $scope.query;
				return out;
			}
		});

		$http.get('json/movies.json').success(function(data){
			$scope.movies = data;
		});
	}]);

	killers.controller('movieDetailCTRL',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
		$http.get('json/movies.json').success(function(details){
			$scope.movie_title = details[$stateParams.ID].movie_title;
			$scope.movie_img = details[$stateParams.ID].movie_img;
			$scope.movie_year = details[$stateParams.ID].movie_year;
			$scope.movie_rating = details[$stateParams.ID].movie_rating;
			$scope.movie_time = details[$stateParams.ID].movie_time;
			$scope.movie_genre = details[$stateParams.ID].movie_genre;
			$scope.movie_dir = details[$stateParams.ID].movie_dir;
			$scope.movie_stars = details[$stateParams.ID].movie_stars;
			$scope.movie_desc = details[$stateParams.ID].movie_desc;
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
			console.log($scope.Films);
		});
	}]);

})();