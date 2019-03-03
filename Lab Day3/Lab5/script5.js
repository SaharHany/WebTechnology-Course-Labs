function splitSentence(){
	
	var sentence    = document.getElementById("sentence").value;
	var splitter    = document.getElementById("splitter").value;
	
	var strings = sentence.split(splitter);
	var result  = strings.join("\n");
	
	var subSentence = sentence.substring(0,10);
	document.getElementById("splittedSentence").value = result;
	
	document.getElementById("subSentence").value = subSentence;
	
	
}

