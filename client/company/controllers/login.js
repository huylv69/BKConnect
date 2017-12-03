comApp.controller('LoginController', ['$rootScope', '$scope', '$location', 'AuthenService', '$mLocalStorage', '$window', function ($rootScope, $scope, $location, AuthenService, $mLocalStorage, $window) {
    //login Company
    $scope.loginCompany = function () {
        var email = $scope.company.email;
        var password = $scope.company.password;
        AuthenService.loginCompany(email, password, function (response) {
            console.log(response);
            if (response.status == 200) {
                let user = {
                    userId: response.data.userId,
                    token: response.data.id
                }
                $rootScope.currentCompany = user;
                AuthenService.setCompany(user);
                $mLocalStorage.setItem('companyInfo', user);
                swal(
                    {
                        title: "Đăng nhập thành công!",
                        text: "Hệ thống tự chuyển trang sau 3s!",
                        icon: "success",
                        timer: 3000,
                        button: false,
                        onOpen: function () {
                            swal.showLoading()
                        }
                    }).then(
                    function () {
                        $location.path('/post');
                        $scope.$apply();
                    },
                    // handling the promise rejection
                    function (dismiss) {
                        if (dismiss === 'timer') {
                            $location.path('/post');
                            $scope.$apply()
                        }
                    }
                    );
            } else {
                if (response.data.error.code == "LOGIN_FAILED_COMPANY_NOT_VERIFIED") {
                    $scope.textLogin = "Tài khoản chưa kích hoạt. Liên hệ với admin để kích hoạt";
                    $scope.errLogin = true;
                } else {
                    $scope.textLogin = "*Login failed. Wrong username or password ";
                    $scope.errLogin = true;
                }
            }
        });
    }

    //register company
    $scope.registerCompany = function () {
        var name = $scope.company.name;
        var password = $scope.company.password;
        var email = $scope.company.email;
        var introduce = $scope.company.introduce;
        if (name != null && password != null && email != null && introduce != null) {
            AuthenService.registerCompany(email, password, name, introduce, function (response) {
                console.log(response);
                if (response.status == 200) {
                    if (response.data.email) {
                        $rootScope.textNotifi = "Đăng kí tài khoản thành công . Liên hệ Admin để kích hoạt tài khoản";
                        $scope.showNotifi = true;
                    }
                }
                else {
                    if (response.status == 422) {
                        $scope.usernameIsExisting = true;
                        return;
                    } else {
                        console.log("Server lỗi");
                    }
                }
            });
        }
    }

}])