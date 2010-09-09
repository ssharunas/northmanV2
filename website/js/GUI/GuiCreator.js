function GuiCreator(){
	
	this.Create = function(item){
		//TODO: remove
		return "<div name='" + item.name + "'>" + item.toString() + "</div>";
	}
	
	this.GetDomain = function(){
		if(!this.ioCore)
			this.ioCore = new IOCore();
		
		return this.ioCore.GetDomain();
	}
	
	this.ItemCountInGroup = function(groupName){
		if(!this.ioCore)
			this.ioCore = new IOCore();
		
		return this.ioCore.ItemCountInGroup(groupName);
	}
}
