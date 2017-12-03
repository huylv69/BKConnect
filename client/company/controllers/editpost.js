comApp.controller('EditPostController', ['$scope', '$location', '$routeParams', 'postService', 'utilsService', function ($scope, $location, $routeParams, postService, utilsService) {

    $scope.postDetail = {};
    var id = $routeParams.id;
    var loadData = function () {
        utilsService.getCareer((response) => {
            $scope.listCareer = response;
            console.log(response)
        });
        postService.getById(id, function (res) {
            $scope.postDetail = res.data;
            console.log(res);
        });
        utilsService.getSkill((res) => {
            console.log(res);
            listSkills = res;
        });
        postService.getSkillPost(id, function (res) {
            $scope.postDetail.skill = res;
            console.log(res);
        });
    }

    $scope.loadSkills = function ($query) {
        return listSkills.filter(function (skill) {
            return skill.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
        });

    };


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
    loadData();

}]);