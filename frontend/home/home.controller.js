(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['CommonService', '$scope', '$http'];
    function HomeController(CommonService, $scope, $http) {
      var vm = this;    

}
})();