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
exports.DocentetutorController = void 0;
const common_1 = require("@nestjs/common");
const docentetutor_service_1 = require("./docentetutor.service");
const create_docentetutor_dto_1 = require("./dto/create-docentetutor.dto");
const update_docentetutor_dto_1 = require("./dto/update-docentetutor.dto");
let DocentetutorController = class DocentetutorController {
    constructor(docentetutorService) {
        this.docentetutorService = docentetutorService;
    }
    create(createDocentetutorDto) {
        return this.docentetutorService.create(createDocentetutorDto);
    }
    findAll() {
        return this.docentetutorService.findAll();
    }
    findOne(id) {
        return this.docentetutorService.findOne(+id);
    }
    update(id, updateDocentetutorDto) {
        return this.docentetutorService.update(+id, updateDocentetutorDto);
    }
    remove(id) {
        return this.docentetutorService.remove(+id);
    }
};
exports.DocentetutorController = DocentetutorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docentetutor_dto_1.CreateDocentetutorDto]),
    __metadata("design:returntype", void 0)
], DocentetutorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocentetutorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocentetutorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_docentetutor_dto_1.UpdateDocentetutorDto]),
    __metadata("design:returntype", void 0)
], DocentetutorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocentetutorController.prototype, "remove", null);
exports.DocentetutorController = DocentetutorController = __decorate([
    (0, common_1.Controller)('docentetutor'),
    __metadata("design:paramtypes", [docentetutor_service_1.DocentetutorService])
], DocentetutorController);
//# sourceMappingURL=docentetutor.controller.js.map