import { Module } from '@nestjs/common';
import { CategoriasService } from './service/categorias.service';
import { CategoriasController } from './controllers/categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasEntity } from './entities/categorias.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoriasEntity]), 
  ],
  providers: [CategoriasService],
  controllers: [CategoriasController]
})
export class CategoriasModule {}
