function displayBox(){
var choice = prompt("Select a list style : \n 1(Bullet)   2(numbered)   3(lettered)","Enter Here");	
	if(choice != null)
	{
		switch(choice){
		
		case "1":
		bulletListDisplay();
		break;
		
		case "2":
		numberedListDisplay();
		break;
		
		case "3":
		letteredListDisplay();
		break;
		
		default:
		alert("Please Enter 1(Bullet)   2(numbered)   3(lettered) :");
		displayBox();
		}
	}
}

function bulletListDisplay()
{
	var text = "<h1>Bullet List</h1> <br> <ul><li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul> <p>Click Refresh (or Reload) to run the script again</p>";
	document.write(text);
}


function numberedListDisplay()
{
	var text = "<h1>Ordered List : Number</h1> <br> <ol><li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ol> <p>Click Refresh (or Reload) to run the script again</p>";
	document.write(text);
}


function letteredListDisplay()
{
	var text = "<h1>Ordered List : Lettered</h1> <br> <ol type='A'><li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ol> <p>Click Refresh (or Reload) to run the script again</p>";
	document.write(text);
}
