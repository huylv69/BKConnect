angular.module('app').controller('HomeController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$state', '$mUtils', '$mCompany',
    function ($scope, $stateParams, $rootScope, $mPost, $state, $mUtils, $mCompany) {
        $scope.listPost = [];
        $scope.limit = 10;
        var getData = function () {
            $mPost.getAllPost(function (res) {
                $scope.listPost = res.list;
                console.log(res);
            })
            $mUtils.getAllCareer((response) => {
                $scope.listCareer = response;
                console.log(response)
            });
            $mCompany.getListTop((res) => {
                $scope.listComTop = res;
            })
        }
        $scope.loadMore = function () {
            var increamented = $scope.limit + 10;
            $scope.limit = increamented > $scope.listPost.length ? $scope.listPost.length : increamented;
        };
        getData();
    }]);