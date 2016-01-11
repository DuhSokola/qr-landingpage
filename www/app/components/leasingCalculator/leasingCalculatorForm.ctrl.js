;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.leasingCalculatorForm.ctrl', dependencies);

    app.controller('LeasingCalculatorFormCtrl', ['$rootScope', '$scope','$stateParams', function ($rootScope, $scope, $stateParams) {
        console.log($stateParams);
        $rootScope.global.params = {
            brand : $stateParams.brand,
            model : $stateParams.model
        };

        $scope.data = {};
        $scope.data.payment = 0;
        $scope.data.duration = 12;
        $scope.data.milage = 10000;
        $scope.data.discount = false;
        $scope.result=500;

        $scope.calculate = function(){
            $scope.result=1000;
        }

    }]);

}());