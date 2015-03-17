var evalApp = angular.module( 'evalApp.login', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
});

evalApp.controller( 'LoginCtrl', function LoginCtrl( $scope, $http, SERVER_URL) {

  console.log("inside LoginCtrl");
  // $scope.username = "";
  // $scope.password = "";
  
  $scope.data = {};
  $scope.status = {};

  $scope.login = function(username, password) {
    console.log("button press");

    //Simple POST request example (passing data) :
    $http.post(SERVER_URL + 'login', {user: $scope.username, pass: $scope.password})
      
      .success(function (data, status, headers, config) {
        console.log("SUCCESS");
        $scope.data = data;
        $scope.status = status;
        $http.defaults.headers.common.Authorization = "Basic " + data.Token;
        console.log($http.defaults.headers.common.Authorization);
        //$location.path('/about');
      })
      .error(function (data, status, headers, config) {
        console.log("ERROR");
        console.log(status);
      });    
  };
});

// myApp.factory('authInterceptor', function ($rootScope, $q, $window) {
//   return {
//     request: function (config) {
//       config.headers = config.headers || {};
//       if ($window.sessionStorage.token) {
//         config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
//       }
//       return config;
//     },
//     response: function (response) {
//       if (response.status === 401) {
//         // handle the case where the user is not authenticated
//       }
//       return response || $q.when(response);
//     }
//   };
// });
