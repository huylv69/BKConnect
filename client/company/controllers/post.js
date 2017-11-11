comApp.controller('PostController', ['$scope', '$location','postService',  function($scope, $location,postService){
     
    $scope.postDetail ={};
    $scope.createPost = function () {
        $scope.postDetail.idcompany=1;
        $scope.postDetail.idcareer=1;
        
        postService.create($scope.postDetail,function(response){
            console.log(response);
        });
    }
    
    // $location.path("/forecast");
    // $scope.createPost = function(){
    //     console.log($scope.postDetail);
    //     var win = window.open("","_blank");
    //     win.document.body.innerHTML = $scope.postDetail.benefits;   
    // }
    
}])