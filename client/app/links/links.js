angular.module('shortly.links', [])
// var links = require('../server/links/*.js')

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    // Links.function.....then
    Links.getLinks()
      .then(function(data){
        $scope.data.links = data;
        console.log('data.links',$scope.data.links)
      })
      .catch(function(err){
        console.log(err);
      })
    };

  $scope.getLinks();
})

//
