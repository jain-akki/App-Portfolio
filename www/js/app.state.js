﻿(function () {

  'use strict';

  angular.module('githubPortfolio')

    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl as vm'
        })
        .state('main', {
          url: '/main',
          abstract: true,
          templateUrl: 'templates/sideMenu.html',
          controller: 'mainCtrl as vm'
        })
        .state('main.gitProfile', {
          url: '/gitProfile',
          views: {
            'menuContent': {
              templateUrl: 'templates/gitProfile.html'
            }
          }
        })
        .state('main.personalProfile', {
          url: '/personalProfile',
          views: {
            'menuContent': {
              templateUrl: 'templates/personalProfile.html'
            }
          }
        })
        .state('main.aboutMe', {
          url: '/aboutMe',
          views: {
            'menuContent': {
              templateUrl: 'templates/aboutMe.html'
            }
          }
        });

      $urlRouterProvider.otherwise('/main/gitProfile');
    })

})();
