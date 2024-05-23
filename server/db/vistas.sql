CREATE VIEW
vista_empleados AS
SELECT cedula, fotoPerfil, nombres, apellidos, edad, celular, email. password, genero, estado, m.descripcion as municipio, d.descripcion as departamento FROM empleados e
INNER JOIN municipios m
ON e.municipio_id = m.id
INNER JOIN departamentos d
ON m.departamento_id = d.id;

CREATE VIEW
vista_instructores AS
SELECT cedula, fotoPerfil, nombres, apellidos, profesion, edad, celular, email. password, genero, estado, m.descripcion as municipio, d.descripcion as departamento FROM instructores i
INNER JOIN municipios m
ON i.municipio_id = m.id
INNER JOIN departamentos d
ON m.departamento_id = d.id;
