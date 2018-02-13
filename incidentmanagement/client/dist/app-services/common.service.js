(function () {
    'use strict';

    angular
        .module('app')
        .factory('CommonService', function () {
            var notify = {};
            function set(description, uid, name, priority, createdAt, component) {

                notify = {
                    description: description,
                    uid: uid,
                    name: name,
                    priority: priority,
                    createdAt: createdAt,
                    component: component
                }
                console.log(notify.uuid);
                
            };
            function get() {
                return notify;
            }
            return {
                set: set,
                get: get
            }
})
})();