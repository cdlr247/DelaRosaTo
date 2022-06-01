$(document).ready(function() {

    $('#btnConsultar').click(function() {
      swal("Ingrese el numero de control",{
        content:"input",
      })
      .then((nc)=>{
        $.post('conectar.php',{numc:nc},function(data){
          refrescar(data);
          },'json');
      })
    });

    $('#btnEliminar').click(function() {
      swal("Ingrese el numero de control",{
        content:"input",
      })
      .then((nc)=>{
        $.post('eliminar.php',{numc:nc},function(data){
          swal("Eliminacion completada", "Se ha dado de baja con exito", "success");
          refrescar(data);
          },'json');
      })
    });

    $('#btnRegistrar').click(function(){
      let NControl = document.getElementById('NControl').value;
      let Carrera = document.getElementById('Carrera').value;
      let Creditos = document.getElementById('Creditos').value;
      let Semestre = document.getElementById('Semestre').value;
      let Estado = document.getElementById('Estado').value;
      let Nombre = document.getElementById('Nombre').value;
      let ApellidoP = document.getElementById('ApellidoP').value;
      let ApellidoM = document.getElementById('ApellidoM').value;
      let Correo = document.getElementById('Correo').value;
      let Telefono = document.getElementById('Telefono').value;
      let Direccion = document.getElementById('Direccion').value;

      
      $.post('insertar.php',{NC:NControl,Car:Carrera,Cred:Creditos,Sem:Semestre,Est:Estado,Nom:Nombre,
      AP:ApellidoP,AM:ApellidoM,Correoe:Correo,Tel:Telefono,Direc:Direccion},function(data){
        swal("Insercion completada", "Se ha dado de alta con exito", "success");
       refrescar(data);  
      },'json');
      //Limpiar();
    });

    $('#btnModificar').click(function(){
      let NControl = document.getElementById('NControl').value;
      let Carrera = document.getElementById('Carrera').value;
      let Creditos = document.getElementById('Creditos').value;
      let Semestre = document.getElementById('Semestre').value;
      let Estado = document.getElementById('Estado').value;
      let Nombre = document.getElementById('Nombre').value;
      let ApellidoP = document.getElementById('ApellidoP').value;
      let ApellidoM = document.getElementById('ApellidoM').value;
      let Correo = document.getElementById('Correo').value;
      let Telefono = document.getElementById('Telefono').value;
      let Direccion = document.getElementById('Direccion').value;

      
      $.post('modificar.php',{NC:NControl,Car:Carrera,Cred:Creditos,Sem:Semestre,Est:Estado,Nom:Nombre,
      AP:ApellidoP,AM:ApellidoM,Correoe:Correo,Tel:Telefono,Direc:Direccion},function(data){
        swal("Modificacion completada", "Se ha modificado con exito", "success");
       refrescar(data);  
      },'json');
      //Limpiar();
    });

    function refrescar(objeto) {
        console.log(objeto);
        $('#NControl').val(objeto.NumControl);
        $('#Carrera').val(objeto.Carrera);
        $('#Creditos').val(objeto.Creditos);
        $('#Semestre').val(objeto.Semestre);
        $('#Estado').val(objeto.Estado);
        $('#Nombre').val(objeto.Nombre);
        $('#ApellidoP').val(objeto.ApellidoP);
        $('#ApellidoM').val(objeto.ApellidoM);
        $('#Correo').val(objeto.CorreoE);
        $('#Telefono').val(objeto.Telefono);
        $('#Direccion').val(objeto.Direccion);
  }

  //opcional
  function Limpiar(){
    document.getElementById('idID').value = "";
    document.getElementById('idNombreC').value = "";
    document.getElementById('idNombreJ').value = "";
    document.getElementById('idRango').value = "";
    document.getElementById('idEdad').value = "";
    document.getElementById('idPais').value = "";

  }
});