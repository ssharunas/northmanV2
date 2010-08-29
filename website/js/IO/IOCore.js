function IOCore()
{
	var reader = new XmlReader();
	this.patent = new IOInterface();
	
	this.ItemCountInGroup = function(groupName){
		return reader.IntQuery("count(//group[@name='"+groupName+"']/pic)");
	}
	   
	this.GetDomain = function(){
		if(!this.domain){
			this.domain = reader.StringQuery("string(/root/domain)");
			
			if(this.domain && this.domain[this.domain.length - 1] != '/')
				this.domain += '/';
		}
		
		return this.domain;
	}

	this.GetSubGroupNames = function(groupName){
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
	}
	
	this.GetItems = function (groupName, index, count){
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
};

IOCore.prototype = new IOInterface();
