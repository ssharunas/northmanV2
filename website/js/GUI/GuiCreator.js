var GuiCreator = new Class({
	initialize: function(){
		
		this.Create = function(item){
			//TODO: remove
			return "<div name='" + item.name + "'>" + item.toString() + "</div>";
		}
	}
});
