angular.module('app').controller('ListCompanyController', ['$scope', '$stateParams', '$rootScope', '$mCompany', '$mLocalStorage', '$mUtils',
function ($scope, $stateParams, $rootScope, $mCompany, $mLocalStorage, $mUtils) {
    var getData = function () {
        $mCompany.getListActivated(function (res) {
            if (res.error) {
                $state.go('home');
            } else {
                $scope.listCompany = res.companies;
                console.log($scope.listCompany);
            }
        });
    };
    getData();
    
}]);
angular.module('app').filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(company){
            console.log(company)
            if(company.name.toLowerCase().indexOf(searchString) !== -1){
            result.push(company);
        }
        });
        return result;
    };
});