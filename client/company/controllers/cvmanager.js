comApp.controller('CVManagerController', ['$scope', '$rootScope', '$route', 'postService', 'cvService', function ($scope, $rootScope, $route, postService, cvService) {

    var idCompany = $rootScope.currentCompany.userId;
    var getData = function () {
        cvService.getListCVCompany(idCompany, function (res) {
            $scope.results = res.results;
            console.log(res)
        })
    }
    getData();

    $scope.oneAtATime = true;
    

}]);
    