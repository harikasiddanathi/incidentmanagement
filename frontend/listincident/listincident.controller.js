(function () {
    'use strict';

    angular
        .module('app')
        .controller('listincidentController', listincidentController);

    listincidentController.$inject = ['CommonService', '$scope', '$http'];
    function listincidentController(CommonService, $scope, $http) {
      var vm = this;
       $scope.listresponse = "initial";
            $http.get('https://vveam9hlyh.execute-api.us-east-1.amazonaws.com/dev/listincidents'
            ).success(function(data, status, headers, config){console.log("success");
            var a = data;       
            $scope.listresponse = a;
     
          }).error(function(data, status, headers, config){
             $scope.listresponse = data;
          console.log("failed");

    });
          $scope.setparam = function(x) {
      CommonService.set(x.description, x.uid, x.name, x.priority, x.createdAt, x.component);
}

}
})();
