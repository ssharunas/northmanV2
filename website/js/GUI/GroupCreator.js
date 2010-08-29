var GroupCreator = new Class({
	
	Implements: GuiCreator,
						   
	initialize: function(){
		
		this.Create = function(item){
			var html = "";
			if(item.name == GroupItem.prototype.name){
				html = "<div class=\"group\">";
				html += '<div class="groupName">' + item.value + '</div>';
				
				opera.postError("" + item + " / " + item.name);
				
				
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
	}
});
 
 
