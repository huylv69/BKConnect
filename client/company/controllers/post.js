comApp.controller('PostController', ['$scope', '$location', 'postService', function ($scope, $location, postService) {

    $scope.postDetail = {};
    var click = false;
    $scope.createPost = function () {
        if (click) {
            return;
        } else {
            click = true;
            $scope.postDetail.idcompany = 1;
            $scope.postDetail.idcareer = 1;
            postService.create($scope.postDetail, function (response) {
                console.log(response);
                if (response.status == 200) {
                    $scope.loading = false;
                    swal({
                        title: "Thành công!",
                        text: "Cập nhật dữ liệu thành công!",
                        icon: "success",
                    });
                    click = false;
                } else {
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

    // $location.path("/forecast");
    // $scope.createPost = function(){
    //     console.log($scope.postDetail);
    //     var win = window.open("","_blank");
    //     win.document.body.innerHTML = $scope.postDetail.benefits;   
    // }

}])