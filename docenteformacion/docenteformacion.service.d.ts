import { CreateDocenteformacionDto } from './dto/create-docenteformacion.dto';
import { UpdateDocenteformacionDto } from './dto/update-docenteformacion.dto';
import { Docenteformacion } from './entities/docenteformacion.entity';
import { Repository } from 'typeorm';
export declare class DocenteformacionService {
    private docenteRepository;
    constructor(docenteRepository: Repository<Docenteformacion>);
    create(createDocenteformacionDto: CreateDocenteformacionDto): Promise<CreateDocenteformacionDto & Docenteformacion>;
    findAll(): Promise<Docenteformacion[]>;
    findOne(id: number): Promise<Docenteformacion>;
    update(id: number, updateDocenteformacionDto: UpdateDocenteformacionDto): Promise<Docenteformacion>;
    remove(id: number): Promise<void>;
}
