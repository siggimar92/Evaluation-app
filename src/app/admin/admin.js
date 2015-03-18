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

evalApp.controller( 'AdminCtrl', function AdminCtrl( $scope, $http, SERVER_URL, $location) {

  console.log("inside AdminCtrl");
  console.log($http.defaults.headers.common.Authorization);
  var auth = $http.defaults.headers.common.Authorization;
  $http.defaults.headers.common.Authorization = auth;
  console.log("Auth: " + auth);

  $scope.templates = [];

  $http.get(SERVER_URL + 'evaluationtemplates')
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    console.log(data);
    $http.defaults.headers.common.Authorization = auth;
    console.log("auth: " + auth);
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i]);
      $scope.templates[i] = data[i];
    }
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");
    console.log(status);
    if (status === 401) {
      $location.path('/login');
    }
  });    

  // // $scope.getTemp = function()
  // $http.get("http://dispatch.ru.is/h37/api/v1/evaluationtemplates")
  //   .success (function(response) {
  //     $scope.allTemplates = response;

  //     console.log("allTemplates:");
  //     console.log($scope.allTemplates);

  //     $scope.tempTitles = [];

  //     console.log("titles:");

  //     console.log(response[0].Title);
  //     // for (var i = 0; i < response.size(); i++) {
  //     //   //$scope.tempTitles.push(i.Title);
  //     //   console.log(response[i].Title);
  //     // }

  //   });


});
