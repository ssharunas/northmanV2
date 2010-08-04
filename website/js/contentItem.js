function ContentItem(picURL){
	this.pictureURL = picURL;
	this.pdfURL = "";
	this.note = ""
	this.title = "";
	
	this.imageTag = function(){
		return '<img src="' + pictureURL + '" title="' + title + '" />';
	}
}
