(function () {
  angular.module('reciclaOleo').controller("MapCtrl", [
    'consts',
    '$http',
    '$scope',
    MapaController
  ]);

  function MapaController(consts, $http, $scope) {
    const vm = this;
    const url = `${consts.apiUrl}/locals`;

    let markers = [];

    //-- gerar marcadores
    vm.getLocals = function () {
      $http.get(`${url}`).then(function (response) {
        vm.local = {};
        vm.locals = response.data;
        vm.locals.forEach(function (local) {
          markers.push({
            lat: local.latitude,
            lng: local.longitude,
            draggable: false,
            message: local.local
          });
        });
      });
    };

    vm.getLocals();
    console.log(markers);

    //-- inicializa o map, centralizando nesses atributos
    angular.extend($scope, {
      center: {
        lat: -30.103561,
        lng: -51.171818,
        zoom: 11
      },
      markers: markers
    })

    //-- definições padrão
    angular.extend($scope, {
      defaults: {
        scrollWheelZoom: true,
        maxZoom: 18
      }
    })
  }
})()