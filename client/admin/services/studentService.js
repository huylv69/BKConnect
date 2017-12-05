'use strict';
angular
    .module('service.student', [])
    .factory('$mStudent', ['$http', '$rootScope', '$mLocalStorage', function ($http, $rootScope, $mLocalStorage) {
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

        service.getListActive = function (callback) {
            var url = BASE_URL + "students/getListActive";
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                })
        }

        service.getListBlock = function (callback) {
            var url = BASE_URL + "students/getListBlock";
            $http.get(url)
                .then(function (res) {
                    callback(res.data);
                }, function (err) {
                    callback(err.data);
                })
        }
        service.blockStudent = function (emailStudent, callback) {
            var url = BASE_URL + "students/blockStudent";
            $http.get(url, { params: { "email": emailStudent } })
                .then(function (res) {
                    callback(res);
                }, function (err) {
                    callback(err);
                })
        }
        service.activateStudent = function (emailStudent, callback) {
            var url = BASE_URL + "students/activateStudent";
            $http.get(url, { params: { "email": emailStudent } })
                .then(function (res) {
                    callback(res);
                }, function (err) {
                    callback(err);
                })
        }

        return service;
    }]);