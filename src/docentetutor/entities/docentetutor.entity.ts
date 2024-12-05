import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Docentetutor {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    rut: number;
   
    @Column()
    id_institucion: number;

}

