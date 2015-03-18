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

evalApp.controller( 'LoginCtrl', function LoginCtrl( $scope, $http, LoginResource, SERVER_URL, $location) {

  console.log("inside LoginCtrl");
  $scope.username = "";
  $scope.password = "";
  
  // $scope.data = {};
  // $scope.status = {};

  $scope.login = function(username, password) {
    console.log("button press");

    //Simple POST request example (passing data) :
    LoginResource.doLogin($scope.username, $scope.password)
      .success(function (data, status, headers, config) {
        console.log("SUCCESS");
        // $scope.data = data;
        // $scope.status = status;
        // console.log($scope.status, $scope.data);

        $http.defaults.headers.common.Authorization = "Basic " + data.Token;
        console.log($http.defaults.headers.common.Authorization);
        // console.log(data);
        // console.log(data.User.Role);
        if(data.User.Role === "admin") {
          $location.path('/admin');
        } else {
          $location.path('/user');
        }
      })
      .error(function (data, status, headers, config) {
        console.log("ERROR");
        console.log(status);
        console.table(data);
      });    
  };
});

evalApp.factory('LoginResource', function ( $http, SERVER_URL) {
  
  return {
    doLogin: function (username, password) {
      return $http.post(SERVER_URL + 'login', {user: username, pass: password});
    }
  };
});
