import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'

import { CreateOrderDTO, OrderDTO, UpdateOrderDTO } from './order.dto'
import { Order } from './order.entity'
import { OrderResolver } from './order.resolver'
import { OrderService } from './order.service'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Order])],
      services: [OrderService],
      resolvers: [
        {
          ServiceClass: OrderService,
          DTOClass: OrderDTO,
          CreateDTOClass: CreateOrderDTO,
          UpdateDTOClass: UpdateOrderDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [OrderResolver],
})
export class OrderModule {}
