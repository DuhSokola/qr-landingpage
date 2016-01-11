;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.carDataReader', dependencies);

    app.factory('CarDataReader', ['$rootScope', function ($rootScope) {
        var loadCarDataByModel = function (model) {
            var brandModels = $rootScope.global.cars.models;
            var modelExists = false;
            for(var i=0; i<brandModels.length; i++){
                if(brandModels[i].id == model.toLowerCase()){
                    $rootScope.global.params.selectedVariant = brandModels[i].variantList[0];
                    $rootScope.global.params.variantList = brandModels[i].variantList;
                    modelExists = true;
                    return true;
                }
            }
            console.log('model not found');
            return false;
        };

        return {
            loadCarDataByModel: loadCarDataByModel
        }
    }]);

}());