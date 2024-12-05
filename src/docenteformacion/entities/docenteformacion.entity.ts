import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Docenteformacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  
  @Column()
  email: string;

  @Column()
  celular: string;

  @ManyToOne(() => Institucion, (institucion) => institucion.docenteformacion)
  institucion: Institucion
 
}

