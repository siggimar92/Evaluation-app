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

  // $scope.Days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  // $scope.Months = ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", ]

  $scope.templates = [];

  $scope.toSubmitID = 0;
  //$scope.toSubmitStart;
  // $scope.toSubmitEnd = null;
  $scope.toSubmitTitle = "";


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
    console.log($scope.toSubmitID);
  };

  $scope.startDate = function () {
    var dateIso = new Date();
    console.log(dateIso.toISOString());
    //console.log(dateTime.toISOString()); 
  };

  // // $scope.getTemp = function()
  // $http.get("http://dispatch.ru.is/h37/api/v1/evaluationtemplates")
  //   .success (function(response) {
  //     $scope.allTemplates = response;

  //     console.log("allTemplates:");
  //     console.log($scope.allTemplates);

  //     $scope.tempTitles = [];

  //     console.log("titles:");

  //     console.log(response[0].Title);
  //     // for (var i = 0; i < response.size(); i++) {
  //     //   //$scope.tempTitles.push(i.Title);
  //     //   console.log(response[i].Title);
  //     // }

  //   });


});
