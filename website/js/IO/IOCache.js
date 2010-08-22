var IOCache = new Class({
	
	implements : IOInterface,
	
	initialize: function(){
		this.ioCore = new IOCore();
		
	},
	
	GetSubGroupNames : function(groupName){
		return ioCore.GetSubGroupNames(groupName);
	},
	
	GetItems : function (groupName, index, count){
		
		var owner = this;
		
		function OnCacheNext(){
			sender = this;
			
			var cached = owner.ioCore.GetItems(sender._groupName, sender._nextIndex, 1);
			
			if(cached != null && cached.children.length){
				var img = cached.children[0].toImage();
				//img.onload = function(){alert(this.title);};
				opera.postError("cached [" + sender._nextIndex +"] " + img.src  /*cached.children[0].CreateGui()*/);
			}
		}
		
		var items = this.ioCore.GetItems(groupName, index, count);
		
		if(items && items.children){
			for(var i = 0; i < items.children.length; i++){
				if(items.children[i].name == PictureItem.prototype.name){
					var img = items.children[i].toImage();
					img._nextIndex = i + (index + 1 ) * count ;
					img._groupName = groupName;
					img.onload = OnCacheNext;
				}
			}
		}
		
		return items;
	}
})
