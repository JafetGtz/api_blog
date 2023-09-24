CREATE TABLE survey_previaje (
    Id SERIAL PRIMARY KEY,
    Taller VARCHAR(50),
    Cliente VARCHAR(50),
    Idvehiculo INTEGER,
    Punto VARCHAR(50),
    Seccion VARCHAR(100),
    fechaRevision DATE,
    Status VARCHAR(20),
    nombreCompleto VARCHAR(100)
);