"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocentetutorModule = void 0;
const common_1 = require("@nestjs/common");
const docentetutor_service_1 = require("./docentetutor.service");
const docentetutor_controller_1 = require("./docentetutor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const docentetutor_entity_1 = require("./entities/docentetutor.entity");
let DocentetutorModule = class DocentetutorModule {
};
exports.DocentetutorModule = DocentetutorModule;
exports.DocentetutorModule = DocentetutorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docentetutor_entity_1.Docentetutor])],
        controllers: [docentetutor_controller_1.DocentetutorController],
        providers: [docentetutor_service_1.DocentetutorService],
    })
], DocentetutorModule);
//# sourceMappingURL=docentetutor.module.js.map