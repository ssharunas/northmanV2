function PictureCreator(){

	this.parent = new GuiCreator();
	
	this.Create = function(item){
		var html = "<null />";
		if(item.name == PictureItem.name)
			html = "<div class=\"thumb\"><img title=\"" + 
				(item.title ? item.title : "Paveikslėlis") + 
				"\" src=\"" + 
				this.GetDomain() +
				(item.thumb ? item.thumb : settings.defaultThumbAddon + item.src) + "\"" +
				"onclick=\"OnPicureClicked('" + this.GetDomain() + item.src + "')\"" +
				"/></div>";
		
		return html;
	}
	
};

PictureCreator.prototype = new GuiCreator();
