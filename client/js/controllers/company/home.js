angular.module('app').controller('HomeCompanyController', ['$scope', '$stateParams', '$rootScope', '$mCompany', '$mLocalStorage', '$mUtils',
    function ($scope, $stateParams, $rootScope, $mCompany, $mLocalStorage, $mUtils) {
        var id = $stateParams.id;
        var getData = function () {
            $mCompany.getInfo(id, function (res) {
                if (res.error) {
                    $state.go('home');
                } else {
                    $scope.companyInfo = res;
                    console.log($scope.companyInfo);
                }
            });
            let idUser = $rootScope.currentUser.userId;
            $mUtils.checkFollow(id, idUser, function (res) {
                if (res.status == 200) {
                    $scope.following = true;
                } else {
                    $scope.following = false;
                }
            })
        };
        var click = false;
        $scope.follow = function () {
            if (click) {
                return;
            } else {
                click = true;
                let idCompany = id;
                let idUser = $rootScope.currentUser.userId;
                $mUtils.follow(idCompany, idUser, function (res) {
                    if (res.status == 200) {
                        $scope.following = true;
                    } else {
                        swal({
                            title: "Thất bại!",
                            text: "Đã xảy ra lỗi, xin thử lại!",
                            icon: "error",
                        });
                    }
                    setTimeout(() => {
                        click = false;
                    }, 100);
                })
            }
        };
        let unfollow = false;
        $scope.unFollow = function () {
            if (unfollow) {
                return;
            } else {
                unfollow = true;
                let idCompany = id;
                let idUser = $rootScope.currentUser.userId;
                $mUtils.unFollow(idCompany, idUser, function (res) {
                    if (res.status == 204) {
                        $scope.following = false;
                    } else {
                        swal({
                            title: "Thất bại!",
                            text: "Đã xảy ra lỗi, xin thử lại!",
                            icon: "error",
                        });
                    }
                    setTimeout(() => {
                        unfollow = false;
                    }, 100);
                })
            }
        }
        getData();
    }]);