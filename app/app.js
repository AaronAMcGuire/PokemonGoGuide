var pokemonGoGuide = angular.module('pokemon', ['ngAnimate']);

pokemonGoGuide.controller('pokemonController', ['$scope','$http',function($scope, $http){





  $http.get('data.json').success(function(data){
      $scope.pokemons = data;
  })
  
 
}]);



