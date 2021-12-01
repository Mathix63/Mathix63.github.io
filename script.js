
const button = document.getElementById("bjour");

var today = new Date();   
button.innerHTML = today.getDate();


button.onclick = function(e){
	window.location.replace("https://Mathix63.github.io/Calendrier/"+today.getDate());
}

