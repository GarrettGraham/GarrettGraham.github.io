(function(){
'use strict';

angular.module('myBlog')
.controller('projectsCtrl', function(){

var projects=[{
  "details": {
    "title": "Git Commits Timeline",
    "desciption": "This is one of the first projects assigned in the cohort and is a moch of a tympanum code drop. The project demonstrates mobile first, responsive design. Utilizing HTML5, CSS3, jQuery and AngularJS, the project displays commit messages in the view by iterating over the GitHub API from my profile.",
  }
}];
console.log(projects);
});
})();
