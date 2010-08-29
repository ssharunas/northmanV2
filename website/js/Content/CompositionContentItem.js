var CompositionContentItem = new Class({
	
	Extends: ContentItem,

	creator: new CompositionContentItemCreator(),
	
	initialize: function(children){
		this.children = children;
	}
	
});

//static members
CompositionContentItem.prototype.name = "CompositionContentItem";
