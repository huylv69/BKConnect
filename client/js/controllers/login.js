angular.module('app').controller('LoginController', ['$scope', '$state', '$rootScope', '$mAuth', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mAuth, $mLocalStorage) {

        $scope.student = {};
        $scope.user = {};
        $scope.login = true;
        $scope.show = function (type) {
            if (type == 'register') {
                $scope.login = false;
            } else {
                $scope.login = true;
            }
        }

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

        $scope.signIn = function () {
            var email = $scope.user.email;
            var password = $scope.user.password;
            console.log($scope.user);
            $mAuth.signin(email, password, function (response) {
                console.log(response);
                if (response.status == 200) {
                    $rootScope.textNotifi = "Đăng kí nhập thành công";
                    $scope.showNotifi = true;
                } else {
                    if (response.data.error.code == "LOGIN_FAILED_EMAIL_NOT_VERIFIED"){
                        $scope.textLogin = "Xác thực email trước khi đăng nhập";
                        $scope.errLogin = true;
                    }else{
                        $scope.textLogin = "*Login failed. Wrong username or password ";
                        $scope.errLogin = true;
                    }
                }
            });
        }

    }]);