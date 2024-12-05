import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocenteformacionModule } from './docenteformacion/docenteformacion.module';
import { Docenteformacion } from './docenteformacion/entities/docenteformacion.entity';
import { InstitucionModule } from './institucion/institucion.module';
import { GradoModule } from './grado/grado.module';
import { DocentetutorModule } from './docentetutor/docentetutor.module';
import { DocenteasesorModule } from './docenteasesor/docenteasesor.module';
import { TipoactividadModule } from './tipoactividad/tipoactividad.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'practdocente',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DocenteformacionModule,
    InstitucionModule,
    GradoModule,
    DocentetutorModule,
    DocenteasesorModule,
    TipoactividadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
