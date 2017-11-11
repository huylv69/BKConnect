comApp.controller('ManagerPostController', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    $scope.data=[];
    $http.get(BASE_URL + 'posts').then(function (data) {
        $scope.data =  data.data;
    })

    $scope.postDetail = {};
    // $scope.submit = function() {
    //     $location.path("/forecast");
    // }

    $scope.createPost = function () {
        console.log($scope.postDetail);
    }

}])
    .directive('repeatDone', function () {
        return function (scope, element, attrs) {
            if (scope.$last) {
                scope.$eval(attrs.repeatDone);
            }
        }
    });;