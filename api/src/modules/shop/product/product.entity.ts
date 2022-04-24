import { Column, Entity } from 'typeorm'

import { SoftEntity } from 'src/base/shared/entities/soft.entity'

@Entity({ name: 'products' })
export class Product extends SoftEntity {
  @Column({ nullable: true })
  description: string

  @Column('simple-array', { nullable: true })
  imageDirs: string[]

  @Column()
  name: string

  @Column({ nullable: true })
  priceSizeL: number

  @Column({ nullable: true })
  priceSizeM: number

  @Column({ nullable: true })
  priceSizeS: number
}
