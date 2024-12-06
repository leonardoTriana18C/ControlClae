import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { Grado } from './entities/grado.entity';
import { Repository } from 'typeorm';
export declare class GradoService {
    private gradoRepository;
    constructor(gradoRepository: Repository<Grado>);
    create(createGradoDto: CreateGradoDto): Promise<CreateGradoDto & Grado>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGradoDto: UpdateGradoDto): string;
    remove(id: number): string;
}
