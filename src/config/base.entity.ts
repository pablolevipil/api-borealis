import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

export abstract class BaseEntity {

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date
}