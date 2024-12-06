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
exports.DocenteasesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docenteasesor_entity_1 = require("./entities/docenteasesor.entity");
const typeorm_2 = require("typeorm");
let DocenteasesorService = class DocenteasesorService {
    constructor(docenteasesorRepository) {
        this.docenteasesorRepository = docenteasesorRepository;
    }
    async create(createDocenteasesorDto) {
        return await this.docenteasesorRepository.save(createDocenteasesorDto);
    }
    findAll() {
        return `This action returns all docenteasesor`;
    }
    findOne(id) {
        return `This action returns a #${id} docenteasesor`;
    }
    update(id, updateDocenteasesorDto) {
        return `This action updates a #${id} docenteasesor`;
    }
    remove(id) {
        return `This action removes a #${id} docenteasesor`;
    }
};
exports.DocenteasesorService = DocenteasesorService;
exports.DocenteasesorService = DocenteasesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docenteasesor_entity_1.Docenteasesor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocenteasesorService);
//# sourceMappingURL=docenteasesor.service.js.map