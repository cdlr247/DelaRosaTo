$(document).ready(function() {

    $('#btnConsultar').click(function() {
        let nc=prompt("Ingrese un número de control");

        $.post('conectar.php',{numc:nc},function(data){
          refrescar(data);
          },'json');
    });

    function refrescar(objeto) {
        console.log(objeto);
        $('#NControl').val(objeto.NumControl);
        $('#Carrera').val(objeto.Carrera);
        $('#Creditos').val(objeto.Creditos);
        $('#Semestre').val(objeto.Semestre);
        $('#Estasdo').val(objeto.Estado);
        $('#Nombre').val(objeto.Nombre);
        $('#ApellidoP').val(objeto.ApellidoP);
        $('#ApellidoM').val(objeto.ApellidoM);
        $('#Correo').val(objeto.CorreoE);
        $('#Telefono').val(objeto.Telefono);
        $('#Direccion').val(objeto.Direccion);
  }
});