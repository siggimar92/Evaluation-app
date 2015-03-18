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
  $scope.displayCourses = [];
  $scope.displayEvals = [];
  console.log("inside UserCtrl");
  console.log($http.defaults.headers.common.Authorization);
  // console.log($http.defaults.headers.common.Authorization);
  // console.log($http.get(SERVER_URL + 'my/courses'));

  $http.get(SERVER_URL + 'my/courses')
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      //console.log(data[i].Name);
      $scope.displayCourses[i] = data[i];
    }
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");
  });   

$http.get(SERVER_URL + 'my/evaluations')
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    //console.log(data);

    for (var i = 0; i < data.length; i++) {
      $scope.displayEvals[i] = data[i];
    }
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");
  });   

});
