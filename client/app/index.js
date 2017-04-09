import angular from 'angular';
import 'angular-route';
import './wizard';

angular.
  module('theater', ['wizard', 'ngRoute']).
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/start', {
          template: '<start></start>'
        }).
        when('/customer', {
          template: '<customer></customer>'
        }).
        when('/calendar', {
          template: '<calendar></calendar>'
        }).
        when('/tickets', {
          template: '<tickets></tickets>'
        }).
        otherwise('/start');
    }
  ]);
