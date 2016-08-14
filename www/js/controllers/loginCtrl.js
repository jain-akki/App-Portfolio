(function () {

  'use strict';

  angular.module('githubPortfolio')

    .controller('loginCtrl', function ($state) {

      var vm = this;
      vm.loginData = {};

      vm.doLogin = function () {

        console.log('Doing login', vm.loginData);
        
        var options = { 'remember': true };

        Ionic.Auth.login('basic', options, vm.loginData).then(function (success) {
          console.log('Successfully!! Login');
          $state.go('main.gitProfile');
        }, function (error) {
          console.log('Login Failure!!');
        });

      };
    });

})();


