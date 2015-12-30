;(function() {
    'use strict';

    var deps = [
        'app.routes',
        'pascalprecht.translate',
        'ngMaterial'
    ];

    var app = angular.module('app', deps);

    app.config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

        $translateProvider.translations('DE', {
            "TITLE"                     : "CH",
            "CONTACT_LABEL_FIRSTNAME"   : "Vorname",
            "CONTACT_LABEL_LASTNAME"    : "Name",
            "CONTACT_LABEL_STREET"      : "Strasse",
            "CONTACT_LABEL_STREET_NR"   : "Strassen Nr.",
            "CONTACT_LABEL_ZIP"         : "PLZ",
            "CONTACT_LABEL_CITY"        : "Ort",
            "CONTACT_LABEL_TELEPHONE"   : "Telefon",
            "CONTACT_LABEL_EMAIL"       : "Email"
        });

        $translateProvider.translations('FR', {
            "TITLE"                     : "[FR]CH",
            "CONTACT_LABEL_FIRSTNAME"   : "[FR]Vorname",
            "CONTACT_LABEL_LASTNAME"    : "[FR]Name",
            "CONTACT_LABEL_STREET"      : "[FR]Strassen Nr.",
            "CONTACT_LABEL_STREET_NR"   : "[FR]Nr.",
            "CONTACT_LABEL_ZIP"         : "[FR]PLZ",
            "CONTACT_LABEL_CITY"        : "[FR]Ort",
            "CONTACT_LABEL_TELEPHONE"   : "[FR]Telefon",
            "CONTACT_LABEL_EMAIL"       : "[FR]Email"
        });

        $translateProvider.preferredLanguage('DE');
    });

    app.run(function ($rootScope) {
        $rootScope.global = {};
        $rootScope.global.languages = ['DE','FR','IT','EN'];

        $rootScope.global.data = {};
    });

}());
