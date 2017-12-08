comApp.controller('NewCVController', ['$scope', '$rootScope', '$location', 'postService', 'cvService', function ($scope, $rootScope, $location, postService, cvService) {
    var idcompany = $rootScope.currentCompany.userId;
    var getData = function () {
        cvService.getNewCv(idcompany, function (res) {
            $scope.listCV = res.list;
        })
    }
    getData();

}]);