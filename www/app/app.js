;(function() {
    'use strict';

    var deps = [
        'app.routes',
        'ngSanitize',
        'pascalprecht.translate',
        'ngMaterial'
    ];

    var app = angular.module('app', deps);

    app.config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

        $translateProvider.translations('DE', {
            "TITLE"                     : "CH",
            "CONTACT_LABEL_FIRSTNAME"   : "Vorname",
            "CONTACT_LABEL_LASTNAME"    : "Name"
        });

        $translateProvider.translations('FR', {
            "TITLE"             : "[FR]FR",
            "CONTACT_LABEL_FIRSTNAME"   : "[FR]Vorname",
            "CONTACT_LABEL_LASTNAME"    : "[FR]Name"
        });

        $translateProvider.preferredLanguage('DE');
    });

    app.run(function ($rootScope) {
        $rootScope.global = {};
        $rootScope.global.languages = ['DE','FR','IT','EN'];

        $rootScope.global.data = {};
    });

}());
