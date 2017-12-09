comApp.controller('ProfileController', ['$rootScope', '$scope', '$location', 'companyService', 'Upload', function ($rootScope, $scope, $location, companyService, Upload) {

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
            click = true;
            if ($scope.chosenLogo) {
                if ($scope.chosenCover) {
                    Upload.upload({
                        url: BASE_URL + 'containers/logo/upload', //webAPI exposed to upload the file
                        data: { file: $scope.chosenLogo } //pass file as data, should be user ng-model
                    }).then(function (res) { //upload function returns a promise
                        var logo = "/api/containers/" + res.data.result.files['file'][0].container + "/download/" + res.data.result.files['file'][0].name;
                        Upload.upload({
                            url: BASE_URL + 'containers/cover/upload', //webAPI exposed to upload the file
                            data: { file: $scope.chosenCover } //pass file as data, should be user ng-model
                        }).then(function (res) { //upload function returns a promise
                            var cover = "/api/containers/" + res.data.result.files['file'][0].container + "/download/" + res.data.result.files['file'][0].name;
                            //delete old 
                            var delLogo = $scope.companyDetail.logo;
                            if(delLogo){
                                var indexLogo = delLogo.lastIndexOf('download/');
                                var subLogo = delLogo.slice(indexLogo + 9);
                                companyService.deleteLogo(subLogo);
                            }

                            var delcover = $scope.companyDetail.cover;
                            if(delcover){
                                var indexCover = delcover.lastIndexOf('download/');
                                var subCover = delcover.slice(indexCover + 9);
                                companyService.deleteCover(subCover);
                            }
                            //update
                            $scope.companyDetail.logo = logo;
                            $scope.companyDetail.cover = cover;
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
                        }, function (res) { //catch error
                            console.log('Error status: ' + res.status);
                        });
                    }, function (res) { //catch error
                        console.log('Error status: ' + res.status);
                    });
                } else {
                    Upload.upload({
                        url: BASE_URL + 'containers/logo/upload', //webAPI exposed to upload the file
                        data: { file: $scope.chosenLogo } //pass file as data, should be user ng-model
                    }).then(function (res) { //upload function returns a promise
                        var logo = "/api/containers/" + res.data.result.files['file'][0].container + "/download/" + res.data.result.files['file'][0].name;
                        //delete old 
                        var delLogo = $scope.companyDetail.logo;
                        if(delLogo){
                            var indexLogo = delLogo.lastIndexOf('download/');
                            var subLogo = delLogo.slice(indexLogo + 9);
                            companyService.deleteLogo(subLogo);
                        }

                        $scope.companyDetail.logo = logo;
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
                    }, function (res) { //catch error
                        console.log('Error status: ' + res.status);
                    });
                }
            } else {
                if ($scope.chosenCover) {
                    Upload.upload({
                        url: BASE_URL + 'containers/cover/upload', //webAPI exposed to upload the file
                        data: { file: $scope.chosenCover } //pass file as data, should be user ng-model
                    }).then(function (res) { //upload function returns a promise
                        var cover = "/api/containers/" + res.data.result.files['file'][0].container + "/download/" + res.data.result.files['file'][0].name;
                        //delete old 
                        var delcover = $scope.companyDetail.cover;
                        if(delcover){
                            var indexCover = delcover.lastIndexOf('download/');
                            var subCover = delcover.slice(indexCover + 9);
                            companyService.deleteCover(subCover);
                        }

                        $scope.companyDetail.cover = cover;
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
                    }, function (res) { //catch error
                        console.log('Error status: ' + res.status);
                    });
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
        }
    }
}])