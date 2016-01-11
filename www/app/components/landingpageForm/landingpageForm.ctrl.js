;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.landingPageForm.ctrl', dependencies);

    app.controller('LandingPageFormCtrl', ['$rootScope', '$scope', '$translate', '$state', '$stateParams', function ($rootScope, $scope, $translate, $state, $stateParams) {
        $rootScope.global.params.brand = $stateParams.brand;
        $rootScope.global.params.model = $stateParams.model;
        $rootScope.global.params.mode = null;

        $scope.route = function(){
            $state.go('variantList',{
               brand: $rootScope.global.params.brand
            });
        }

    }]);

}());