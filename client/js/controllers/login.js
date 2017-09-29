angular
    .module('app')
    .controller('LoginController', ['$scope', '$state', function ($scope,
        $state) {

        $scope.student = {};
        $scope.login = true;
        $scope.show = function (type) {
            if (type == 'register') {
                $scope.login = false;
            } else {
                $scope.login = true;
            }
        }

        $scope.register = function () {
            console.log($scope.student.name);
            var name = $scope.student.name;
            var password = $scope.student.password;
            var email = $scope.student.email;
            console.log(name, password, email);
        }

    }]);