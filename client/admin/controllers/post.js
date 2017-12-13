angular.module('admin').controller('PostController', ['$scope', '$state', '$rootScope', '$mPost', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mPost, $mLocalStorage) {
        var loadData = function () {
            $mPost.getListPost(function (res) {
                $scope.listPosts = res.list;
                console.log(res);

            })
        };
        $scope.deletePost = function (id) {
            swal({
                title: "Bạn có thực sự muốn xóa bài đăng?",
                text: "Một khi xóa , ứng viên sẽ không được tiếp cận được bài nữa!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    $scope.isPaneShown = true;
                    $mPost.deleteById(id, function (res) {
                        $scope.isPaneShown = false;
                        if (res.status == 200) {
                            swal({
                                title: "Thành công!",
                                text: "Xóa thành công !",
                                icon: "success",
                            });
                            $state.reload();
                        } else {
                            swal({
                                title: "Thất bại!",
                                text: "Đã xảy ra lỗi, xin thử lại!",
                                icon: "error",
                            });
                            $state.reload();
                        }
                    });
                }
            });
        }
        loadData()
    }])
