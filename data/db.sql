create database bd_estadios;

use bd_estadios;

create Table estadios(
    id_estadios int auto_increment,
    nombre varchar(30),
    capacidad int,
    ubicacion VARCHAR(50),
    
    constraint pk_idestadios primary key (id_estadios)
);

insert into estadios(nombre,capacidad, ubicacion) values ('Santiago Bernabéu',81044,'Madrid España');

insert into estadios(nombre,capacidad, ubicacion) values ('Estadio Azteca', 87523, 'Ciudad de México,');

select * from estadios;
