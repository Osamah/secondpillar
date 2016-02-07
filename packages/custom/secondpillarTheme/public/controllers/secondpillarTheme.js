(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.secondpillarTheme')
    .controller('SecondpillarThemeController', SecondpillarThemeController);

  SecondpillarThemeController.$inject = ['$scope', 'Global', 'SecondpillarTheme'];

  function SecondpillarThemeController($scope, Global, SecondpillarTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'secondpillarTheme'
    };
  }
})();