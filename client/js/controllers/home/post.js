angular.module('app').controller('PostController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$mCompany', '$state', '$mStudent', '$mUtils', '$mLocalStorage', '$uibModal',
    function ($scope, $stateParams, $rootScope, $mPost, $mCompany, $state, $mStudent, $mUtils, $mLocalStorage, $uibModal) {
        var id = $stateParams.id;
        $scope.showModal = false;
        $scope.postDetail = {};

        $scope.showCV = function (postDetail) {
            currentUser = $rootScope.currentUser;
            var expired = new Date(postDetail.expired);
            //console.log(expired, ' ', expired < Date.now())
            if (currentUser == null || currentUser == "") {
                currentUser = $mLocalStorage.getItem("userInfo");
                $rootScope.currentUser = currentUser;
            }
            if (currentUser) {
                if (expired < Date.now()) {
                    swal({
                        title: "Xin lỗi !",
                        text: "Bài đăng đã hết hạn! Bạn có thể liên hệ riêng với công ty",
                        icon: "warning",
                    });
                } else {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'myModalContent.html',
                        size: 'lg',
                        scope: $scope

                    });
                    $mStudent.getInfo(currentUser.userId, function (res) {
                        $scope.infoCV = res;
                        $scope.infoCV.birthday = new Date(res.birthday);
                        modalInstance.result.then(function () {
                        }, function () {
                        });
                    });
                }
            } else {
                swal({
                    title: "Xin lỗi !",
                    text: "Bạn cần đăng nhập để nộp CV!",
                    icon: "warning",
                });
            }

        }

        let click = false;
        $scope.applyCV = function () {
            // console.log('ok')
            if (click) {
                return;
            } else {
                click = true;
                let idPost = id;
                let idUser = $rootScope.currentUser.userId;
                let details = $scope.infoCV;
                $scope.isPaneShown = true;
                $mUtils.applyCV(idPost, idUser, details, function (res) {
                    $scope.isPaneShown = false;

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
                    $mPost.getSkillPost(id, function (res) {
                        $scope.listSkill = res;
                    })
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