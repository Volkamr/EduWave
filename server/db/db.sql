--docker run --name mymysql -e MYSQL_ROOT_PASSWORD=eduwave -e MYSQL_DATABASE=eduwavedb -p 3306:3306 -d mysql

CREATE TABLE departamentos(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descripcion VARCHAR(100) NOT NULL
);

CREATE TABLE municipios(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    departamento_id INT NOT NULL,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);

CREATE TABLE empleados(
    cedula BIGINT PRIMARY KEY NOT NULL,
    fotoPerfil LONGTEXT,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    celular BIGINT NOT NULL,
    email VARCHAR (200) NOT NULL,
    password VARCHAR(100),
    genero VARCHAR (200) NOT NULL,
    estado BOOLEAN NOT NULL,
    municipio_id INT NOT NULL,
    FOREIGN KEY (municipio_id) REFERENCES municipios(id)
);

CREATE TABLE instructores(
    cedula BIGINT PRIMARY KEY NOT NULL,
    fotoPerfil LONGTEXT,
    nombre VARCHAR(100) NOT NULL,
    profesion VARCHAR(600) NOT NULL,
    edad INT NOT NULL,
    celular BIGINT NOT NULL,
    email VARCHAR (200) NOT NULL,
    password VARCHAR(100),
    genero VARCHAR (200) NOT NULL,
    estado BOOLEAN NOT NULL,
    municipio_id INT NOT NULL,
    FOREIGN KEY (municipio_id) REFERENCES municipios(id)
);

CREATE TABLE retroalimentacion(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    fecha DATETIME NOT NULL,
    calificaion FLOAT NOT NULL,
    empleado_ced BIGINT NOT NULL,
    instructor_ced BIGINT NOT NULL,
    FOREIGN KEY (empleado_ced) REFERENCES empleados(cedula),
    FOREIGN KEY (instructor_ced) REFERENCES instructores(cedula)
);

CREATE TABLE cursos(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    icono LONGTEXT,
    portada LONGTEXT,
    titulo VARCHAR(100) NOT NULL,
    resumen VARCHAR(100) NOT NULL,
    descripcion VARCHAR(1000) NOT NULL,
    nivel VARCHAR(100) NOT NULL,
    idioma VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    instructor_ced BIGINT NOT NULL,
    inicio DATETIME,
    fin DATETIME,
    FOREIGN KEY (instructor_ced) REFERENCES instructores(cedula)
);

CREATE TABLE comentarios(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(600) NOT NULL,
    fecha DATETIME NOT NULL,
    calificacion FLOAT NOT NULL,
    empleado_ced BIGINT NOT NULL,
    curso_id INT NOT NULL,
    FOREIGN KEY (empleado_ced) REFERENCES empleados(cedula),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE evaluaciones(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    instrucciones VARCHAR(200) NOT NULL,
    inicio DATETIME NOT NULL,
    fin DATETIME NOT NULL,
    curso_id INT NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE preguntas(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    opciones VARCHAR(600) NOT NULL,
    opcionesOK VARCHAR(100) NOT NULL,
    evaluacion_id INT NOT NULL,
    FOREIGN KEY (evaluacion_id) REFERENCES evaluaciones(id)
);

CREATE TABLE cursosEmpleados(
    curso_id INT NOT NULL,
    empleado_ced BIGINT NOT NULL,
    fav BOOLEAN NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES cursos(id),
    FOREIGN KEY (empleado_ced) REFERENCES empleados(cedula),
    PRIMARY KEY (curso_id, empleado_ced)
);

CREATE TABLE foros(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(600) NOT NULL,
    fecha DATETIME NOT NULL,
    curso_id INT NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE aportes(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descripcion VARCHAR(600) NOT NULL,
    fecha DATETIME NOT NULL,
    empleado_ced BIGINT NOT NULL,
    foro_id INT NOT NULL,
    FOREIGN KEY (empleado_ced) REFERENCES empleados(cedula),
    FOREIGN KEY (foro_id) REFERENCES foros(id)
);

CREATE TABLE lecciones(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(600) NOT NULL,
    curso_id INT NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);


CREATE TABLE links(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    link VARCHAR(100) NOT NULL,
    leccion_id INT NOT NULL,
    FOREIGN KEY (leccion_id) REFERENCES lecciones(id)
);

CREATE TABLE Admins(
    adm_user varchar(50) PRIMARY KEY NOT NULL,
    password varchar(100) NOT NULL
);
