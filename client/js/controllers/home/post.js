angular.module('app').controller('PostController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$mCompany', '$state',
    function ($scope, $stateParams, $rootScope, $mPost, $mCompany, $state) {
        var id = $stateParams.id;
        $scope.postDetail = {};
        var getData = function () {
            $mPost.getInfo(id, function (res) {
                if (res.error) {
                    $state.go('home');
                } else {
                    $scope.postDetail = res;
                    console.log(res);
                    $mCompany.getInfo($scope.postDetail.idcompany, function (res) {
                        $scope.companyInfo = res;
                        console.log($scope.companyInfo);
                    })
                }
            })
        }
        getData();
    }]);