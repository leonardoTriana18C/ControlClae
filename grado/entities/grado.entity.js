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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grado = void 0;
const typeorm_1 = require("typeorm");
const institucion_entity_1 = require("../../institucion/entities/institucion.entity");
let Grado = class Grado {
};
exports.Grado = Grado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Grado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Grado.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => institucion_entity_1.Institucion),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Grado.prototype, "institucion", void 0);
exports.Grado = Grado = __decorate([
    (0, typeorm_1.Entity)()
], Grado);
//# sourceMappingURL=grado.entity.js.map