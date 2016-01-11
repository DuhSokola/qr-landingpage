;(function () {
    'use strict';

    var dependencies = [
        'app.leasingResource'
    ];

    var app = angular.module('app.leasingCalculatorForm.ctrl', dependencies);

    app.controller('LeasingCalculatorFormCtrl', ['$rootScope', '$scope','$stateParams','LeasingDataResource', function ($rootScope, $scope, $stateParams,LeasingDataResource) {

        $rootScope.global.params.selectedBrand = $stateParams.brand;
        $rootScope.global.params.selectedModel = $stateParams.model;
        $rootScope.global.params.selectedMode = null;

        $scope.data = {};
        $scope.data.basePrice = 30000;
        $scope.data.payment = 0;
        $scope.data.duration = 12;
        $scope.data.milage = 10000;
        $scope.data.interestRateDefault = '5.40';
        $scope.data.interestRateEffektive = parseFloat($scope.data.interestRateDefault) + 0.05;
        $scope.data.discount = false;
        $scope.data.discountRate = '3.90';
        $scope.result=500;

        $scope.calculate = function(){
            LeasingDataResource.getLeasingCalculation({
                carCode: $rootScope.global.params.selectedVariant.versionList[0].id,
                interestRate: $scope.data.discount ? $scope.data.discountRate : $scope.data.interestRateDefault,
                specialPayment: $scope.data.payment,
                totalAmount: $scope.data.basePrice + $scope.data.payment,
                month: $scope.data.duration,
                kmPerYear: $scope.data.milage
        },function(result){
                console.log(result);
                $scope.result=result;
            }, function(){
                console.log('err');
                $scope.result=2000;
            });
        }

    }]);

}());