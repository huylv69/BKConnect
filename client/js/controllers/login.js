angular.module('app').controller('LoginController', ['$scope', '$state', '$rootScope', '$mAuth', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mAuth, $mLocalStorage) {

        $scope.student = {};
        $scope.user = {};
        $scope.admin = {};
        $scope.company = {};

        //show template login/register
        $scope.login = true;
        $scope.show = function (type) {
            if (type == 'register') {
                $scope.login = false;
            } else {
                $scope.login = true;
            }
        }

        //register student
        var click = false;
        $scope.register = function () {
            if (click) {
                return;
            } else {
                click = true;
                $scope.loading = true;
                $scope.showNotifi = false;
                $scope.usernameIsExisting = false;

                var name = $scope.student.name;
                var password = $scope.student.password;
                var email = $scope.student.email;
                var repass = $scope.student.repass;
                if (password === repass) {
                    if (name != null && password != null && email != null) {
                        $mAuth.register(email, password, name, function (response) {
                            console.log(response);
                            if (response.status == 200) {
                                $scope.loading = false;

                                if (response.data.email) {
                                    $rootScope.textNotifi = "Đăng kí tài khoản thành công . Kiểm tra email để kích hoạt tài khoản";
                                    $scope.showNotifi = true;
                                }
                            }
                            else {
                                $scope.loading = false;

                                if (response.status == 422) {
                                    $scope.usernameIsExisting = true;
                                    return;
                                } else {
                                    console.log("Server lỗi");
                                }
                            }
                            click = false;
                        });
                    } else {
                        click = false;
                        $scope.loading = false;
                        swal({
                            title: "Thất bại!",
                            text: "Điền đầy đủ thông tin bạn nhé!",
                            icon: "warning",
                        });
                    }
                } else {
                    click = false;
                    $scope.loading = false;
                    swal({
                        title: "Thất bại!",
                        text: "Mật khẩu không khớp!",
                        icon: "warning",
                    });
                }
            }


        }

        //signin student
        var clicklog = false;
        $scope.signIn = function () {
            if (clicklog) {
                return;
            } else {
                clicklog = true;
                $scope.loading = true;
                $scope.errLogin = false;
                var email = $scope.user.email;
                var password = $scope.user.password;
                $mAuth.signin(email, password, function (response) {
                    // console.log(response);
                    if (response.status == 200) {
                        $scope.loading = false;
                        let user = {
                            userId: response.data.userId,
                            token: response.data.id
                        }
                        $rootScope.currentUser = user;
                        $mLocalStorage.setItem('userInfo', user);
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
                                $state.go('home');
                                $rootScope.$broadcast('loadHeader');
                            },
                            // handling the promise rejection
                            function (dismiss) {
                                if (dismiss === 'timer') {
                                    $state.go('home');
                                    $rootScope.$broadcast('loadHeader');
                                }
                            }
                            );
                    } else {
                        $scope.loading = false;
                        if (response.data.error.code == "LOGIN_FAILED_EMAIL_NOT_VERIFIED") {
                            $scope.textLogin = "Xác thực email trước khi đăng nhập";
                            $scope.errLogin = true;
                        } else if (response.status == 406) {
                            $scope.textLogin = "*Tài khoản đang bị Block . Đề nghị liên hệ Admin";
                            $scope.errLogin = true;
                        } else {
                            $scope.textLogin = "*Login failed. Wrong username or password ";
                            $scope.errLogin = true;
                        }
                    }
                    clicklog = false;
                });
            }
        }



        //Admin 
        $scope.loginAdmin = function () {
            var username = $scope.admin.username;
            var password = $scope.admin.password;
            // console.log($scope.admin);
            $mAuth.loginAdmin(username, password, function (response) {
                // console.log(response);
                if (response.status == 200) {
                    let user = {
                        userId: response.data.userId,
                        token: response.data.id
                    }
                    $rootScope.currentAdmin = user;
                    $mLocalStorage.setItem('adminInfo', user);
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
                            $state.go('request');
                        },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                $state.go('request');
                            }
                        }
                        );
                } else {
                    $scope.textAdmin = "*Login failed. Wrong username or password ";
                    $scope.adminNotifi = true;
                }
            });
        };

    }]);