var ContentItem = new Class({
	
	creator: new GuiCreator(),
	
	initialize: function(){
		
	},
	
	CreateGui: function(){
		return this.creator.Create(this);
	}
	
});

//static members
ContentItem.prototype.name = "ContentItem";
