var GuiCreator = new Class({
	
	initialize: function(){
		
	},
						   
	Create : function(item){
		//TODO: remove
		return "<div name='" + item.name + "'>" + item.toString() + "</div>";
	},
	
	GetDomain : function(){
		if(!this.ioCore)
			this.ioCore = new IOCore();
		
		return this.ioCore.GetDomain();
	}
});
