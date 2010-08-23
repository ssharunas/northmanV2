var IOCore = new Class({
	
	implements: IOInterface,
	
	initialize : function(){
		this.reader = new XmlReader();
	},
	
	ItemCountInGroup: function(groupName){
		return this.reader.IntQuery("count(//group[@name='"+groupName+"']/pic)");
	},
					   
	GetDomain : function(){
		if(!this.domain){
			this.domain = this.reader.StringQuery("string(/root/domain)");
			
			if(this.domain && this.domain[this.domain.length - 1] != '/')
				this.domain += '/';
		}
		
		return this.domain;
	},
	
	GetSubGroupNames : function(groupName){
		if(groupName)
			return this.reader.CreateItemsAtPath("/root/group[@name='"+groupName+"']", ["group"]);
		else
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

