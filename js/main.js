(function(){

  var app = angular.module('myBlog', [
    'ui.router', 'ui.bootstrap'
  ]);

  app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/projects.html',
        controller: 'projectsCtrl',
        controllerAs: 'projects'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'views/blog.html',
      controller: 'blogCtrl',
      controllerAs: 'blog'
    })
    .state('profWriting', {
      url: '/profWriting',
      templateUrl: 'views/profWriting.html',
      controller: 'profWritingCtrl',
      controllerAs: 'profWriting'
    })
    .state('photography', {
      url: '/photography',
      templateUrl: 'views/photography.html',
      controller: 'photographyCtrl',
      controllerAs: 'photography'
    });

  }]);
})();
