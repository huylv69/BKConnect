'use strict';
angular
    .module('service.company', [])
    .factory('$mCompany', ['$http', '$rootScope', '$mLocalStorage', function ($http, $rootScope, $mLocalStorage) {
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

        service.checkId = function (id, callback) {
            var url = BASE_URL + "companies/" + id;
            $http.head(url)
                .then(function (res) {
                    callback(res);
                }, function (err) {
                    callback(err);
                });
        }

        service.getInfo = function (userId, callback) {
            var url = BASE_URL + "companies/" + userId;
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                });
        }

        service.getListTop = function (callback) {
            var url = BASE_URL + "companies";
            $http.get(url, { params: { "filter": { "limit": 5 } } })
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                })
        }
        service.getList = function (callback) {
            var url = BASE_URL + "companies";
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                })
        }

        service.getListReq = function (callback) {
            var url = BASE_URL + "companies/getListReq";
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                })
        }

        //Get List Activated 
        service.getListActivated = function (callback) {
            var url = BASE_URL + "companies/getListActivated";
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                })
        }



        return service;
    }]);