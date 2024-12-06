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
exports.DocenteformacionController = void 0;
const common_1 = require("@nestjs/common");
const docenteformacion_service_1 = require("./docenteformacion.service");
const create_docenteformacion_dto_1 = require("./dto/create-docenteformacion.dto");
const update_docenteformacion_dto_1 = require("./dto/update-docenteformacion.dto");
let DocenteformacionController = class DocenteformacionController {
    constructor(docenteformacionService) {
        this.docenteformacionService = docenteformacionService;
    }
    async create(createDocenteformacionDto) {
        return this.docenteformacionService.create(createDocenteformacionDto);
    }
    findAll() {
        return this.docenteformacionService.findAll();
    }
    findOne(id) {
        return this.docenteformacionService.findOne(+id);
    }
    update(id, updateDocenteformacionDto) {
        return this.docenteformacionService.update(+id, updateDocenteformacionDto);
    }
    remove(id) {
        return this.docenteformacionService.remove(+id);
    }
};
exports.DocenteformacionController = DocenteformacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docenteformacion_dto_1.CreateDocenteformacionDto]),
    __metadata("design:returntype", Promise)
], DocenteformacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocenteformacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocenteformacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_docenteformacion_dto_1.UpdateDocenteformacionDto]),
    __metadata("design:returntype", void 0)
], DocenteformacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocenteformacionController.prototype, "remove", null);
exports.DocenteformacionController = DocenteformacionController = __decorate([
    (0, common_1.Controller)('docenteformacion'),
    __metadata("design:paramtypes", [docenteformacion_service_1.DocenteformacionService])
], DocenteformacionController);
//# sourceMappingURL=docenteformacion.controller.js.map