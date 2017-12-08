angular.module('app').controller('ListCompanyController', ['$scope', '$stateParams', '$rootScope', '$mCompany', '$mLocalStorage', '$mUtils',
function ($scope, $stateParams, $rootScope, $mCompany, $mLocalStorage, $mUtils) {
    var getData = function () {
        $mCompany.getList(function (res) {
            if (res.error) {
                $state.go('home');
            } else {
                $scope.listCompany = res;
                console.log($scope.listCompany);
            }
        });
    };
    getData();
}]);