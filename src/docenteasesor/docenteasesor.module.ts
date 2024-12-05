import { Module } from '@nestjs/common';
import { DocenteasesorService } from './docenteasesor.service';
import { DocenteasesorController } from './docenteasesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docenteasesor } from './entities/docenteasesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docenteasesor])],
  controllers: [DocenteasesorController],
  providers: [DocenteasesorService],
})
export class DocenteasesorModule {}
