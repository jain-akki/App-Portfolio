(function () {

  'use strict';

  angular.module('githubPortfolio')

    .factory('authService', function () {

      var isAuthenticated = false;

      return {
        isAuthenticated: function () {
          return isAuthenticated;
        }
      }

    });

})();