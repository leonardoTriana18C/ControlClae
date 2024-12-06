import { CreateDocenteasesorDto } from './dto/create-docenteasesor.dto';
import { UpdateDocenteasesorDto } from './dto/update-docenteasesor.dto';
import { Docenteasesor } from './entities/docenteasesor.entity';
import { Repository } from 'typeorm';
export declare class DocenteasesorService {
    private docenteasesorRepository;
    constructor(docenteasesorRepository: Repository<Docenteasesor>);
    create(createDocenteasesorDto: CreateDocenteasesorDto): Promise<CreateDocenteasesorDto & Docenteasesor>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDocenteasesorDto: UpdateDocenteasesorDto): string;
    remove(id: number): string;
}
