import { Injectable } from '@nestjs/common';
import { CreateDocentetutorDto } from './dto/create-docentetutor.dto';
import { UpdateDocentetutorDto } from './dto/update-docentetutor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docentetutor } from './entities/docentetutor.entity';

@Injectable()
export class DocentetutorService {
  constructor(
    @InjectRepository(Docentetutor)
    private docentetutorRepository: Repository<Docentetutor>,
  ) {}


  async create(createDocentetutorDto: CreateDocentetutorDto) {
   
    return await this.docentetutorRepository.save(createDocentetutorDto)
   
  }

 async  findAll() {
     return await  this.docentetutorRepository.find()
  }

  async findOne(id: number) {
    return await this.docentetutorRepository.findOneBy({ id });
  }

  async update(id: number, updateDocentetutorDto: UpdateDocentetutorDto) {
    const docente = await this.findOne(id); 
    Object.assign(docente, updateDocentetutorDto);
     if (docente)
   {
    return this.docentetutorRepository.save(docente);
   }

 

  }
  

 async remove(id: number) {
    await this.docentetutorRepository.delete(id);
  }
}
