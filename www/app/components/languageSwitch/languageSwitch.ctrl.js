;(function () {
    'use strict';

    var deps = [];

    var app = angular.module('app.languageSwitch.ctrl', deps);

    app.controller('LanguageSwitchCtrl', ['$scope', '$rootScope','$translate', function ($scope, $rootScope,$translate) {
        $scope.languages = $rootScope.global.languages;
        $scope.selectedLanguage = $scope.languages[0];

        $scope.$watch('selectedLanguage',function(newValue, oldValue){
            if(newValue !== oldValue){
                $translate.use(newValue);
            }
        });
    }]);

}());