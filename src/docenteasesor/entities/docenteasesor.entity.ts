import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Docenteasesor {
    @PrimaryGeneratedColumn()
    id_docente: number;
  
    @Column()
    nombre: string;
  
    @Column()
    rut: number;

    @Column()
    fecha_ingreso: string;
   
    @Column()
    id_institucion: number;

}