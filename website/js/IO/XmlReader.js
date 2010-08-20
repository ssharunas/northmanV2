 var XmlReader = new Class({
	
	_getXmlDocument: function()	{
		var doc = null;
		if(!this._cachedDoc){
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			}else{// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			
			if(xmlhttp){
				xmlhttp.open("GET", settings.xmlDocURL, false);
				xmlhttp.send();
				
				doc = xmlhttp.responseXML;
				this._cachedDoc = doc;
			}
		}else{
			doc = this._cachedDoc;
		}

		return doc;
	},
	
	// code for IE
	_CreateItemsAtPath_IE: function(path, filter){
		var xml = this._getXmlDocument();
		
		if (window.ActiveXObject){
			result = xml.selectNodes(path);
		}
	},
						   
	// code for Mozilla, Firefox, Opera, etc.
	_CreateItemsAtPath_OtherBrowsers : function(/*string*/ path, /*string[]*/ filter){
		
		var result = new Array();
		
		function IsInFilter(item, filter)
		{
			is = false;
			
			if(!filter)
				is = true;
			else
			{
				for(i = 0; i < filter.length; i++){
					if(filter[i] == item){
						is = true;
						break;
					}
				}
			}
			
			return is;
		}
		
		function Filtered(/*string[]*/ filter, xmlNode)
		{
			var created = null;
			//opera.postError("Entered filter: " + xmlNode.nodeName);
			
			if(xmlNode &&
				xmlNode.nodeType == window.Node.ELEMENT_NODE && 
				IsInFilter(xmlNode.tagName, filter))
			{
				//opera.postError("\telement is ok, creating.." + xmlNode.tagName);
				
				created = ContentItemFactory.Create(xmlNode.tagName);
				
				if(created){
				//	opera.postError("\tcreated:" + ( created != null) + " / " + created.name);
					
					for(i = 0; i < xmlNode.attributes.length; i++){
						ContentItemFactory.SetProperty(created, xmlNode.attributes[i].name, xmlNode.attributes[i].text);
					}
				
					var child = xmlNode.firstChild;
					while( child )
					{
							if(ContentItemFactory.IsPropertyOfObject(created, child.nodeName)){
								ContentItemFactory.SetProperty(created, child.nodeName, child.textContent);
							}else{
								ContentItemFactory.AddChild(created, Filtered(filter, child));
							}
						child = child.nextSibling;
					}
				}
			}
			
			return created;
		}
		
		if (document.implementation && document.implementation.createDocument)
		{
			var xml = this._getXmlDocument();
			var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
			
			var item = nodes.iterateNext();
			
			while(item != null){
				
				resultItem = Filtered(filter, item);
				if(resultItem)
					result.push(resultItem);
				
				item = nodes.iterateNext();
			}
			
		}
		
		return result;
	},
	
	initialize: function(){
		 //setTimeout("XmlReader.prototype._getXmlDocument()", 0);
	},
	
	CreateItemsAtPath : function(path){
		this.CreateItemsAtPath(path, null);
	},
						   
	CreateItemsAtPath : function(path, filter){
		if(document.implementation && document.implementation.createDocument)
			return this._CreateItemsAtPath_OtherBrowsers(path, filter);
		else
			return this._CreateItemsAtPath_IE(path, filter);
		
	}
	
 });
 
