function CompositionContentItem()
{
	this.parent = new ContentItem();
	this.name = "CompositionContentItem";
	this.creator = new CompositionContentItemCreator(),
	
	this.children = new Array();
};

CompositionContentItem.prototype = new ContentItem();
