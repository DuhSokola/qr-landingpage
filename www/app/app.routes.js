;(function () {
    'use strict';

    var deps = [
        'ui.router',
        'app.imageArea',
        'app.languageSwitch',
        'app.contactForm',
        'app.landingPageForm',
        'app.leasingCalculatorForm'
    ];

    var app = angular.module('app.routes', deps);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/landingPage');

        $stateProvider
            .state('landingPage', {
                url: '/landingPage',
                views: {
                    '':{
                        templateUrl: 'app/sites/landingPage.html'
                    },
                    'language@landingPage':{
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'imageArea@landingPage': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'landingPageForm@landingPage': {
                        templateUrl: 'app/components/landingPageForm/_landingPageForm.html'
                    }
                }
            })
            .state('leasingCalculator', {
                url: '/leasingCalculator',
                views: {
                    '':{
                        templateUrl: 'app/sites/leasingCalculator.html'
                    },
                    'language@leasingCalculator':{
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'imageArea@leasingCalculator': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'leasingCalculatorForm@leasingCalculator': {
                        templateUrl: 'app/components/leasingCalculator/_leasingCalculator.html'
                    }
                }
            })
            .state('testdrive', {
                url: '/testdrive',
                views: {
                    '':{
                        templateUrl: 'app/sites/testdrive.html'
                    },
                    'language@testdrive':{
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'imageArea@testdrive': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'contactForm@testdrive': {
                        templateUrl: 'app/components/contactForm/_contactForm.html'
                    }
                }
            })
            .state('catalog', {
                url: '/catalog',
                views: {
                    '':{
                        templateUrl: 'app/sites/catalog.html'
                    },
                    'language@catalog':{
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'imageArea@catalog': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'contactForm@catalog': {
                        templateUrl: 'app/components/contactForm/_contactForm.html'
                    }
                }
            })
    });

}());