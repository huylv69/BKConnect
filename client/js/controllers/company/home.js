angular.module('app').controller('HomeCompanyController', ['$scope', '$stateParams', '$rootScope', '$mCompany', '$mLocalStorage',
    function ($scope, $stateParams, $rootScope, $mCompany, $mLocalStorage) {
        var id  = $stateParams.id;
        
        var getData = function(){
            $mCompany.getInfo(id,function(res){
                $scope.companyInfo  =res;
                console.log($scope.companyInfo );
            })
        }

        getData();
    }]);