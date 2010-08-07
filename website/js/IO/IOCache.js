function IOCache(){
	var ioCore = new IOCache();
	
	this.GetSubGroupNames = function(groupName){
		return ioCore.GetSubGroupNames(groupName);
	}
	
	this.GetItems = function (groupName, index, count){		
		kintamasis = ioCore.GetItems(groupName, index, count);
		
		return kintamasis;
		
		//kesavimas
	}
}

//paveldejimo eilutė
IOCache.prototype = new IOInterface();