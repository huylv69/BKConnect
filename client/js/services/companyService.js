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

        service.getInfo = function (userId, callback) {
            var url = buildQueryLink("companies/" + userId)
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                });
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
        service.getListActivated = function (callback) {
            var url = BASE_URL + "companies/getListActivated";
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                })
        }

        service.blockCompany = function (emailCompany, callback) {
            var url = BASE_URL + "companies/blockCompany";
            $http.get(url, { params: { "email": emailCompany } })
                .then(function (res) {
                    callback(res);
                }, function (err) {
                    callback(err);
                })
        }
        service.activateCompany = function (emailCompany, callback) {
            var url = BASE_URL + "companies/activateCompany";
            $http.get(url, { params: { "email": emailCompany } })
                .then(function (res) {
                    callback(res);
                }, function (err) {
                    callback(err);
                })
        }
        service.confirmbyadmin = function (emailCompany, callback) {
            var url = BASE_URL + "companies/confirmbyadmin";
            $http.get(url, { params: { "email": emailCompany } })
                .then(function (res) {
                    callback(res);
                }, function (err) {
                    callback(err);
                })
        }
        return service;
    }]);