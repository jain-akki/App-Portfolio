(function () {

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

    .config(function ($ionicConfigProvider) {
      $ionicConfigProvider.backButton.icon('ion-android-arrow-back');
      $ionicConfigProvider.backButton.previousTitleText(false).text('');
    });

})();
