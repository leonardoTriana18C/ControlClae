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
exports.GradoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grado_entity_1 = require("./entities/grado.entity");
const typeorm_2 = require("typeorm");
let GradoService = class GradoService {
    constructor(gradoRepository) {
        this.gradoRepository = gradoRepository;
    }
    async create(createGradoDto) {
        return await this.gradoRepository.save(createGradoDto);
    }
    findAll() {
        return `This action returns all grado`;
    }
    findOne(id) {
        return `This action returns a #${id} grado`;
    }
    update(id, updateGradoDto) {
        return `This action updates a #${id} grado`;
    }
    remove(id) {
        return `This action removes a #${id} grado`;
    }
};
exports.GradoService = GradoService;
exports.GradoService = GradoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grado_entity_1.Grado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GradoService);
//# sourceMappingURL=grado.service.js.map