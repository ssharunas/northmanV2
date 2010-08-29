function IOCache()
{
	this.parent = new IOInterface();

	this.ioCore = new IOCore();
	this.cachedThumbs = new Array();
	this.cachedPages = new Array();
	this.owner = this;
	
	function _isCached(groupName, index, count){
		var chached = false;
		if(this.cachedThumbs && this.cachedThumbs[index] && this.cachedThumbs[index][count])
			chached = true;
		return chached;
	}
	
	function _cache(groupName, index, count, items){
		if(!this.cachedThumbs)
			this.cachedThumbs = new Array();
		
		if(!this.cachedThumbs[index])
			this.cachedThumbs[index] = new Array();
		
		this.cachedThumbs[index][count] = items;
	}
	
	this.GetSubGroupNames = function(groupName){
		return this.ioCore.GetSubGroupNames(groupName);
	}
	
	//TODO: 1. load visable thumbs
	//      2. load all thumbs of visable group
	//      3. load images of visable page
	//      4. load images of visable group
	this.GetItems = function (groupName, index, count){
		
		opera.postError("GETTING ITEMS OF " + groupName +"; page: " + index + " / " + count);
		
		var owner = this;
		
		if(!this.cachedThumbs[groupName]){
			this.cachedThumbs[groupName] = 1;
			opera.postError("CACHE LEVEL 1. " + groupName);
			
			owner.CacheImages(groupName, index, count, function(img) { return img.toThumbImage(); }, function()
			{
				opera.postError("CACHE LEVEL 2. " + groupName);
				owner.CacheImages(groupName, 0, owner.ioCore.ItemCountInGroup(groupName), function(img) { return img.toThumbImage(); }, function()
				{
					opera.postError("CACHE LEVEL 3. " + groupName);
					
					owner.CacheImages(groupName, index, count, function(img) { return img.toImage(); }, function()
					{
						opera.postError("CACHE LEVEL 4. " + groupName);
						owner.CacheImages(groupName, 0, owner.ioCore.ItemCountInGroup(groupName), function(img) { return img.toImage(); }, function()
						{
								opera.postError("CACHE COMPLETED " + groupName);
								
						});
					});
				});
			});
			
			
		}
		
		return this.ioCore.GetItems(groupName, index, count);
	}
	
 	this.CacheImages = function (groupName, index, count, createImageFunc, callback)
 	{
		lastGroupName = groupName;
		picLoadCounter=count;
		
		function OnPicLoaded(){
			opera.postError("IMG loaded: " + this.src + " group: " + this._groupName + " lastGroupName: " + lastGroupName);
			if(lastGroupName == this._groupName){
				//opera.postError("IMG is from good group: " + this.src + " / " + picLoadCounter);
				picLoadCounter--;
				if(!picLoadCounter){
					//opera.postError("IMG trigered next cache: " + this.src);
					if(callback)
						callback();
				}
			}
		}
		
		var items = this.ioCore.GetItems(groupName, index, count);
		for(var i = 0; i < items.children.length; i++){
			if(items.children[i].name == PictureItem.prototype.name){
				var img = createImageFunc(items.children[i]);
				img._groupName = groupName;
				img.onload = OnPicLoaded;
			}
		}
	}
	
}

IOCore.prototype = new IOInterface();
