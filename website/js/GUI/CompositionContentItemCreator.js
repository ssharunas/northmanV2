 function CompositionContentItemCreator(){
	this.parent = new GuiCreator();
	
	this.Create = function(item){
		var html = "";
		//if(item.name == CompositionContentItem.name){
			if(item.children != null){
				for(var i = 0; i < item.children.length; i++){
					opera.postError("Creating child of " + item.children[i].name + " ## " + item.children[i].value);
					html += item.children[i].CreateGui();
				}
			}else
				opera.postError("NO CHILD of " + item.name + " ## " + item.value);
		//}
		
		return html;
	}
	
};
 
CompositionContentItemCreator.prototype = new GuiCreator();