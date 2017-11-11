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
    return service;
}]);
