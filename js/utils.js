function createRequest() {
	var killerRequest;
	
	try {
		killerRequest = new XMLHttpRequest();
	  } catch(e) {
		try {
		killerRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
		 	killerRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
			killerRequest = null;
		}
	}
}
	return killerRequest;
}
