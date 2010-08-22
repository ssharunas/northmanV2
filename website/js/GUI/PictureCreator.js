var PictureCreator = new Class({
	
	Implements: GuiCreator,
						   
	initialize: function(){
		
		this.Create = function(item){
			var html = "<null />";
			if(item.name == PictureItem.prototype.name)
				html = "<img title=\"" + 
					(item.title ? item.title : "Paveikslėlis") + 
					"\" src=\"" + 
					item.src + 
					"\" />";
			
			return html;
		}
	}
});
 
