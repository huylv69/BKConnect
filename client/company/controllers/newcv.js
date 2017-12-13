comApp.controller('NewCVController', ['$scope', '$rootScope', '$location', 'postService', 'cvService', '$uibModal', function ($scope, $rootScope, $location, postService, cvService, $uibModal) {
    var idcompany = $rootScope.currentCompany.userId;
    var getData = function () {
        cvService.getNewCv(idcompany, function (res) {
            $scope.listCV = res.list;
        })
    }
    getData();
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
            cvService.updateSeen(infoCV, function (res) { 
                console.log(res) 
            })
        }
    }
}]);