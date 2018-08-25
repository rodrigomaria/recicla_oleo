angular.module('reciclaOleo').factory('tabs', [ function() {
    function show(owner, {
        tabList = false,
        tabCreate = false,
        tabUpdate = false,
        tabDelete = false,
        tabInfo = false
     }) {
        owner.tabList = tabList
        owner.tabCreate = tabCreate
        owner.tabUpdate = tabUpdate
        owner.tabDelete = tabDelete
        owner.tabInfo = tabInfo
        
        if(tabList) selectTab(owner, 'tabList')
        if(tabUpdate) selectTab(owner, 'tabUpdate')
        if(tabDelete) selectTab(owner, 'tabDelete')
        if(tabInfo) selectTab(owner, 'tabInfo')
     }
  
     function selectTab(owner, tabName) {
        owner.selectedTab = tabName 
     }
  
     return { show, selectTab }
  }])