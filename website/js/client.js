function Client(){
	var currentGroup = "";
	var currentPage = 0;
	var picsPerPage = 10; //number of pictures in one page
	
	var io = Factory.CreateIO();
	var gui = Factory.CreateGUI();
		
	this.LoadMenu = function(){
		groups = io.GetSubGroupNames(null);
		gui.CreateMenu(groups);
	}
	
	this.LoadPage = new function(groupName, page){
		items = io.GetItems(groupName, page, picsPerPage);
		gui.CreatePicturesPage(items);
		
		currentPage = 0;
		currentGroup = groupName;
	}
	
	this.NextPage = new function(){
		currentPage ++;
		LoadPage(currentGroup, currentPage);
	}
	
	
	this.PrevPage = new function(){
		if(currentPage > 0){
			currentPage--;
			LoadPage(currentGroup, currentPage);
		}
	}
	
	this.LoadAll = new function(){
		LoadMenu();
		groups = io.GetSubGroupNames(null);
		LoadPage(groups[0], 0);
	}
}


