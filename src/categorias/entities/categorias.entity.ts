import { BaseEntity } from "../../config/base.entity";
import { ICategoria } from "../../interfaces/categoria.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'categorias'})
export class CategoriasEntity extends BaseEntity implements ICategoria{
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  nombre: string;
}