import { Column, Entity } from 'typeorm'

import { SoftEntity } from 'src/base/shared/entities/soft.entity'

@Entity({ name: 'orders' })
export class Order extends SoftEntity {
  @Column({ type: 'uuid' })
  userId: string

  @Column()
  amount: number

  @Column()
  image: string

  @Column()
  pizza: string

  @Column()
  quantity: number

  @Column()
  size: string

  @Column()
  status: string

  @Column()
  table: number
}
