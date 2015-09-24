(function(){
'use strict';

angular.module('myBlog')
.controller('projectsCtrl', function($scope, $http) {
// var self = this;

$http.get("js/projects.json").success(function(data) {
  $scope.projects = [];
  angular.forEach(data, function(project) {
    $scope.projects.push({
      text: project.details.desc,
      title: project.details.projTitle,
      image: project.details.image,
      date: project.details.projDate,
      demo: project.details.demo
    });
  });
});

});
})();
