
const button = document.getElementById("bvalid");
const text = document.getElementById("rep");

button.onclick = function(e){
	if(text.value==="N" || text.value==="n") {
		alert("Vas voir a ton étage de frigo");
	} else {
		alert("NON :)");
	}
}

