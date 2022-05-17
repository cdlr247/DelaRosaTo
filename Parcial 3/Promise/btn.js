$(document).ready(function() {

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