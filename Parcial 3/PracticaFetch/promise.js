$(document).ready(function() {
$('#btnPromise').click(function() {
    let promesa = new Promise(function(resolve,reject){
        var solicitud = new XMLHttpRequest();
        solicitud.onreadystatechange = function() {
            if(solicitud.readyState == 4 && solicitud.status == 200) {
                resolve(solicitud.responseText);
            }};
            solicitud.open("GET", "encabezado.txt", true);
            solicitud.send();
        });
        promesa.then(function(value) {document.getElementById("encabezado").innerHTML = value;});

    /*new Promise(function(resolve,reject){
        var solicitud = new XMLHttpRequest();
        solicitud.onreadystatechange = function(){
            if(solicitud.readyState == 4 && solicitud.status == 200){
                resolve(solicitud.responseText);
            }};
            solicitud.open("GET", "encabezado.txt", true);
            solicitud.send();
        }).then(value => document.getElementById("encabezado").innerHTML = value);*/
    });
});