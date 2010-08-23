AsyncChain = function(){
	var items = new Array();
	
	this.Add = function(fun, params){
		items.push([fun, params]);
	}
	
	this.RunAsync = function(){
		setTimeout( function(){
			for(i = 0; i < items.length; i++){
				items[i][0](items[i][1]);
			}
		}, 0);
	}
}

var IOCache = new Class({
	
	implements : IOInterface,
	
	_isCached: function(groupName, index, count){
		var chached = false;
		if(this.cachedThumbs && this.cachedThumbs[index] && this.cachedThumbs[index][count])
			chached = true;
		return chached;
	},
	
	_cache : function(groupName, index, count, items){
		if(!this.cachedThumbs)
			this.cachedThumbs = new Array();
		
		if(!this.cachedThumbs[index])
			this.cachedThumbs[index] = new Array();
		
		this.cachedThumbs[index][count] = items;
	},
	
	initialize: function(){
		this.name = "Nam Nam";
		this.ioCore = new IOCore();
		this.cachedThumbs = new Array();
		this.cachedPages = new Array();
		this.owner = this;
	},
	
	GetSubGroupNames : function(groupName){
		return this.ioCore.GetSubGroupNames(groupName);
	},
	
	//TODO: 1. load visable thumbs
	//      2. load all thumbs of visable group
	//      3. load images of visable page
	//      4. load images of visable group
	GetItems : function (groupName, index, count){
		
		if(this._isCached(groupName, index, count))
			return this.cachedThumbs[index][count];
		
		opera.postError("GETTING ITEMS OF " + groupName +"; page: " + index + " / " + count);
		
		var owner = this;
		lastGroupName = groupName;
		picLoadCounter=count;
		
		function OnPicLoaded(){
			//opera.postError("IMG loaded: " + this.src + " group: " + this._groupName + " lastGroupName: " + lastGroupName);
			if(lastGroupName == this._groupName){
				//opera.postError("IMG is from good group: " + this.src + " / " + picLoadCounter);
				picLoadCounter--;
				if(!picLoadCounter){
					//opera.postError("IMG trigered next cache: " + this.src);
					owner.GetItems(groupName, index + 1, count);
				}
			}
		}
		
		if(settings.cacheThumbs && !this.cachedThumbs[groupName]){
			//opera.postError(this.name + " CACHED: " + this.cachedThumbs[groupName]);
			this.cachedThumbs[groupName] = 1;
			setTimeout("IOCache.CacheThumbs('"+groupName+"')",0);
		}
		
		var items = this.ioCore.GetItems(groupName, index, count);
		this._cache(groupName, index, count, items);
		
		if(items && items.children){
			for(var i = 0; i < items.children.length; i++){
				if(items.children[i].name == PictureItem.prototype.name){
					var img = items.children[i].toImage();
					img._nextIndex = i + (index + 1 ) * count ;
					img._groupName = groupName;
					img.onload = OnPicLoaded;
				}
			}
		}
		
		return items;
	}
})

IOCache.owner = function(){
	if(!this._owner)
		this._owner = new IOCache();
	return this._owner;
}

IOCache.CacheThumbs = function (groupName){
	owner = IOCache.owner();
	//opera.postError("Caching thumbs for group "+groupName);
	var items = owner.ioCore.GetItems(groupName, 0, owner.ioCore.ItemCountInGroup(groupName));
	for(var i = 0; i < items.children.length; i++){
		if(items.children[i].name == PictureItem.prototype.name){
			var img = items.children[i].toThumbImage();
		}
	}
}