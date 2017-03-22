(function(){
    'use strict';
    
    angular.module('main')
    .service('SummonerService',SummonerService);
    
    SummonerService.$inject = ['$http']
    function SummonerService($http){
        var service = this;
        
        service.GetChallengerList = GetChallengerList;
        
        function GetChallengerList(){
            return $http.get('https://global.api.pvp.net/api/lol/lan/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=RGAPI-737702a9-d61e-4d5f-8cc4-daed40c6166b')
                .then(function(data){
                    return data.data;   
                });
        }
    }
    
})();