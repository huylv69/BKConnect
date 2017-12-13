angular.module('app').controller('SearchController', ['$scope', '$stateParams', '$rootScope', '$mPost', '$state', '$mUtils', '$mCompany',
    function ($scope, $stateParams, $rootScope, $mPost, $state, $mUtils, $mCompany, filterFilter) {
        $scope.useCareer = {};
        $scope.useCategory = {};


        var getData = function () {
            $mPost.getAllPost(function (res) {
                $scope.listPost = res.list;
                console.log(res);

                $mUtils.getAllCareer((response) => {
                    $scope.listCareer = response;
                    // console.log(response)
                    $scope.useCategory = {};
                    $scope.useCareer = {};
                    $scope.useAddress = {};
                    //listPost 
                    // Watch the posts that are selected
                    $scope.$watch(function () {
                        return {
                            useAddress: $scope.useAddress,
                            useCategory: $scope.useCategory,
                            useCareer: $scope.useCareer,
                        }
                    }, function (value) {
                        var selected;
                        $scope.count = function (prop, value) {
                            return function (el) {
                                return el[prop] == value;
                            };
                        };

                        $scope.addressGroup = uniqueItems($scope.listPost, 'address');
                        var filterAfterCity = [];
                        selected = false;
                        for (var j in $scope.listPost) {
                            var p = $scope.listPost[j];
                            for (var i in $scope.useAddress) {
                                if ($scope.useAddress[i]) {
                                    selected = true;
                                    if (i == p.address) {
                                        filterAfterCity.push(p);
                                        break;
                                    }
                                }
                            }
                        }
                        if (!selected) {
                            filterAfterCity = $scope.listPost;
                        }

                        $scope.categoryGroup = uniqueItems($scope.listPost, 'category');
                        var filterAfterCategory = [];
                        selected = false;
                        for (var j in filterAfterCity) {
                            var p = filterAfterCity[j];
                            for (var i in $scope.useCategory) {
                                if ($scope.useCategory[i]) {
                                    selected = true;
                                    if (i == p.category) {
                                        filterAfterCategory.push(p);
                                        break;
                                    }
                                }
                            }
                        }
                        if (!selected) {
                            filterAfterCategory = filterAfterCity;
                        }

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
                        console.log($scope.careerGroup, $scope.useCareer)
                        var filterAfterCareer = [];
                        selected = false;
                        for (var j in filterAfterCategory) {
                            var p = filterAfterCategory[j];
                            for (var i in $scope.useCareer) {
                                if ($scope.useCareer[i]) {
                                    selected = true;
                                    if (i == p.idcareer) {
                                        filterAfterCareer.push(p);
                                        break;
                                    }
                                }
                            }
                        }
                        if (!selected) {
                            filterAfterCareer = filterAfterCategory;
                        }
                        $scope.filteredPost = filterAfterCareer;
                    }, true);
                })
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
        getData();

    }]);

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

angular.module('app').filter('count', function () {
    return function (collection, key) {
        var out = "test";
        for (var i = 0; i < collection.length; i++) {
            //console.log(collection[i].pants);
            //var out = myApp.filter('filter')(collection[i].pants, "42", true);
        }
        return out;
    }
});
angular.module('app').filter('groupBy',
    function () {
        return function (collection, key) {
            if (collection === null) return;
            return uniqueItems(collection, key);
        };
    });

angular.module('app').filter('searchMulti', function () {
    return function (arr, searchString) {
        if (!searchString) {
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function (post) {
            // console.log(company)
            if (post.title.toLowerCase().indexOf(searchString) !== -1) {
                result.push(post);
            }
        });
        return result;
    };
});