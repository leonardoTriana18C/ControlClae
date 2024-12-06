import { GradoService } from './grado.service';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
export declare class GradoController {
    private readonly gradoService;
    constructor(gradoService: GradoService);
    create(createGradoDto: CreateGradoDto): Promise<CreateGradoDto & import("./entities/grado.entity").Grado>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGradoDto: UpdateGradoDto): string;
    remove(id: string): string;
}
