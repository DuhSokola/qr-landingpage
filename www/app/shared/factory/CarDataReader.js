;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.carDataReader', dependencies);

    app.factory('CarDataReader', ['$rootScope', function ($rootScope) {
        var loadCarDataByModel = function (brandModels, model, modelVariant) {
            for (var i = 0; i < brandModels.length; i++) {
                if (brandModels[i].id == model.toLowerCase()) {
                    if (modelVariant) {
                        for (var j = 0; j < brandModels[i].variantList.length; j++) {
                            if (brandModels[i].variantList[j].id == modelVariant.toLowerCase()) {
                                $rootScope.global.params.selectedModelVariantObj = brandModels[i].variantList[j];
                                break;
                            }
                        }
                    }
                    else {
                        console.log('modelVariant not found, took first from variantList');
                        $rootScope.global.params.selectedModelVariant = brandModels[i].variantList[0].id;
                        $rootScope.global.params.selectedModelVariantObj = brandModels[i].variantList[0];
                    }
                    $rootScope.global.params.variantList = brandModels[i].variantList;
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