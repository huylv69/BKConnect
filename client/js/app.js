// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'ui.router',
    'service.auth',
    'service.localStorage',
    'service.student'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider,
    $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('login', {
        title: 'Đăng nhập & Đăng ký',
        url: '/login',
        templateUrl: 'views/student/login.html',
        controller: 'LoginController'
      })
      .state('verified', {
        title: 'Kích hoạt thành công',
        url: '/verified',
        templateUrl: 'views/student/verified.html',
        controller: 'LoginController'
      })
      .state('loginAdmin', {
        title: 'Đăng nhập tài khoản admin',
        url: '/admin',
        templateUrl: 'views/admin/login.html',
        controller: 'LoginController'
      })
      .state('profile', {
        title: 'Profile Student',
        url: '/student/profile',
        templateUrl: 'views/student/profile.html',
        controller: 'ProfileController'
      })
      .state('admin',{
        title: 'Trang chủ Admin ',
        url: '/admin/home',
        templateUrl: 'views/admin/home.html',
        controller: 'LoginController'
      })
      ; 
      
    $urlRouterProvider.otherwise('login');

    // $('#test').addClass('hide');
    // $('#test').removeClass('hide');
  }])
  .run(["$rootScope", '$state', '$mAuth', '$mLocalStorage',
    function ($rootScope, $state, $mAuth, $mLocalStorage) {
      //get currentUser
      $rootScope.currentUser = $mLocalStorage.getItem('userInfo');

    }]);

