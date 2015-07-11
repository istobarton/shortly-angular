angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link =  {};
  $scope.addLink = function () {
    $http.post('/api/links')
      .success(function(data) {
        $scope.link = data;
      })
  }
});
