angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.link =  {};
  $scope.addLink = function (link) {
    Links.addLink($scope.link)
      .then(function(){
        // console.log(resp) Add resp to the callback if you want to see this.
        $location.path('/')
      })//redirect
      .catch(function(error){
        console.log(error)
      });
  };
});

