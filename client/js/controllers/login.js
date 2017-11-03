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
        $scope.register = function () {
            var name = $scope.student.name;
            var password = $scope.student.password;
            var email = $scope.student.email;
            if (name != null && password != null && email != null) {
                $mAuth.register(email, password, name, function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        if (response.data.email) {
                            $rootScope.textNotifi = "Đăng kí tài khoản thành công . Kiểm tra email để kích hoạt tài khoản";
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

        //signin student
        $scope.signIn = function () {
            var email = $scope.user.email;
            var password = $scope.user.password;
            $mAuth.signin(email, password, function (response) {
                console.log(response);
                if (response.status == 200) {
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
                            $state.go('profile', { "id": 1 });
                        },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                $state.go('profile', { "id": 1 });
                            }
                        }
                        );
                } else {
                    if (response.data.error.code == "LOGIN_FAILED_EMAIL_NOT_VERIFIED") {
                        $scope.textLogin = "Xác thực email trước khi đăng nhập";
                        $scope.errLogin = true;
                    } else {
                        $scope.textLogin = "*Login failed. Wrong username or password ";
                        $scope.errLogin = true;
                    }
                }
            });
        }

        //login Company
        $scope.loginCompany = function () {
            var email = $scope.company.email;
            var password = $scope.company.password;
            $mAuth.loginCompany(email, password, function (response) {
                console.log(response);
                if (response.status == 200) {
                    let user = {
                        userId: response.data.userId,
                        token: response.data.id
                    }
                    $rootScope.currentCompany = user;
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
                            $state.go('homecompany', { "id": 1 });
                        },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                $state.go('homecompany', { "id": 1 });
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
                $mAuth.registerCompany(email, password, name, introduce, function (response) {
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