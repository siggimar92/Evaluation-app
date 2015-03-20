var evalApp = angular.module( 'evalApp.admin', 
[
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

evalApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'admin', {
    url: '/admin',
    views: {
      "main": {
        controller: 'AdminCtrl',
        templateUrl: 'admin/admin.tpl.html'
      }
    },
    data:{ pageTitle: 'Admin' }
  });
});

evalApp.controller( 'AdminCtrl', function AdminCtrl( $scope, $http, SERVER_URL, $location) {

  console.log("inside AdminCtrl");
  console.log($http.defaults.headers.common.Authorization);
  var auth = $http.defaults.headers.common.Authorization;
  $http.defaults.headers.common.Authorization = auth;
  console.log("Auth: " + auth);

  $scope.templates = [];

  $scope.toSubmitID = 0;
  $scope.toSubmitTitle = "";
  $scope.toSubmitTitleEN = "";


  $scope.today = function() {
    $scope.toSubmitStart = new Date();
  };
  $scope.today();

  $scope.todayE = function() {
    $scope.toSubmitEnd = new Date();
  };
  $scope.todayE();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.openE = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.openedE = true;
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.dateOptions = {
    startingDay: 1
  };
  $scope.format = 'fullDate';

  $http.get(SERVER_URL + 'evaluationtemplates')
  .success(function (data, status, headers, config) {
    $http.defaults.headers.common.Authorization = auth;
    console.log("SUCCESS");
    console.log(data);
    console.log("auth: " + auth);

    $scope.templates = data;
  })
  .error(function (data, status, headers, config) {
    console.log("ERROR");

    console.log(status);
    if (status === 401) {
      $location.path('/login');
    }
  });   

  $scope.postEval = function(data) {
    $scope.toSubmitID = data.ID;
    $scope.toSubmitTitle = data.Title;
    $scope.toSubmitTitleEN = data.TitleEN;
  };

  $scope.submitEval = function() {
    console.log("ID: " + $scope.toSubmitID);
    console.log("Title: " + $scope.toSubmitTitle);
    console.log("TitleEN: " + $scope.toSubmitTitleEN);
    console.log("Start: " + $scope.toSubmitStart);
    console.log("End: " + $scope.toSubmitEnd);
    $scope.isoStart = $scope.toSubmitStart.toISOString();
    $scope.isoEnd = $scope.toSubmitEnd.toISOString();
    console.log("isoStart: " + $scope.isoStart);
    console.log("isoEnd: " + $scope.isoEnd);

    $http.post(SERVER_URL + 'evaluations', 
      {
        TemplateID: $scope.toSubmitID,
        StartDate: $scope.isoStart,
        EndDate: $scope.isoEnd
      })
    .success(function (data, status, headers, config) {
      console.log("SUCCESS");
      toastr.succsess("Evaluation has been submitted");
    })
    .error(function (data, status, headers, config) {
      console.log("ERROR");
      $scope.errorMessage = 'Notice! ID, start date and end date must be filled';
    });

  };
});
