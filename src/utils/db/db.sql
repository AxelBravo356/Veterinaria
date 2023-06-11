CREATE TABLE Carnet
(
  id_carnet INT NOT NULL AUTO_INCREMENT,
  nom_mascota VARCHAR(50) NOT NULL,
  nom_dueño VARCHAR(50) NOT NULL,
  edad INT NOT NULL,
  direccion VARCHAR(70) NOT NULL,
  telefono VARCHAR(10) NOT NULL,
  raza VARCHAR(50) NOT NULL,
  tipo_animal VARCHAR(50) NOT NULL,
  peso FLOAT NOT NULL,
  descripcion VARCHAR(500) NOT NULL,
  PRIMARY KEY (id_carnet)
);

CREATE TABLE Antecedente
(
  id_expediente INT NOT NULL AUTO_INCREMENT,
  tipo_antecedente VARCHAR(50) NOT NULL,
  desc_ante VARCHAR(500) NOT NULL,
  id_carnet INT NOT NULL,
  PRIMARY KEY (id_expediente),
  FOREIGN KEY (id_carnet) REFERENCES Carnet(id_carnet)
);

CREATE TABLE Personal
(
  id_personal INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  tipo_usu VARCHAR(50) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  contraseña VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_personal)
);

CREATE TABLE Veterinario
(
  id_veterinario INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  hr_ent VARCHAR(5) NOT NULL,
  hr_sal VARCHAR(5) NOT NULL,
  id_personal INT NOT NULL,
  PRIMARY KEY (id_veterinario),
  FOREIGN KEY (id_personal) REFERENCES Personal(id_personal)
);

CREATE TABLE Estudios
(
  id_estudio INT NOT NULL AUTO_INCREMENT,
  tipo_estudio VARCHAR(50) NOT NULL,
  desc_est VARCHAR(500) NOT NULL,
  fecha_est VARCHAR(50) NOT NULL,
  id_carnet INT NOT NULL,
  PRIMARY KEY (id_estudio),
  FOREIGN KEY (id_carnet) REFERENCES Carnet(id_carnet)
);

CREATE TABLE Jaulas
(
  id_jaula INT NOT NULL AUTO_INCREMENT,
  tipo_jaula VARCHAR(50) NOT NULL,
  disp BIT NOT NULL,
  PRIMARY KEY (id_jaula)
);

CREATE TABLE Citas
(
  id_cita INT NOT NULL AUTO_INCREMENT,
  fecha DATE NOT NULL,
  tipo_cita VARCHAR(50) NOT NULL,
  hora VARCHAR(5) NOT NULL,
  id_veterinario INT NOT NULL,
  id_carnet INT NOT NULL,
  PRIMARY KEY (id_cita),
  FOREIGN KEY (id_veterinario) REFERENCES Veterinario(id_veterinario),
  FOREIGN KEY (id_carnet) REFERENCES Carnet(id_carnet)
);

CREATE TABLE Observacion
(
  id_obs INT NOT NULL AUTO_INCREMENT,
  estancia VARCHAR(50) NOT NULL,
  id_jaula INT NOT NULL,
  id_carnet INT NOT NULL,
  PRIMARY KEY (id_obs),
  FOREIGN KEY (id_jaula) REFERENCES Jaulas(id_jaula),
  FOREIGN KEY (id_carnet) REFERENCES Carnet(id_carnet)
);