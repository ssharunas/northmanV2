function CompositionContentItem()
{
	this.parent = new ContentItem();
	this.name = "CompositionContentItem";
	this.creator = new CompositionContentItemCreator(),
	
	this.children = null;
};

CompositionContentItem.prototype = new ContentItem();
