 function CompositionContentItemCreator(){
	this.name = "CompositionContentItemCreator";
	this.parent = new GuiCreator();
	
	this.Create = function(item){
		var html = "";
		if(item.name == CompositionContentItem.name){
			if(item.children != null){
				for(var i = 0; i < item.children.length; i++){
					html += item.children[i].CreateGui();
				}
			}
		}
		
		return html;
	}
	
};
 
CompositionContentItemCreator.prototype = new GuiCreator();