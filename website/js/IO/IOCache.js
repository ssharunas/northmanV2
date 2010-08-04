function IOCache(){
	var ioCore = new IOCache();
	
	this.GetSubGroupNames = function(groupName){
		return ioCore.GetSubGroupNames(groupName);
	}
	
	this.GetItems = function (groupName, index, count){		
		return ioCore.GetItems(groupName, index, count);
	}
}

IOCore.inherits(IOInterface); 
