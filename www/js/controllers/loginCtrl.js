(function () {

  'use strict';

  angular.module('githubPortfolio')

    .controller('loginCtrl', function ($state, $cordovaDialogs, customService) {

      var vm = this;
      vm.loginData = {};

      vm.doLogin = function () {
        
        var options = { 'remember': true };

        customService._on();

        Ionic.Auth.login('basic', options, vm.loginData).then(function (success) {
          customService._off();
          console.log('Successfully!! Login');
          $state.go('main.gitProfile');
          vm.loginData = {};
        }, function (error) {
          customService._off();
          $cordovaDialogs.alert('Incorrect!! Login details. Pls, Try again with valid details', 'Alert', 'Retry').then(function () {
            vm.loginData = {};
          });
        });

      };
    });

})();


