;(function () {
    'use strict';

    var dependencies = [
    ];

    var app = angular.module('app.contactForm.ctrl', dependencies);

    app.controller('ContactFormCtrl', ['$scope', function ($scope) {
        $scope.data.salutation = '';
        $scope.data.firstName = '';
        $scope.data.lastName = '';
        $scope.data.street = '';
        $scope.data.streetNr = '';
        $scope.data.zip = '';
        $scope.data.city = '';
        $scope.data.telephone = '';
        $scope.data.email = '';
        $scope.data.catalogElectronic = '';
        $scope.data.testdrive = '';
        $scope.data.leasing = '';
        $scope.data.privacyAccepted = '';
        $scope.data.newsletter = '';
    }]);

}());