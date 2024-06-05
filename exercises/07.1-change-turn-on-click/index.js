let currentUser = "who" ;

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn?";
}

// Modify this function
window.turnChanger = function turnChanger() {
	let names = ["Mario", "Juan", "Josh"]
	const randomName = Math.floor(Math.random () * names.length)
			
	console.log(randomName, names[randomName])
	
	document.getElementById("screen").innerHTML = "It's " + names[randomName] + "'s turn";
}
