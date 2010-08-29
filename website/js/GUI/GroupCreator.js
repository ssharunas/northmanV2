function GroupCreator(){
	this.parent = new GuiCreator();

	this.Create = function(item){
		var html = "";
		if(item.name == GroupItem.name){
			html = "<div class=\"group\" style='margin-left:10px'>";
			html += '<a class="groupName" href="#" onclick="ShowPictures(\'' + item.value + '\', 0)">' + item.value + '</a>';
			
			html += item.parent.creator.Create(item);
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
