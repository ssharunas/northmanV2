function GroupItem()
{
	this.parent = new CompositionContentItem();
	this.name = "GroupItem";
	this.creator = new GroupCreator();

	this.value = null;	
};

GroupItem.prototype = new CompositionContentItem();
