(function(){
    'use strict';
    
    angular.module('main')
    .controller('ChampionDetailController',ChampionDetailController);
    
    ChampionDetailController.$inject = ['championLore']; 
    function ChampionDetailController(championLore){
        var $ctrl = this;
        $ctrl.champion = championLore;
    }
})();