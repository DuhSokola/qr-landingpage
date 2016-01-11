;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.variantList.ctrl', dependencies);

    app.controller('VariantListCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope, $state, $stateParams) {

        $scope.route = function (variantId) {
            $state.go('landingPage', {
                brand: $rootScope.global.params.brand,
                model: $rootScope.global.params.model,
                variant: variantId
            });
        }

    }]);

}());