var id ;
function drag(currentEvent) {
  id = currentEvent.target.id ;
}

function drop(currentEvent) {
		currentEvent.target.appendChild(document.getElementById(id));
		
}

function allowDrop(currentEvent) {
  currentEvent.preventDefault();
}
