var evalApp = angular.module( 'evalApp.newTemplate', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'newTemplate', {
    url: '/newTemplate',
    views: {
      "main": {
        controller: 'newTemplateCtrl',
        templateUrl: 'newTemplate/newTemplate.tpl.html'
      }
    },
    data:{ pageTitle: 'Create template' }
  });
});

evalApp.controller( 'newTemplateCtrl', function newTemplateCtrl( $scope, $http, LoginResource, SERVER_URL, $location) {

  console.log("inside newTemplateCtrl");
  

});