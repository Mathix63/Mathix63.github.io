
const button = document.getElementById("bjour");

var today = new Date();   
button.innerHTML = today.getDate();


button.onclick = function(e){
	window.location.replace("https://jordanlv.github.io/Calendrier/"+today.getDate());
}

