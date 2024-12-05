import { Docenteformacion } from "src/docenteformacion/entities/docenteformacion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    nit: string;
  
    
    @Column()
    email: string;
  
    @Column()
    celular: string;
  
    @OneToMany(() => Docenteformacion, (docenteformacion) => docenteformacion.institucion)
    docenteformacion: Docenteformacion[]
}

