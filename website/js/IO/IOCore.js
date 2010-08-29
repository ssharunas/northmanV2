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
		var result = null;
		var items = null;
		
		if(groupName)
			items = this.reader.CreateItemsAtPath("/root/group[@name='"+groupName+"']", ["group"]);
		else
			items = this.reader.CreateItemsAtPath("/root/group", ["group"]);
		
		if(items){
			result = new CompositionContentItem();
			result.children = items;
		}
		
		return result;
	},
	
	GetItems : function (groupName, index, count){
		var result = null;
		
		if(groupName){
			var items = this.reader.CreateItemsAtPath("//group[@name='"+groupName+"']/pic");
			
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

