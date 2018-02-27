var _session = localStorage.getItem("session");
if(_session === ""){
	window.location = "login.html";
}