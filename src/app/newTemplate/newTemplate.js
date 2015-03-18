var evalApp = angular.module( 'evalApp.newTemplate', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'newTemplate', {
    url: '/newTemplate',
    views: {
      "main": {
        controller: 'newTemplateCtrl',
        templateUrl: 'newTemplate/newTemplate.tpl.html'
      }
    },
    data:{ pageTitle: 'Create template' }
  });
});

evalApp.controller( 'newTemplateCtrl', function newTemplateCtrl( $scope, $http, LoginResource, SERVER_URL, $location) {

 console.log("inside newTemplateCtrl");

  $scope.title = "";
  $scope.titleEN = "";
  $scope.intro = "";
  $scope.introEN = "";

  $scope.courseQ = [];
  $scope.teacherQ = [];
  $scope.answer = [];

  console.log($scope.title);
  console.log($scope.titleEN);
  console.log($scope.intro);
  console.log($scope.introEN);
  console.log($scope.courseQ);
  console.log($scope.teacherQ);

  $scope.oneAnswer = {
    Text: "svar",
    TextEN: "Answer",
    Weight: 5
  };
  var oneQuestion = {
    Text: "Spurning",
    TextEN: "Question",
    Type: "single",
    Answers: $scope.oneAnswer
  };

  $scope.addCQ = function() {
    $scope.CourseQ.push();
  };

  $scope.addTQ = function() {
    $scope.teacherQ.push();
  };


  $scope.createTemplate = function(title, titleEN, intro, introEN, courseQ, teacherQ) {
  console.log("button press");
  //Simple POST request example (passing data) :  
  };
});