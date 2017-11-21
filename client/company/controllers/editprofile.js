comApp.controller('ProfileController', ['$rootScope', '$scope', '$location', 'companyService', function ($rootScope, $scope, $location, companyService) {

    $scope.companyDetail = {};
    var currentCompany = $rootScope.currentCompany;
    $scope.id = currentCompany.userId;

    companyService.getById($scope.id, function (res) {
        $scope.companyDetail = res.data;
        console.log(res);
    });

    let click = false;
    $scope.updateProfile = function () {
        if (click) {
            return;
        } else {
            companyService.updateById($scope.id, $scope.companyDetail, function (res) {
                if (res.status == 200) {
                    $scope.loading = false;
                    swal({
                        title: "Thành công!",
                        text: "Cập nhật dữ liệu thành công!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Thất bại!",
                        text: "Đã xảy ra lỗi, xin thử lại!",
                        icon: "error",
                    });
                }
                click = false;
            })
        }
    }
}])