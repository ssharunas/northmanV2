mapping = {
	"GroupItem" : { 
		//xmlName : objectName
		"name" : "value"
	},
	
	"PictureItem" : {
		"title" : "title",
		"src" : "src"
	}
}


	
ContentItemFactory = new function(){
	var map = new Array();
	map.containsKey = function(key){ return this[key] != undefined; }
	
	map["group"] = GroupItem;
	map["picture"] = PictureItem;
	map["pic"] = PictureItem;
	
	this.Create = function(itemName){
		
		if(map.containsKey(itemName))
			return new map[itemName];
		
		opera.postError("mapping " + itemName + " not found");
		
		return null;
	}
	
	this.IsPropertyOfObject = function(object, propertyName){
		if(object && propertyName)
			if(mapping[object.name])
				return mapping[object.name][propertyName] != null;
		return null;
	}
	
	this.AddChild = function(object, child){
		if(object && child){
			if(!object.children)
				object.children = new Array();
			
			//opera.postError("adding child " + child.name + " to " + object.name);
			
			if(object.children.push){
				object.children.push(child);
				//opera.postError("sucess ");
			}
		}
	}
		
	this.SetProperty = function(object, propertyTagName, propertyValue){
	    //opera.postError("Setting property " + propertyTagName + " to "  + propertyValue + " of object " + object.name);
		if(object && propertyTagName && propertyValue){
			//opera.postError("\t1 check pass checking " + mapping[object.name][propertyTagName]);
			if(this.IsPropertyOfObject(object, propertyTagName)){
				//opera.postError("\t2 check pass");
				object[mapping[object.name][propertyTagName]] = propertyValue;
				
			}
		}
	}
	
};
