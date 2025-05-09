import { Controller, Get, Param } from '@nestjs/common';
import { CategoriasService } from '../service/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get(':id')
  public async findCategorieId(@Param('id') id: number) {
    return await this.categoriasService.findCategorieId(id);
  }
}
