create database n19100165;

use n19100165;

create table Alumno(
NumControl int not null,
Carrera varchar(50) not null,
Creditos int not null,
Semestre int not null,
Estado varchar(10) not null,
Nombre varchar(30) not null,
ApellidoP varchar(30) not null,
ApellidoM varchar(30) not null,
CorreoE varchar(50) not null,
Telefono varchar(20) not null,
Direccion varchar(50) not null,
primary key (NumControl));

insert into Alumno (NumControl, Carrera, Creditos, Semestre, Estado, Nombre, 
ApellidoP, ApellidoM, CorreoE, Telefono, Direccion) values
(19100165, 'Ing. en Sistemas Computacionales', 155, 6, 'Regular', 'Claudio Jose', 'de la Rosa', 'Torres', 'l19100165@nlaredo.tecnm.mx', '867 123 4567', 'Ejemplo #1111'),
(19200111, 'Ing. en Sistemas Computacionales', 152, 6, 'Regular', 'Nombre', 'de Relleno', 'para la Tabla', 'l19200111@nlaredo.tecnm.mx', '867 123 1111', 'Ejemplo #2222'),
(18100222, 'Ing. Electrónica', 160, 8, 'Irregular','Luis', 'Garza', 'Garcia', 'l18100222@nlaredo.tecnm.mx', '867 123 3333', 'Ejemplo #3333'),
(17100723, 'Contabilidad', 185, 10, 'Irregular', 'Bruno', 'Perez', 'Treviño', 'l17100723@nlaredo.tecnm.mx', '867 123 4444', 'Ejemplo #4444'),
(21100539, 'Ing. Electrónica', 51, 2, 'Regular', 'Maria', 'Gimenez', 'Cortez', 'l21100539@nlaredo.tecnm.mx', '867 123 4567', 'Ejemplo #1111')
;