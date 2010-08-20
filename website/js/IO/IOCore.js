var IOCore = new Class({
	
	implements: IOInterface,
	
	initialize : function(){
		this.reader = new XmlReader();
	},
					   
	GetSubGroupNames : function(groupName){
		return this.reader.CreateItemsAtPath("/root/group", ["group"]);
	},
	
	GetItems : function (groupName, index, count){
		var items = new Array();
		return this.reader.CreateItemsAtPath("/root");
	}
});

