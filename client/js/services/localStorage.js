'use strict';
angular
  .module('service.localStorage', [])
  .factory('$mLocalStorage', [ function() {
  	var service = {};

  	service.setItem = function (key, value){
  		localStorage.setItem(key, JSON.stringify(value));
  	}
  	service.getItem = function(key){
  		var result = JSON.parse(localStorage.getItem(key));
  		if(result){
  			return result;
  		}
  		else{
  			return null;
  		}
  	}
  	service.deleteItem = function (key){
  		localStorage.removeItem(key);
  	}
  	service.clear = function (){
  		localStorage.clear();
  	}
    
  	return service;
  }]);