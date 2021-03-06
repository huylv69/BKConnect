comApp.service('companyService', ['$http', '$rootScope', function ($http, $rootScope) {
    var service = {};

    var accessToken;
    var buildQueryLink = function (relativeUrl) {
        accessToken = $rootScope.currentCompany.token;
        if (accessToken == null) {
            let companyInfo = $mStorage.getItem("companyInfo");
            accessToken = companyInfo.token;
        }
        return BASE_URL + relativeUrl + "&access_token=" + accessToken;
    }

    service.getById = function (id, callback) {
        $http.get(BASE_URL + "companies/" + id)
            .then(function (response) {
                callback(response);
            }, function (err) {
                callback(err);
            })
    }
    service.updateById = function (id, data, callback) {
        var url = buildQueryLink("companies/" + id);
        $http.patch(url, data)
            .then(function (response) {
                callback(response);
            }, function (err) {
                callback(err);
            })
    }
    service.deleteLogo = function (fileLogo) {
        var url = BASE_URL + "containers/logo/files/" + fileLogo;
        $http.delete(url).then(function (res) {
        });
    }
    service.deleteCover = function (fileCover) {
        var url = BASE_URL + "containers/cover/files/" + fileCover;
        $http.delete(url).then(function (res) {
        });
    }
    return service;
}]);