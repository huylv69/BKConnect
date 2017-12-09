comApp.controller('CVManagerController', ['$scope', '$rootScope', '$route', 'postService', 'cvService', '$uibModal', function ($scope, $rootScope, $route, postService, cvService, $uibModal) {

    var idCompany = $rootScope.currentCompany.userId;
    var getData = function () {
        cvService.getListCVCompany(idCompany, function (res) {
            $scope.results = res.results;
            console.log(res)
        })
    }
    getData();
    $scope.oneAtATime = true;

    $scope.showCV = function (infoCV) {
        console.log(infoCV)
        $scope.infoCV = infoCV.details;
        $scope.infoCV.birthday = new Date(infoCV.details.birthday);
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            // size: 'lg',
            scope: $scope

        });

        modalInstance.result.then(function () {
        }, function () {
        });
        if (!infoCV.seen) {
            infoCV.seen = true;
            cvService.updateSeen(infoCV, function (res) { console.log(res) })
        }
    }


}]);
