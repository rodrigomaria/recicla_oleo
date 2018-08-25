(function(){
  angular.module('reciclaOleo').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('local', {
        url: "/locals?page",
        templateUrl: "local/tabs.html"
      }) .state('map',{
        url: "/map",
        templateUrl: "map/map.html"
      }) 
      $urlRouterProvider.otherwise('/locals')
  }])  
})()