import { TipoactividadService } from './tipoactividad.service';
import { CreateTipoactividadDto } from './dto/create-tipoactividad.dto';
import { UpdateTipoactividadDto } from './dto/update-tipoactividad.dto';
export declare class TipoactividadController {
    private readonly tipoactividadService;
    constructor(tipoactividadService: TipoactividadService);
    create(createTipoactividadDto: CreateTipoactividadDto): Promise<CreateTipoactividadDto & import("./entities/tipoactividad.entity").Tipoactividad>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTipoactividadDto: UpdateTipoactividadDto): string;
    remove(id: string): string;
}
