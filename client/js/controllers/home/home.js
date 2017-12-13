angular.module('app').controller('HomeController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$state', '$mUtils', '$mCompany',
    function ($scope, $stateParams, $rootScope, $mPost, $state, $mUtils, $mCompany) {
        $scope.listPost = [];
        $scope.authen = ($rootScope.currentUser) ? true : false;
        $scope.$on('loadHeader', function () {
            $scope.authen = ($rootScope.currentUser) ? true : false;
            if ($scope.authen) {
                $mUtils.getPostFollow($rootScope.currentUser.userId, function (res) {
                    $scope.listPostFollow = res.results.listPost;
                    console.log(res);
                })
            }
        });
        $scope.limit = 10;
        var getData = function () {
            $mPost.getAllPost(function (res) {
                $scope.listPost = res.list;
                // console.log(res);
                $mUtils.getAllCareer((response) => {
                    $scope.listCareer = response;
                    console.log(response);
                    $scope.careerGroup = [];
                    let careerGroup = uniqueItems($scope.listPost, 'idcareer');
                    for (let index = 0; index < careerGroup.length; index++) {
                        const element = careerGroup[index];
                        for (let index = 0; index < $scope.listCareer.length; index++) {
                            const car = $scope.listCareer[index];
                            if (car.idcareer == element) {
                                $scope.careerGroup.push(car);
                                break;
                            }
                        }
                    }                    
                });
            });
            $mCompany.getListTop((res) => {
                $scope.listComTop = res;
            })
            if ($scope.authen) {
                $mUtils.getInfoFollow($rootScope.currentUser.userId, function (res) {
                    $scope.listPostFollow = res.results.listPost;
                    $scope.listComFollow = res.results.listComFollow;
                    console.log($scope.listComFollow);
                })
            };
        }
        $scope.loadMore = function () {
            var increamented = $scope.limit + 10;
            $scope.limit = increamented > $scope.listPost.length ? $scope.listPost.length : increamented;
        };
        getData();

        var uniqueItems = function (data, key) {
            var result = [];
            for (var i = 0; i < data.length; i++) {
                var value = data[i][key];
                if (result.indexOf(value) == -1) {
                    result.push(value);
                }
            }
            return result;
        };
        $scope.$on('$viewContentLoaded', function() {
            getData();
        });
    }]);