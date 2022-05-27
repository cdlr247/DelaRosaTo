$(document).ready(function() {

function carga() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            document.getElementById("encabezado").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","algo.txt",false);//false sincrono TRUE asincrono
    xhttp.send();
}
let btnAjax = document.getElementById("btnAjax");
btnAjax.addEventListener("click", carga);

});