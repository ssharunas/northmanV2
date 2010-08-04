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
		
	}
}


