import { Docenteformacion } from "src/docenteformacion/entities/docenteformacion.entity";
export declare class Institucion {
    id: number;
    nombre: string;
    nit: string;
    email: string;
    celular: string;
    docenteformacion: Docenteformacion[];
}
