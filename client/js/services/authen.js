'use strict';
angular
  .module('service.auth', [])
  .factory('$mAuth', ['$http', '$rootScope', function ($http, $rootScope) {
    var service = {};
    var user;
    service.signin = function (username, password, callback) {
      $http.post(BASE_URL + 'students/login', { email: username, password: password })
        .then(function (response) {
          callback(response);
        }, function (err) {
          callback(err);
        })
    }

    service.logout = function (token_id) {
      $http.post(BASE_URL + 'users/signout' + '?access_token=' + token_id);
    }

    service.fbLogin = function (accessToken, callback) {
      $http.post(BASE_URL + 'users/signinWithFacebook', { fbAccessToken: accessToken })
        .success(function (response) {
          callback(response);

        })
        .error(function (response) {

        });
    }
    service.register = function (email, password, username, callback) {
      $http.post(BASE_URL + 'students', { email: email, password: password, displayName: username })
        .then(function (response) {
          callback(response);
        })
        .catch(function (response) {
          callback(response);
        });
    }
    service.update = function (displayName, oldPassword, newPassword, access_token, callback) {
      $http.post(BASE_URL + 'users/changeInfo?access_token=' + access_token, { displayName: displayName, oldPassword: oldPassword, newPassword: newPassword })
        .success(function (response) {
          callback(response);
        })
        .error(function (response) {
          callback(response);
        });
    }
    service.updateName = function (displayName, oldPassword, access_token, callback) {
      $http.post(BASE_URL + 'users/changeInfo?access_token=' + access_token, { displayName: displayName, oldPassword: oldPassword })
        .success(function (response) {
          callback(response);
        })
        .error(function (response) {
          callback(response);
        });
    }
    service.forgotPassword = function (email, callback) {
      $http.post(BASE_URL + '/users/forgotPassword', { email: email })
        .success(function (response) {
          callback(response);
        })
        .error(function () {
          callback(response);
        });
    }

    //authen 
    service.setUser = function (user) {
      user = user;
    }

    service.isAuthen = function () {
      return (user) ? user : false;
    }
    return service;
  }]);

