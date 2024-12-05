import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipoactividad } from './entities/tipoactividad.entity';
import { TipoactividadService } from './tipoactividad.service';
import { TipoactividadController } from './tipoactividad.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tipoactividad]), // Registra la entidad
  ],
  providers: [TipoactividadService],
  controllers: [TipoactividadController],
  exports: [TipoactividadService], // Exporta el servicio si es necesario
})
export class TipoactividadModule {}