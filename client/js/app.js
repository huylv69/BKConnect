// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'ui.router',
    'service.auth',
    'service.localStorage'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
    $urlRouterProvider) {
    $stateProvider
      .state('login', {
        title: 'Đăng nhập & Đăng ký',
        url: '',
        templateUrl: 'views/student/login.html',
        controller: 'LoginController'
      })
      .state('verified', {
        title: 'Kích hoạt thành công',
        url: '/verified',
        templateUrl: 'views/student/verified.html',
        controller: 'LoginController'
      })
    $urlRouterProvider.otherwise('login');
  }]);
