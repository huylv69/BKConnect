// create the module and name it comApp
var comApp = angular.module('comApp', ['ngRoute','summernote','ngDatepicker','ngTagsInput']);

// configure our routes
comApp.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'company/views/home.html',
            controller: 'PostController'
        })

        // route for the about page
        .when('/post', {
            templateUrl: 'company/views/post.html',
            controller: 'PostController'
        })

        // route for the contact page
        .when('/postmanagement', {
            templateUrl: 'company/views/postmanager.html',
            controller: 'ManagerPostController'
        });
}]);

// create the controller and inject Angular's $scope
comApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

comApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

comApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
})
;