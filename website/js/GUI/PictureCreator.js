var PictureCreator = new Class({
	
	Implements: GuiCreator,
						   
	initialize: function(){
		
		this.Create = function(item){
			var html = "<null />";
			if(item.name == PictureItem.prototype.name)
				html = "<img title=\"" + 
					(item.title ? item.title : "Paveikslėlis") + 
					"\" src=\"" + 
					this.GetDomain() +
					(item.thumb ? item.thumb : settings.defaultThumbAddon + item.src) + "\"" +
					"onclick='$(image).src=\"" + this.GetDomain() + item.src + "\"'" +
					"/>";
			
			return html;
		}
	}
});
 
