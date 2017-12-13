angular.module('admin').controller('StudentBlockController', ['$scope', '$state', '$rootScope', '$mStudent', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mStudent, $mLocalStorage) {
        var loadData = function () {
            $mStudent.getListBlock(function (res) {
                $scope.listStudent = res.students;
                console.log(res);
            })
        };

        $scope.activateStudent = function (student) {
            $scope.isPaneShown = true;
            var studentEmail = student.email;
            $mStudent.activateStudent(studentEmail, function (res) {
                $scope.isPaneShown = false;
                if (res.status == 204) {
                    student.block = false;
                    swal({
                        title: "Thành công!",
                        text: "Đã activate tài khoản!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Chú ý!",
                        text: "Đã activate sinh viên!",
                        icon: "warning",
                    });
                }
            })
        }

       
        $scope.reset = function () {
            $state.reload();
        }
        loadData();
    }])
    