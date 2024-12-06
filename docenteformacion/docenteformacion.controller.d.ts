import { DocenteformacionService } from './docenteformacion.service';
import { CreateDocenteformacionDto } from './dto/create-docenteformacion.dto';
import { UpdateDocenteformacionDto } from './dto/update-docenteformacion.dto';
export declare class DocenteformacionController {
    private readonly docenteformacionService;
    constructor(docenteformacionService: DocenteformacionService);
    create(createDocenteformacionDto: CreateDocenteformacionDto): Promise<CreateDocenteformacionDto & import("./entities/docenteformacion.entity").Docenteformacion>;
    findAll(): Promise<import("./entities/docenteformacion.entity").Docenteformacion[]>;
    findOne(id: string): Promise<import("./entities/docenteformacion.entity").Docenteformacion>;
    update(id: string, updateDocenteformacionDto: UpdateDocenteformacionDto): Promise<import("./entities/docenteformacion.entity").Docenteformacion>;
    remove(id: string): Promise<void>;
}
