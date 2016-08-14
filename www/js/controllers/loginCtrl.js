(function () {

  'use strict';

  angular.module('githubPortfolio')

    .controller('loginCtrl', function ($state) {

      var vm = this;
      vm.loginData = {};

      vm.doLogin = function () {

        console.log('Doing login', vm.loginData);
        
        var options = { 'remember': false };

        Ionic.Auth.login('basic', options, vm.loginData).then(function (success) {
          console.log('Successfully!! Login');
          $state.go('main.gitProfile');
          vm.loginData = {};
        }, function (error) {
          alert('Login Failure!!');
        });

      };
    });

})();


