"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGradoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_grado_dto_1 = require("./create-grado.dto");
class UpdateGradoDto extends (0, mapped_types_1.PartialType)(create_grado_dto_1.CreateGradoDto) {
}
exports.UpdateGradoDto = UpdateGradoDto;
//# sourceMappingURL=update-grado.dto.js.map