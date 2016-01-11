;(function () {
    'use strict';

    var dependencies = [
        'app.leasingResource'
    ];

    var app = angular.module('app.leasingCalculatorForm.ctrl', dependencies);

    app.controller('LeasingCalculatorFormCtrl', ['$rootScope', '$scope','$stateParams','LeasingDataResource', function ($rootScope, $scope, $stateParams,LeasingDataResource) {

        $scope.data = {};
        $scope.data.basePrice = 30000;
        $scope.data.payment = 0;
        $scope.data.duration = 12;
        $scope.data.milage = 10000;
        $scope.data.interestRate = '3.97';
        $scope.result=500;

        $scope.calculate = function(){
            LeasingDataResource.getLeasingCalculation({
                carCode: '',
                interestRate: $scope.data.interestRate,
                specialPayment: $scope.data.payment,
                totalAmount: $scope.data.basePrice + $scope.data.payment,
                month: $scope.data.duration,
                kmPerYear: $scope.data.milage
        },function(result){
                console.log(result);
                $scope.result=result;
            }, function(){
                console.log('err');
            });
        }

    }]);

}());