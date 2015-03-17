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

.controller( 'LoginCtrl', function LoginCtrl( $scope, $http) {

  console.log("inside LoginCtrl");
  $scope.username = "";
  $scope.password = "";
  $scope.login = function(username, password) {
    console.log("button press");

    // Simple POST request example (passing data) :
    $http.post('http://dispatch.ru.is/h37/api/v1/login', {user: $scope.username, pass: $scope.password}).
      success(function (data, status, headers, config) {
        console.log("success i like");
      }).
      error(function (data, status, headers, config) {
        console.log("error... its not nice");
      });    
  };
})

;
