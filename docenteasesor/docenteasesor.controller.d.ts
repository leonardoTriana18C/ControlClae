import { DocenteasesorService } from './docenteasesor.service';
import { CreateDocenteasesorDto } from './dto/create-docenteasesor.dto';
import { UpdateDocenteasesorDto } from './dto/update-docenteasesor.dto';
export declare class DocenteasesorController {
    private readonly docenteasesorService;
    constructor(docenteasesorService: DocenteasesorService);
    create(createDocenteasesorDto: CreateDocenteasesorDto): Promise<CreateDocenteasesorDto & import("./entities/docenteasesor.entity").Docenteasesor>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDocenteasesorDto: UpdateDocenteasesorDto): string;
    remove(id: string): string;
}
