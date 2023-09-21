/* Projeto utilizando Google Maps Embed API */

// importação da API_KEY do arquivo config.js
import { API_KEY } from "./config.js";

let LocationMaster;
let latNow;
let longNow;

LocationMaster = new Object();
LocationMaster.lookUpPosition = function(position) 
{
    latNow = position.coords.latitude;
    longNow = position.coords.longitude;
    
    /*
    document.getElementById("mapHolder").src = "http://maps.google.com/maps?h1=en&ie=UTF8&11="
    +this.latNow+","+this.longNow+"&spn=0.054166,0.110378&z=13&output=embed&zoom=11"; 
    */

    document.getElementById("mapHolder").src = "https://www.google.com/maps/embed/v1/view?key="+API_KEY+"&center="+latNow+","+longNow+"&zoom=18";
    
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(LocationMaster.lookUpPosition);
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    alert("Geolocalização não encontrada!");
}

// função que imprime a localização atual
function showPosition(position) {
    document.getElementById("demo").innerHTML = "Suas coordenadas atuais ==> Latitude: " + position.coords.latitude + 
    " | Longitude: " + position.coords.longitude;
}
