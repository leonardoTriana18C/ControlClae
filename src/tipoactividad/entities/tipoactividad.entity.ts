import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Tipoactividad {
    @PrimaryGeneratedColumn()
    id_tipo: number;

    @Column()
    tipo: string;

}