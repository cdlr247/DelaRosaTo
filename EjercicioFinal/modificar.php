<?php
$NControl = $_POST['NC'];
$Carrera = $_POST['Car'];
$Creditos = $_POST['Cred'];
$Semestre = $_POST['Sem'];
$Estado = $_POST['Est'];
$Nombre = $_POST['Nom'];
$ApellidoP = $_POST['AP'];
$ApellidoM = $_POST['AM'];
$Correo = $_POST['Correoe'];
$Telefono = $_POST['Tel'];
$Direccion = $_POST['Direc'];

$hostname = 'localhost';
$port = '3306';
$database = 'n19100165';
$username = 'root';
$passwword = '';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$passwword);
} catch(PDOException $e){
    echo "Ocurrió un error de conexión de base de datos.";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATT_ERRMODE,PDO::ERRMODE_EXCEPTION);

try{
    
    $consultaSql = "update alumno set Carrera='$Carrera',Creditos=$Creditos,Semestre=$Semestre,Estado='$Estado',Nombre='$Nombre',ApellidoP='$ApellidoP',ApellidoM='$ApellidoM',CorreoE='$Correo',Telefono=$Telefono,Direccion='$Direccion' where NumControl=$NControl";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error de la consulta";
    echo $e->getMessage();

}

$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;
?>