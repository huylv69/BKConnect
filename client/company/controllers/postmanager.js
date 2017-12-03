comApp.controller('ManagerPostController', ['$scope', '$location', '$http', '$route', 'postService', function ($scope, $location, $http, $route, postService) {

    $scope.data = [];
    $http.get(BASE_URL + 'posts').then(function (data) {
        $scope.data = data.data;
    })

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


    $scope.initDataTable = function () {
        setTimeout(function () {
            $("#example1").DataTable();
        }, 10);
    };
    // $scope.reset = function () {
    //     $state.reload();
    // }
}])
    .directive('repeatDone', function () {
        return function (scope, element, attrs) {
            if (scope.$last) {
                scope.$eval(attrs.repeatDone);
            }
        }
    });;