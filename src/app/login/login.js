angular.module( 'ngBoilerplate.login', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
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
})

.controller( 'LoginCtrl', function LoginCtrl( $scope, $http, SERVER_URL) {

  console.log("inside LoginCtrl");
  $scope.username = "";
  $scope.password = "";
  $scope.login = function(username, password) {
    console.log("button press");

    // Simple POST request example (passing data) :
    $http.post(SERVER_URL + 'login', {user: $scope.username, pass: $scope.password}).
      success(function (data, status, headers, config) {
        console.log("SUCCESS");
        console.log("Data: " + data);
        console.log("Status: " + status);
        console.log("Headers: " + headers);
        console.log("Config: " + config);
      }).
      error(function (data, status, headers, config) {
        console.log("ERROR");
        console.log("Data: " + data);
        console.log("Status: " + status);
        console.log("Headers: " + headers);
        console.log("Config: " + config);
      });    
  };
})

;
