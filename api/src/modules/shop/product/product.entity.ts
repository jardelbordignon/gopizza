import { Column, Entity } from 'typeorm'

import { SoftEntity } from 'src/base/shared/entities/soft.entity'

@Entity({ name: 'products' })
export class Product extends SoftEntity {
  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  priceSizeP: number

  @Column({ nullable: true })
  priceSizeM: number

  @Column({ nullable: true })
  priceSizeG: number

  @Column({ nullable: true })
  imageUrl: string
}
