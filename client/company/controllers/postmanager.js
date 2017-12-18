comApp.controller('ManagerPostController', ['$scope', '$rootScope', '$http', '$route', 'postService', function ($scope, $rootScope, $http, $route, postService) {

    $scope.data = [];
    var currentCompany = $rootScope.currentCompany;
    let idCompany = currentCompany.userId;
    var getData = function () {
        postService.getPostCompany(idCompany, function (data) {
            $scope.data = data.list;
            // console.log(data);
        })
    }
    getData();
    $scope.postDetail = {};
    $scope.deletePost = function (id) {
        swal({
            title: "Bạn có thực sự muốn xóa bài đăng?",
            text: "Một khi xóa , ứng viên sẽ không được tiếp cận được bài nữa!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                postService.deleteById(id, function (res) {
                    if (res.status == 200) {
                        swal({
                            title: "Thành công!",
                            text: "Xóa thành công !",
                            icon: "success",
                        });
                        $route.reload();
                    } else {
                        swal({
                            title: "Thất bại!",
                            text: "Đã xảy ra lỗi, xin thử lại!",
                            icon: "error",
                        });
                        $route.reload();
                    }
                });
            }
        });
    };
    
}])