// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'ui.router',
    //'service.auth'
  ])
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      });
    $urlRouterProvider.otherwise('login');
  }]);
