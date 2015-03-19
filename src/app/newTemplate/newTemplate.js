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

  var auth = $http.defaults.headers.common.Authorization;
  $http.defaults.headers.common.Authorization = auth;

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

  $scope.postME = {};

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

    $scope.cAText = "";
    $scope.cATextEN = "";
    $scope.cAWeight = 0;
  };

  $scope.addCQuestion = function() {
    console.log("");
    console.log("cQText: " + $scope.cQText);
    console.log("cQTextEN: " + $scope.cQTextEN);
    console.log("cQType: " + $scope.cQType);

    var onecQ = { 
      Text: $scope.cQText,
      TextEN: $scope.cQTextEN,
      Type: $scope.cQType,
      Answers: $scope.CAns
    };

    $scope.courseQ.push(onecQ);
    console.log("questions:");
    console.log($scope.courseQ);

    $scope.cQText = "";
    $scope.cQTextEN = "";
    $scope.cQType = "";
    $scope.CAns = [];
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
    console.log($scope.TAns);

    $scope.tAText = "";
    $scope.tATextEN = "";
    $scope.tAWeight = 0;
  };

  $scope.addTQuestion = function() {
    console.log("");
    console.log("tQText: " + $scope.tQText);
    console.log("tQTextEN: " + $scope.tQTextEN);
    console.log("tQType: " + $scope.tQType);

    var onetQ = { 
      Text: $scope.tQText,
      TextEN: $scope.tQTextEN,
      Type: $scope.tQType,
      Answers: $scope.TAns
    };
    $scope.teacherQ.push(onetQ);
    console.log("questions:");
    console.log($scope.teacherQ);

    $scope.tQText = "";
    $scope.tQTextEN = "";
    $scope.tQType = "";
    $scope.TAns = [];

  };

  $scope.combine = function () {
    console.log("putting everything together");

    $scope.postME = {
      Title: $scope.evalTitle,
      TitleEN: $scope.evalTitleEN,
      IntroText: $scope.evalIntro,
      IntroTextEN: $scope.evalIntroEN,
      CourseQuestions: $scope.courseQ,
      TeacherQuestions: $scope.teacherQ
    };

    console.log($scope.postME);

  };

  $scope.createTemplate = function() {
    console.log("Creating template");

    //Simple POST request example (passing data) : 
    $http.post(SERVER_URL + 'evaluationtemplates', 
      {
        Title: $scope.evalTitle,
        TitleEN: $scope.evalTitleEN,
        IntroText: $scope.evalIntro,
        IntroTextEN: $scope.evalIntroEN,
        CourseQuestions: $scope.courseQ,
        TeacherQuestions: $scope.teacherQ
      })
    .success(function (data, status, headers, config) {
      console.log("SUCCESS");
    })
    .error(function (data, status, headers, config) {
      console.log("ERROR");
    })
  };
});



