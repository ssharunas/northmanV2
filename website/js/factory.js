Factory = new Object();

Factory.CreateIO = function{
	return new IOCore();
}

Factory.CreateGUI = function{
	return new UIGui();
}
