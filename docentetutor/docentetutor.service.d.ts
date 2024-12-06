import { CreateDocentetutorDto } from './dto/create-docentetutor.dto';
import { UpdateDocentetutorDto } from './dto/update-docentetutor.dto';
import { Repository } from 'typeorm';
import { Docentetutor } from './entities/docentetutor.entity';
export declare class DocentetutorService {
    private docentetutorRepository;
    constructor(docentetutorRepository: Repository<Docentetutor>);
    create(createDocentetutorDto: CreateDocentetutorDto): Promise<CreateDocentetutorDto & Docentetutor>;
    findAll(): Promise<Docentetutor[]>;
    findOne(id: number): Promise<Docentetutor>;
    update(id: number, updateDocentetutorDto: UpdateDocentetutorDto): Promise<Docentetutor>;
    remove(id: number): Promise<void>;
}
