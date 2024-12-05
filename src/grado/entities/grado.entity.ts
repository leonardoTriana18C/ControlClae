
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Institucion } from '../../institucion/entities/institucion.entity';

@Entity()
   export class Grado {
      @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      descripcion: number;
    
      @ManyToMany(() => Institucion)
    @JoinTable()
    institucion: Institucion[]
    
     
    }



