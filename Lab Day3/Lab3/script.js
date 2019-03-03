function getNumbers(){
	
	var number1 = prompt("Enter First Number","Enter Here");
	while(Number.isNaN(number1))	
	{
		alert("Please Enter a number :");
		number1 = parseInt(prompt("Enter First Number","Enter Here"));
	}

	var number2 = parseInt(prompt("Enter Second Number","Enter Here"));	
	while(Number.isNaN(number2))	
	{
		alert("Please Enter a number :");
		number2 = parseInt(prompt("Enter Second Number","Enter Here"));
	}

	var number3 = parseInt(prompt("Enter Third Number","Enter Here"));	
	while(Number.isNaN(number3))	
	{
		alert("Please Enter a number :");
		number3 = parseInt(prompt("Enter Third Number","Enter Here"));
	}

	var max = Math.max(number1,number2,number3);
	var min = Math.min(number1,number2,number3);
	
	var note = "Click Refresh (or Reload) to run the script again";
	var text="First Number:"+number1+"<br>"+"Second Number:"+number2+"<br>"+
			 "Third Number:"+number3+"<br>"+"Maximum is:"+max+"<br>"
			 +"Minimum is:"+min+"<br>"+note;
			 
	document.write(text);
		 
	
}
