function search(){
	
	var str    = document.getElementById("str").value;
	var substr = document.getElementById("searchString").value;
	var searchIndx = parseInt(document.getElementById("searchIndex").value);
	
	if(searchIndx == null)
		searchIndx=0;
	
	var firstOcc , lastOcc , firstOccIndx , lastOccIndx;
	
	firstOcc = str.indexOf(substr);
	lastOcc  = str.lastIndexOf(substr);
	
	firstOccIndx = str.indexOf(substr , searchIndx);
	lastOccIndx  = str.lastIndexOf(substr, searchIndx);
	
	var firstOccText = document.getElementById("firstOccIndx");
	var lastOccText  = document.getElementById("lastOccIndx");
	var firstOccIndxText = document.getElementById("firstOccSpecIndx");
	var lastOccIndxText  = document.getElementById("lastOccSpecIndx");
	
	firstOccText.value = firstOcc;
	lastOccText.value  = lastOcc;
	firstOccIndxText.value = firstOccIndx;
	lastOccIndxText.value  = lastOccIndx;
	
	
}

