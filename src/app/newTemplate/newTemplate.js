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

  $scope.evalTitle = "";
  $scope.evalTitleEN = "";
  $scope.evalIntro = "";
  $scope.evalIntroEN = "";

  $scope.courseQ = [];
  $scope.teacherQ = [];

  $scope.CAns = [];
  $scope.TAns = [];

  $scope.qText = "";
  $scope.qTextEN = "";
  $scope.qType = "";

  $scope.aText = "";
  $scope.aTextEN = "";
  $scope.aWeight = 0;

  $scope.logThis = function() {
    console.log("");
    console.log("Title: " + $scope.evalTitle);
    console.log("TitleEN: " + $scope.evalTitleEN);
    console.log("Intro: " + $scope.evalIntro);
    console.log("IntroEN: " + $scope.evalIntroEN);
  };

  $scope.addCAnswer = function() {
    console.log("");
    console.log("aText: " + $scope.aText);
    console.log("aTextEN: " + $scope.aTextEN);
    console.log("aWeight: " + $scope.aWeight);
    var oneA = { 
      Text: $scope.aText,
      TextEN: $scope.aTextEN,
      Weight: $scope.aWeight
    };
    $scope.CAns.push(oneA);
    console.log("Answers: ");
    console.log($scope.CAns);
  };

  $scope.addCQuestion = function() {
    console.log("");
    console.log("qText: " + $scope.qText);
    console.log("qTextEN: " + $scope.qTextEN);
    console.log("qType: " + $scope.qType);

    var oneQ = { 
      Text: $scope.qText,
      TextEN: $scope.qTextEN,
      Type: $scope.qType,
      Answers: $scope.CAns
    };
    $scope.courseQ.push(oneQ);
    console.log("questions:");
    console.log($scope.courseQ);

  };




  $scope.createTemplate = function(title, titleEN, intro, introEN, courseQ, teacherQ) {
  console.log("button press");

  //Simple POST request example (passing data) :  
  };
});