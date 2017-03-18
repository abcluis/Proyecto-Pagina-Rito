(function(){
    'use strict';
    
    angular.module('main')
    .controller('HomeController',HomeController);
    
    HomeController.$inject = ['names']
    function HomeController(names){
        
        var $ctrl = this;
        $ctrl.names = names;
        
    }
    
})();