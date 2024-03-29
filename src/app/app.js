var evalApp = angular.module( 'evalApp', 
[ 'templates-app',
  'templates-common',
  'evalApp.home',
  'evalApp.about',
  'evalApp.login',
  'evalApp.admin',
  'evalApp.user',
  'evalApp.newTemplate',
  'evalApp.evaluations',
  'evalApp.course',
  'ui.router'
]);

evalApp.constant('SERVER_URL', 'http://dispatch.ru.is/h48/api/v1/');

evalApp.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/login' );
});

evalApp.run( function run () {
});

evalApp.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Evaluation App' ;
    }
  });
});

evalApp.directive('evaluation-question', function() {
  return ;
});