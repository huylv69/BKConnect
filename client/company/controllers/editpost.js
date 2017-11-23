comApp.controller('EditPostController', ['$scope', '$location', '$routeParams', 'postService', function ($scope, $location, $routeParams, postService) {

    $scope.postDetail = {};
    var id = $routeParams.id;

    postService.getById(id, function (res) {
        $scope.postDetail = res.data;
        console.log(res);
    });


    let click = false;
    $scope.updatePost = function () {
        if (click) {
            return;
        } else {
            click = true;
            postService.updateById(id, $scope.postDetail, function (res) {
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
}]);