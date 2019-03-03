function findFactorial(){
	var number = parseInt(prompt("Enter the Number :",""));
	
	while(Number.isNaN(number))	
	{
		alert("Please Enter a number :");
		number = parseInt(prompt("Enter the Number :",""));
	}
	
	var fact = factoiral(number);
	alert(fact);

}

function drawTable(){
	
	var text = "<table border=1>";
	document.write(text);

	for(counter=0;counter<=10;counter++)
	{
		text = "<tr> <td> "+counter+" </td> <td>"+factoiral(counter)+"</td> </tr>";
		document.write(text);
	
	}
	
	text = "</table>"; 
	document.write(text);
		
	
}

function factoiral(n){
	
	if((n==0) || (n==1)){
		return 1;
	}
	else{
		return n * factoiral(n-1);
	}
	
}