var evalApp = angular.module( 'evalApp.admin', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'admin', {
    url: '/admin',
    views: {
      "main": {
        controller: 'AdminCtrl',
        templateUrl: 'admin/admin.tpl.html'
      }
    },
    data:{ pageTitle: 'Admin' }
  });
});

evalApp.controller( 'AdminCtrl', function AdminCtrl( $scope, $http, SERVER_URL) {

  console.log("inside AdminCtrl");

});
