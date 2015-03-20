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

evalApp.controller( 'UserCtrl', function UserCtrl( $scope, $http, SERVER_URL, $rootScope, $location) {
  $scope.courses = [];
  // $scope.displayEvals = [];
  console.log("inside UserCtrl");
  
  // console.log($http.defaults.headers.common.Authorization);
  // console.log($http.get(SERVER_URL + 'my/courses'));

  // $scope.doEval = function(ID) {
  //   console.log(ID);
  //    $rootScope.ID = ID; 
  //    $location.path('/evaluations');
  // };

  $http.get(SERVER_URL + 'my/courses')
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    console.log(data);

    $scope.courses = data;
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");

    if (status === 401) {
      $location.path('/login');
    }
  });   

  $scope.seeCourse = function (data) {
    console.log(data);
    $rootScope.course = data; 
    $location.path('/course');
  };

// $http.get(SERVER_URL + '/evaluations')
//   .success(function (data, status, headers, config) {
//     console.log("SUCCESS");
//     console.log(data);

//     $scope.displayEvals = data;
//   })
//   .error(function (data, status, headers, config) {
//     console.log("ERROR");

//     if (status === 401) {
//       $location.path('/login');
//     }
//   });   

});

// evalApp.factory('Data', function ($scope, $http, SERVER_URL) {
//   return {
//     getTemplateByID: function (ID) {
//       return $http.get(SERVER_URL + "evaluations/:id", {id:ID});
//       console.log(ID);
//     };
//   };
// })
