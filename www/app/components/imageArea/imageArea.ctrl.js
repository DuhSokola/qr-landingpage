;(function () {
    'use strict';

    var dependencies = [
        'app.carDataReader'
    ];

    var app = angular.module('app.imageArea.ctrl', dependencies);

    app.controller('ImageAreaCtrl', ['$rootScope','$scope','$state', function ($rootScope, $scope,$state) {

        $scope.route = function(){
            $state.go('carVariants');
        };

    }]);

}());