 pic = new Array();
function loadXML(){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","file_list.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	xml = xmlDoc.documentElement;
	document.getElementById('iki').innerHTML = xml.getElementsByTagName("pic").length
	for(i = 0; i < xml.getElementsByTagName("pic").length; i++){
		if(xml.getElementsByTagName("pic")[i].childNodes[0]){
			//document.write(xml.getElementsByTagName("pic")[i].childNodes[0].nodeValue+'<br/>');
			
			pic[i]= new Image();
			pic[i].src = "http://www.northman.lt/files/"+xml.getElementsByTagName("pic")[i].childNodes[0].nodeValue;
			//alert(i+") "+img[i])
		}else
			break;
	}
	//document.getElementById('picname').innerHTML = 'a1.png';
	//document.images['img'].src='a1.png';
	document.images['img'].src = pic[0].src;
	//alert('aaa')
	//
	//document.write("<img src="+aaa[1]+">")
	//document.getElementById('image').src = img[1];
}
function chancheImg(tmp){
	//alert(document.getElementById('nuo').innerText)
	
	num = document.getElementById('nuo').innerHTML;
	//alert(num)
	if(tmp == 'left'){
		newnum = Number(num)-1;
		
		if(newnum<=0){
			newnum = document.getElementById('iki').innerHTML;
			document.getElementById('nuo').innerHTML = newnum;
		}else
			document.getElementById('nuo').innerHTML = newnum;
		
	}
	if(tmp == 'right'){
		newnum = Number(num)+1;
		if(newnum > document.getElementById('iki').innerHTML){
			newnum = 1;
			document.getElementById('nuo').innerHTML = newnum;
		}else
			document.getElementById('nuo').innerHTML = newnum;
	}
	//document.getElementById('picname').innerHTML = 'a'+newnum+'.png';
	
	document.images['img'].src = pic[Number(newnum)-1].src;
	
	//alert('a'+newnum+'.png')
}


