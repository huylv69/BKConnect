angular.module('app').controller('ProfileController', ['$scope', '$state', '$rootScope', '$mStudent', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mStudent, $mLocalStorage) {

        var user = {};
        $scope.myDate = {
            value: ''
        };
        var loadData = function () {
            currentUser = $rootScope.currentUser;
            if (currentUser == null || currentUser == "") {
                currentUser = $mLocalStorage.getItem("userInfo");
                $rootScope.currentUser = currentUser;
            }
            $mStudent.getInfo(currentUser.userId, function (res) {
                $scope.user = res;
                $scope.user.birthday = new Date(res.birthday);
            });

        };
        $scope.targetField = null;
        
        $scope.changeCallback = function() {
            console.log($scope.targetField);
        };
        
        $scope.focusCallback = function($event) {
          if($event.target === null) {
            return;
          }
          $scope.targetField = $event.target;
        };
        $scope.change = function (obj,$event) {
            console.log($event.target);
            getBase64(e.target.files[0], function (data) {
                console.log('File', e.target.files[0]);
                console.log(data.length);
                console.log(data.substr(0, 100));
            });
        }
        // Convert image to base64
        function getBase64(file, callback) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                callback(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }


        let click = false;
        $scope.updateInfo = function () {
            if (click) {
                return;
            } else {
                click = true;
                $scope.loading = true;
                $mStudent.updateInfo($scope.user, function (res) {
                    if (res.status == 200) {
                        $scope.loading = false;
                        swal({
                            title: "Thành công!",
                            text: "Cập nhật dữ liệu thành công!",
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
                    console.log(res);
                });
            }
        }

        $scope.reset = function () {
            $state.reload();
        }
        loadData();
    }]);