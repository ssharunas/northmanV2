 
var PictureItem = new Class({
	
	Extends: ContentItem,

	creator: new PictureCreator(),
	
	initialize: function(src, title){
		this.src = src;
		this.title = title;
	},
	
	toImage : function(){
		var img = new Image();
		img.src = this.src;
		img.title = this.title;
		
		return img;
	}
});

//static members
PictureItem.prototype.name = "PictureItem";