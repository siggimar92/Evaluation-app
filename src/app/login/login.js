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
  $scope.errorMessage = "";

  // $scope.fullName = "";
  // $scope.profileImg = "";

  // $scope.data = {};
  // $scope.status = {};

  $scope.login = function(username, password) {
    console.log("button press");

    //Simple POST request example (passing data) :
    LoginResource.doLogin($scope.username, $scope.password)
      .success(function (data, status, headers, config) {
        console.log("SUCCESS");
        toastr.info("YO niggah");
        // $scope.data = data;
        // $scope.status = status;
        // console.log($scope.status, $scope.data);

        $http.defaults.headers.common.Authorization = "Basic " + data.Token;
        console.log($http.defaults.headers.common.Authorization);
        // console.log(data);
        // console.log(data.User.Role);

        // $scope.fullName = data.User.FullName;
        // $scope.profileImg = data.User.ImageURL;

        if(data.User.Role === "admin") {
          $location.path('/admin');
        } else {
          $location.path('/user');
        }
      })
      .error(function (data, status, headers, config) {
        $scope.errorMessage = 'This is not a valid username';
        /* no need to check for passw as all passw work on this server.... */
        console.log("ERROR");
        //console.log(status);
        //console.table(data);
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
