function IOCore(){
	
	this.GetSubGroupNames = function(groupName){
		var groups = new Array();
		
		for(i = 0; i < 10; i++)
			groups[i] = "Grupe " + i;
		
		groups[10] = new Array();
		groups[10][0] = "Sub Grupe";
		
		return groups;
	}
	
	this.GetItems = function (groupName, index, count){
		var items = new Array();
		
		for(i = 0; i < 10; i++)
			items[i] =  new ContentItem("picture" + i + ".jpg");
		
		return items;
	}
}

IOCore.inherits(IOInterface);