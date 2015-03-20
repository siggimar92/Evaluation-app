var evalApp = angular.module( 'evalApp.evaluations', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'evaluations', {
    url: '/evaluations',
    views: {
      "main": {
        controller: 'evaluationCtrl',
        templateUrl: 'evaluations/evaluations.tpl.html'
      }
    },
    data:{ pageTitle: 'Evaluations' }
  });
});

evalApp.controller( 'evaluationCtrl', function evaluationCtrl( $scope, $http, SERVER_URL, $rootScope, $location) {
  console.log("inside evaluationCtrl");

  $scope.display = [];
  $scope.evalID = $rootScope.evalID;
  $scope.courseID = $rootScope.courseID;
  $scope.courseInfo = $rootScope.courseInfo;
  $scope.semester = "20151";

  $scope.courseQ = [];
  $scope.teacherQ = [];
  $scope.ans = [];

  $http.get(SERVER_URL + 'courses/' + $scope.courseID + '/' + $scope.semester + '/evaluations/' + $scope.evalID)
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    console.log(data);

    console.log("evalID: " + $scope.evalID);
    console.log("courseInfo: " + $scope.courseInfo);

    $scope.display = data;
    $scope.courseQ = data.CourseQuestions;
    $scope.teacherQ = data.TeacherQuestions;
    console.log($scope.courseQ);
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");
    $location.path('/login');
  });

  $scope.isText = function (x) {
    if (x === "text") {
      return true;
    } else {
      return false;
    }
  };

});