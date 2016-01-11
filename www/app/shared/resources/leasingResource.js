;(function(){
    'use strict';

    var deps = [
        'ngResource'
    ];

    var app = angular.module('app.leasingResource',deps);

    app.factory('LeasingData',['$rootScope','$resource',function($rootScope, $resource){
        return $resource($rootScope.carsApi + '/leasing');
    }]);

    app.factory('LeasingDataResource',['LeasingData', function(LeasingData){

        var getLeasingCalculation = function(query, success,error){
            return LeasingData.get(query,success,error);
        };
        return {
            getLeasingCalculation: getLeasingCalculation
        };
    }]);

}());