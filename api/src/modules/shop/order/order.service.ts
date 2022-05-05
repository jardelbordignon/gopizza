import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Order } from './order.entity'

@Injectable()
@QueryService(Order)
export class OrderService extends TypeOrmQueryService<Order> {
  constructor(@InjectRepository(Order) repo: Repository<Order>) {
    super(repo, { useSoftDelete: true })
  }
}
