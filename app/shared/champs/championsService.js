(function(){
    'use strict';
    
    angular.module('main')
    .service('ChampionService',ChampionService);
    
    ChampionService.$inject = ['$timeout','$filter','$q'];
    function ChampionService($timeout,$filter,$q){
        var service = this;
        
        service.GetAll = GetAll;
        
        function GetAll(){
            
            var deffered = $q.defer();
            var nombres = FakeNombres;
            $timeout(function(){
                deffered.resolve(nombres);
            },2000);
            return deffered.promise;
        }
    }
    
    var FakeNombres = [
        "Jax",
        "Aatrox",
        "Sejuani",
        "Ashe",
        "Miss Fortune",
        "Tryndamere"
    ]
    
})();