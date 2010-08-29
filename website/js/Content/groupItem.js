function GroupItem()
{
	this.parent = new CompositionContentItem();
	this.name = "GroupItem";
	this.creator = new GroupCreator();

	this.value = null;	
};

//static members
GroupItem.prototype = new CompositionContentItem();