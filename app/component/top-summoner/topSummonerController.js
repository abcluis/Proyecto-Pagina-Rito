(function(){
    'use strict';
    
    angular.module('main')
    .controller('TopSummonerController',TopSummonerController);
    
    TopSummonerController.$inject = ['challengerList'];
    function TopSummonerController(challengerList){
        var $ctrl = this;
        $ctrl.challengerList = challengerList.entries;
        console.log(challengerList.entries);
    }
    
})();