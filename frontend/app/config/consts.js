(function(){
  angular.module('reciclaOleo').constant('consts', {
    appName: 'ReciclaOleo',
    version: '1.0',
    owner: 'Rodrigo Maria',
    year: '2018',
    site: 'https://www.linkedin.com/in/rodrigomaria/',
    apiUrl: 'http://localhost:3003/api'
  }).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
  }])  
})()