(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

      
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        
        var api = "https://vveam9hlyh.execute-api.us-east-1.amazonaws.com/dev";

        return service;


        function GetByUsername(username) {
            return $http.get( api + '/users/' + username).success(function(data, status, headers, config){
            return data;
          }).error(function(data, status, headers, config){
             return { success: false, message: "gettinguser" };

    });
        }

        function Create(user) {
            return $http.post( api + '/users', user).then(handleSuccess, handleError('Error creating user'));
        }

         function handleSuccess(res) {
            console.log(res);
            return res;
        }
        
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
