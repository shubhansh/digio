'use strict';

/**
 * @ngdoc overview
 * @name digioApp
 * @description
 * # digioApp
 *
 * Main module of the application.
 */
angular
    .module('digioApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
