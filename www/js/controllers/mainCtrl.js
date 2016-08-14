(function () {

  'use strict';

  angular.module('githubPortfolio')

    .controller('mainCtrl', function ($state) {

      var vm = this;

      vm.logout = function () {
        console.log('logout!!');
        Ionic.Auth.logout();
        $state.go('login');
      };

    });

})();


