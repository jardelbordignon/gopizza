import { Column, Entity } from 'typeorm'

import { SoftEntity } from 'src/base/shared/entities/soft.entity'

@Entity({ name: 'products' })
export class Product extends SoftEntity {
  @Column()
  name: string

  @Column({ nullable: true })
  image: string
}
