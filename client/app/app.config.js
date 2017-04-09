angular.
  module('theater').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/start', {
          template: '<start></start>'
        }).
        when('/profile', {
          template: '<profile></profile>'
        }).
        when('/calendar', {
          template: '<calendar></calendar>'
        }).
        when('/guests', {
          template: '<guests></guests>'
        }).
        otherwise('/start');
    }
  ]);
