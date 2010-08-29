settings = {
	xmlDocURL : "file_list.xml",
	defaultThumbAddon : "thumb_",
	io : function(){
		return new IOCache();
	}
}

// settings.factory = function(){
// 	this.io = new IOCache;
// 	return this;
// }

mapping = {
	"GroupItem" : { 
		//xmlName : objectName
		"name" : "value"
	},
	
	"PictureItem" : {
		"title" : "title",
		"src" : "src",
		"thumb" : "thumb"
	}
}
