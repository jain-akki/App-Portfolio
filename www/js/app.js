(function () {

  'use strict';

  angular.module('githubPortfolio', ['ionic', 'githubPortfolio.controllers'])

   .run(function ($ionicPlatform) {
     $ionicPlatform.ready(function () {
       
       if (window.cordova && window.cordova.plugins.Keyboard) {
         cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
         cordova.plugins.Keyboard.disableScroll(true);
       }
       if (window.StatusBar) {
         StatusBar.styleDefault();
       }
     });
   })

   .config(function ($stateProvider, $urlRouterProvider) {

     $stateProvider
       .state('main', {
         url: '/main',
         abstract: true,
         templateUrl: 'templates/sideMenu.html',
         controller: 'mainCtrl'
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
   });

})();
 