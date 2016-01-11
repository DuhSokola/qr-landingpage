;(function () {
    'use strict';

    var dependencies = [
        'app.carDataReader'
    ];

    var app = angular.module('app.imageArea.ctrl', dependencies);

    app.controller('ImageAreaCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope,$state,$stateParams) {

        $scope.route = function(){
            $state.go('variantList',{
                brand: $stateParams.brand,
                model: $stateParams.model
            });
        };

    }]);

    app.filter('moneyFilter', function(){
        return function(number){
            var output;
            if(number.length < 3){

            }
            return output
        }
    })

}());