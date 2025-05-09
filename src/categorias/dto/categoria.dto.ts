import { IsNotEmpty, IsString } from "class-validator";

export class CategoriaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
