;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.landingPageForm.ctrl', dependencies);

    app.controller('LandingPageFormCtrl', ['$rootScope', '$scope', '$translate', '$stateParams', function ($rootScope, $scope, $translate, $stateParams) {
        $rootScope.global.params.brand = $stateParams.brand;
        $rootScope.global.params.model = $stateParams.model;
        $rootScope.global.params.mode = null;
    }]);

}());