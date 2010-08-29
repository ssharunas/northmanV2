function GroupItem()
{
	this.parent = new CompositionContentItem();
	this.name = "GroupItem";
	this.creator = new GroupCreator();

	this.value = null;
	this.children = parent.children;
};

GroupItem.prototype = new CompositionContentItem();
