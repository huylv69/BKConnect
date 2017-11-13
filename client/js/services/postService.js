comApp.service('postService', ['$http', '$rootScope', function ($http, $rootScope) {
  var service = {};

  service.create = function (postDetails, callback) {
    $http.post(BASE_URL + 'posts', postDetails)
      .then(function (response) {
        callback(response);
      })
      .catch(function (response) {
        callback(response);
      });
  }

  service.getById = function (id, callback) {
    $http.get(BASE_URL + "posts/" + id)
      .then(function (response) {
        callback(response);
      }, function (err) {
        callback(err);
      })
  }

  service.updateById = function (id, data, callback) {
    $http.patch(BASE_URL + 'posts/' + id, data)
      .then(function (response) {
        callback(response);
      }, function (err) {
        callback(err);
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
