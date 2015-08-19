
'use strict';

/*
 *
 * @ngdoc overview
 * @name holaAngularApp
 * @description
 * # holaAngularApp
 *
 * Main module of the application.
 */

angular
  .module('miApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        //templateUrl: '../views/main.html',
      })
      .otherwise({
        redirectTo: '/',
        templateUrl:'../index.html'
      });
  });



  
