angular.module('app').controller('PostController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$mCompany', '$state', '$mStudent', '$mUtils',
    function ($scope, $stateParams, $rootScope, $mPost, $mCompany, $state, $mStudent, $mUtils) {
        var id = $stateParams.id;
        $scope.showModal = false;
        $scope.postDetail = {};
        $scope.showCV = function () {
            currentUser = $rootScope.currentUser;
            if (currentUser == null || currentUser == "") {
                currentUser = $mLocalStorage.getItem("userInfo");
                $rootScope.currentUser = currentUser;
            }
            $mStudent.getInfo(currentUser.userId, function (res) {
                $scope.infoCV = res;
                $scope.infoCV.birthday = new Date(res.birthday);
                $scope.showModal = !$scope.showModal;
                console.log(res);
            });
        }

        let click = false;
        $scope.applyCV = function () {
            if (click) {
                return;
            } else {
                click = true;
                let idPost = id;
                let idUser = $rootScope.currentUser.userId;
                let details = $scope.infoCV;
                $mUtils.applyCV(idPost, idUser, details, function (res) {
                    if (res.status == 200) {
                        swal({
                            title: "Thành công!",
                            text: "CV đã gửi đến nhà tuyển dụng , chúc bạn sớm có kết quả tốt!",
                            icon: "success",
                        });
                    } else if (res.status == 422) {
                        swal({
                            title: "Có gì đó không ổn?",
                            text: "Bạn đã nộp CV cho bài đăng này rồi !",
                            icon: "warning",
                        });
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
        }
        var getData = function () {
            $mPost.getInfo(id, function (res) {
                if (res.error) {
                    $state.go('home');
                } else {
                    $scope.postDetail = res;
                    // console.log(res);
                    $mCompany.getInfo($scope.postDetail.idcompany, function (res) {
                        $scope.companyInfo = res;
                        // console.log($scope.companyInfo);
                    })
                    $mPost.getCareer($scope.postDetail.idcareer, function (res) {
                        $scope.career = res.name;
                    })
                }
            })
        }
        getData();
    }]);