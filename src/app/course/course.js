var evalApp = angular.module( 'evalApp.course', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'course', {
    url: '/course',
    views: {
      "main": {
        controller: 'courseCtrl',
        templateUrl: 'course/course.tpl.html'
      }
    },
    data:{ pageTitle: 'Course' }
  });
});

evalApp.controller( 'courseCtrl', function LoginCtrl( $scope, $http, LoginResource, SERVER_URL, $location, $rootScope) {

  console.log("inside CourseCtrl");  

  $scope.courseInfo = $rootScope.course; 
  $scope.displayEvals = [];

  $scope.doEval = function(ID) {
    console.log(ID);
     $rootScope.evalID = ID; 
     $rootScope.courseInfo = $scope.courseInfo;
     $rootScope.courseID = $scope.courseInfo.CourseID;
     $location.path('/evaluations');
  };

  $http.get(SERVER_URL + '/evaluations')
    .success(function (data, status, headers, config) {
      console.log("SUCCESS");
      console.log(data);

      $scope.displayEvals = data;
    })
    .error(function (data, status, headers, config) {
      console.log("ERROR");

      if (status === 401) {
        $location.path('/login');
      }
    });   
});

