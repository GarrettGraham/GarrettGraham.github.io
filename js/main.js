(function(){

  var app = angular.module('myBlog', [
    'ui.router'
  ]);

  app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // .state('home', {
    //     url: '/',
    //     templateUrl: '/index.html',
    //     controller: 'mainCtrl',
    //     controllerAs: 'main'
    // })
    .state('home', {
      url: '/',
      templateUrl: '/blog.html',
      controller: 'blogCtrl',
      controllerAs: 'blog'
    });

  }]);
})();
