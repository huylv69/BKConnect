angular.module('admin').controller('StudentController', ['$scope', '$state', '$rootScope', '$mStudent', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mStudent, $mLocalStorage) {
        var loadData = function () {
            $mStudent.getListActive(function (res) {
                $scope.listStudent = res.students;
                console.log(res);
            })
        };
        $scope.isPaneShown = false;
        $scope.blockStudent = function (student) {
            $scope.isPaneShown = true;
            var studentEmail = student.email;
            $mStudent.blockStudent(studentEmail, function (res) {
                $scope.isPaneShown = false;
                if (res.status == 204) {
                    student.block = true;
                    swal({
                        title: "Thành công!",
                        text: "Đã block tài khoản!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Thất bại!",
                        text: "Đang block sinh viên!",
                        icon: "error",
                    });
                }
            })
        }
        $scope.initDataTable = function () {
            setTimeout(function () {
                $("#example1").DataTable();
            }, 0);
        };
        $scope.reset = function () {
            $state.reload();
        }
        loadData();
    }])
    .directive('repeatDone', function () {
        return function (scope, element, attrs) {
            if (scope.$last) {
                scope.$eval(attrs.repeatDone);
            }
        }
    });