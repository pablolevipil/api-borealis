import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriasModule } from './categorias/categorias.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.develop.env`,
      isGlobal: true,
  }),
    TypeOrmModule.forRoot({...DataSourceConfig}), 
    CategoriasModule
  ]
})
export class AppModule {}
