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
  $scope.displayCourses = [];
  $scope.displayEvals = [];
  console.log("inside UserCtrl");
  
  // console.log($http.defaults.headers.common.Authorization);
  // console.log($http.get(SERVER_URL + 'my/courses'));

  $scope.doEval = function(ID) {
    console.log(ID);
     $rootScope.ID = ID; 
     $location.path('/evaluations');
  };

  $http.get(SERVER_URL + 'my/courses')
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    console.log(data);

    $scope.displayCourses = data;
    // for (var i = 0; i < data.length; i++) {
    //   //console.log(data[i].Name);
    //   $scope.displayCourses[i] = data[i];
    // }
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");
  });   

$http.get(SERVER_URL + '/evaluations')
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    console.log(data);

    $scope.displayEvals = data;
    // for (var i = 0; i < data.length; i++) {
    //   $scope.displayEvals[i] = data[i];
    // }
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");
  });   

});

// evalApp.factory('Data', function ($scope, $http, SERVER_URL) {
//   return {
//     getTemplateByID: function (ID) {
//       return $http.get(SERVER_URL + "evaluations/:id", {id:ID});
//       console.log(ID);
//     };
//   };
// })
