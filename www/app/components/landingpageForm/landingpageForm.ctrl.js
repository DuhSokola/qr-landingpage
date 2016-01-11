;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.landingPageForm.ctrl', dependencies);

    app.controller('LandingPageFormCtrl', ['$rootScope', '$scope', '$translate', '$stateParams', function ($rootScope, $scope, $translate, $stateParams) {
        $rootScope.global.params = {
            brand : $stateParams.brand,
            model : $stateParams.model,
            mode: null
        };
    }]);

}());