function PictureItem(src, title)
{
	this.parent = new ContentItem();
	this.name =  "PictureItem";
	this.creator = new PictureCreator();
	
	this.src = src;
	this.title = title;
	this.thumb = null;
	
	this.toString = function(){
		return this.CreateGui();
	}
	
	this.toImage = function(){
		if(!this.ioCore)
			this.ioCore = new IOCore();
		
		var img = new Image();
		img.src = this.ioCore.GetDomain() + this.src;
		img.title = this.title;
		
		return img;
	}
	
	this.toThumbImage = function(){
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
};

//static members
PictureItem.prototype = new ContentItem();