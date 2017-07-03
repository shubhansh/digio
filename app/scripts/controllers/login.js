'use strict';

/**
 * @ngdoc function
 * @name digioApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the digioApp
 */
angular.module('digioApp')
  .controller('LoginCtrl', function ($scope, $location) {

      $scope.loginObj={
          emailId: null
      };

      $scope.loginAction=function(loginForm){
          if(loginForm.$invalid){
              return;
          }
          $location.path('/register');
      };
      $scope.onSignIn=function(user){
          $location.path('/register');
          $scope.$apply();
      };

      window.onSignIn=$scope.onSignIn;

      function init(){
          $scope.$parent.showHeader=true;
          $scope.$parent.showFooter=true;
      };
      init();
  });
