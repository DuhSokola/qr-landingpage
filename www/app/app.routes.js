;(function () {
    'use strict';

    var deps = [
        'ui.router',
        'app.languageSwitch',
        'app.contactForm'
    ];

    var app = angular.module('app.routes', deps);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/contact');

        $stateProvider
            .state('contact', {
                url: '/contact',
                views: {
                    '':{
                        templateUrl: 'app/sites/contact.html'
                    },
                    'language@contact': {
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'contactForm@contact': {
                        templateUrl: 'app/components/contactForm/_contactForm.html'
                    }
                }
            })
    });

}());