;(function () {
    'use strict';

    var deps = [
        'app.routes',
        'app.carResource',
        'pascalprecht.translate',
        'ngMaterial',
        'ngProgress',
        'ngCookies'
    ];

    var app = angular.module('app', deps);

    app.config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

        $translateProvider.translations('DE', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Wählen Sie das gewünschte Model aus:",
            "VARIANTLIST_SELECTMODEL": "Wählen Sie die gewünschte Variante aus:",
            "IMAGEAREA_FROM": "Erhältlich ab",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Sonderzahlung:",
            "LEASINGCALC_DURATION": "Laufzeit:",
            "LEASINGCALC_MILAGE": "Jährliche Laufleistung:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Monate",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Aktuelle Leasingangebote",
            "LEASINGCALC_OFFER_TEXT": "<b>Leasingaktion Generell {{value}}%</b> <br /> Gültig bis: <b>29. Februar 2016</b> <br />Laufzeit: <b>12 - 48 Monate</b> <br /> Jährliche Laufleistung: <b>bis 250000 km</b>",
            "LEASINGCALC_CALCULATE": "Berechnen",
            "LEASINGCALC_CONTACT": "Kontaktanfrage",
            "LEASINGCALC_BUTTON_BACK": "Zurück",
            "LEASINGCALC_MOTHLY_PAYMENT": "Monatliche Rate:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Zinssatz:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominal:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effektiv:",

            "LANDINGPAGE_LEASING": "Leasing berechnen",
            "LANDINGPAGE_TESTDRIVE": "Probefahrt",
            "LANDINGPAGE_CATALOG": "Katalog",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Zur Modelübersicht",

            "CONTACT_LEGEND_CUSTOMER_DATA": "Ihre Daten",
            "CONTACT_LEGEND_CATALOG": "Katalogversand",
            "CONTACT_LEGEND_TESTDRIVE": "Probefahrt",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Datenschutzbestimmung",
            "CONTACT_MODELS": "Weitere Varianten",
            "CONTACT_SALUTATION_MR": "Herr",
            "CONTACT_SALUTATION_MRS": "Frau",
            "CONTACT_SALUTATION": "Anrede",
            "CONTACT_FIRSTNAME": "Vorname",
            "CONTACT_LASTNAME": "Name",
            "CONTACT_STREET": "Strasse",
            "CONTACT_STREET_NR": "Strassen Nr.",
            "CONTACT_ZIP": "PLZ",
            "CONTACT_CITY": "Ort",
            "CONTACT_TELEPHONE": "Telefon",
            "CONTACT_EMAIL": "Email",
            "CONTACT_CATALOG": "Katalog bestellen",
            "CONTACT_CATALOG_ELECTRONIC": "Elektronisch",
            "CONTACT_CATALOG_PRINTED": "Gedruckt",
            "CONTACT_TESTDRIVE": "Kontaktaufnahme für Probefahrt",
            "CONTACT_TESTDRIVE_EMAIL": "per Email",
            "CONTACT_TESTDRIVE_TELEFON": "per Telefon",
            "CONTACT_LEASING": "Kontaktaufnahme für Leasingsberatung",
            "CONTACT_LEASING_EMAIL": "per Email",
            "CONTACT_LEASING_TELEPHONE": "per Telefon",
            "CONTACT_NEWSLETTER": "Ich möchte Newsletter erhalten",
            "CONTACT_PRIVACY": "Ich bin mit den Datenschutzbestimmungen einverstanden",
            "CONTACT_BUTTON_SUBMIT": "Senden",
            "CONTACT_BUTTON_BACK": "Zurück",
            "CONTACT_ERROR_SALUTATION": "Anrede pflicht",
            "CONTACT_ERROR_FIRSTNAME": "Vorname pflicht",
            "CONTACT_ERROR_LASTNAME": "Name pflicht",
            "CONTACT_ERROR_STREET": "Strasse pflicht",
            "CONTACT_ERROR_STREET_NR": "Strassen Nummer pflicht",
            "CONTACT_ERROR_ZIP": "PLZ pflicht",
            "CONTACT_ERROR_CITY": "Ort pflicht",
            "CONTACT_ERROR_TELEPHONE": "Telefon pflicht",
            "CONTACT_ERROR_EMAIL": "Geben Sie valide Email ein",
            "CONTACT_ERROR_CATALOG": "Katalog pflicht",
            "CONTACT_ERROR_TESTDRIVE": "Probefahrt pflicht",
            "CONTACT_ERROR_LEASING": "Leasing pflicht",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter pflicht",
            "CONTACT_ERROR_PRIVACY": "Datenschutzbestimmung pflicht"
        });

        $translateProvider.translations('FR', {
            "TITLE": "[FR]QR-Landingpage",
            "MODELLIST_SELECTMODEL": "[FR]Wählen Sie das gewünschte Model aus:",
            "VARIANTLIST_SELECTMODEL": "[FR]Wählen Sie die gewünschte Variante aus:",
            "IMAGEAREA_FROM": "[FR]Erhältlich ab",
            "IMAGEAREA_FRANCS": "[FR]CHF",

            "LEASINGCALC_PAYMENT": "[FR]Sonderzahlung:",
            "LEASINGCALC_DURATION": "[FR]Laufzeit:",
            "LEASINGCALC_MILAGE": "[FR]Jährliche Laufleistung:",
            "LEASINGCALC_PAYMENT_FRANCS": "[FR]CHF",
            "LEASINGCALC_DURATION_MONTH": "[FR]Monate",
            "LEASINGCALC_MILAGE_KILOMETER": "[FR]Km",
            "LEASINGCALC_OFFER": "[FR]Aktuelle Leasingangebote",
            "LEASINGCALC_OFFER_TEXT": "[FR]<b>Leasingaktion Generell {{value}}%</b> <br /> Gültig bis: <b>29. Februar 2016</b> <br />Laufzeit: <b>12 - 48 Monate</b> <br /> Jährliche Laufleistung: <b>bis 250000 km</b>",
            "LEASINGCALC_CALCULATE": "[FR]Berechnen",
            "LEASINGCALC_CONTACT": "[FR]Kontaktanfrage",
            "LEASINGCALC_BUTTON_BACK": "[FR]Zurück",
            "LEASINGCALC_MOTHLY_PAYMENT": "[FR]Monatliche Rate:",
            "LEASINGCALC_CHF": "[FR]CHF",
            "LEASINGCALC_INTERESTRATE": "[FR]Zinssatz:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "[FR]Nominal:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "[FR]Effektiv:",

            "LANDINGPAGE_LEASING": "[FR]Leasing berechnen",
            "LANDINGPAGE_TESTDRIVE": "[FR]Probefahrt",
            "LANDINGPAGE_CATALOG": "[FR]Katalog",
            "LANDINGPAGE_BACK_TO_MODELLIST": "[FR]Zur Modelübersicht",

            "CONTACT_LEGEND_CUSTOMER_DATA": "[FR]Ihre Daten",
            "CONTACT_LEGEND_CATALOG": "[FR]Katalogversand",
            "CONTACT_LEGEND_TESTDRIVE": "[FR]Probefahrt",
            "CONTACT_LEGEND_LEASING": "[FR]Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "[FR]Newsletter",
            "CONTACT_LEGEND_PRIVACY": "[FR]Datenschutzbestimmung",
            "CONTACT_MODELS": "[FR]Weitere Varianten",
            "CONTACT_SALUTATION_MR": "[FR]Herr",
            "CONTACT_SALUTATION_MRS": "[FR]Frau",
            "CONTACT_SALUTATION": "[FR]Anrede",
            "CONTACT_FIRSTNAME": "[FR]Vorname",
            "CONTACT_LASTNAME": "[FR]Name",
            "CONTACT_STREET": "[FR]Strasse",
            "CONTACT_STREET_NR": "[FR]Strassen Nr.",
            "CONTACT_ZIP": "[FR]PLZ",
            "CONTACT_CITY": "[FR]Ort",
            "CONTACT_TELEPHONE": "[FR]Telefon",
            "CONTACT_EMAIL": "[FR]Email",
            "CONTACT_CATALOG": "[FR]Katalog bestellen",
            "CONTACT_CATALOG_ELECTRONIC": "[FR]Elektronisch",
            "CONTACT_CATALOG_PRINTED": "[FR]Gedruckt",
            "CONTACT_TESTDRIVE": "[FR]Kontaktaufnahme für Probefahrt",
            "CONTACT_TESTDRIVE_EMAIL": "[FR]per Email",
            "CONTACT_TESTDRIVE_TELEFON": "[FR]per Telefon",
            "CONTACT_LEASING": "[FR]Kontaktaufnahme für Leasingsberatung",
            "CONTACT_LEASING_EMAIL": "[FR]per Email",
            "CONTACT_LEASING_TELEPHONE": "[FR]per Telefon",
            "CONTACT_NEWSLETTER": "[FR]Ich möchte Newsletter erhalten",
            "CONTACT_PRIVACY": "[FR]Ich bin mit den Datenschutzbestimmungen einverstanden",
            "CONTACT_BUTTON_SUBMIT": "[FR]Senden",
            "CONTACT_BUTTON_BACK": "[FR]Zurück",
            "CONTACT_ERROR_SALUTATION": "[FR]Anrede pflicht",
            "CONTACT_ERROR_FIRSTNAME": "[FR]Vorname pflicht",
            "CONTACT_ERROR_LASTNAME": "[FR]Name pflicht",
            "CONTACT_ERROR_STREET": "[FR]Strasse pflicht",
            "CONTACT_ERROR_STREET_NR": "[FR]Strassen Nummer pflicht",
            "CONTACT_ERROR_ZIP": "[FR]PLZ pflicht",
            "CONTACT_ERROR_CITY": "[FR]Ort pflicht",
            "CONTACT_ERROR_TELEPHONE": "[FR]Telefon pflicht",
            "CONTACT_ERROR_EMAIL": "[FR]Geben Sie valide Email ein",
            "CONTACT_ERROR_CATALOG": "[FR]Katalog pflicht",
            "CONTACT_ERROR_TESTDRIVE": "[FR]Probefahrt pflicht",
            "CONTACT_ERROR_LEASING": "[FR]Leasing pflicht",
            "CONTACT_ERROR_NEWSLETTER": "[FR]Newsletter pflicht",
            "CONTACT_ERROR_PRIVACY": "[FR]Datenschutzbestimmung pflicht"
        });

        $translateProvider.preferredLanguage('DE');
    });

    app.run(function ($rootScope) {
        $rootScope.cssFileName = 'main';

        $rootScope.carsApi = 'http://s1100pws428.amag.car.web:8080/readAllModelVariants';

        //TODO
        $rootScope.leasingApi = 'http://s1100pws428.amag.car.web:8080/leasingCalcStatisticModule/leasingCalcWithStatistic';

        $rootScope.global = {};
        $rootScope.global.languages = ['DE', 'FR', 'IT', 'EN'];
        $rootScope.global.campaign = 'autosalon_2016_ipad';
        $rootScope.global.data = {};
        $rootScope.global.params = {};
    });


    app.controller('mainCtrl', ['$scope', '$rootScope', 'CarResource', 'ngProgressFactory', 'blockUI', 'CarDataReader', function ($scope, $rootScope, CarResource, ngProgressFactory, blockUI, CarDataReader) {
        $rootScope.$watch('global.params.selectedBrand', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.progressbar = ngProgressFactory.createInstance();
                $scope.progressbar.start();
                blockUI.start();
                CarResource.getByBrand($rootScope.global.params.selectedBrand, function (response) {
                        $rootScope.global.params.allModels = response.models;
                        CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                        $scope.progressbar.complete();
                        blockUI.stop();
                    },
                    function (error) {
                        console.log('ERROR');
                        $scope.progressbar.complete();
                        blockUI.stop();
                    });
            }
        }, true);

        $rootScope.$watch('global.params.selectedModel', function () {
            if ($rootScope.global.params.allModels) {
                CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
            }
        });

        $rootScope.$watch('global.params.selectedModelVariant', function () {
            if ($rootScope.global.params.allModels && $rootScope.global.params.selectedModel && $rootScope.global.params.selectedModelVariant) {
                CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
            }
        })

        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
        });

    }]);

}());
