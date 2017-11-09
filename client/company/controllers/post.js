comApp.controller('PostController', ['$scope', '$location',  function($scope, $location){
        
    $scope.postDetail ={};
    // $scope.submit = function() {
    //     $location.path("/forecast");
    // }
    
    $scope.createPost = function(){
        console.log($scope.postDetail);
    }
    
}]);