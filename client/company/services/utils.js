comApp.service('utilsService', ['$http', '$rootScope', function ($http, $rootScope) {
    var service = {};
    service.getCareer = function (callback) {
        $http.get(BASE_URL + 'careers')
            .then(function (response) {
                callback(response.data);
            })
            .catch(function (response) {
                callback(response);
            });
    }

    service.getSkill = function (callback) {
        $http.get(BASE_URL + 'skills')
            .then(function (response) {
                callback(response.data);
            })
            .catch(function (response) {
                callback(response);
            })
    }

    return service;
}]);