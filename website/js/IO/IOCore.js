var IOCore = new Class({
	
	implements: IOInterface,
	
	initialize : function(){
		this.reader = new XmlReader();
	},
					   
	GetSubGroupNames : function(groupName){
		return this.reader.CreateItemsAtPath("/root/group", ["group"]);
	},
	
	GetItems : function (groupName, index, count){
		var result = null;
		
		if(groupName){
			var items = new Array();
			items = this.reader.CreateItemsAtPath("//group[@name='"+groupName+"']/pic");
			
			if(items){
				var imgFrom = index * count;
				items = items.slice(imgFrom, imgFrom + count);
				
				result = new CompositionContentItem();
				result.children = items;
			}
		}
		
		return result;
	}
});

