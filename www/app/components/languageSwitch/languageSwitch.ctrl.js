;(function () {
    'use strict';

    var deps = [];

    var app = angular.module('app.languageSwitch.ctrl', deps);

    app.controller('LanguageSwitchCtrl', ['$scope', '$rootScope','$translate','$cookies', function ($scope, $rootScope,$translate,$cookies) {
        $scope.languages = $rootScope.global.languages;
        if($cookies.get('language')){
            $scope.selectedLanguage = $cookies.get('language');
            $translate.use($scope.selectedLanguage);
        }else{
            $cookies.put('language','de');
            $scope.selectedLanguage = $scope.languages[0];
            $translate.use($scope.selectedLanguage);
        }

        $scope.$watch('selectedLanguage',function(newValue, oldValue){
            if(newValue !== oldValue){
                $cookies.put('language',newValue);
                $translate.use(newValue);
            }
        });
    }]);

}());