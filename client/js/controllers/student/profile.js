angular.module('app').controller('ProfileController', ['$scope', '$state', '$rootScope', '$mStudent', '$mLocalStorage',
    function ($scope, $state, $rootScope, $mStudent, $mLocalStorage) {
        
        var user = {};
        
        var loadData = function(){
            currentUser = $rootScope.currentUser; 
            if(currentUser == null || currentUser ==""){
                currentUser =$mLocalStorage.getItem("userInfo");
                $rootScope.currentUser =currentUser;
            }
            $mStudent.getInfo(currentUser.userId,function(res){
                $scope.user = res;
            });
            
        }
        $scope.updateInfo = function(){
            $mStudent.updateInfo($scope.user,function(res){
                console.log(res);
            });
        }
        loadData();
    }]);