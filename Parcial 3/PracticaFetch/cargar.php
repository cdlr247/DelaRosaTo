<?php

$registro['NControl']  ='19100165';
$registro['Carrera'] ='Ing. en Sistemas Computacionales';
$registro['Creditos']       ='130';
$registro['Semestre'] ='6';
$registro['Tipo'] ='Regular';
$registro['Nombre']     ='Claudio';
$registro['ApellidoP']     ='de la Rosa';
$registro['ApellidoM']       ='Torres';
$registro['Correo']       ='l19100165@nlaredo.tecnm.mx';
$registro['Telefono']       ='867 123 4567';
$registro['Direccion']       ='Ejemplo #1111';

$registroJson = json_encode($registro);
echo $registroJson;
?>