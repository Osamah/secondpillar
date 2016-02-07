(function () {
  'use strict';

  angular
    .module('mean.secondpillarTheme')
    .config(secondpillarTheme);

  secondpillarTheme.$inject = ['$viewPathProvider', '$stateProvider'];

  function secondpillarTheme($viewPathProvider, $stateProvider) {
    $viewPathProvider.override('system/views/index.html', 'secondpillarTheme/views/index.html');
  }

})();
