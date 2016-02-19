;(function () {
    'use strict';

    var deps = [
        'app.routes',
        'app.carResource',
        'pascalprecht.translate',
        'ngMaterial',
        'ngProgress',
        'ngSanitize',
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
            "LEASINGCALC_OFFER_TEXT": "<b>Leasingaktion Generell {{discountRate}}%</b> <br /> Gültig bis: <b>{{validTo}}</b> <br />Laufzeit: <b>{{runningTimeFrom}} - {{runningTimeTo}} Monate</b> <br /> Jährliche Laufleistung: <b>bis {{kmPerYear}} km</b>",
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
            "LEASINGCALC_OFFER": "Aktuelle Leasingangebote",
            "LEASINGCALC_OFFER_TEXT": "[FR]<b>Leasingaktion Generell {{discountRate}}%</b> <br /> Gültig bis: <b>{{validTo}}</b> <br />Laufzeit: <b>{{runningTimeFrom}} - {{runningTimeTo}} Monate</b> <br /> Jährliche Laufleistung: <b>bis {{kmPerYear}} km</b>",
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

        $translateProvider.translations('IT', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Selezioni il modello desiderato:",
            "VARIANTLIST_SELECTMODEL": "Selezioni la variante desiderata:",
            "IMAGEAREA_FROM": "Disponibile da",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Anticipo:",
            "LEASINGCALC_DURATION": "Durata:",
            "LEASINGCALC_MILAGE": "Chilometraggio annuale:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Mesi",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Offerte leasing",
            "LEASINGCALC_OFFER_TEXT": "<b>Promozione leasing generale: {{discountRate}}%</b> <br /> Validità fino al: <b>{{validTo}}</b> <br />Durata: <b>{{runningTimeFrom}} - {{runningTimeTo}} mesi</b> <br /> Chilometraggio annuale: <b>fino a {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Calcola",
            "LEASINGCALC_CONTACT": "Richiesta di contatto",
            "LEASINGCALC_BUTTON_BACK": "Indietro",
            "LEASINGCALC_MOTHLY_PAYMENT": "Rata mensile:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Tasso d'interesse:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominale:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effettivo:",

            "LANDINGPAGE_LEASING": "Calcola leasing",
            "LANDINGPAGE_TESTDRIVE": "Giro di prova",
            "LANDINGPAGE_CATALOG": "Catalogo",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Vai alla panoramica dei modelli",

            "CONTACT_LEGEND_CUSTOMER_DATA": "I suoi dati",
            "CONTACT_LEGEND_CATALOG": "Spedizione catalogo",
            "CONTACT_LEGEND_TESTDRIVE": "Giro di prova",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Disposizione sulla protezione dei dati ",
            "CONTACT_MODELS": "Altre varianti",
            "CONTACT_SALUTATION_MR": "Signor",
            "CONTACT_SALUTATION_MRS": "Signora",
            "CONTACT_SALUTATION": "Appellativo",
            "CONTACT_FIRSTNAME": "Nome",
            "CONTACT_LASTNAME": "Cognome",
            "CONTACT_STREET": "Via",
            "CONTACT_STREET_NR": "Via numero",
            "CONTACT_ZIP": "NPA",
            "CONTACT_CITY": "Località ",
            "CONTACT_TELEPHONE": "Telefono",
            "CONTACT_EMAIL": "E-mail",
            "CONTACT_CATALOG": "Ordina catalogo",
            "CONTACT_CATALOG_ELECTRONIC": "Versione elettronica",
            "CONTACT_CATALOG_PRINTED": "Versione stampata",
            "CONTACT_TESTDRIVE": "Contatto per giro di prova",
            "CONTACT_TESTDRIVE_EMAIL": "per e-mail",
            "CONTACT_TESTDRIVE_TELEFON": "per telefono",
            "CONTACT_LEASING": "Contatto per consulenza leasing",
            "CONTACT_LEASING_EMAIL": "per e-mail",
            "CONTACT_LEASING_TELEPHONE": "per telefono",
            "CONTACT_NEWSLETTER": "Desidero ricevere la newsletter",
            "CONTACT_PRIVACY": "Concordo con le disposizioni sulla protezione dei dati",
            "CONTACT_BUTTON_SUBMIT": "Inviare",
            "CONTACT_BUTTON_BACK": "Indietro",
            "CONTACT_ERROR_SALUTATION": "Appellativo obbligatorio ",
            "CONTACT_ERROR_FIRSTNAME": "Nome obbligatorio",
            "CONTACT_ERROR_LASTNAME": "Cognome obbligatorio",
            "CONTACT_ERROR_STREET": "Via obbligatorio",
            "CONTACT_ERROR_STREET_NR": "Numero obbligatorio",
            "CONTACT_ERROR_ZIP": "NPA obbligatorio",
            "CONTACT_ERROR_CITY": "Località obbligatorio",
            "CONTACT_ERROR_TELEPHONE": "Telefono obbligatorio",
            "CONTACT_ERROR_EMAIL": "Inserire un'e-mail valida",
            "CONTACT_ERROR_CATALOG": "Catalogo obbligatorio",
            "CONTACT_ERROR_TESTDRIVE": "Giro di prova obbligatorio",
            "CONTACT_ERROR_LEASING": "Leasing obbligatorio",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter obbligatorio",
            "CONTACT_ERROR_PRIVACY": "Disposizione sulla protezione dei dati obbligatorio"
        });

        $translateProvider.translations('EN', {
            "TITLE": "[EN]QR-Landingpage",
            "MODELLIST_SELECTMODEL": "[EN]Wählen Sie das gewünschte Model aus:",
            "VARIANTLIST_SELECTMODEL": "[EN]Wählen Sie die gewünschte Variante aus:",
            "IMAGEAREA_FROM": "[EN]Erhältlich ab",
            "IMAGEAREA_FRANCS": "[EN]CHF",

            "LEASINGCALC_PAYMENT": "[EN]Sonderzahlung:",
            "LEASINGCALC_DURATION": "[EN]Laufzeit:",
            "LEASINGCALC_MILAGE": "[EN]Jährliche Laufleistung:",
            "LEASINGCALC_PAYMENT_FRANCS": "[EN]CHF",
            "LEASINGCALC_DURATION_MONTH": "[EN]Monate",
            "LEASINGCALC_MILAGE_KILOMETER": "[EN]Km",
            "LEASINGCALC_OFFER": "[EN]Aktuelle Leasingangebote",
            "LEASINGCALC_OFFER_TEXT": "[EN]<b>Leasingaktion Generell {{discountRate}}%</b> <br /> Gültig bis: <b>{{validTo}}</b> <br />Laufzeit: <b>{{runningTimeFrom}} - {{runningTimeTo}} Monate</b> <br /> Jährliche Laufleistung: <b>bis {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "[EN]Berechnen",
            "LEASINGCALC_CONTACT": "[EN]Kontaktanfrage",
            "LEASINGCALC_BUTTON_BACK": "[EN]Zurück",
            "LEASINGCALC_MOTHLY_PAYMENT": "[EN]Monatliche Rate:",
            "LEASINGCALC_CHF": "[EN]CHF",
            "LEASINGCALC_INTERESTRATE": "[EN]Zinssatz:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "[EN]Nominal:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "[EN]Effektiv:",

            "LANDINGPAGE_LEASING": "[EN]Leasing berechnen",
            "LANDINGPAGE_TESTDRIVE": "[EN]Probefahrt",
            "LANDINGPAGE_CATALOG": "[EN]Katalog",
            "LANDINGPAGE_BACK_TO_MODELLIST": "[EN]Zur Modelübersicht",

            "CONTACT_LEGEND_CUSTOMER_DATA": "[EN]Ihre Daten",
            "CONTACT_LEGEND_CATALOG": "[EN]Katalogversand",
            "CONTACT_LEGEND_TESTDRIVE": "[EN]Probefahrt",
            "CONTACT_LEGEND_LEASING": "[EN]Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "[EN]Newsletter",
            "CONTACT_LEGEND_PRIVACY": "[EN]Datenschutzbestimmung",
            "CONTACT_MODELS": "[EN]Weitere Varianten",
            "CONTACT_SALUTATION_MR": "[EN]Herr",
            "CONTACT_SALUTATION_MRS": "[EN]Frau",
            "CONTACT_SALUTATION": "[EN]Anrede",
            "CONTACT_FIRSTNAME": "[EN]Vorname",
            "CONTACT_LASTNAME": "[EN]Name",
            "CONTACT_STREET": "[EN]Strasse",
            "CONTACT_STREET_NR": "[EN]Strassen Nr.",
            "CONTACT_ZIP": "[EN]PLZ",
            "CONTACT_CITY": "[EN]Ort",
            "CONTACT_TELEPHONE": "[EN]Telefon",
            "CONTACT_EMAIL": "[EN]Email",
            "CONTACT_CATALOG": "[EN]Katalog bestellen",
            "CONTACT_CATALOG_ELECTRONIC": "[EN]Elektronisch",
            "CONTACT_CATALOG_PRINTED": "[EN]Gedruckt",
            "CONTACT_TESTDRIVE": "[EN]Kontaktaufnahme für Probefahrt",
            "CONTACT_TESTDRIVE_EMAIL": "[EN]per Email",
            "CONTACT_TESTDRIVE_TELEFON": "[EN]per Telefon",
            "CONTACT_LEASING": "[EN]Kontaktaufnahme für Leasingsberatung",
            "CONTACT_LEASING_EMAIL": "[EN]per Email",
            "CONTACT_LEASING_TELEPHONE": "[EN]per Telefon",
            "CONTACT_NEWSLETTER": "[EN]Ich möchte Newsletter erhalten",
            "CONTACT_PRIVACY": "[EN]Ich bin mit den Datenschutzbestimmungen einverstanden",
            "CONTACT_BUTTON_SUBMIT": "[EN]Senden",
            "CONTACT_BUTTON_BACK": "[EN]Zurück",
            "CONTACT_ERROR_SALUTATION": "[EN]Anrede pflicht",
            "CONTACT_ERROR_FIRSTNAME": "[EN]Vorname pflicht",
            "CONTACT_ERROR_LASTNAME": "[EN]Name pflicht",
            "CONTACT_ERROR_STREET": "[EN]Strasse pflicht",
            "CONTACT_ERROR_STREET_NR": "[EN]Strassen Nummer pflicht",
            "CONTACT_ERROR_ZIP": "[EN]PLZ pflicht",
            "CONTACT_ERROR_CITY": "[EN]Ort pflicht",
            "CONTACT_ERROR_TELEPHONE": "[EN]Telefon pflicht",
            "CONTACT_ERROR_EMAIL": "[EN]Geben Sie valide Email ein",
            "CONTACT_ERROR_CATALOG": "[EN]Katalog pflicht",
            "CONTACT_ERROR_TESTDRIVE": "[EN]Probefahrt pflicht",
            "CONTACT_ERROR_LEASING": "[EN]Leasing pflicht",
            "CONTACT_ERROR_NEWSLETTER": "[EN]Newsletter pflicht",
            "CONTACT_ERROR_PRIVACY": "[EN]Datenschutzbestimmung pflicht"
        });
        $translateProvider.preferredLanguage('EN');
    });

    app.run(function ($rootScope) {
        $rootScope.cssFileName = 'main';

        $rootScope.carsApi = 'http://s1100pws428.amag.car.web:8080/readAllModelVariants';

        $rootScope.leasingApi = 'http://s1100pws428.amag.car.web:8080/leasingCalcStatisticModule/leasingCalcWithStatistic';
        $rootScope.leasingPromotionApi = 'http://www.amag.ch/amagch/corp/de/showroom/leasing/leasingrechner.json.promotion.rest';

        $rootScope.global = {};
        $rootScope.global.languages = ['EN', 'DE', 'FR', 'IT'];
        $rootScope.global.campaign = 'autosalon_2016_qr';
        $rootScope.global.data = {};
        $rootScope.global.params = {};
    });
    

    app.controller('mainCtrl', ['$scope', '$rootScope', 'CarResource', 'ngProgressFactory', 'blockUI', 'CarDataReader', 'LeasingPromotionDataResource', function ($scope, $rootScope, CarResource, ngProgressFactory, blockUI, CarDataReader, LeasingPromotionDataResource) {
        $rootScope.$watch('global.params.selectedBrand', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.progressbar = ngProgressFactory.createInstance();
                $scope.progressbar.start();
                blockUI.start();
                CarResource.getByBrand($rootScope.global.params.selectedBrand, function (response) {
                        $rootScope.global.params.allModels = response.models;
                        CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                        LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModel,function(res){
                            for(var i = 0; i < res.data.length; i++){
                                if(res.data[i].id.substring(0,5)=='0001_'){
                                    res.data.splice(i,1);
                                    i--;
                                }
                            }
                            $rootScope.global.params.leasingPromotions = res.data;
                            //console.log($rootScope.global.params.leasingPromotions);
                            $scope.progressbar.complete();
                            blockUI.stop();
                        },function(data){
                            console.log('ERROR');
                            $scope.progressbar.complete();
                            blockUI.stop();
                        });
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
        });

        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
        });

    }]);

}());
