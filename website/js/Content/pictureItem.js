var PictureItem = new Class({
	
	Extends: ContentItem,

	creator: new PictureCreator(),
	
	initialize: function(src, title){
		this.src = src;
		this.title = title;
		this.thumb = null;
	},
	
	toString : function(){
		return this.CreateGui();
	},
	
	toImage : function(){
		if(!this.ioCore)
			this.ioCore = new IOCore();
		
		var img = new Image();
		img.src = this.ioCore.GetDomain() + this.src;
		img.title = this.title;
		
		return img;
	},
	
	toThumbImage : function(){
		if(!this.ioCore)
			this.ioCore = new IOCore();
		
		var img = new Image();
		if(this.thumb)
			img.src = this.ioCore.GetDomain() + this.thumb;
		else
			img.src = this.ioCore.GetDomain() + settings.defaultThumbAddon + this.src;
		img.title = this.title;
		
		return img;
	}
});

//static members
PictureItem.prototype.name = "PictureItem";