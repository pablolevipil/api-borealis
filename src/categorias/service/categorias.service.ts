import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasEntity } from '../entities/categorias.entity';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(CategoriasEntity)
    private readonly categoriaRepository: Repository<CategoriasEntity>,
  ) {}

  public async findCategorieId(id: number): Promise<CategoriasEntity> {
    try {
      const categorie: CategoriasEntity | null =  await this.categoriaRepository
        .createQueryBuilder('categoria')
        .select(['categoria.id', 'categoria.nombre'])
        .where({ id })
        .getOne();
      if (!categorie) {
        throw new ErrorManager({type: 'NOT_FOUND', message: `Categoria no encontrada`});
      }
      return categorie; 
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message); 
    }
  }
}
