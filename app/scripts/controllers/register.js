'use strict';

/**
 * @ngdoc function
 * @name digioApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the digioApp
 */
angular.module('digioApp')
    .controller('RegisterCtrl', function ($scope, $timeout) {

        $scope.aadharPattern=/^\d{4}\d{4}\d{4}$/g;
        $scope.otpPattern=/^\d{6}$/g;
        $scope.register= {
            aadhaar: null,
            kyc: false,
            otp: null,
            submitted: false
        };
        $scope.registrationStatus={
            status: false,
            statusText: 'Signing...'
        };
        $scope.enabledInputs={
            aadhaar: true,
            kyc: false,
            otp: false
        };

        $scope.verifyAadhar=function(aadhaar){
            if(aadhaar){
                $scope.enabledInputs.kyc=true;
                $scope.enabledInputs.aadhaar=false;
            }
            else{
                $scope.enabledInputs.kyc=false;
            }
        };

        $scope.verifyOTP=function(otp){
            $scope.register.submitted=true;
            $timeout(function(){
                $scope.registrationStatus.statusText="Signed!";
                $scope.registrationStatus.status=true;
                $timeout(function(){
                    $('#registration-modal').modal('hide');
                },1000);
            },2000);
        };

        $scope.kycChange=function(kyc){
            if(kyc){
                $scope.enabledInputs.otp=true;
            }
            else{
                $scope.enabledInputs.otp=false;
            }
        };
        $scope.toArray=function(num){
            return new Array(num);
        };
        function init(){
            $('#registration-modal').modal({backdrop: "static"});
            $scope.$parent.showHeader=false;
            $scope.$parent.showFooter=false;
        }
        init();
    });
