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
exports.DocenteasesorController = void 0;
const common_1 = require("@nestjs/common");
const docenteasesor_service_1 = require("./docenteasesor.service");
const create_docenteasesor_dto_1 = require("./dto/create-docenteasesor.dto");
const update_docenteasesor_dto_1 = require("./dto/update-docenteasesor.dto");
let DocenteasesorController = class DocenteasesorController {
    constructor(docenteasesorService) {
        this.docenteasesorService = docenteasesorService;
    }
    create(createDocenteasesorDto) {
        return this.docenteasesorService.create(createDocenteasesorDto);
    }
    findAll() {
        return this.docenteasesorService.findAll();
    }
    findOne(id) {
        return this.docenteasesorService.findOne(+id);
    }
    update(id, updateDocenteasesorDto) {
        return this.docenteasesorService.update(+id, updateDocenteasesorDto);
    }
    remove(id) {
        return this.docenteasesorService.remove(+id);
    }
};
exports.DocenteasesorController = DocenteasesorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docenteasesor_dto_1.CreateDocenteasesorDto]),
    __metadata("design:returntype", void 0)
], DocenteasesorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocenteasesorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocenteasesorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_docenteasesor_dto_1.UpdateDocenteasesorDto]),
    __metadata("design:returntype", void 0)
], DocenteasesorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocenteasesorController.prototype, "remove", null);
exports.DocenteasesorController = DocenteasesorController = __decorate([
    (0, common_1.Controller)('docenteasesor'),
    __metadata("design:paramtypes", [docenteasesor_service_1.DocenteasesorService])
], DocenteasesorController);
//# sourceMappingURL=docenteasesor.controller.js.map