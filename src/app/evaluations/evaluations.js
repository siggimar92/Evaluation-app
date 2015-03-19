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

evalApp.controller( 'evaluationCtrl', function evaluationCtrl( $scope, $http, SERVER_URL, $rootScope) {
  console.log("inside evaluationCtrl");

  console.log($rootScope.ID);
  $scope.display = [];
  $scope.evalID = $rootScope.ID;
  $scope.course = "T-427-WEPO";
  $scope.semester = "20151";
  $scope.courseQ = [];
  $scope.teacherQ = [];
  $scope.ans = [];

   $http.get(SERVER_URL + 'courses/' + $scope.course + '/' + $scope.semester + '/evaluations/' + $scope.evalID)
  .success(function (data, status, headers, config) {
    console.log("SUCCESS");
    console.log(data);

    $scope.display = data;
    $scope.courseQ = data.CourseQuestions;
    $scope.teacherQ = data.TeacherQuestions;
    console.log($scope.courseQ);
    
    // for (var i = 0; i < data.CourseQuestions.length; i++) {
    //   $scope.ans[i] = $scope.courseQ.Answers[i];
    // }
    // console.log($scope.ans);
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");
  });  

});
