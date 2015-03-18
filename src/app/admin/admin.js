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
  console.log($http.defaults.headers.common.Authorization);

  // $scope.getTemp = function()
  $http.get("http://dispatch.ru.is/h37/api/v1/evaluationtemplates")
    .success (function(response) {
      $scope.allTemplates = response;

      console.log("allTemplates:");
      console.log($scope.allTemplates);

      $scope.tempTitles = [];

      console.log("titles:");

      console.log(response[0].Title);
      // for (var i = 0; i < response.size(); i++) {
      //   //$scope.tempTitles.push(i.Title);
      //   console.log(response[i].Title);
      // }

    });


});
