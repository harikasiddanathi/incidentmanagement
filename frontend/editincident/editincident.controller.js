(function () {
    'use strict';

    angular
        .module('app')
        .controller('editincidentController', editincidentController);

    editincidentController.$inject = ['CommonService', '$scope', '$http'];
    function editincidentController(CommonService, $scope, $http) {
      var vm = this;
       $scope.componentlist = ["API", "SMS", "Voice", "Tools", "AWS", "Carrier", "Stripe"];
       var options = CommonService.get();
       console.log(options.uid);
       var uid = options.uid;
       $scope.uid = options.uid;
       $scope.name = options.name;
       $scope.description = options.description;
       $scope.createdAt = options.createdAt;
       $scope.priority = options.priority;
       $scope.component = options.component;
       var prilist = [];
       $scope.listresponse = "initial";
            $http.get('https://3tp1mm5v80.execute-api.us-east-1.amazonaws.com/dev/im'
            ).success(function(data, status, headers, config){console.log("success");
            var a = JSON.stringify(data);         
    for (var i = 0, length = data.length; i < length; i++) {
  //  console.log(data[i].priority);
    prilist.push(data[i].priority);
}
            $scope.listresponse = prilist;
          }).error(function(data, status, headers, config){
             $scope.listresponse = data;
          console.log("failed");

    });

      $scope.editincident = function (priority,description,component,name) {
        $http.put('https://3tp1mm5v80.execute-api.us-east-1.amazonaws.com/dev/im/' + uid, {"description": description, "priority": priority,"name": name,"component": component}, {headers: {'Content-Type': 'application/json'}} 
            ).success(function(data, status, headers, config){
              console.log("success");

        }).error(function(data, status, headers, config){console.log(data);

    });

      };

}
})();
