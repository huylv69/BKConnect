angular
    .module('app')
    .controller('LoginController', ['$scope', '$state', function ($scope,
        $state) {
        $scope.login = true;
        $scope.show = function (type) {
            if (type == register) {
                $scope.login = false;
            } else {
                $scope.login = true;
            }
        }
    }]);