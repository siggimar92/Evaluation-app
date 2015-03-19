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

  $scope.cQText = "";
  $scope.cQTextEN = "";
  $scope.cQType = "";

  $scope.cAText = "";
  $scope.cATextEN = "";
  $scope.cAWeight = 0;

  $scope.tQText = "";
  $scope.tQTextEN = "";
  $scope.tQType = "";

  $scope.tAText = "";
  $scope.tATextEN = "";
  $scope.tAWeight = 0;

  $scope.logThis = function() {
    console.log("");
    console.log("Title: " + $scope.evalTitle);
    console.log("TitleEN: " + $scope.evalTitleEN);
    console.log("Intro: " + $scope.evalIntro);
    console.log("IntroEN: " + $scope.evalIntroEN);
  };

  $scope.addCAnswer = function() {
    console.log("");
    console.log("cAText: " + $scope.cAText);
    console.log("cATextEN: " + $scope.cATextEN);
    console.log("cAWeight: " + $scope.cAWeight);
    var onecA = { 
      Text: $scope.cAText,
      TextEN: $scope.cATextEN,
      Weight: $scope.cAWeight
    };
    $scope.CAns.push(onecA);
    console.log("Answers: ");
    console.log($scope.CAns);
  };

  $scope.addTAnswer = function() {
    console.log("");
    console.log("tAText: " + $scope.tAText);
    console.log("tATextEN: " + $scope.tATextEN);
    console.log("tAWeight: " + $scope.tAWeight);
    var onetA = { 
      Text: $scope.tAText,
      TextEN: $scope.tATextEN,
      Weight: $scope.tAWeight
    };
    $scope.TAns.push(onetA);
    console.log("Answers: ");
    console.log($scope.CAns);
  };

  $scope.addCQuestion = function() {
    console.log("");
    console.log("cQText: " + $scope.cQText);
    console.log("cQTextEN: " + $scope.cQTextEN);
    console.log("cQType: " + $scope.cQType);

    var oneQ = { 
      Text: $scope.cQText,
      TextEN: $scope.cQTextEN,
      Type: $scope.cQType,
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