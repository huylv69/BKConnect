angular.module('app').controller('HeaderController', ['$scope', '$state', '$rootScope', '$mStudent', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mStudent, $mLocalStorage) {

        $scope.user = $rootScope.currentUser;
       
        $scope.logout = function () {
            $mLocalStorage.deleteItem('userInfo');
            $rootScope.currentUser = null;
            $scope.user = $rootScope.currentUser;
            $state.go('home');
            $rootScope.$broadcast('loadHeader');
        }

        if ($scope.user != null) {
            $mStudent.getInfo($rootScope.currentUser.userId, function (res) {
                $scope.user = res;
                // console.log(res);
            });
        }

        $scope.$on('loadHeader', function () {
            $scope.user = $rootScope.currentUser;
            if ($rootScope.currentUser) {
                $mStudent.getInfo($rootScope.currentUser.userId, function (res) {
                    $scope.user = res;
                    // console.log(res);
                });
            }
        });
    }]);