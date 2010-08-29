var GroupItem = new Class({
	
	Extends: CompositionContentItem,

	creator: new GroupCreator(),
	
	initialize: function(value, children){
		this.value = value;
		this.parent(children);
	}
	
});

//static members
GroupItem.prototype.name = "GroupItem";