function GroupCreator(){
	this.parent = new GuiCreator();
		
	this.Create = function(item){
		var html = "";
		if(item.name == GroupItem.name){
			html = "<div class=\"group\">";
			html += '<div class="groupName">' + item.value + '</div>';
			
			html += item.parent.CreateGui();
// 				if(item.children != null){
// 					for(var i = 0; i < item.children.length; i++){
// 						html += item.children[i].CreateGui();
// 					}
// 				}
			
			html += "</div>";
		}
		
		return html;
	}
	
};

GroupCreator.prototype = new GuiCreator();
