angular.module('app').controller('ProfileController', ['$scope', '$state', '$rootScope', '$mStudent', '$mLocalStorage', 'Upload', '$mUtils',
    function ($scope, $state, $rootScope, $mStudent, $mLocalStorage, Upload, $mUtils) {

        var user = {};
        $scope.myDate = {
            value: ''
        };
        var loadData = function () {
            currentUser = $rootScope.currentUser;
            if (currentUser == null) {
                $state.go('home')
            } else {
                $mStudent.getInfo(currentUser.userId, function (res) {
                    $scope.user = res;
                    $scope.user.birthday = new Date(res.birthday);
                });
                $mUtils.getInfoFollow($rootScope.currentUser.userId, function (res) {
                    $scope.listComFollow = res.results.listComFollow;
                    console.log($scope.listComFollow);
                })
            }
        };

        let click = false;
        $scope.updateInfo = function () {
            if (click) {
                return;
            } else {
                click = true;
                $scope.loading = true;
                if ($scope.chosenPhoto) {
                    Upload.upload({
                        url: BASE_URL + 'containers/student/upload', //webAPI exposed to upload the file
                        data: { file: $scope.chosenPhoto } //pass file as data, should be user ng-model
                    }).then(function (res) { //upload function returns a promise
                        var photo = "/api/containers/" + res.data.result.files['file'][0].container + "/download/" + res.data.result.files['file'][0].name;
                        var del = $scope.user.photo;
                        if (del) {
                            var index = del.lastIndexOf('download/');
                            var subDes = del.slice(index + 9);
                            $mStudent.deletePhoto(subDes);
                        }
                        $scope.user.photo = photo;
                        $mStudent.updateInfo($scope.user, function (res) {
                            if (res.status == 200) {
                                $scope.loading = false;
                                $rootScope.$broadcast('loadHeader');
                                swal({
                                    title: "Thành công!",
                                    text: "Cập nhật dữ liệu thành công!",
                                    icon: "success",
                                });
                            } else {
                                $scope.loading = false;
                                swal({
                                    title: "Thất bại!",
                                    text: "Đã xảy ra lỗi, xin thử lại!",
                                    icon: "error",
                                });
                            }
                            click = false;
                        });
                    }, function (res) { //catch error
                        click = false;
                        $scope.loading = false;
                        console.log('Error status: ' + res.status);
                    });
                } else {
                    $mStudent.updateInfo($scope.user, function (res) {
                        if (res.status == 200) {
                            $scope.loading = false;
                            $rootScope.$broadcast('loadHeader');
                            swal({
                                title: "Thành công!",
                                text: "Cập nhật dữ liệu thành công!",
                                icon: "success",
                            });
                        } else {
                            $scope.loading = false;
                            swal({
                                title: "Thất bại!",
                                text: "Đã xảy ra lỗi, xin thử lại!",
                                icon: "error",
                            });
                        }
                        click = false;
                    });
                }

            }
        }

        $scope.reset = function () {
            $state.reload();
        }
        loadData();
    }]);