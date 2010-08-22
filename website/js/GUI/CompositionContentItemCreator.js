 
var CompositionContentItemCreator = new Class({
	
	Implements: GuiCreator,
						   
	initialize: function(){
		
		this.Create = function(item){
			var html = "";
			if(item.name == CompositionContentItem.prototype.name){
				if(item.children != null){
					for(var i = 0; i < item.children.length; i++){
						html += item.children[i].CreateGui();
					}
				}
			}
			
			return html;
		}
	}
});
 
 
