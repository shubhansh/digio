'use strict';

/**
 * @ngdoc function
 * @name digioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the digioApp
 */
angular.module('digioApp')
  .controller('MainCtrl', function ($scope) {
      $scope.showHeader=true;
      $scope.showFooter=true;
  });
