(function(){

  var app = angular.module('myBlog', [
    'ui.router'
  ]);

  app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/projects.html',
        controller: 'projectsCtrl',
        controllerAs: 'projects'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: '/blog.html',
      controller: 'blogCtrl',
      controllerAs: 'blog'
    })
    .state('profWriting', {
      url: '/profWriting',
      templateUrl: 'profWriting.html',
      controller: 'profWritingCtrl',
      controllerAs: 'profWriting'
    })
    .state('photography', {
      url: '/photography',
      templateUrl: 'photography.html',
      controller: 'photographyCtrl',
      controllerAs: 'photography'
    });

  }]);
})();
