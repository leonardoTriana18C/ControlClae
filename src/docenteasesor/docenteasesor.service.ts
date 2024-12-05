import { Injectable } from '@nestjs/common';
import { CreateDocenteasesorDto } from './dto/create-docenteasesor.dto';
import { UpdateDocenteasesorDto } from './dto/update-docenteasesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docenteasesor } from './entities/docenteasesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocenteasesorService {
  constructor(
    @InjectRepository(Docenteasesor)
    private docenteasesorRepository: Repository<Docenteasesor>,
  ) {}

  async create(createDocenteasesorDto: CreateDocenteasesorDto) {
   
    return await this.docenteasesorRepository.save(createDocenteasesorDto)
   
  }
  findAll() {
    return `This action returns all docenteasesor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} docenteasesor`;
  }

  update(id: number, updateDocenteasesorDto: UpdateDocenteasesorDto) {
    return `This action updates a #${id} docenteasesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} docenteasesor`;
  }
}
