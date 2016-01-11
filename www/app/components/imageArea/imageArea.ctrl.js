;(function () {
    'use strict';

    var dependencies = [
        'app.carDataReader'
    ];

    var app = angular.module('app.imageArea.ctrl', dependencies);

    app.controller('ImageAreaCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope, $state, $stateParams) {

        $rootScope.$watch('global.params.selectedVariant', function (val) {
            if ($rootScope.global.params.selectedVariant) {
                $scope.imageUrl = $rootScope.carsApi + $rootScope.global.params.selectedVariant.picturePaths[0];
            }
        });

        $scope.route = function () {
            $state.go('variantList', {
                brand: $stateParams.brand,
                model: $stateParams.model
            });
        };

    }]);

}());