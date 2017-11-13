comApp.service('AuthenService', ['$http', '$rootScope', function ($http, $rootScope) {
  var service = {};
  var company ;
  service.loginCompany = function (email, password, callback) {
    $http.post(BASE_URL + 'companies/login', { email: email, password: password })
      .then(function (response) {
        callback(response);
      }, function (response) {
        callback(response);
      });
  }
  service.registerCompany = function (email, password, name, introduce, callback) {
    $http.post(BASE_URL + 'companies', { email: email, password: password, name: name, about: introduce })
      .then(function (response) {
        callback(response);
      }, function (response) {
        callback(response);
      });
  }

  service.setCompany = function (company) {
    company = company;
  }
  service.isLogIn = function () {
    return (company) ? company : {};
  }
  return service;
}]);