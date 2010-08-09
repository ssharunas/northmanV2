var GroupItem = new Class({
	
	Extends: ContentItem,

	initialize: function(value, children){
		this.name = "GroupItem";
		this.value = value;
		this.children = children;
	}
	
});
