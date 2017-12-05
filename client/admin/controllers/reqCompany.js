angular.module('admin').controller('RequestController', ['$scope', '$state', '$rootScope', '$mAuth', '$mLocalStorage', '$mCompany',
    function ($scope, $state, $rootScope, $mAuth, $mLocalStorage, $mCompany) {
        var listCompany = [];
        var loadData = function () {
            $mCompany.getListReq(function (res) {
                $scope.listCompany = res.companies;
                console.log(res);
            });
        }

        $scope.confirmbyadmin = function (company) {
            $scope.isPaneShown = true;
            var emailCompany = company.email;
            $mCompany.confirmbyadmin(emailCompany, function (res) {
                $scope.isPaneShown = false;
                if (res.status == 204) {
                    company.activated = true;
                    swal({
                        title: "Thành công!",
                        text: "Đã kích hoạt tài khoản!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Thất bại!",
                        text: "Công ty đã kích hoạt rồi!",
                        icon: "error",
                    });
                }
            })
        }
        $scope.initDataTable = function () {
            setTimeout(function () {
                $("#example1").DataTable();
            }, 10);
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