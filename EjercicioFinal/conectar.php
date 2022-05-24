<?php
$hostname='localhost';
$database='n19100165';
$username='root';
$password='';
$port='3306';

$ncontrol=$_POST['numc'];

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Ocurrió un error de conexión de base de datos.";
    echo $e->getMessage();
    exit();
}

try {
$consultaSql = "select * from alumno where NumControl=".$ncontrol;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Ocurrió un error de consulta en la base de datos.";
    echo $e->getMessage();
}

echo json_encode($resultado);
?>