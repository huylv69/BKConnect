// 'use strict';

// /**
//     Dịch vụ kiểm soát bảo mật tài khoản cho người dùng    
// **/

// var authService = angular.module('service.auth', []);

// authService.factory('$mAuth', ['$rootScope','$ionicLoading', '$q', '$http',
// function($rootScope,$ionicLoading, $q, $http) {
        
//     var service = {};    
//     function getInformationFacebook () {
// 		var deferred = $q.defer();

// 		facebookConnectPlugin.api('/me?fields=name,picture', null, function(response) {
// 	        deferred.resolve(response);
// 	    }, function (error) {
//             deferred.resolve(null);
//         });


// 	    return deferred.promise;

// 	} 
    
    

//     var isNullOrEmpty = function (str) {
//         if (str == null || str == "")
//             return true;

//         return false;
//     }

//     /*
//     Data format:
//     {
//         email: "test@example.com",
//         password: "xxx",
//         displayName: "Test",
//         birthday: dd/mm/yy or dd-mm-yyyy
//     }


//     */
//     service.register = function (data) {
//         var url = baseUrl + "/users/register";
//         var deferred = $q.defer();

//         // check information
//         if (data == null) {
//             deferred.reject("data null");
//             return deferred.promise;
//         }
            

//         if (isNullOrEmpty(data.email) || 
//             isNullOrEmpty(data.password) || 
//             isNullOrEmpty(data.displayName) || 
//             isNullOrEmpty(data.birthday)) {
//                 deferred.reject("miss data");
//                 return deferred.promise;
//         }
          
//         $http.post(url, data).then(function (response) {
//             deferred.resolve(response.data);
//         }, function (err) {
//             deferred.reject(err);
//         });

//         return deferred.promise;
//     }




//     service.loginEmail = function (email, password) {
//         var deferred = $q.defer();
//         var url = baseUrl + "/users/signin";

//         if (isNullOrEmpty(email) || isNullOrEmpty(password)) {
//             deferred.reject("miss data");
//             return deferred.promise;
//         }

//         $http.post(url, { 
//             email : email, 
//             password: password }).then(function (response) {
//             deferred.resolve(response.data);
//         }, function (err) {
//             deferred.reject(err);
//         });

//        	return deferred.promise;
//     }

//     service.loginGoogle = function () {
//         var deferred = $q.defer();

//         window.plugins.googleplus.login(
//             {},
//             function (obj) {
//                 console.log(obj);
//                 var url = baseUrl + "/users/signinWithGmail";
//                 $http.post(url, {
//                   email: obj.email,
//                   accessToken: obj.accessToken,
//                   displayName: obj.displayName,
//                   linkImg: obj.imageUrl  
//                 }).then(function (result) {
//                     console.log(result);
//                     deferred.resolve(result.data);
//                 }, function (err) {
//                     console.log(err);
//                     deferred.reject(err);
//                 })

//             },
//             function (msg) {
//                 console.log(msg);
//                 deferred.reject(msg);
//             }
//         );

//        	return deferred.promise;
//     }

//     service.loginFacebook = function () {
//     	var deferred = $q.defer();
//         var url = baseUrl + "/users/signinWithFacebook";
//     	facebookConnectPlugin.login(["public_profile", "email"], function (data) {
//             var accessToken = data.authResponse.accessToken;
            
//             getInformationFacebook().then(function (fbUser) {
//                 if (fbUser == null) {
//                     $http.post(url, {
//                         fbAccessToken: accessToken
//                     }).then(function (result) {
//                         deferred.resolve(result.data);
//                     }, function (err) {
//                         deferred.reject(err);
//                     })

//                 } else {
//                     $http.post(url, {
//                         fbAccessToken: accessToken,
//                         linkImg: fbUser.picture.data.url
//                     }).then(function (result) {
//                         deferred.resolve(result.data);
//                     }, function (err) {
//                         deferred.reject(err);
//                     })
//                 }                
//             })
//         }, function (error) {
//             deferred.reject(null);
//         });

//        	return deferred.promise;
//     }


//     service.forgotPassword = function (email) {
//         var deferred = $q.defer();
//         var url = baseUrl + "/users/forgotPassword";

//         if (isNullOrEmpty(email)) {
//             deferred.reject("miss data");
//             return deferred.promise;
//         }

//         $http.post(url, { 
//             email : email }).then(function (response) {
//             deferred.resolve(response.data);
//         }, function (err) {
//             deferred.reject(err);
//         });

//        	return deferred.promise;
//     }


//     service.changeInfor = function (displayName, oldPassword, newPassword, token) {

//         var deferred = $q.defer();
//         var url = baseUrl + "/users/changeInfo?access_token="+token;

//         if (isNullOrEmpty(displayName) ||
//             isNullOrEmpty(oldPassword) &&
//             isNullOrEmpty(newPassword)) {
//                 deferred.reject("miss data");
//                 return deferred.promise;
//         }
        
//         $http.post(url, { 
//             displayName : displayName, 
//             oldPassword: oldPassword, 
//             newPassword: newPassword  
//         }).then(function (response) {

//             deferred.resolve(response.data);
//         }, function (err) {
            
//             deferred.reject(err);
//         });
        
//         return deferred.promise;
//     }

//     service.logoutFacebook = function (callback) {
//         if (typeof logoutFacebook == "undefined")
//             return;

//         facebookConnectPlugin.getLoginStatus(function (data) {
//             if (data && data.status == "connected") {
//                 facebookConnectPlugin.logout(function () {}, function () {});
//             }
//         }, function (err) {})
//     }
    
//     service.logoutGoogle = function (callback) {

//         if (window.plugins == null || window.plugins.googleplus == null)
//             return;

//         window.plugins.googleplus.trySilentLogin({}, function (obj) {
//             window.plugins.googleplus.logout(function () {
//             }, function () {
//             });
//           }, function (msg) {
//         })
// 	}    




//     service.inviteFriend = function () {
//         facebookConnectPlugin.appInvite( {
//             url: "https://fb.me/1710627025874814",
//             picture: "https://lh3.googleusercontent.com/lNS5JHYZSVkrHz07dBZDtdDKRflnHI7W6BH9_tCFXalrZaC3V95h3XoU_udddiYWOks=w300-rw"
//         }, function(obj) {
//             if(obj) {
//                 if(obj.completionGesture == "cancel") {
//                     console.log("Error invite friend");
//                 } else {
//                     console.log(obj);
//                 }
//             } else {
//                 console.log("Error invite friend");
//             }
//         }, function(obj){        
//             console.log(obj);
//         });
//     }

//     service.signout = function (accessToken) {
//         var url = baseUrl + "/users/signout?access_token=" + accessToken;

//         var deferred = $q.defer();
//         $http.post(url, null).then(function (response) {
//             $rootScope.$broadcast("logouted");
//             deferred.resolve(response.data);

//             service.logoutFacebook();
//             service.logoutGoogle();

//         }, function (err) {
//             deferred.reject(err);
//         });

//         return deferred.promise;
//     }

//     return service;

// }]);