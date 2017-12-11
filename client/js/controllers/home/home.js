angular.module('app').controller('HomeController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$state', '$mUtils', '$mCompany',
    function ($scope, $stateParams, $rootScope, $mPost, $state, $mUtils, $mCompany) {
        $scope.listPost = [];
        $scope.authen = ($rootScope.currentUser) ? true : false;
        $scope.$on('loadHeader', function () {
            $scope.authen = ($rootScope.currentUser) ? true : false;
            if ($scope.authen) {
                $mUtils.getPostFollow($rootScope.currentUser.userId, function (res) {
                    $scope.listPostFollow = res.results.listPost;
                })
            }
        });
        $scope.limit = 10;
        var getData = function () {
            $mPost.getAllPost(function (res) {
                $scope.listPost = res.list;
                // console.log(res);
            })
            $mUtils.getAllCareer((response) => {
                $scope.listCareer = response;
                // console.log(response)
            });
            $mCompany.getListTop((res) => {
                $scope.listComTop = res;
            })
            if ($scope.authen) {
                $mUtils.getInfoFollow($rootScope.currentUser.userId, function (res) {
                    $scope.listPostFollow = res.results.listPost;
                    console.log(res);
                })
            };
        }
        $scope.loadMore = function () {
            var increamented = $scope.limit + 10;
            $scope.limit = increamented > $scope.listPost.length ? $scope.listPost.length : increamented;
        };
        getData();
    }]);