import { MigrationInterface, QueryRunner } from "typeorm";

export class insertarCategorias7999230384960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO categorias (id, nombre, created_at, updated_at) VALUES 
      (1, 'Neumáticos', NOW(), NOW()),
      (2, 'Chasis', NOW(), NOW()),
      (3, 'Motor', NOW(), NOW()),
      (4, 'Accesorios', NOW(), NOW());
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM categorias WHERE id IN (1, 2, 3, 4);
    `);
  }
}