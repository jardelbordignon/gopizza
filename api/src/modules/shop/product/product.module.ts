import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'

import { CreateProductDTO, ProductDTO, UpdateProductDTO } from './product.dto'
import { Product } from './product.entity'
import { ProductResolver } from './product.resolver'
import { ProductService } from './product.service'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Product])],
      services: [ProductService],
      resolvers: [
        {
          ServiceClass: ProductService,
          DTOClass: ProductDTO,
          CreateDTOClass: CreateProductDTO,
          UpdateDTOClass: UpdateProductDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [ProductResolver],
})
export class ProductModule {}
