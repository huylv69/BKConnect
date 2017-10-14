'use strict';
angular
  .module('service.student', [])
  .factory('$mStudent', ['$http', '$rootScope', '$mLocalStorage', function ($http, $rootScope, $mLocalStorage) {
    var service = {};
    var accessToken;
    var buildQueryLink = function (relativeUrl) {
      accessToken = $rootScope.currentUser.token;
      if (accessToken == null) {
        let userInfo = $mStorage.getItem("userInfo");
        $rootScope.accessToken = userInfo.token;
        accessToken = $rootScope.accessToken;
      }
      return BASE_URL + relativeUrl + "&access_token=" + accessToken;
    }

    service.getInfo = function (userId, callback) {
      var url = buildQueryLink("students/" + userId)
      $http.get(url)
        .then(function (res) {
          callback(res.data);
        });
    }

    service.updateInfo = function (user, callback) {
      console.log(user);
      var url = buildQueryLink("students/update?where[email]=" + user.email);
      var params = {
        where: { email: user.email },
      }
      $http.post(url, user).then(function (res) {
        callback(res);
      })
    }
    return service;
  }]);