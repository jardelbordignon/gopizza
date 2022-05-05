import { Filter, UpdateManyResponse } from '@nestjs-query/core'
import { FilterType, UpdateManyResponseType } from '@nestjs-query/query-graphql'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { OrderDTO } from './order.dto'
import { OrderService } from './order.service'

@Resolver(() => OrderDTO)
export class OrderResolver {
  constructor(readonly service: OrderService) {}

  @Mutation(() => UpdateManyResponseType())
  restoreManyOrders(
    @Args('input', { type: () => FilterType(OrderDTO) })
    filter: Filter<OrderDTO>
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter)
  }
}
