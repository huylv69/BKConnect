comApp.controller('PostController', ['$scope', '$rootScope', '$location', 'postService', 'utilsService', function ($scope, $rootScope, $location, postService, utilsService) {

    $scope.postDetail = {};
    var click = false;
    $scope.createPost = function () {
        if (click) {
            return;
        } else {
            click = true;
            $scope.postDetail.idcompany = $rootScope.currentCompany.userId;
            postService.create($scope.postDetail, function (response) {
                console.log(response);
                if (response.status == 200) {
                    $scope.loading = false;
                    swal({
                        title: "Thành công!",
                        text: "Tạo bài đăng thành công!",
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
            });
        }
    }
    
    $scope.loadSkills = function ($query) {
        return listSkills.filter(function (skill) {
            return skill.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
        });

    };
    var listSkills;
    var getData = function () {
        utilsService.getCareer((response) => {
            $scope.listCareer = response;
            console.log(response)
        });
        utilsService.getSkill((res) => {
            console.log(res);
            listSkills = res;
        })
    }
    getData();
    // $scope.$apply();
    // $location.path("/forecast");
    // $scope.createPost = function(){
    //     console.log($scope.postDetail);
    //     var win = window.open("","_blank");
    //     win.document.body.innerHTML = $scope.postDetail.benefits;   
    // }

}])