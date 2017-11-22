'use strict';

/**
 * @ngdoc overview
 * @name ofertasCalendarioApp
 * @description
 * # ofertasCalendarioApp
 *
 * Main module of the application.
 */
angular
  .module('ofertasCalendarioApp', [
    'ngRoute',
    'ui.calendar',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
      })
      .otherwise({
        redirectTo: '/',
      });
  });
