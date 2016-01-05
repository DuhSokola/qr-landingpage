;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.contactForm.ctrl', dependencies);

    app.controller('ContactFormCtrl', ['$rootScope', '$scope', '$translate', function ($rootScope, $scope, $translate) {

        $scope.salutations = [
            {
                translation: 'CONTACT_SALUTATION_MR',
                value: 'MR'
            }
            , {
                translation: 'CONTACT_SALUTATION_MRS',
                value: 'MRS'
            }];

        $scope.data = {};
        $scope.data.salutation = '';
        $scope.data.firstName = '';
        $scope.data.lastName = '';
        $scope.data.street = '';
        $scope.data.streetNr = '';
        $scope.data.zip = '';
        $scope.data.city = '';
        $scope.data.telephone = '';
        $scope.data.email = '';
        $scope.data.catalog = '';
        $scope.data.catalogTyp = '';
        $scope.data.testdrive = '';
        $scope.data.testdriveTyp = '';
        $scope.data.leasing = '';
        $scope.data.leasingTyp = '';
        $scope.data.privacyAccepted = '';
        $scope.data.newsletter = true;

        var setErrorChkbox = function (id) {
            id = '#' + id;
            $(id).removeClass('md-primary');
            $(id).addClass('error-checkbox');
            $(id).addClass('error-text');
        };

        var setNormalChkbox = function (id) {
            id = '#' + id;
            $(id).removeClass('error-text');
            $(id).removeClass('error-checkbox');
            $(id).addClass('md-primary');
        };

        var setErrorRadio = function (name) {
            $('md-radio-button[name='+name+']').removeClass('md-primary');
            $('md-radio-button[name='+name+']').addClass('error-radio');
            $('md-radio-button[name='+name+']').addClass('error-text');
        };

        var setNormalRadio = function (name) {
            $('md-radio-button[name='+name+']').removeClass('error-text');
            $('md-radio-button[name='+name+']').removeClass('error-radio');
            $('md-radio-button[name='+name+']').addClass('md-primary');
        };

        $scope.validate = function () {
            var isValid = true;
            if (!$scope.data.catalog && !$scope.data.testdrive && !$scope.data.leasing) {
                setErrorChkbox('checkbox-catalog');
                setErrorChkbox('checkbox-testdrive');
                setErrorChkbox('checkbox-leasing');
                isValid = false;
            }

            if ($scope.data.catalog && !$scope.data.catalogTyp) {
                setErrorRadio('radio-catalog');
                isValid = false;
            }
            if ($scope.data.testdrive && !$scope.data.testdriveTyp) {
                setErrorRadio('radio-testdrive');
                isValid = false;
            }
            if ($scope.data.leasing && !$scope.data.leasingTyp) {
                setErrorRadio('radio-leasing');
                isValid = false;
            }
            if (!$scope.data.privacyAccepted) {
                setErrorChkbox('checkbox-privacy');
                isValid = false;
            } else {
                setNormalChkbox('checkbox-privacy');
            }
            return isValid;
        };

        var validateForm = function () {
            console.log(!$scope.data.salutation || $scope.data.salutation == '');
            console.log($scope.data.salutation);
            if (!$scope.data.salutation || $scope.data.salutation == '') {
                console.log("asd");
                $('#salutation_error').removeClass('md-auto-hide');
                return false;
            }
            /*
             if (!$scope.data.firstName || $scope.data.firstName == '') {

             }

             if(!$scope.data.lastName || $scope.data.lastName == ''){
             return false;
             }

             if(!$scope.data.street || $scope.data.street == ''){
             return false;
             }

             if(!$scope.data.streetNr || $scope.data.streetNr == ''){
             return false;
             }

             if(!$scope.data.zip || $scope.data.zip == ''){
             return false;
             }

             if(!$scope.data.city || $scope.data.city == ''){
             return false;
             }

             if(!$scope.data.telephone || $scope.data.telephone == ''){
             return false;
             }

             var re = '/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i';
             if(!$scope.data.email || $scope.data.email == '' || $scope.data.email.match(re)){
             return false;
             }*/

            if ($scope.data.catalog) {
                if (!$scope.data.catalogTyp && $scope.data.catalogTyp == '') {
                    return false;
                }
            }

            if ($scope.data.testdrive) {
                if (!$scope.data.testdriveTyp || $scope.data.testdriveTyp == '') {
                    return false;
                }
            }

            if ($scope.data.leasing) {
                if (!$scope.data.leasingTyp || $scope.data.leasingTyp == '') {
                    return false;
                }
            }

            if (!$scope.data.privacyAccepted) {
                return false;
            }

            if (!$scope.data.newsletter) {
                return false;
            }

            return true;
        };

        $scope.submit = function () {
            console.log("ASDASD");
            if (validateForm()) {
                console.log('valid');
                console.log($scope.data);
            } else {
                console.log('invalid');
            }
        };

        //<-- Event - Listeners -->
        $scope.$watch('data.privacyAccepted', function (newVal) {
            if (!newVal && newVal !== '') {
                setErrorChkbox('checkbox-privacy');
            } else {
                setNormalChkbox('checkbox-privacy');
            }
        });

        $scope.$watch('data.catalog', function (newVal) {
            if (!newVal) {
                $scope.data.catalogTyp = false;
            }
            else{
                setNormalChkbox('checkbox-catalog');
                setNormalChkbox('checkbox-testdrive');
                setNormalChkbox('checkbox-leasing');
            }
        });

        $scope.$watch('data.testdrive', function (newVal) {
            if (!newVal) {
                $scope.data.testdriveTyp = false;
            }else{
                setNormalChkbox('checkbox-catalog');
                setNormalChkbox('checkbox-testdrive');
                setNormalChkbox('checkbox-leasing');
            }
        });

        $scope.$watch('data.leasing', function (newVal) {
            if (!newVal) {
                $scope.data.leasingTyp = false;
            }else{
                setNormalChkbox('checkbox-catalog');
                setNormalChkbox('checkbox-testdrive');
                setNormalChkbox('checkbox-leasing');
            }
        });

        $scope.$watch('data.catalogTyp', function (newVal) {
            if (newVal || $scope.data.catalog) {
                setNormalRadio('radio-catalog')
            }else{
                setErrorRadio('radio-catalog');
            }
        });
        $scope.$watch('data.testdriveTyp', function (newVal) {
            if (newVal) {
                setNormalRadio('radio-testdrive')
            }else{
                setErrorRadio('radio-testdrive');
            }
        });
        $scope.$watch('data.leasingTyp', function (newVal) {
            if (newVal) {
                setNormalRadio('radio-leasing')
            }else{
                setErrorRadio('radio-leasing');
            }
        });

        //WORKAROUND of Select bug with placeholder translation
        $rootScope.$on('$translateChangeEnd', function () {
            $translate('CONTACT_SALUTATION').then(function (trans) {
                $('#selectSalutation').find('md-select-value').find('span').first().text(trans);
            });
        });

    }]);

}());