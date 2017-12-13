'use strict';
angular
  .module('service.post', [])
  .factory('$mPost', ['$http', '$rootScope', '$mLocalStorage', function ($http, $rootScope, $mLocalStorage) {
    var service = {};
    service.getInfo = function (postId, callback) {
      var url = BASE_URL + "posts/" + postId;
      $http.get(url)
        .then(function (res) {
          callback(res.data);
        }, function (err) {
          callback(err.data);
        });
    }
    service.getPostCompany = function (id, callback) {
      $http.get(BASE_URL + "posts/getPostCompany", { params: { "idCompany": id } })
        .then(function (response) {
          callback(response.data);
        }, function (err) {
          callback(err);
        })
    }
    service.getAllPost = function (callback) {
      var url = BASE_URL + "posts/getAllPost";
      $http.get(url)
        .then(function (res) {
          callback(res.data);
        }, function (err) {
          callback(err.data);
        });
    }
    service.getCareer = function (idCareer, callback) {
      var url = BASE_URL + "careers/" + idCareer;
      $http.get(url)
        .then(function (res) {
          callback(res.data);
        }, function (err) {
          callback(err.data);
        });
    }

    service.getSkillPost = function (id, callback) {
      var url = BASE_URL + "posts/" + id + "/skill";
      $http.get(url)
        .then(function (res) {
          callback(res.data);
        }, function (err) {
          callback(err.data);
        });
    }
    return service;
  }]);