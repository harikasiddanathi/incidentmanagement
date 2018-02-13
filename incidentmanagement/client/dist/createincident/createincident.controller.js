(function () {
    'use strict';

    angular
        .module('app')
        .controller('createincidentController', createincidentController);

    createincidentController.$inject = ['CommonService', '$scope', '$http'];
    function createincidentController(CommonService, $scope, $http) {
      var vm = this;
       $scope.componentlist = ["API", "SMS", "Voice", "Tools", "AWS", "Carrier", "Stripe"];
       var prilist = [];
       $scope.listresponse = "initial";
            $http.get('https://apiid.execute-api.us-east-1.amazonaws.com/dev/im'
            ).success(function(data, status, headers, config){console.log("success");
            var a = JSON.stringify(data);         
    for (var i = 0, length = data.length; i < length; i++) {
    console.log(data[i].priority);
    prilist.push(data[i].priority);
}
            $scope.listresponse = prilist;
          }).error(function(data, status, headers, config){
             $scope.listresponse = data;
          console.log("failed");

    });



      $scope.createincident = function (priority,description,component,name) {
        $http.post('https://apiid.execute-api.us-east-1.amazonaws.com/dev/im', {"description": description, "priority": priority,"name": name,"component": component
}
            ).success(function(data, status, headers, config){
              console.log("success");

        }).error(function(data, status, headers, config){console.log("failed");

    });

      };


}
})();
