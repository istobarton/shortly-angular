angular.module('shortly.links', [])
// var links = require('../server/links/*.js')

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.getLinks = function(){
    // Links.function.....then
    $http.get('/api/links')
      .success(function(data){
        $scope.data.links = data;
      })
  };

  $scope.getLinks();
})

