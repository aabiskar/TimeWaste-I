(function(){
	angular.module('TimeWaste')
	  .controller('NavigationController',['$scope','$http','$state',function($scope,$http,$state) {
	  	$scope.logUserIn = function() {
	  		$http.post('api/user/login',$scope.login).success(function(response) {
	  			//console.log("Login Button Clicked");
	  			console.log($scope.login);
	  			localStorage.setItem('User-Data',JSON.stringify(response));
	  		}).error(function(error) {
	  			console.error(error);
	  		})
	  	}
	  }])
}())