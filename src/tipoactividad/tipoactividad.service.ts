import { Injectable } from '@nestjs/common';
import { CreateTipoactividadDto } from './dto/create-tipoactividad.dto';
import { UpdateTipoactividadDto } from './dto/update-tipoactividad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tipoactividad } from './entities/tipoactividad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoactividadService {
  constructor(
    @InjectRepository(Tipoactividad)
    private tipoactividadRepository: Repository<Tipoactividad>,
  ) {}

  async create(createtipoactividadDto: CreateTipoactividadDto) {
   
    return await this.tipoactividadRepository.save(createtipoactividadDto)
   
  }
 
  findAll() {
    return `This action returns all tipoactividad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoactividad`;
  }

  update(id: number, updateTipoactividadDto: UpdateTipoactividadDto) {
    return `This action updates a #${id} tipoactividad`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoactividad`;
  }
}
