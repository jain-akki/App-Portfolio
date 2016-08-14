(function () {

  'use strict';

  angular.module('githubPortfolio')

    .controller('loginCtrl', function () {

      var vm = this;
      vm.loginData = {};

      vm.doLogin = function () {

        console.log('Doing login', vm.loginData);

      };
    });

})();


