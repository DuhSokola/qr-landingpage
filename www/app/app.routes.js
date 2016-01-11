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
        $urlRouterProvider.otherwise('/landingPage/vw/golf');

        $stateProvider
            .state('landingPage', {
                url: '/landingPage/:brand/:model',
                views: {
                    '': {
                        templateUrl: 'app/sites/landingPage.html'
                    },
                    'language@landingPage': {
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
                url: '/leasingCalculator/:brand/:model',
                views: {
                    '': {
                        templateUrl: 'app/sites/leasingCalculator.html'
                    },
                    'language@leasingCalculator': {
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
            .state('mainFormular', {
                url: '/mainFormular/:brand/:model/:mode',
                views: {
                    '': {
                        templateUrl: 'app/sites/mainFormular.html'
                    },
                    'language@mainFormular': {
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'imageArea@mainFormular': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'contactForm@mainFormular': {
                        templateUrl: 'app/components/contactForm/_contactForm.html'
                    }
                }
            })

    });

}());