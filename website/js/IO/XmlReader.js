 function XmlReader()
 {
	function _getXmlDocument()
	{
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
	}
	
	// code for IE
	function _CreateItemsAtPath_IE(path, filter){
		var xml = _getXmlDocument();
		
		if (window.ActiveXObject){
			result = xml.selectNodes(path);
		}
	}
						   
	// code for Mozilla, Firefox, Opera, etc.
	function _CreateItemsAtPath_OtherBrowsers(/*string*/ path, /*string[]*/ filter){
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
			var xml = _getXmlDocument();
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
	}
	
	this.CreateItemsAtPath = function(path, filter){
		if(document.implementation && document.implementation.createDocument)
			return _CreateItemsAtPath_OtherBrowsers(path, filter);
		else
			return _CreateItemsAtPath_IE(path, filter);
	}
	
	this.Query = function(path){
		result = null;
		
		if (document.implementation && document.implementation.createDocument)
		{
			var xml = _getXmlDocument();
			var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
			
			result = nodes;
		}
		
		return result;
	}
	
	this.IntQuery = function(path){
		result = null;

		nodes = this.Query(path);

		if(nodes.resultType == XPathResult.NUMBER_TYPE)
			result = nodes.numberValue;
		
		return result;
	}
						   
	this.StringQuery = function(path){
		result = null;

		nodes = this.Query(path);

		if(nodes.resultType == XPathResult.STRING_TYPE)
			result = nodes.stringValue;
		
		return result;
	}
						   
	this.BoolQuery = function(path){
		result = null;

		nodes = this.Query(path);

		if(nodes.resultType == XPathResult.BOOLEAN_TYPE)
			result = nodes.booleanValue;
		
		return result;
	}
 };
 
