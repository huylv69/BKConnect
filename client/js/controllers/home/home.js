angular.module('app').controller('HomeController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$state',
    function ($scope, $stateParams, $rootScope, $mPost, $state) {
        $scope.listPost = [];
        var getData = function () {
            $mPost.getAllPost(function (res) {
                $scope.listPost = res.list;
                console.log(res);
            })
        }
        getData();
    }]);