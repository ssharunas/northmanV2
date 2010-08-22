var CompositionContentItem = new Class({
	
	Extends: ContentItem,

	creator: new CompositionContentItemCreator(),
	
	initialize: function(value, children){
		this.children = children;
	}
	
});

//static members
CompositionContentItem.prototype.name = "CompositionContentItem";