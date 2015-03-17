var evalApp = angular.module( 'evalApp.user', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'user', {
    url: '/user',
    views: {
      "main": {
        controller: 'UserCtrl',
        templateUrl: 'user/user.tpl.html'
      }
    },
    data:{ pageTitle: 'User' }
  });
});

evalApp.controller( 'UserCtrl', function UserCtrl( $scope, $http, SERVER_URL) {

  console.log("inside UserCtrl");

});
