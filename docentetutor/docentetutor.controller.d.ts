import { DocentetutorService } from './docentetutor.service';
import { CreateDocentetutorDto } from './dto/create-docentetutor.dto';
import { UpdateDocentetutorDto } from './dto/update-docentetutor.dto';
export declare class DocentetutorController {
    private readonly docentetutorService;
    constructor(docentetutorService: DocentetutorService);
    create(createDocentetutorDto: CreateDocentetutorDto): Promise<CreateDocentetutorDto & import("./entities/docentetutor.entity").Docentetutor>;
    findAll(): Promise<import("./entities/docentetutor.entity").Docentetutor[]>;
    findOne(id: string): Promise<import("./entities/docentetutor.entity").Docentetutor>;
    update(id: string, updateDocentetutorDto: UpdateDocentetutorDto): Promise<import("./entities/docentetutor.entity").Docentetutor>;
    remove(id: string): Promise<void>;
}
