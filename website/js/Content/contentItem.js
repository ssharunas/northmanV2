oo = 0;

function ContentItem()
{
	this.name = "ContentItem";
	this.creator = new GuiCreator();
	
	this.CreateGui = function(){
		p = ""
		for(i = 0; i < oo ; i++)
			p += "  ";
		

		opera.postError("*" + p + this.name +" %%%%% " + this.value);
		oo++;
		l = this.creator.Create(this);
		oo--;
		return l;
		
	}
};
