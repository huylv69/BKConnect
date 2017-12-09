angular.module('app').controller('ListCompanyController', ['$scope', '$stateParams', '$rootScope', '$mCompany', '$mLocalStorage', '$mUtils',
function ($scope, $stateParams, $rootScope, $mCompany, $mLocalStorage, $mUtils) {
    var getData = function () {
        $mCompany.getListActivated(function (res) {
            if (res.error) {
                $state.go('home');
            } else {
                $scope.listCompany = res.companies;
                console.log($scope.listCompany);
            }
        });
    };
    getData();
}]);