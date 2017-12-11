angular.module('app').controller('HeaderController', ['$scope', '$state', '$rootScope', '$mAuth', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mAuth, $mLocalStorage) {

        $scope.user = $rootScope.currentUser;
        // $scope.authen = ($rootScope.currentUser) ? true : false;
        // $scope.$watch($rootScope.currentUser, function (value, oldValue) {

        //     if (value != oldValue)
        //         $scope.authen = ($rootScope.currentUser) ? true : false;

        // }, true);
        // console.log($scope.authen)
        $scope.logout = function () {
            $mLocalStorage.deleteItem('userInfo');
            $rootScope.currentUser = null;   
            $scope.user = $rootScope.currentUser;
            $rootScope.$broadcast('loadHeader');                                        
        }

        var loadData = function () {

        }
        $scope.$on('loadHeader', function () {
            $scope.user = $rootScope.currentUser;
        });
    }]);