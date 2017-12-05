'use strict';
angular
    .module('service.post', [])
    .factory('$mPost', ['$http', '$rootScope', '$mLocalStorage', function ($http, $rootScope, $mLocalStorage) {
        var service = {};
        var accessToken;
        var buildQueryLink = function (relativeUrl) {
            accessToken = $rootScope.currentCompany.token;
            if (accessToken == null) {
                let companyInfo = $mStorage.getItem("adminInfo");
                $rootScope.accessToken = companyInfo.token;
                accessToken = $rootScope.accessToken;
            }
            return BASE_URL + relativeUrl + "&access_token=" + accessToken;
        }

        service.getListPost = function (callback) {
            var url = BASE_URL + "posts/getAllPost";
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                    console.log(res.data)
                }, function (err) {
                    callback(err.data);
                })
        }

        service.deleteById = function (id, callback) {
            $http.delete(BASE_URL + 'posts/' + id)
                .then(function (success) {
                    callback(success);
                }, function (err) {
                    callback(err);
                })
        }
        return service;
    }]);