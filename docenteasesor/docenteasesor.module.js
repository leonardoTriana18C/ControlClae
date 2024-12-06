"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteasesorModule = void 0;
const common_1 = require("@nestjs/common");
const docenteasesor_service_1 = require("./docenteasesor.service");
const docenteasesor_controller_1 = require("./docenteasesor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const docenteasesor_entity_1 = require("./entities/docenteasesor.entity");
let DocenteasesorModule = class DocenteasesorModule {
};
exports.DocenteasesorModule = DocenteasesorModule;
exports.DocenteasesorModule = DocenteasesorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docenteasesor_entity_1.Docenteasesor])],
        controllers: [docenteasesor_controller_1.DocenteasesorController],
        providers: [docenteasesor_service_1.DocenteasesorService],
    })
], DocenteasesorModule);
//# sourceMappingURL=docenteasesor.module.js.map