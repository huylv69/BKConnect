// create the module and name it comApp
var comApp = angular.module('comApp', ['ngRoute', 'summernote', 'ngDatepicker', 'ngTagsInput']);

// configure our routes
comApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        // route for the home page
        .when('/home', {
            templateUrl: 'company/views/home.html',
            controller: 'PostController'
        })
        .when('/login', {
            templateUrl: 'company/views/login.html',
            controller: 'LoginController'
        })
        .when('/post', {
            templateUrl: 'company/views/post.html',
            controller: 'PostController'

        })
        .when('/edit/:id', {
            templateUrl: 'company/views/edit.html',
            controller: 'EditPostController'

        })
        .when('/postmanagement', {
            templateUrl: 'company/views/postmanager.html',
            controller: 'ManagerPostController'

        })
        .when('/editprofile', {
            templateUrl: 'company/views/editprofile.html',
            controller: 'ManagerPostController'

        })
        .        otherwise({
            redirectTo: '/login'
        });
}]);
comApp.run(function ($rootScope, $location, $mLocalStorage, AuthenService) {
    $rootScope.location = $location;
    $rootScope.companyName = "HuyDZ";
    $rootScope.currentCompany = $mLocalStorage.getItem('companyInfo');
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if ($rootScope.currentCompany == null) {
            if (next.templateUrl != "company/views/login.html"){
            }
            else{
                $location.path("/login");
            }
        } else {
            if (next.templateUrl == "company/views/login.html") {
                $location.path("/post");
            }
        }

    });
});