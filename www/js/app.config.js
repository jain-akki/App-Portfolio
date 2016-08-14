﻿(function () {

  'use strict';

  angular.module('githubPortfolio')

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

    .run(function ($rootScope, $state, authService, $cordovaDialogs) {

      $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
        //console.log('isAuthenticated: ', authService.isAuthenticated());
        if (!authService.isAuthenticated()) {
          if (next.name != 'login') {
            //console.log('login');
            event.preventDefault();
            $state.go("login");
          }
        }
      });

      document.addEventListener("deviceready", function () {

        $cordovaDialogs.alert('Any Random Description!!!!', 'Title', 'Retry').then(function () {
        });

        var internetConnected = true;

        document.addEventListener('online', function(){
          alert('Online!!');
          if (internetConnected) return;
          internetConnected = true;
        }, false);

        document.addEventListener('offline', function(){
          alert('Offline!!');
          if (!internetConnected) return;
          internetConnected = false;
          offlineConnection();
        }, false);

        function offlineConnection() {
          if (!internetConnected) {
            $cordovaDialogs.alert('Sorry, your phone is not connected to internet! Pls connect it. and Try again. ', 'No Internet Connection', 'Retry').then(function () {
              offlineConnection();
            });
          }
        }

      }, false);

    })

    .config(function ($ionicConfigProvider) {
      $ionicConfigProvider.backButton.icon('ion-android-arrow-back');
      $ionicConfigProvider.backButton.previousTitleText(false).text('');
    });

})();
