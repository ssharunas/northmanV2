function ContentItem()
{
	this.name = "ContentItem";
	this.creator = new GuiCreator();
	
	this.CreateGui = function(){
		return this.creator.Create(this);
	}
};
