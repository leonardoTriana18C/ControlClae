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
exports.Docenteformacion = void 0;
const institucion_entity_1 = require("../../institucion/entities/institucion.entity");
const typeorm_1 = require("typeorm");
let Docenteformacion = class Docenteformacion {
};
exports.Docenteformacion = Docenteformacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Docenteformacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docenteformacion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docenteformacion.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docenteformacion.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docenteformacion.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => institucion_entity_1.Institucion, (institucion) => institucion.docenteformacion),
    __metadata("design:type", institucion_entity_1.Institucion)
], Docenteformacion.prototype, "institucion", void 0);
exports.Docenteformacion = Docenteformacion = __decorate([
    (0, typeorm_1.Entity)()
], Docenteformacion);
//# sourceMappingURL=docenteformacion.entity.js.map