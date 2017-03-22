(function(){
    'use strict';
    
    angular.module('main')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
        
        $urlRouterProvider.otherwise('/');
        
        
        $stateProvider
        .state('navbar',{
            absract:true,
            templateUrl:'app/shared/navbar/navbar.html'
        })
        .state('navbar.home',{
           url:'/',
            views:{
                "":{
                    templateUrl:'app/component/home/home.html',
                    controller:'HomeController as $ctrl'
                }
            },
            resolve:{
                champions:['ChampionService',function(ChampionService){
                    return ChampionService.GetAll();
                }]
            }
        })
        .state('navbar.champion-detail',{
            url:'/champ/{id}',
            templateUrl:'app/component/champion-detail/champion-detail.html',
            controller:'ChampionDetailController as $ctrl',
            resolve:{
                championLore:['ChampionService','$stateParams',function(ChampionService,$stateParams){
                    return ChampionService.GetChampionLoreById($stateParams.id);
                }]
            }
        });
        
        
        
    }
    
    
})();