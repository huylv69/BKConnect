comApp.service('cvService', ['$http', '$rootScope', function ($http, $rootScope) {
  var service = {};

  service.getNewCv = function (id, callback) {
    $http.get(BASE_URL + "cvs/getNewCV", { params: { "idCompany": id } })
      .then(function (response) {
        callback(response.data);
      }, function (err) {
        callback(err);
      })
  }

  service.getListCVCompany = function (id, callback) {
    $http.get(BASE_URL + "cvs/getListCVCompany", { params: { "idCompany": id } })
      .then(function (response) {
        callback(response.data);
      }, function (err) {
        callback(err);
      })
  }

  service.updateSeen = function (infoCV, callback) {
    var url = BASE_URL + "cvs/update?where[idstudent]=" + infoCV.idstudent + "&where[idpost]=" + infoCV.idpost;
    var data = {
      seen: true
    }
    $http.post(url, data).then(function (res) {
      callback(res.data);
    }, function (err) {
      callback(err);
    });
  }
  return service;
}]);
