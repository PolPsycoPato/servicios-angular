export interface Plantillas {
    idEmpleado: number;
    idHospital: number;
    idSala:     number;
    apellido:   string;
    funcion:    Funcion;
    turno:      Turno;
    salario:    number;
}

export enum Funcion {
    Enfermera = "Enfermera",
    Enfermero = "Enfermero",
    Interino = "Interino",
}

export enum Turno {
    M = "M",
    N = "N",
    T = "T",
}
