(function(){
'use strict';

angular.module('myBlog')

var projects = [{
  "details": {
    "title": "Git Commits Timeline",
    "desciption": "This is one of the first projects assigned in the cohort and is a moch of a tympanum code drop. The project demonstrates mobile first, responsive design. Utilizing HTML5, CSS3, jQuery and AngularJS, the project displays commit messages in the view by iterating over the GitHub API from my profile.",
    "image": "verticalTimeline"
  },
  // "details": {
  //   "title": "Git Commits Timeline",
  //   "desciption": "This is one of the first projects assigned in the cohort and is a moch of a tympanum code drop. The project demonstrates mobile first, responsive design. Utilizing HTML5, CSS3, jQuery and AngularJS, the project displays commit messages in the view by iterating over the GitHub API from my profile.",
  //   "image": "verticalTimeline"
  // }
}];

.controller('projectsCtrl', function($scope){
// var self = this;


angular.forEach(projects, function(project){
  $scope.projects.push({
   text: project.details.description
 });
});

console.log(projects);
});
})();
