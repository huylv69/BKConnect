
var BASE_URL = location.origin + '/api/';
angular
    .module('admin', [
        'ui.router',
        'ngSanitize',
        'ngFileUpload',
        'service.localStorage',
        'service.company',
        'service.auth'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider,
        $urlRouterProvider, $locationProvider) {
        // $locationProvider.hashPrefix('!');
        // $locationProvider.html5Mode(true);
        $stateProvider
            //anonymous 
            .state('login', {
                title: 'Trang chủ admin',
                url: '/',
                templateUrl: 'admin/views/login.html',
                controller: 'HomeController'
            })

            // .state('adminLogin', {
            //     title: 'Đăng nhập tài khoản admin',
            //     url: '/admin/login',
            //     templateUrl: 'views/admin/login.html',
            //     controller: 'LoginController'
            // })
            // .state('admin', {
            //     title: 'Đăng nhập tài khoản admin',
            //     url: '/admin',
            //     templateUrl: 'views/admin/login.html',
            //     controller: 'LoginController'
            // })
            .state('home', {
                title: 'Trang chủ Admin ',
                url: '/home',
                templateUrl: 'admin/views/home.html',
                controller: 'RequestController',
                hideNavbar: true,
            })
            .state('company', {
                title: 'Trang chủ Admin ',
                url: '/company',
                templateUrl: 'admin/views/company.html',
                controller: 'ListCompanyController'
            })
            ;

        // $urlRouterProvider.otherwise('home');

        // $('#test').addClass('hide');
        // $('#test').removeClass('hide');
    }])
    .run(["$rootScope", '$state', '$mLocalStorage',
        function ($rootScope, $state, $mLocalStorage) {
            //get currentUser
            $rootScope.currentAdmin = $mLocalStorage.getItem('adminInfo');
            $rootScope.$state = $state;

        }]);

