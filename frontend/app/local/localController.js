(function(){
  angular.module('reciclaOleo').controller('LocalCtrl', [
    'consts',
    '$http',
    '$location',
    'tabs',
    'msgs',        
    LocalController
  ]);
  
  function LocalController(consts, $http, $location, tabs, msgs) {
    const vm = this;
    const url = `${consts.apiUrl}/locals`;


    //-- refresh na lista
    vm.refresh = function() {
      const page = parseInt($location.search().page) || 1;
      $http.get(`${url}?skip=${(page - 1) * 10}&limit=10`).then(function(response) {
        vm.local = {};
        vm.locals = response.data;

        $http.get(`${url}/count`).then(function(response) {
          vm.pages = Math.ceil(response.data.value / 10);
          tabs.show(vm, {tabList:true, tabCreate:true});
        })
      })
    }

    //-- cria um local
    vm.create = function() {  
      $http.post(url, vm.local).then(function(response) {
        vm.refresh();
        msgs.addSuccess('Inclusão realizada com sucesso!');
      }).catch(function(response){
        msgs.addError(response.data.errors);
      });
    }

    //-- mostra o conteúdo da tab alterar
    vm.showTabUpdate = function(local) {
      vm.local = local;
      tabs.show(vm, {tabUpdate:true});
    }

    //-- mostra o conteúdo da tab deletar
    vm.showTabDelete = function(local) {
      vm.local = local;
      tabs.show(vm, {tabDelete:true});
    }

    //-- mostra o conteúdo da tab informações
    vm.showTabInfo = function(local) {
      vm.local = local;
      tabs.show(vm, {tabInfo:true});
    }

    //-- atualiza um local
    vm.update = function() {
      const updateUrl = `${url}/${vm.local._id}`;
      $http.put(updateUrl, vm.local).then(function(response){
        vm.refresh();
        msgs.addSuccess('Alteração realizada com sucesso!')
      }).catch(function(response){
        msgs.addError(response.data.errors);
      });
    }

    //-- deleta um local
    vm.delete = function() {
      const deleteUrl = `${url}/${vm.local._id}`;
      $http.delete(deleteUrl, vm.local).then(function(response){
        vm.refresh();
        msgs.addSuccess('Exclusão realizada com sucesso!')
      }).catch(function(response){
        msgs.addError(response.data.errors);
      });
    }

    //-- retorna para a lista, quando clicar no botão cancelar
    vm.cancel = function() {
      tabs.show(vm, {tabList: true, tabCreate: true})
      tabs.selectTab(vm, 'tabList')
      vm.local = {}
    }

    //-- sinaliza qual tab está selecionada
    vm.selectTab = function(selectedTab) {
      tabs.selectTab(vm, selectedTab)
      vm.addNewIdLocal();    
    }

    //-- adiciona o próximo id quando selecionada a opção de incluir
    vm.addNewIdLocal = function() {
      $http.get(`${url}/count`).then(function(response) {
        vm.local.idLocal = response.data.value + 1;
      })
    }
    
    //-- sempre executa o método de refresh da lista, para manter ela sempre atualizada
    vm.refresh();
  }    
})()