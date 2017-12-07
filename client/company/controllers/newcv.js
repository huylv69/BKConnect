comApp.controller('NewCVController', ['$scope', '$location', '$http', '$route', 'cvService', function ($scope, $location, $http, $route, cvService) {

    var getData = function () {
        cvService.getNewCv(idCompany, function (res) {
            $scope.listCV = res.list;
        })
    }
    $scope.$on('$destroy')

    $scope.initDataTable = function () {
        setTimeout(function () {
            $("#example1").DataTable();
        }, 10);
    };

}])
