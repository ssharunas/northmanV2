var ContentItem = new Class({
	
	creator: new GuiCreator(),
	
	initialize: function(){
		this.name = "ContentItem";
	},
	
	CreateGui: function(){
		return this.creator.Create(this);
	}
	
});

