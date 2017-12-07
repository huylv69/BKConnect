comApp.controller('NewCVController', ['$scope', '$location', '$http', '$route', 'postService', function ($scope, $location, $http, $route, postService) {
    
    
    
        $scope.initDataTable = function () {
            setTimeout(function () {
                $("#example1").DataTable();
            }, 10);
        };
    
    }])
        .directive('repeatDone', function () {
            return function (scope, element, attrs) {
                if (scope.$last) {
                    scope.$eval(attrs.repeatDone);
                }
            }
        });;