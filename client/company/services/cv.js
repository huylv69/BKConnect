comApp.service('cvService', ['$http', '$rootScope', function ($http, $rootScope) {
  var service = {};

  service.getNewCv = function () {
    $http.get(BASE_URL + "cvs/getNewCV", { params: { "idCompany": id } })
      .then(function (response) {
        callback(response.data);
      }, function (err) {
        callback(err);
      })
  }
  return service;
}]);
