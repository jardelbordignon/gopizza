import { Filter, UpdateManyResponse } from '@nestjs-query/core'
import { FilterType, UpdateManyResponseType } from '@nestjs-query/query-graphql'
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql'

import { CreateProductDTO, ProductDTO } from './product.dto'
import { ProductService } from './product.service'

@Resolver(() => ProductDTO)
export class ProductResolver {
  constructor(readonly service: ProductService) {}

  @Mutation(() => ProductDTO)
  async createProduct(
    @Args('input') input: CreateProductDTO
  ): Promise<ProductDTO> {
    return this.service.createProduct(input)
  }

  @Mutation(() => ProductDTO)
  restoreOneProduct(
    @Args('input', { type: () => ID }) id: string
  ): Promise<ProductDTO> {
    return this.service.restoreOne(id)
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProducts(
    @Args('input', { type: () => FilterType(ProductDTO) })
    filter: Filter<ProductDTO>
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter)
  }
}
