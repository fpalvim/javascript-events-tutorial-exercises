
// Adding the function to the window makes it globally available
document.querySelector("#calculate").addEventListener("click", function (){

	// Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	// Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	// Your code here
	
	document.getElementById("resultNumber").value = parseInt(stringA) + parseInt(stringB);

})