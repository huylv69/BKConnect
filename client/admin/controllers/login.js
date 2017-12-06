angular.module('admin').controller('LoginController', ['$scope', '$state', '$rootScope', '$mAuth', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mAuth, $mLocalStorage) {

        $scope.admin = {};

        //show template login/register
        $scope.login = true;
        $scope.show = function (type) {
            if (type == 'register') {
                $scope.login = false;
            } else {
                $scope.login = true;
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
                            $state.go('home');
                        },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                $state.go('home');
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