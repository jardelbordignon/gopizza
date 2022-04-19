import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { storageProvider } from 'src/base/shared/providers/StorageProvider/implementations'

import {
  CustomCreateOneProductDTO,
  CustomUpdateOneProductDTO,
  ProductDTO,
} from './product.dto'
import { Product } from './product.entity'

@Injectable()
@QueryService(Product)
export class ProductService extends TypeOrmQueryService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo, { useSoftDelete: true })
  }

  async customCreateOneProduct(
    input: CustomCreateOneProductDTO
  ): Promise<ProductDTO> {
    const imageUrl = await storageProvider.store(input.imageFile, 'products')

    const productData = { ...input, imageUrl }

    const product = this.repo.create(productData)

    return this.repo.save(product)
  }

  async customUpdateOneProduct(
    input: CustomUpdateOneProductDTO
  ): Promise<ProductDTO> {
    const product = await this.repo.findOne(input.id)

    const mergedProduct = Object.assign(product, input)

    if (input.imageFile) {
      const imageUrl = await storageProvider.store(input.imageFile, 'products')
      mergedProduct.imageUrl = imageUrl
    }

    return this.repo.save(mergedProduct)
  }
}
