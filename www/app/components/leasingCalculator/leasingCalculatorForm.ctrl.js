;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.leasingCalculatorForm.ctrl', dependencies);

    app.controller('LeasingCalculatorFormCtrl', ['$rootScope', '$scope', '$translate', function ($rootScope, $scope, $translate) {
        $scope.data = {};
        $scope.data.payment = 0;
        $scope.data.duration = 12;
        $scope.data.milage = 10000;
        $scope.data.discount = false;

    }]);

}());