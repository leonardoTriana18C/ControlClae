"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteformacionModule = void 0;
const common_1 = require("@nestjs/common");
const docenteformacion_service_1 = require("./docenteformacion.service");
const docenteformacion_controller_1 = require("./docenteformacion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const docenteformacion_entity_1 = require("./entities/docenteformacion.entity");
let DocenteformacionModule = class DocenteformacionModule {
};
exports.DocenteformacionModule = DocenteformacionModule;
exports.DocenteformacionModule = DocenteformacionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docenteformacion_entity_1.Docenteformacion])],
        controllers: [docenteformacion_controller_1.DocenteformacionController],
        providers: [docenteformacion_service_1.DocenteformacionService],
    })
], DocenteformacionModule);
//# sourceMappingURL=docenteformacion.module.js.map