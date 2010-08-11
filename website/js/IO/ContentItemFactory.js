ContentItemFactory = new function(){
	var map = new Array();
	map.containsKey = function(key){ return this[key] != undefined; }
	
	map["group"] = GroupItem;
	map["picture"] = PictureItem;
	
	this.Create = function(itemName){
		if(map.containsKey(itemName)
			return new map["picture"];
		return null;
	}
};