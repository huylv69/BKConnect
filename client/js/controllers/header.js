angular.module('app').controller('HeaderController', ['$scope', '$state', '$rootScope', '$mAuth', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mAuth, $mLocalStorage) {

        $scope.user = $rootScope.currentUser;
        $scope.authen = ($rootScope.currentUser) ? true : false;
        $scope.$watch($rootScope.currentUser, function (value, oldValue) {
            
            if(value != oldValue)
            $scope.authen = ($rootScope.currentUser) ? true : false;
            
              }, true);
        console.log($scope.authen)
        $scope.logout = function () {

        }
    }]);