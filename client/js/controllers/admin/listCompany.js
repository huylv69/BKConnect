angular.module('app').controller('ListCompanyController', ['$scope', '$state', '$rootScope', '$mAuth', '$mLocalStorage', '$mCompany',
    function ($scope, $state, $rootScope, $mAuth, $mLocalStorage, $mCompany) {

        var listCompany = [];
        var loadData = function () {
            $mCompany.getListActivated(function (res) {
                $scope.listCompany = res.companies;
                console.log(res);
            })
        };

        $scope.blockCompany = function (company) {
            var emailCompany = company.email;
            $mCompany.blockCompany(emailCompany, function (res) {

                if (res.status == 204) {
                    company.block = true;
                    swal({
                        title: "Thành công!",
                        text: "Đã block công ty!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Thất bại!",
                        text: "Đang block công ty!",
                        icon: "error",
                    });
                }
                console.log(res);
            })
        }
        $scope.activateCompany = function (company) {
            var emailCompany = company.email;
            $mCompany.activateCompany(emailCompany, function (res) {
                if (res.status == 204) {
                    company.block = false;
                    swal({
                        title: "Thành công!",
                        text: "Đã activate công ty!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Thất bại!",
                        text: "Công ty đang ở trạng thái activate!",
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