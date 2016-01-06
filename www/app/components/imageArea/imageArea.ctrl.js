;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.imageArea.ctrl', dependencies);

    app.controller('ImageAreaCtrl', ['$scope','$state',function ($scope,$state) {
        $scope.route = function(){
            $state.go('carVariants');
        };
    }]);

}());