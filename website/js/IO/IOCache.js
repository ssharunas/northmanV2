var IOCache = new Class({
	
	implements : IOInterface,
	
	ioCore : new IOCore(),
	
	initialize: function(){
		
	},
	
	GetSubGroupNames : function(groupName){
		return ioCore.GetSubGroupNames(groupName);
	},
	
	GetItems : function (groupName, index, count){
		return ioCore.GetItems(groupName, index, count);
	}
})
