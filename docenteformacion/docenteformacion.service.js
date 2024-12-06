"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteformacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docenteformacion_entity_1 = require("./entities/docenteformacion.entity");
const typeorm_2 = require("typeorm");
let DocenteformacionService = class DocenteformacionService {
    constructor(docenteRepository) {
        this.docenteRepository = docenteRepository;
    }
    async create(createDocenteformacionDto) {
        return await this.docenteRepository.save(createDocenteformacionDto);
    }
    async findAll() {
        return await this.docenteRepository.find();
    }
    async findOne(id) {
        return await this.docenteRepository.findOneBy({ id });
    }
    async update(id, updateDocenteformacionDto) {
        const docente = await this.findOne(id);
        Object.assign(docente, updateDocenteformacionDto);
        if (docente) {
            return this.docenteRepository.save(docente);
        }
    }
    async remove(id) {
        await this.docenteRepository.delete(id);
    }
};
exports.DocenteformacionService = DocenteformacionService;
exports.DocenteformacionService = DocenteformacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docenteformacion_entity_1.Docenteformacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocenteformacionService);
//# sourceMappingURL=docenteformacion.service.js.map