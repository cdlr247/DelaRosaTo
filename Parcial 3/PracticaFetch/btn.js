$(document).ready(function() {

    document.getElementById('btnFetch').addEventListener("click", function(){
        let promise = fetch('cargar.php');
    
        promise.then( respuesta => respuesta.json() )
        .then(datos => console.log(datos) );
    
        fetch('cargar.php')
            .then( respuesta => respuesta.json())
                .then(datos => console.log(datos));
    });

    $('#btnjson').click(function() {
        $.post('cargar.php',{},function(data){

              console.log(data);
              $('#NControl').val(data.NControl);
              $('#Carrera').val(data.Carrera);
              $('#Creditos').val(data.Creditos);
              $('#Semestre').val(data.Semestre);
              $('#Tipo').val(data.Tipo);
              $('#Nombre').val(data.Nombre);
              $('#ApellidoP').val(data.ApellidoP);
              $('#ApellidoM').val(data.ApellidoM);
              $('#Correo').val(data.Correo);
              $('#Telefono').val(data.Telefono);
              $('#Direccion').val(data.Direccion);

          },'json');
    });
});


