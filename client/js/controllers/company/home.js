angular.module('app').controller('HomeCompanyController', ['$scope', '$stateParams', '$rootScope', '$mCompany', '$mLocalStorage', '$state',
    function ($scope, $stateParams, $rootScope, $mCompany, $mLocalStorage, $state) {
        var id = $stateParams.id;
        var getData = function () {
            $mCompany.getInfo(id, function (res) {
                if (res.error) {
                    $state.go('home');
                } else {
                    $scope.companyInfo = res;
                    console.log($scope.companyInfo);
                }
            })
        }
        getData();
    }]);