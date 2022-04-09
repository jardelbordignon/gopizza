import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { storageProvider } from 'src/base/shared/providers/StorageProvider/implementations'

import { CreateProductDTO } from './product.dto'
import { Product } from './product.entity'

@Injectable()
@QueryService(Product)
export class ProductService extends TypeOrmQueryService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo, { useSoftDelete: true })
  }

  async createProduct(input: CreateProductDTO): Promise<Product> {
    const { name, imageFile } = input

    const image = await storageProvider.store(imageFile, 'products')

    const product = this.repo.create({ name, image })

    return this.repo.save(product)
  }
}
