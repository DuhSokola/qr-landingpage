;(function () {
    'use strict';

    var dependencies = [
        'app.modelList'
    ];

    var app = angular.module('app.modelList.ctrl', dependencies);

    app.controller('ModelListCtrl', ['$rootScope', '$scope', '$state', 'CarResource','$stateParams', function ($rootScope, $scope, $state, CarResource, $stateParams) {

        CarResource.getByBrand($stateParams.brand, function (response) {
                $rootScope.global.cars = {
                    brand: response.brand,
                    models: response.models
                };
            },
            function (error) {
                console.log('ERROR');
            });

        $scope.route = function (choosenModel) {
            $state.go('landingPage',{
                brand:$stateParams.brand,
                model:choosenModel
            });
        }

    }]);

}());